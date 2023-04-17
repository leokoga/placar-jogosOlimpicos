// import CompetitionDatabase from "../data/CompetitionDatabase";
import { BaseError } from "../error/BaseError";
import { CompetitionDTO } from "../model/Competition";
// import { IdGenerator } from "../services/idGenerator";
import { CompetitionRepository } from "./CompetitionRepository";
import { IIdGenerator } from "./ports";

export default class CompetitionBusiness {

    // private competitionDatabase: CompetitionDatabase;

    // constructor() {
    //     this.competitionDatabase = new CompetitionDatabase
    // };


    constructor(
        private competitionDatabase: CompetitionRepository,
        private idGenerator: IIdGenerator
        ){}

    async insertCompetition (body: any) {
        const competitionDTO: CompetitionDTO = {
            name: body.name,
            status: body.status
        }
    
        if(!competitionDTO.name || !competitionDTO.status) {
            throw new BaseError ("Preencha todos os campos", 400);
        };

        const randomId = this.idGenerator.generateId;

        const competition = {
            id: randomId,
            name: competitionDTO.name,
            status: competitionDTO.status
        };

        const result = await this.competitionDatabase.insertCompetition(competition)
        
        return result;
    }

    // async getCompetitionById (competitionId: string) {
    //     if(!competitionId) {
    //         throw new BaseError("Informe o Id da competição", 400)
    //     }

    //     const result = await this.competitionDatabase.getCompetitionById(competitionId)

    //     return result
    // }

    async updateStatusCompetitionToFinished (competitionId: string) {
        if(!competitionId) {
            throw new BaseError("Informe o ID da competição", 400)
        }

        const result = await this.competitionDatabase.updateStatusCompetitionToFinished(competitionId)

        return result
    }

}