import { Button, Grid } from "@mui/material"
import { IAdopter } from "../../types/Adopter"
import { useCallback, useEffect, useState } from "react"
import { ApiData } from "../../types/apiData"
import { IAnimal } from "../../types/Animal"
import { IMatchResult } from "../../types/matchmaking"


// - An adopter that doesn’t like dogs will not get along very well with a dog.
// - An elderly person will likely be overwhelmed by a very active animal.
// - A family with children will fit best with an animal that’s friendly to kids, a
// very active animal is an OK choice, if the animal is shy then that’s a subpar
// choice, and if the animal is unsociable it’s a terrible match.

const generateMatches = (animal: IAnimal, adopter: IAdopter) => {


    const sameKindMatch = adopter.favoriteAnimals?.some((favorite) => animal.kind.includes(favorite))
    const activityMatch = adopter.childHousehold === true && animal.personality?.includes('active')
    const childrenMatch = adopter.childHousehold && animal.personality?.includes('friendly')
    const personalityMatch = adopter.personality?.some((personality) => animal.personality.includes(personality))
    const unsociableMiss = adopter.childHousehold && animal.personality?.includes('unsociable')
    const ageMissMatch = (adopter.age > 60 && animal.personality?.includes('active'))

    let score: IMatchResult = {
        sameKindMatch: sameKindMatch ? '✓' : 'x',
        activityMatch: activityMatch ? '✓' : 'x',
        ageMatch: ageMissMatch ? 'x' : '✓',
        childrenMatch: childrenMatch ? '✓' : 'x',
        personalityMatch: personalityMatch ? '✓' : 'x',
        rank: 0,
        animal,
        adopter
    }

    if (sameKindMatch) {
        score.rank = score.rank + 10
    }
    if (activityMatch) {
        score.rank = score.rank + 10
    }
    if (ageMissMatch) {
        score.rank = score.rank - 10
    }
    if (childrenMatch) {
        score.rank = score.rank + 10
    }
    if (personalityMatch) {
        score.rank = score.rank + 10
    }
    if (unsociableMiss) {
        score.rank = score.rank - 10
    }

    return score


}

export const MatchMaking = () => {

    const [data, setData] = useState<ApiData>()
    const [matches, setMatches] = useState<IMatchResult[]>()

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('mock-data') || '')
        setData(data as ApiData)
    }, [])

    useEffect(() => {
        const calculatedMatches = data?.AnimalsData.flatMap((animal: IAnimal) => data.AdoptersData.map((adopter: IAdopter) => generateMatches(animal, adopter)))
        setMatches(calculatedMatches?.sort((a,b)=>b.rank - a.rank))
    }, [data])


    const removeMatch = useCallback((animal: IAnimal, adopter: IAdopter) => {
        const updatedData = { ...data, AnimalsData: data?.AnimalsData.filter((v, i) => v.id !== animal.id) || [], AdoptersData: data?.AdoptersData.filter((v, i) => adopter.id !== v.id) || [] }
        localStorage.setItem('mock-data', JSON.stringify(updatedData))
        setData(updatedData)
    }, [data])

    return <Grid container width='100%'>
        <Grid item xs={4}>Animal</Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>Adopter</Grid>
        <hr />
        <Grid item xs={12}>
            {matches?.map((match, matchIndex) => {
                if (match?.rank && match.rank > 0) {
                    return <Grid container marginBottom={5} key={matchIndex}>
                        <Grid item xs={4}>
                            <p>nickname: {match.animal?.nickname}</p>
                            <p>kind: {match.animal?.kind?.join(', ')}</p>
                            <p>personality: {match.animal?.personality}</p>
                        </Grid>
                        <Grid item xs={4}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <p>rank: {match.rank}</p>
                                    <p>animal kind: {match.sameKindMatch}</p>
                                    <p>Age match: {match.ageMatch}</p>
                                    <p>children household friendly: {match.childrenMatch}</p>
                                    <p>personality match: {match.personalityMatch}</p>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="contained" onClick={() => removeMatch(match.animal, match.adopter)}>
                                        Accept Match
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={4}>
                            <p>name: {match.adopter.name}</p>
                            <p>age: {match.adopter.age}</p>
                            <p>personality: {match.adopter.personality?.join(', ')}</p>
                        </Grid>
                    </Grid>
                } else {
                    return <></>
                }
            }

            )}
        </Grid>
    </Grid >
}
