import { CompetitionRepository } from "../business/CompetitionRepository";
import { BaseError } from "../error/BaseError";
import { Competition } from "../model/Competition";
import { CompetitionResults } from "../model/Results";
import { BaseDatabase } from "./BaseDatabase";
import { competitionsTableName, resultsTableName } from "./constants";

export default class CompetitionDatabase extends BaseDatabase implements CompetitionRepository{

    // private resultsTable = "athlete_results"

    // private competitionsTable = "competions"

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
    
    // public findAllCompetition = async (): Promise<Competition[]> => {
    //     try {
    //       const result = await CompetitionDatabase.connection(competitionsTableName)
    //         .select();

    //         return result;
    //     } catch (error: any) {
    //       throw new BaseError(
    //         error.message || "Error inesperado",
    //         error.statuCode || 400
    //       );
    //     }
    //   }

    // public findCompetitionResults = async (competition: string): Promise<CompetitionResults[]> => {
    //     try {
    //       const result = await CompetitionDatabase.connection(resultsTableName)
    //         .select()
    //         .where({ competition })
    //         .orderBy("value", "desc")
            
    //       return result;
    //     } catch (error: any) {
    //       throw new BaseError(
    //         error.message || "Error inesperado",
    //         error.statuCode || 400
    //       );
    //     }
    //   }

    
    public updateStatusCompetitionToFinished = async (competitionId: string): Promise<any> => {
        const result = await BaseDatabase.connection(competitionsTableName)
            .update ({"status": "finished"})
            .where({id: competitionId})
        return result
    }
    
    // async findCompetitionResults(competition: string): Promise<CompetitionResults[]> {
    //     try {
    //         const result = await CompetitionDatabase.connection(
    //             this.resultsTable
    //         )
    //         .select()
    //         .where({ competition })
    //         .orderBy("value", "desc")

    //         return result
    //     } catch (error: any) {
    //         throw new BaseError("Erro", 400)
    //     }

    // }

    // public getCompetitionById = async (competitioId: string): Promise<any> => {
    //     const result = await BaseDatabase.connection(competitionsTableName)
    //         .select("*")
    //         .where({id: competitioId})
    //     return result [0]
    // }

};