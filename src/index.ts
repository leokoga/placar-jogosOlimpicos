import app from "./app";
import CompetitioController from "./controller/CompetitionCOntroller";

const competittionController = new CompetitioController();

app.post("/register/competition", competittionController.insertCompetition)