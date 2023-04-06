import { BaseDatabase } from "./BaseDatabase";
import { competitionsTableName } from "./constants";

const printError = (error: any) => {
    console.log(error.sqlMessage || error.message);
}

export default class TableDatabase extends BaseDatabase {
    public createTables = async (): Promise<void> => {
        await BaseDatabase.connection.raw(`
            CREATE TABLE IF NOT EXISTS ${competitionsTableName} (
                id VARCHAR(64) NOT NULL PRIMARY KEY,
                name VARCHAR(64) NOT NULL,
                status ENUM('in_progress','finished') DEFAULT 'in_progress'
            );
        `)
            .then(() => {
                console.log("Tables created sucessfully");
            }).catch(printError);
    }
}