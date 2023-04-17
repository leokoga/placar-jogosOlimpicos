import { BaseDatabase } from "./BaseDatabase";
import { CompetitionResults } from "../model/Results";
import { BaseError } from "../error/BaseError";
import { competitionsTableName, resultsTableName } from "./constants";
import CompetitionDatabase from "./CompetitionDatabase";
import { Competition } from "../model/Competition";

export default class ResultDatabase extends BaseDatabase {

    // private resultsTable = "results"


    public addResult = async (result: CompetitionResults): Promise<any> => {
        try {

            await ResultDatabase.connection(resultsTableName)
                .insert({
                    id: result.id,
                    competition: result.competition,
                    athlete: result.athlete,
                    value: result.value,
                    metric: result.metric
                })
        } catch (error: any) {
            throw new BaseError("Erro inesperado", 400)
        }
    }

//    public findCompetitionResults = async (name: string): Promise<Competition[]> {
//         try {
//             const result = await CompetitionDatabase.connection(competitionsTableName)
//             .select()
//             .where({name});
//             return result
//         } catch (error: any) {
//             throw new BaseError("Erro inesperado", 400)
//         }

//    }

    public getAllResultByCompetitionId = async (competitionId:string): Promise<any> =>{
        // const result = await ResultDatabase.connection(resultsTableName)
        //     .select("*")
        //     .innerJoin(competitionsTableName, `${competitionsTableName}.name`, '=', `${resultsTableName}.competition`)
        //     .where({competition: competitionId})

        //     console.log(result);
            
        // return result;

        const result = await ResultDatabase.connection(resultsTableName)
            .where("competition", competitionId)
            .orderBy("value", "asc")

            return result


       
     
    
    };

}