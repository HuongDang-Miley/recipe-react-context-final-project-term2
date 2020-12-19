import React from 'react'
import './MealThumb.css'

export const MealThumb = ({ item }) => {
    const { strCategory, strMeal, strMealThumb } = item
    return (
        <div id='meal-module-wrapper'>
            <p className='meal-module-category'>{strCategory.toUpperCase()}</p>
            <div className='name-and-img-wrapper'>
                <div className='meal-module-name'>{strMeal}</div>
                <img className='meal-module-image' src={strMealThumb} />
            </div>
        </div>
    )
}

