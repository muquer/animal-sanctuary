import { IAdopter } from "./Adopter";
import { IAnimal } from "./Animal";

export interface ApiData {
    AnimalsData: IAnimal[],
    AdoptersData: IAdopter[]
}