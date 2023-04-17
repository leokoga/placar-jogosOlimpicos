import { Request, Response } from "express";
import ResultBusiness from "../business/ResultBusiness";
import { CompetitionInputDTO } from "../model/Results";
import { BaseError } from "../error/BaseError";

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

    // async findCompetition(req: Request, res: Response) {
    //     try {

    //         const resultBusiness = new ResultBusiness()

    //       const input: CompetitionInputDTO = {
    //         name: req.query.name as string
    //       }
    
    //      const result = await resultBusiness.findCompetition(input)
    
    //       res.status(200).send({ result });
    //     } catch (error: any) {
    //       res.status(400).send({ error: error.message });
    //     }
    //   }

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