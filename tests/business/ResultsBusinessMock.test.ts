import ResultBusiness from "../../src/business/ResultBusiness"
import { BaseError } from "../../src/error/BaseError";

const resultBusiness = new ResultBusiness(
);

describe("Testes result", () => {
  
    test("Erro quando o id não é inserido", async() => {
        expect.assertions(3);
        try{
            await resultBusiness.getAllResultsByCompetitionId("")
        } catch (error: any){
            expect(error).toBeInstanceOf(BaseError)
            expect(error.code).toBe(400)
            expect(error.message).toBe("Informe o id da competição")
        }
    })
})