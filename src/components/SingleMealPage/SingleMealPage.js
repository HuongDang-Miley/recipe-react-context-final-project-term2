import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './SingleMealPage.css'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SingleMealBar from '../menuBars/SingleMealBar'
import Paper from '@material-ui/core/Paper';
import { AuthContext } from '../Context'



export const SingleMealPage = (props) => {
    const id = props.match.user
    let item = props.location.meal.item
    console.log(props.user._id)

    let { idMeal, like, strArea, strCategory, strInstructions, strMeal, strMealThumb, strTags, strSource } = item

    let ingredients = [
        item.strIngredient1,
        item.strIngredient3,
        item.strIngredient2,
        item.strIngredient4,
        item.strIngredient5,
        item.strIngredient6,
        item.strIngredient7,
        item.strIngredient8,
        item.strIngredient9,
        item.strIngredient10,
        item.strIngredient11,
        item.strIngredient12,
        item.strIngredient13,
        item.strIngredient14,
        item.strIngredient15,
        item.strIngredient16,
        item.strIngredient17,
        item.strIngredient18,
        item.strIngredient19,
        item.strIngredient20,
    ]

    const [meal, setMeal] = useState(item)
    function handleAddToFavorites() {
        if (item.like === true) { item.like = false }
        else if (item.like === false) { item.like = true }
        setMeal(meal)
    }

    useEffect(async () => {
        if (meal.like === false) {
            let favMeal = {
                _id: props.user._id,
                ...meal,
                like: true,
            }
            try {
                let addMeal = await axios.post('http://localhost:3001/api/recipes/like-recipe', favMeal)
                console.log('result add a meal',addMeal)
            }
            catch (e) { console.log(e) }
        } else if (meal.like === true) {
            try {
                let result = await axios.delete('http://localhost:3001/api/recipes/delete-recipe', {
                    _id: props.user._id,
                    idMeal: meal.idMeal
                })
                console.log('result delete a meal', result)
            }
            catch (e) {
                console.log(e)
            }
        }

    }, [meal])

    return (
        <>
            <div>
                <SingleMealBar />
                <div id="recipe-div">
                    <div id='header'>
                        <h1>{strMeal}</h1>
                        <div id='video-info-wrapper'>
                            <img class='recipe-hero-img' src={strMealThumb} />
                            <ul id="info">


                                <Button
                                    onClick={handleAddToFavorites}
                                    variant="outlined"
                                    color="secondary"
                                    size="small"
                                    // className={classes.button}
                                    startIcon={<FavoriteIcon />}

                                >add to favorites</Button>
                                <li className="info-list">Tags: {strTags}</li>
                                <li className="info-list">Country: {strArea}</li>
                                <li className="info-list">Catergory: {strCategory}</li>
                                <li className="info-list">Source: <a className='recipe-link' href={strSource}>Link</a>
                                </li>
                            </ul>

                        </div>


                    </div>
                    <div id='ingredients'>
                        <h2>Ingredients</h2>
                        <Paper elevation={3}>
                            {<p className='instruction-paragraph'>
                                {ingredients.length !== 0
                                    ? (ingredients.map(item => { if (item !== '' && item !== null) { return (<li>{item}</li>) } }))
                                    : ""}
                            </p>}
                        </Paper>

                    </div>
                    <div id='instruction'>
                        <h2>Instruction</h2>
                        <Paper elevation={3} padding={20}>
                            <p className='instruction-paragraph'>{strInstructions}</p>
                        </Paper>

                    </div>
                </div>
                <div id='footer'>
                    © 2020 Code Immersives - Final Project Term2 By Miley <br />
              All rights reserved.
            </div>
                <AppBar />
            </div>
        </>
    )
}
