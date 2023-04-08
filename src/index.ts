import app from "./app";
import CompetitioController from "./controller/CompetitionCOntroller";
import ResultController from "./controller/ResultController";


const competittionController = new CompetitioController();
const resultController = new ResultController()

app.post("/register/competition", competittionController.insertCompetition);
app.post("/competition/result", resultController.addResult);
app.put("/update/competitions/:id", competittionController.updateStatusCompetitionToFinished);