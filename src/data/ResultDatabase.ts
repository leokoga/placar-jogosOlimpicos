import { BaseDatabase } from "./BaseDatabase";
import { CompetitionResults } from "../model/Results";
import { BaseError } from "../error/BaseError";
import { resultsTableName } from "./constants";

export default class ResultDatabase extends BaseDatabase {

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

    public getAllResultByCompetitionId = async (competitionId:string): Promise<any> =>{
        const result = await ResultDatabase.connection(resultsTableName)
            .where("competition", competitionId)
            .orderBy("value", "asc")

            return result


       
     
    
    };

}