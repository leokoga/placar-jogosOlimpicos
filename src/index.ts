import app from "./app";
import CompetitionBusiness from "./business/CompetitionBusiness";
import CompetitioController from "./controller/CompetitionCOntroller";
import ResultController from "./controller/ResultController";
import CompetitionDatabase from "./data/CompetitionDatabase";
import { IdGenerator } from "./services/idGenerator";



const competitionDatabase = new CompetitionDatabase();
const competitionBusiness = new CompetitionBusiness(competitionDatabase, new IdGenerator());
const competittionController = new CompetitioController(competitionBusiness);
const resultController = new ResultController()

app.post("/register/competition", (req, res) => competittionController.insertCompetition(req, res));
app.post("/competition/result", (req, res) => resultController.addResult(req, res));

app.put("/update/competitions/:id", (req, res) => competittionController.updateStatusCompetitionToFinished(req, res));

app.get("/results/competition/:id", (req, res) => resultController.getAllResultsByCompetitionId(req, res));