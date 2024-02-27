import { IAdopter } from "./Adopter";
import { IAnimal } from "./Animal";

export interface IMatchResult {
    sameKindMatch: string;
    activityMatch: string;
    ageMatch: string;
    childrenMatch: string;
    personalityMatch: string;
    rank: number;
    animal: IAnimal
    adopter: IAdopter
}