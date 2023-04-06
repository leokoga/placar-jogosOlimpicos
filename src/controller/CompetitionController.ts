import { Request, Response } from "express";
import CompetitionBusiness from "../business/CompetitionBusiness";

export default class CompetitioController {

    async insertCompetition (req: Request, res: Response) {
        try {

            await new CompetitionBusiness().insertCompetition(req.body)

            res.status(201).send("Sucesso")

        } catch (error: any) {
            if(error.code) {
                res.status(error.code).send({message: error.message})
            } else {
                res.status(500).send({message: error.message})
            };
        };
    };
};