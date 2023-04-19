import { CompetitionRepository } from "../business/CompetitionRepository";
import { BaseError } from "../error/BaseError";
import { Competition } from "../model/Competition";
import { BaseDatabase } from "./BaseDatabase";
import { competitionsTableName, resultsTableName } from "./constants";

export default class CompetitionDatabase extends BaseDatabase implements CompetitionRepository{

    public insertCompetition = async (competition: any): Promise<any> => {
        const result = await BaseDatabase.connection(competitionsTableName)
            .insert({
                id: competition.id,
                name: competition.name,
                status: competition.status
            })
        return result;
    };

    public findCompetition = async (name: string): Promise<Competition[]> => {
        try {
          const result = await CompetitionDatabase.connection(competitionsTableName)
            .select()
            .where("name", name);

          return result;
        } catch (error: any) {
            throw new BaseError("Erro", 400)
        }
    }
    
    public updateStatusCompetitionToFinished = async (competitionId: string): Promise<any> => {
        const result = await BaseDatabase.connection(competitionsTableName)
            .update ({"status": "finished"})
            .where({id: competitionId})
        return result
    }

};