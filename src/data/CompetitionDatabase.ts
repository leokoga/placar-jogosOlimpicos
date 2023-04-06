import { BaseDatabase } from "./BaseDatabase";
import { competitionsTableName } from "./constants";

export default class CompetitionDatabase extends BaseDatabase {
    public insertCompetition = async (competition: any): Promise<any> => {
        const result = await BaseDatabase.connection(competitionsTableName)
            .insert({
                id: competition.id,
                name: competition.name,
                status: competition.status
            })
        return result;
    };
};