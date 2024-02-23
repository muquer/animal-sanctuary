// - Name, Age
// - Date and time they signed up for the sanctuary’s waiting list
// - Favorite animals (cats, dogs, …)
// - Personality, whether there are kids in the household…

import { Button, Grid } from "@mui/material"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { IAnimal } from "../../types/Animal";
import { ApiData } from "../../types/apiData";

export const Animals = () => {

    const [data, setData] = useState<IAnimal[]>()

    useEffect(() => {
        //retrieve data from the server
        const data = JSON.parse(localStorage.getItem('mock-data') || '') as ApiData
        setData(data?.AnimalsData as IAnimal[])
    }, [])

    return <Grid container width={'100%'}>
        <Grid container>
            <Grid item xs={12}>
                <Grid container>
                    <Grid item xs={6}>
                    </Grid>
                    <Grid item xs={6}>
                        <Link to='/animalDetails'>
                            <Button variant="contained">
                                ADD NEW
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        {data?.map((animal, idx) => <Grid key={idx} container marginBottom={5}>
            <Grid container>
                <Grid item xs={1} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <Link to={`/animalDetails/${idx}`}>
                        <IconButton>
                            <EditIcon />
                        </IconButton></Link></Grid>
                <Grid item xs={11}>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={2} display={'flex'} justifyContent={'flex-start'}>Name</Grid>
                            <Grid item xs={8} display={'flex'} justifyContent={'flex-start'}>{animal?.nickname}</Grid>
                            <Grid item xs={2}></Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={2} display={'flex'} justifyContent={'flex-start'}>Kind</Grid>
                            <Grid item xs={8} display={'flex'} justifyContent={'flex-start'}>{animal?.kind?.join(', ')}</Grid>
                            <Grid item xs={2}></Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={2} display={'flex'} justifyContent={'flex-start'}>Birth date</Grid>
                            <Grid item xs={10} display={'flex'} justifyContent={'flex-start'}>{new Date(animal?.birth).toDateString()}</Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={2} display={'flex'} justifyContent={'flex-start'}>Arrival date</Grid>
                            <Grid item xs={10} display={'flex'} justifyContent={'flex-start'}>{new Date(animal?.arrivalDate).toDateString()}</Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={2} display={'flex'} justifyContent={'flex-start'}>Personality</Grid>
                            <Grid item xs={10} display={'flex'} justifyContent={'flex-start'}>{animal?.personality?.join(', ')}</Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={2} display={'flex'} justifyContent={'flex-start'}>Conditions</Grid>
                            <Grid item xs={10} display={'flex'} justifyContent={'flex-start'}>{animal?.conditions?.join(', ')}</Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>)}
    </Grid>

}