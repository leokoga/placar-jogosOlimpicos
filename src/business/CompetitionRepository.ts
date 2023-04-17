import { Competition } from "../model/Competition";

export interface CompetitionRepository {
    insertCompetition(competition: any): Promise<any>
    findCompetition(name: string): Promise<Competition[]>
    updateStatusCompetitionToFinished(competitionId: string): Promise<any>
}
    