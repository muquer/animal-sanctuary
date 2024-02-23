// - Name, Age
// - Date and time they signed up for the sanctuary’s waiting list
// - Favorite animals (cats, dogs, …)
// - Personality, whether there are kids in the household…

export interface IAdopter {
    name: string;
    age: number
    signUpDate: string;
    favoriteAnimals: string[]
    personality: string[]
    childHousehold: boolean
}