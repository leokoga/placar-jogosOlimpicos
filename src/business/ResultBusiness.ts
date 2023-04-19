import { IdGenerator } from './../services/idGenerator';
import { STATUS } from './../model/Competition';
import ResultDatabase from "../data/ResultDatabase";
import { BaseError } from "../error/BaseError";
import { CompetitionResultsInputDTO, CompetitionInputDTO } from "../model/Results";
import CompetitionDatabase from '../data/CompetitionDatabase';

export default class ResultBusiness {
    
    public addResult = async (input: CompetitionResultsInputDTO): Promise<any> => {
        try {
            const resultDatabase = new ResultDatabase()
            const competitioDatabase = new CompetitionDatabase()

            const  { competition, athlete, value, metric } = input;

            
            if (!input.competition || !input.athlete || !input.value || !input.metric) {
                throw new BaseError("Falta preencher campos", 400)
            }

            const competitionList = await competitioDatabase.findCompetition(
                competition
            )
            
            if (competitionList.length < 1) {
                throw new BaseError("Ainda não exite competição", 404)
            }

            const status = competitionList[0].status;
    
            if (status === STATUS.FINISHED) {
                throw new BaseError("A competição esta encerrada", 403)
            }

            const competitionResultsInputDTO: CompetitionResultsInputDTO = {
                competition: competitionList[0].id,
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
           
            const result = await resultDatabase.addResult(competitionResults)

            return result

        } catch (error: any) {
            throw new BaseError(error.statusCode, error.message)
        }
    }

    public getAllResultsByCompetitionId = async (competitionId:any) => {
        const resultDatabase = new ResultDatabase()
        
         if(!competitionId){
                throw new BaseError("Informe o id da competição", 400);
            };
            
        const result = await resultDatabase.getAllResultByCompetitionId(competitionId);

        return result;
    };
}