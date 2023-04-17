import { BaseError } from "./BaseError";

export class CompetitionNotFound extends BaseError {
    constructor() {
      super("Esta competição não existe", 404);
    }
  }