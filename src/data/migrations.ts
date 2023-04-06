import TableDatabase from "./TableDatabase";

const printError = (error: any) => {
    console.log(error.sqlMessage || error.message);
}

const start = async () => {
    try {
        new TableDatabase().createTables()
    } catch (error: any){
        printError(error)
    }
};

start();