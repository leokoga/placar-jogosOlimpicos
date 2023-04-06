import CompetitionDatabase from "../data/CompetitionDatabase";
import { BaseError } from "../error/BaseError";
import { CompetitionDTO } from "../model/Competition";
import { IdGenerator } from "../services/idGenerator";

export default class CompetitionBusiness {

    private competitionDatabase: CompetitionDatabase;

    constructor() {
        this.competitionDatabase = new CompetitionDatabase
    };

    async insertCompetition (body: any) {
        const competitionDTO: CompetitionDTO = {
            name: body.name,
            status: body.status
        }
    
        if(!competitionDTO.name || !competitionDTO.status) {
            throw new BaseError ("Preencha todos os campos", 400);
        };

        const randomId = new IdGenerator().generateId();

        const competition = {
            id: randomId,
            name: competitionDTO.name,
            status: competitionDTO.status
        };

        const result = await this.competitionDatabase.insertCompetition(competition)
        
        return result;

    }

}