
import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { MealThumb } from './MealThumb'
import { FavButton } from './FavButton'
import MenuAppBar from '../menuBars/AllMealsBar'
import './MealThumb.css'

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

export default function FavList({ randomList }) {
    const classes = useStyles();
    return (
        <>
            <MenuAppBar />
            <div style={wrapper}>
                <div className={classes.root}>
                    <Grid container spacing={3} direction="row" justify="center">
                        {randomList !== undefined
                            ? (randomList.map(item => {
                                return (
                                    <Grid item xs={6} sm={3}>
                                        <Link to={{ pathname: `/single-meal`, meal: { item } }}>
                                            <MealThumb item={item} />
                                        </Link>
                                        <FavButton className='small-fav-btn' item={item} />
                                    </Grid>
                                )
                            }))
                            : ''
                        }
                    </Grid>
                </div>
            </div>
        </>
    );
}

