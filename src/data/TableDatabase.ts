import { BaseDatabase } from "./BaseDatabase";
import { competitionsTableName, results } from "./constants";

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
            
            CREATE TABLE IF NOT EXISTS ${results} (
                id VARCHAR(64) NOT NULL PRIMARY KEY,
                competition VARCHAR(64) NOT NULL,
                athlete VARCHAR(255) NOT NULL,
                value FLOAT NOT NULL,
                metric ENUM('s', 'm'),
                FOREIGN KEY (competition) REFERENCES ${competitionsTableName}(id)
            )
        `)
            .then(() => {
                console.log("Tables created sucessfully");
            }).catch(printError);
    }
}