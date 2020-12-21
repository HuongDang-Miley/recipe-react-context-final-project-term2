
import React, { useContext } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { MealThumb } from './MealThumb'
import { FavButton } from './FavButton'
import MenuAppBar from '../menuBars/AllMealsBar'
import { AuthContext } from '../Context'
import './MealThumb.css'
import { CollectionsOutlined } from '@material-ui/icons';
import { MY_ROUTE } from '../../App.js'

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

export default function FavList() {
    let { favList } = useContext(AuthContext)
    
    const classes = useStyles();

    function saveMealToLocalStorage(item) {
       //console.log(item)
       localStorage.setItem("clickedMeal", JSON.stringify(item))
    }


    return (
        <>
            <MenuAppBar />
            <div style={wrapper}>
                <div className={classes.root}>
                    <Grid container spacing={3} direction="row" justify="center">
                        {favList.length !== 0
                            ? (favList.map((item, index) => {
                                return (
                                    <Grid item xs={6} sm={3} key={index} onClick={() => saveMealToLocalStorage(item)}>
                                        <Link to={{ pathname: `${MY_ROUTE(item.idMeal)}`, meal: { item } }} >

                                            {/* <Link to={MY_ROUTE(item.idMeal)}  meal={item}> */}
                                            {/* <Link to={{ pathname: `/single-meal`, meal: { item } }}> */}
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

