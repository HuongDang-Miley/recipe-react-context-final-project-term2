import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {MealThumb} from './MealThumb'



let testArray = [
    { name: 'this is a' },
    { name: 'this is a' },
    { name: 'this is a' },
    { name: 'this is a' },
    { name: 'this is a' },
]

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 220,
        
    },
}));

const wrapper = {
    width: '70%',
    margin: 'auto'
}

export default function FullWidthGrid() {
    const classes = useStyles();
    // console.log(MealThumb)

    return (
        <div style={wrapper}
        >

            <div className={classes.root}>
                <Grid container spacing={3} direction="row" justify="center">
                    <MealThumb/>
                    {/* {testArray.map(item => {
                        return (
                            <Grid item xs={6} sm={3} >
                                <Paper className={classes.paper}>{item.idMeal}</Paper>
                            </Grid>
                        )
                    })} */}
                    {/* <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>xs=12 sm=6</Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>xs=12 sm=6</Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}>xs=6 sm=3</Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}>xs=6 sm=3</Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}>xs=6 sm=3</Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}>xs=6 sm=3</Paper>
                </Grid> */}
                </Grid>

            </div>


        </div>
    );
}
