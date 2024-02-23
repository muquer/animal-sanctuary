import { Autocomplete, Button, Grid, TextField } from "@mui/material"
import { Link, useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IAnimal } from "../../types/Animal";
import { ApiData } from "../../types/apiData";

export const AnimalDetails = () => {
    const { id } = useParams();
    const [storedAnimal, setStoredAdopter] = useState<IAnimal[]>()

    useEffect(() => {
        //retrieve data on mount
        const data = JSON.parse(localStorage.getItem('mock-data') || '') as ApiData
        id && setStoredAdopter(data?.AnimalsData as IAnimal[])
    }, [id])


    // send data to the server
    const handleOnSave = useCallback(() => {
        if (storedAnimal) {
            const data = JSON.parse(localStorage.getItem('mock-data') || '')
            localStorage.setItem('mock-data', JSON.stringify({ ...data, AnimalsData: storedAnimal }))
        }
    }, [storedAnimal])

    return <Grid container width={'100%'}>
        <Grid item xs={12}>
            <Grid container>
                <Grid item xs={6}>
                    <Link to='/animals'>
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
                value={storedAnimal?.[Number(id)]?.nickname}
                onChange={(e) => setStoredAdopter(stored => {
                    const data = JSON.parse(localStorage.getItem('mock-data') || '')
                    if (id && storedAnimal) {
                        const newStored = [...data.AnimalsData]
                        newStored[Number(id)] = { ...newStored[Number(id)], ...stored?.[Number(id)], nickname: e.target.value }
                        return newStored
                    }

                    const newStored = [...data.AnimalsData, { ...stored?.[stored.length - 1], nickname: e.target.value }]
                    return newStored
                })}
            />
        </Grid>
        <Grid item xs={12}>
            <Autocomplete
                key={JSON.stringify(storedAnimal?.[Number(id)])}
                multiple
                freeSolo
                id="tags-standard"
                options={['cat', 'dog']}
                value={storedAnimal?.[Number(id)]?.kind}
                onChange={(e, value) => setStoredAdopter(stored => {
                    const data = JSON.parse(localStorage.getItem('mock-data') || '')
                    if (id && storedAnimal) {
                        const newStored = [...data.AnimalsData]
                        newStored[Number(id)] = { ...newStored[Number(id)], ...stored?.[Number(id)], kind: value }
                        return newStored
                    }

                    const newStored = [...data.AnimalsData, { ...stored?.[stored.length - 1], kind: value }]
                    return newStored
                })}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="standard"
                        label="kind"
                    />
                )}
            />
        </Grid>
        <Grid item xs={12}>
            <TextField
                variant="standard"
                label="birthdate"
                fullWidth
                value={storedAnimal?.[Number(id)]?.birth}
                type="date"
                onChange={(e) => setStoredAdopter(stored => {
                    const data = JSON.parse(localStorage.getItem('mock-data') || '')
                    if (id && storedAnimal) {
                        const newStored = [...data.AnimalsData]
                        newStored[Number(id)] = { ...newStored[Number(id)], ...stored?.[Number(id)], birth: (e.target.value) }
                        return newStored
                    }

                    const newStored = [...data.AnimalsData, { ...stored?.[stored.length - 1], birth: (e.target.value) }]
                    return newStored
                })}
            />
        </Grid>
        <Grid item xs={12}>
            <TextField
                variant="standard"
                label="arrival date"
                fullWidth
                value={storedAnimal?.[Number(id)]?.arrivalDate}
                type="date"
                onChange={(e) => setStoredAdopter(stored => {
                    const data = JSON.parse(localStorage.getItem('mock-data') || '')
                    if (id && storedAnimal) {
                        const newStored = [...data.AnimalsData]
                        newStored[Number(id)] = { ...newStored[Number(id)], ...stored?.[Number(id)], arrivalDate: (e.target.value) }
                        return newStored
                    }

                    const newStored = [...data.AnimalsData, { ...stored?.[stored.length - 1], arrivalDate: (e.target.value) }]
                    return newStored
                })}
            />
        </Grid>
        <Grid item xs={12}>
            <Autocomplete
                key={JSON.stringify(storedAnimal?.[Number(id)])}
                multiple
                freeSolo
                id="tags-standard"
                options={[]}
                value={storedAnimal?.[Number(id)]?.conditions}
                onChange={(e, value) => setStoredAdopter(stored => {
                    const data = JSON.parse(localStorage.getItem('mock-data') || '')
                    if (id && storedAnimal) {
                        const newStored = [...data.AnimalsData]
                        newStored[Number(id)] = { ...newStored[Number(id)], ...stored?.[Number(id)], conditions: value }
                        return newStored
                    }

                    const newStored = [...data.AnimalsData, { ...stored?.[stored.length - 1], conditions: value }]
                    return newStored
                })}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="standard"
                        label="conditions"
                    />
                )}
            />
        </Grid>
        <Grid item xs={12}>
            <Autocomplete
                key={JSON.stringify(storedAnimal?.[Number(id)])}
                freeSolo
                multiple
                id="tags-standard"
                options={['active', 'friendly', 'shy', 'unsociable']}
                value={storedAnimal?.[Number(id)]?.personality}
                onChange={(e, value) => setStoredAdopter(stored => {
                    const data = JSON.parse(localStorage.getItem('mock-data') || '')
                    if (id && storedAnimal) {
                        const newStored = [...data.AnimalsData]
                        newStored[Number(id)] = { ...newStored[Number(id)], ...stored?.[Number(id)], personality: value }
                        return newStored
                    }

                    const newStored = [...data.AnimalsData, { ...stored?.[stored.length - 1], personality: value }]
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
    </Grid>
}