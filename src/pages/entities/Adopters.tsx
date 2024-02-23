// - Name, Age
// - Date and time they signed up for the sanctuary’s waiting list
// - Favorite animals (cats, dogs, …)
// - Personality, whether there are kids in the household…

import { Button, Grid } from "@mui/material"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { IAdopter } from "../../types/Adopter";
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

export const Adopters = () => {

    const [data, setData] = useState<IAdopter[]>()

    useEffect(() => {
        //retrieve data from the server
        const data = JSON.parse(localStorage.getItem('mock-data') || '')
        setData(data?.AdoptersData as IAdopter[])
    }, [])

    return <Grid container width={'100%'}>
        <Grid container>
            <Grid item xs={12}>
                <Grid container>
                    <Grid item xs={6}>
                    </Grid>
                    <Grid item xs={6}>
                        <Link to='/adopterDetails'>
                            <Button variant="contained">
                                ADD NEW
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        {data?.map((adopter, idx) => <Grid key={idx} container marginBottom={5}>
            <Grid container >
                <Grid item xs={1} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <Link to={`/adopterDetails/${idx}`}>
                        <IconButton>
                            <EditIcon />
                        </IconButton></Link></Grid>
                <Grid item xs={11}>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={2} display={'flex'} justifyContent={'flex-start'}>Name</Grid>
                            <Grid item xs={8} display={'flex'} justifyContent={'flex-start'}>{adopter?.name}</Grid>
                            <Grid item xs={2}></Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={2} display={'flex'} justifyContent={'flex-start'}>Age</Grid>
                            <Grid item xs={10} display={'flex'} justifyContent={'flex-start'}>{adopter?.age}</Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={2} display={'flex'} justifyContent={'flex-start'}>favorite animals</Grid>
                            <Grid item xs={10} display={'flex'} justifyContent={'flex-start'}>{adopter?.favoriteAnimals?.join(', ')}</Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={2} display={'flex'} justifyContent={'flex-start'}>personality</Grid>
                            <Grid item xs={10} display={'flex'} justifyContent={'flex-start'}>{adopter?.personality?.join(', ')}</Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={2} display={'flex'} justifyContent={'flex-start'}>Children household</Grid>
                            <Grid item xs={10} display={'flex'} justifyContent={'flex-start'}>{adopter.childHousehold ? '✓' : 'x'}</Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>)}
    </Grid>

}