import { CompetitionResults } from "./Results"

export enum STATUS {
    INPROGRESS = "in_progress",
    FINISHED = "finished"
}

export interface CompetitionDTO {
    name: string
    status: STATUS
};

export type Competition = {
    id: string,
    name: string,
    status: STATUS,
    // results?: CompetitionResults[],
}