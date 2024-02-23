import { Autocomplete, Button, Checkbox, FormControlLabel, Grid, TextField } from "@mui/material"
import { Link, useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { IAdopter } from "../../types/Adopter";
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const AdopterDetails = () => {
    const { id } = useParams();
    const [storedAdopter, setStoredAdopter] = useState<IAdopter[]>()

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('mock-data') || '')
        id && setStoredAdopter(data?.AdoptersData as IAdopter[])
    }, [id])


    const handleOnSave = useCallback(() => {
        if (storedAdopter) {
            const data = JSON.parse(localStorage.getItem('mock-data') || '')
            localStorage.setItem('mock-data', JSON.stringify({ ...data, AdoptersData: storedAdopter }))
        }
    }, [storedAdopter])

    return <Grid container width={'100%'}>
        <Grid item xs={12}>
            <Grid container>
                <Grid item xs={6}>
                    <Link to='/adopters'>
                        <IconButton>
                            <ArrowBackIcon />
                        </IconButton>
                    </Link>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" onClick={handleOnSave}>
                        Save
                    </Button>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={12}>
            <TextField
                variant="standard"
                label="name"
                fullWidth
                value={storedAdopter?.[Number(id)]?.name}
                //@ts-ignore
                onChange={(e) => setStoredAdopter(stored => {
                    const data = JSON.parse(localStorage.getItem('mock-data') || '')
                    if (id && storedAdopter) {
                        const newStored = [...data.AdoptersData]
                        newStored[Number(id)] = {...newStored[Number(id)], ...stored?.[Number(id)],  name: e.target.value }
                        return newStored
                    }

                    const newStored = [...data.AdoptersData, {...stored?.[stored.length - 1], name: e.target.value }]
                    return newStored
                })}
            />
        </Grid>
        <Grid item xs={12}>
            <TextField
                variant="standard"
                label="age"
                fullWidth
                value={storedAdopter?.[Number(id)]?.age}
                type="number"
                onChange={(e) => setStoredAdopter(stored => {
                    const data = JSON.parse(localStorage.getItem('mock-data') || '')
                    if (id && storedAdopter) {
                        const newStored = [...data.AdoptersData]
                        newStored[Number(id)] = {...newStored[Number(id)], ...stored?.[Number(id)], age: Number(e.target.value) }
                        return newStored
                    }

                    const newStored = [...data.AdoptersData, {...stored?.[stored.length - 1], age: Number(e.target.value) }]
                    return newStored
                })}
            />
        </Grid>
        <Grid item xs={12}>
            <Autocomplete
                key={JSON.stringify(storedAdopter?.[Number(id)])}
                multiple
                freeSolo
                id="tags-standard"
                options={['cat', 'dog']}
                value={storedAdopter?.[Number(id)]?.favoriteAnimals}
                onChange={(e, value) => setStoredAdopter(stored => {
                    const data = JSON.parse(localStorage.getItem('mock-data') || '')
                    if (id && storedAdopter) {
                        const newStored = [...data.AdoptersData]
                        newStored[Number(id)] = {...newStored[Number(id)], ...stored?.[Number(id)], favoriteAnimals: value }
                        return newStored
                    }

                    const newStored = [...data.AdoptersData, {...stored?.[stored.length - 1], favoriteAnimals: value }]
                    return newStored
                })}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="standard"
                        label="favorite animals"
                    />
                )}
            />
        </Grid>
        <Grid item xs={12}>
            <Autocomplete
                key={JSON.stringify(storedAdopter?.[Number(id)])}
                freeSolo
                multiple
                id="tags-standard"
                options={['active', 'friendly', 'shy', 'unsociable']}
                value={storedAdopter?.[Number(id)]?.personality}
                onChange={(e, value) => setStoredAdopter(stored => {
                    const data = JSON.parse(localStorage.getItem('mock-data') || '')
                    if (id && storedAdopter) {
                        const newStored = [...data.AdoptersData]
                        newStored[Number(id)] = {...newStored[Number(id)], ...stored?.[Number(id)], personality: value }
                        return newStored
                    }

                    const newStored = [...data.AdoptersData, {...stored?.[stored.length - 1], personality: value }]
                    return newStored
                })}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="standard"
                        label="personality"
                    />
                )}
            />
        </Grid>
        <Grid item xs={12} display={'flex'} justifyContent={'flex-start'}>
            <FormControlLabel control={
                <Checkbox id='thisi' checked={!!storedAdopter?.[Number(id)]?.childHousehold}
                    onChange={(e, value) => setStoredAdopter(stored => {
                        const data = JSON.parse(localStorage.getItem('mock-data') || '')
                        if (id && storedAdopter) {
                            const newStored = [...data.AdoptersData]
                            newStored[Number(id)] = {...newStored[Number(id)], ...stored?.[Number(id)], childHousehold: value }
                            return newStored
                        }

                        const newStored = [...data.AdoptersData, {...stored?.[stored.length - 1], childHousehold: value }]
                        return newStored
                    })}

                />} label="Children household" />
        </Grid>
    </Grid>
}