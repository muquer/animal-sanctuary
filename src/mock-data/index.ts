import { IAdopter } from "../types/Adopter";
import { IAnimal } from "../types/Animal";

export const AnimalsData: IAnimal[] = [{
    id:1,
    nickname: 'one',
    kind: ['cat'],
    birth: new Date().toISOString().slice(0, 10),
    arrivalDate: new Date().toISOString().slice(0, 10),
    conditions: [],
    personality: []
},
{
    id:2,
    nickname: 'two',
    kind: ['cat'],
    birth: new Date().toISOString().slice(0, 10),
    arrivalDate: new Date().toISOString().slice(0, 10),
    conditions: [],
    personality: []
},
{
    id:3,
    nickname: 'three',
    kind: ['cat'],
    birth: new Date().toISOString().slice(0, 10),
    arrivalDate: new Date().toISOString().slice(0, 10),
    conditions: [],
    personality: []
},
{
    id:4,
    nickname: 'four',
    kind: ['cat'],
    birth: new Date().toISOString().slice(0, 10),
    arrivalDate: new Date().toISOString().slice(0, 10),
    conditions: [],
    personality: []
},
{
    id:5,
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
        id:1,
        name: 'one',
        age: 10,
        signUpDate: new Date().toISOString().slice(0, 10),
        favoriteAnimals: ['cat'],
        personality: [],
        childHousehold: true
    },
    {
        id:2,
        name: 'two',
        age: 10,
        signUpDate: new Date().toISOString().slice(0, 10),
        favoriteAnimals: [],
        personality: [],
        childHousehold: true
    },
    {
        id:3,
        name: 'three',
        age: 10,
        signUpDate: new Date().toISOString().slice(0, 10),
        favoriteAnimals: [],
        personality: [],
        childHousehold: true
    },
    {
        id:4,
        name: 'four',
        age: 10,
        signUpDate: new Date().toISOString().slice(0, 10),
        favoriteAnimals: [],
        personality: [],
        childHousehold: true
    },
    {
        id:5,
        name: 'five',
        age: 10,
        signUpDate: new Date().toISOString().slice(0, 10),
        favoriteAnimals: [],
        personality: [],
        childHousehold: true
    }
]