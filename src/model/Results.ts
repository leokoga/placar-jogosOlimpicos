export type CompetitionResults = {
    id: string,
    competition: string,
    athlete: string,
    value: number,
    metric: string
}

export interface CompetitionResultsInputDTO {
    competition: string,
    athlete: string,
    value: number,
    metric: string
}