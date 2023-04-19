import { Request, Response } from "express";
import ResultBusiness from "../business/ResultBusiness";

export default class ResultController {

    async addResult (req: Request, res: Response) {
        try {

            const resultBusiness = new ResultBusiness()

            await resultBusiness.addResult(req.body)

            res.status(201).send("Sucesso")

        } catch (error: any) {
            if(error.code) {
                res.status(error.code).send({message: error.message})
            } else {
                res.status(500).send({message: error.message})
            };
        };
    };

    async getAllResultsByCompetitionId(req: Request, res:Response){
        try{
            const competitionId = req.params.id as string;
  
            const result = await new ResultBusiness().getAllResultsByCompetitionId(competitionId);
            
            res.status(200).send(result)

        } catch (error:any){
            if (error.code) {
                res.status(error.code).send({ message: error.message });
            } else {
                res.status(500).send({ message: error.message });
            };
        };
    };

}