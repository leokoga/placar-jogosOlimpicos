import { BaseDatabase } from "./BaseDatabase";
import { CompetitionResults } from "../model/Results";
import { BaseError } from "../error/BaseError";

export default class ResultDatabase extends BaseDatabase {

    private resultsTable = "results"

    async addResult (result: CompetitionResults): Promise<any>{
        try {

            await ResultDatabase.connection(this.resultsTable).insert(result)

        } catch (error: any) {
            throw new BaseError("Erro inesperado", 400)
        }
    }
}