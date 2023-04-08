import { IdGenerator } from './../services/idGenerator';
import { STATUS } from './../model/Competition';
import ResultDatabase from "../data/ResultDatabase";
import { BaseError } from "../error/BaseError";
import { CompetitionResultsInputDTO } from "../model/Results";
import CompetitionDatabase from '../data/CompetitionDatabase';

export default class ResultBusiness {
    
    private resultDatabase: ResultDatabase;

    private competitionDatabase: CompetitionDatabase;

    constructor() {
        this.resultDatabase = new ResultDatabase
        this.competitionDatabase = new CompetitionDatabase
    }

    async addResult(input: CompetitionResultsInputDTO): Promise<void> {
        try {

            const  { competition, athlete, value, metric } = input;

            if (!competition || !athlete || !value || !metric) {
                throw new BaseError("Prrencha todos os campos", 400)
            }

            const competitionList = await this.competitionDatabase.findCompetition(
                competition
            )

            const status = competitionList[0].status;
            

            if (status === STATUS.FINISHED) {
                throw new BaseError("A competição esta encerrada", 403)
            }

            const competitionResultsInputDTO: CompetitionResultsInputDTO = {
                competition: input.competition,
                athlete: input.athlete,
                value: input.value,
                metric: input.metric
            }

            const randomId = new IdGenerator().generateId();

            const competitionResults = {
                id: randomId,
                competition: competitionResultsInputDTO.competition,
                athlete: competitionResultsInputDTO.athlete,
                value: competitionResultsInputDTO.value,
                metric: competitionResultsInputDTO.metric,
            }

            const result = await this.resultDatabase.addResult(competitionResults)

            return result

        } catch (error: any) {
            throw new BaseError("Não foi possível cadastrar resultado", 400)
        }
    }
}