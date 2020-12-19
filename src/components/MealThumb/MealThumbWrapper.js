// import React from 'react'
// import { BrowserRouter as Router, Link } from 'react-router-dom'
// import { MealThumb } from './MealThumb'
// import { FavButton } from './FavButton'
// import './MealThumb.css'

// export const MealThumbWrapper = ({ item }) => {
//     return (
//         <div id='all-meals-wrapper'>
//             <Link className={'meal-module-link'} to={{ pathname: '/main/recipe' }}>
//                 <MealThumb item={item} />
//             </Link>
//             <FavButton item={item} />
//         </div>

//     )
// }

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { MealThumb } from './MealThumb'
import { FavButton } from './FavButton'
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


export default function FullWidthGrid({ randomList }) {
    const classes = useStyles();
    console.log(randomList)
    return (
        <div style={wrapper}>

            <div className={classes.root}>
                <Grid container spacing={3} direction="row" justify="center">
                    {randomList !== undefined
                        ? (randomList.map(item => {
                            return (
                                <Grid item xs={6} sm={3}>
                                    <MealThumb item={item} />
                                    <FavButton className='small-fav-btn' item={item} />
                                </Grid>
                            )
                        }))
                        : ''
                }
                a module appear hear
                </Grid>

            </div>


        </div>
    );
}

