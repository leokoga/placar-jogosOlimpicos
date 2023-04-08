import { Request, Response } from "express";
import ResultBusiness from "../business/ResultBusiness";

export default class ResultController {

    async addResult (req: Request, res: Response) {
        try {

            await new ResultBusiness().addResult(req.body)

            res.status(201).send("Sucesso")

        } catch (error: any) {
            if(error.code) {
                res.status(error.code).send({message: error.message})
            } else {
                res.status(500).send({message: error.message})
            };
        };
    };
}