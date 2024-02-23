import { IAdopter } from "../types/Adopter";
import { IAnimal } from "../types/Animal";

export const AnimalsData: IAnimal[] = [{
    nickname: 'one',
    kind: ['cat'],
    birth: new Date().toISOString().slice(0, 10),
    arrivalDate: new Date().toISOString().slice(0, 10),
    conditions: [],
    personality: []
},
{
    nickname: 'two',
    kind: ['cat'],
    birth: new Date().toISOString().slice(0, 10),
    arrivalDate: new Date().toISOString().slice(0, 10),
    conditions: [],
    personality: []
},
{
    nickname: 'three',
    kind: ['cat'],
    birth: new Date().toISOString().slice(0, 10),
    arrivalDate: new Date().toISOString().slice(0, 10),
    conditions: [],
    personality: []
},
{
    nickname: 'four',
    kind: ['cat'],
    birth: new Date().toISOString().slice(0, 10),
    arrivalDate: new Date().toISOString().slice(0, 10),
    conditions: [],
    personality: []
},
{
    nickname: 'five',
    kind: ['cat'],
    birth: new Date().toISOString().slice(0, 10),
    arrivalDate: new Date().toISOString().slice(0, 10),
    conditions: [],
    personality: []
}
]


export const AdoptersData: IAdopter[] = [
    {
        name: 'one',
        age: 10,
        signUpDate: new Date().toISOString().slice(0, 10),
        favoriteAnimals: ['cat'],
        personality: [],
        childHousehold: true
    },
    {
        name: 'two',
        age: 10,
        signUpDate: new Date().toISOString().slice(0, 10),
        favoriteAnimals: [],
        personality: [],
        childHousehold: true
    },
    {
        name: 'three',
        age: 10,
        signUpDate: new Date().toISOString().slice(0, 10),
        favoriteAnimals: [],
        personality: [],
        childHousehold: true
    },
    {
        name: 'four',
        age: 10,
        signUpDate: new Date().toISOString().slice(0, 10),
        favoriteAnimals: [],
        personality: [],
        childHousehold: true
    },
    {
        name: 'five',
        age: 10,
        signUpDate: new Date().toISOString().slice(0, 10),
        favoriteAnimals: [],
        personality: [],
        childHousehold: true
    }
]