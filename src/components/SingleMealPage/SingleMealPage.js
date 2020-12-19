import React from 'react'
import './SingleMealPage.css'
import AppBar from '@material-ui/core/AppBar';
import SingleMealBar from '../menuBars/SingleMealBar'



export const SingleMealPage = (props) => {
    let item = props.location.meal.item
    let { strArea, strCategory, strInstructions, strMeal, strMealThumb, strTags, strSource } = item

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


    return (
        <>
            <div>
        <SingleMealBar/>
                <div id="recipe-div">
                    <div id='header'>
                        <h1>{strMeal}</h1>
                        <div id='video-info-wrapper'>
                            <img class='recipe-hero-img' src={strMealThumb} />
                            <ul id="info">
                                <button className="add-to-favorites-button">Add To Favorites</button>
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
                        <div className='ingredient-and-instruction-wrapper'>
                            <p className='instruction-paragraph'>
                                {ingredients.length !== 0
                                    ? (ingredients.map(item => { if (item !== '' && item !== null) { return (<li>{item}</li>) } }))
                                    : ""}
                            </p>
                        </div>
                    </div>
                    <div id='instruction'>
                        <h2>Instruction</h2>
                        <div className='ingredient-and-instruction-wrapper'>
                            <p className='instruction-paragraph'>{strInstructions}</p>
                        </div>
                    </div>
                </div>
                <div id='footer'>
                    © 2020 Code Immersives - Final Project Term2 By Miley <br />
              All rights reserved.
            </div>
            <AppBar/>
            </div>
        </>
    )
}
