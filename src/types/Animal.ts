
// - Nickname, animal kind (cat, dog, …), birth date and time
// - How long they’ve been in the sanctuary
// - Allergies, illnesses, if any
// - Personality (active, shy, friendly to kids, unsociable, …)


export interface IAnimal{
    id: number;
    nickname: string;
    kind: string[];
    birth: string;
    arrivalDate: string
    conditions: string[]
    personality: string[]
}

