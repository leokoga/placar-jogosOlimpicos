import CompetitionBusiness from "../../src/business/CompetitionBusiness";
import { STATUS } from "../../src/model/Competition";
import { IdGeneratorMock } from "../mocks/IdGeneratorMocks";
import CompetitionDatabase from '../../src/data/CompetitionDatabase';
import { BaseError } from '../../src/error/BaseError';

const competitionBusiness = new CompetitionBusiness(
    new CompetitionDatabase(),
    new IdGeneratorMock()
);

describe("", () => {

    test("Erro quando o nome não é inserido", async()=>{
        expect.assertions(3);
        try{
            await competitionBusiness.insertCompetition(STATUS.INPROGRESS);
        } catch(error: any) {
            expect(error).toBeInstanceOf(BaseError)
            expect(error.code).toBe(400)
            expect(error.message).toBe("Preencha todos os campos")
        };
    });

    test("Erro quando o status não é inserido", async()=>{
        expect.assertions(3);
        try{
            await competitionBusiness.insertCompetition("name");
        } catch(error: any) {
            expect(error).toBeInstanceOf(BaseError)
            expect(error.code).toBe(400)
            expect(error.message).toBe("Preencha todos os campos")
        };
    });

    
    test("Erro quando o ID da competição nao é inserido", async()=>{
        expect.assertions(3);
        try{
            await competitionBusiness.updateStatusCompetitionToFinished("");
        } catch(error: any) {
            expect(error).toBeInstanceOf(BaseError)
            expect(error.code).toBe(400)
            expect(error.message).toBe("Informe o ID da competição")
        };
    });

})