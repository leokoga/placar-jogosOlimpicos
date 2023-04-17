import { IIdGenerator } from "../../src/business/ports";

export class IdGeneratorMock implements IIdGenerator {
    public generateId = jest.fn(()=>{
        return "id"
    })
}
