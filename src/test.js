// let meal = {
//     "_id": "5fde9a58f052e3d6627b88c4",
//     "idMeal": "52852",
//     "like": true,
//     "strArea": "French",
//     "strCategory": "Seafood",
//     "strDrinkAlternate": null,
//     "strIngredient1": "Potatoes",
//     "strIngredient2": "Olive Oil",
//     "strIngredient3": "Eggs",
//     "strIngredient4": "Red Wine Vinegar",
//     "strIngredient5": "Capers",
//     "strIngredient6": "Sunflower Oil",
//     "strIngredient7": "Red Onions",
//     "strIngredient8": "Spinach",
//     "strIngredient9": "Tuna",
//     "strInstructions": "Heat oven to 200C/fan 180C/gas 6. Toss the potatoes with 2 tsp oil and some seasoning. Tip onto a large baking tray, then roast for 20 mins, stirring halfway, until crisp, golden and cooked through",
//     "strMeal": "Tuna Nicoise",
//     "strMealThumb": "https://www.themealdb.com/images/media/meals/yypwwq1511304979.jpg",
//     "strMeasure1": "450g",
//     "strMeasure2": "2 tblsp ",
//     "strMeasure3": "4",
//     "strMeasure4": "1 tbls",
//     "strMeasure5": "2 tblsp ",
//     "strMeasure6": "50g",
//     "strMeasure7": "½",
//     "strMeasure8": "100g ",
//     "strMeasure9": "400g",
//     "strSource": "https://www.bbcgoodfood.com/recipes/9529/winter-tuna-nioise",
//     "strTags": null,
//     "strYoutube": "https://www.youtube.com/watch?v=3_UAxkx0u6U",
// }


let meals = [
    {
        id: 1,
        name: 'Chicken'
    },
    {
        id: 2,
        name: 'Duck'
    },
    {
        id: 3,
        name: 'Pig'
    },
    {
        id: 4,
        name: 'Horse'
    },
    {
        id: 5,
        name: 'Cow'
    },
]

let commentsArray = [
    { id: 1, user: 'person 1', comment: 'comment 1' },
    { id: 1, user: 'person 2', comment: 'comment 2' },
    { id: 3, user: 'person 3', comment: 'comment 3' },
    { id: 3, user: 'person 4', comment: 'comment 4' },
    { id: 3, user: 'person 5', comment: 'comment 5' },
    { id: 4, user: 'person 6', comment: 'comment 6' },

]


let addCommentArray = meals.map(meal => {
    meal.comments = [] 
    for (let item of commentsArray) {
        if (item.id === meal.id) {
            meal.comments.push(item)
        }
    }
    return meal
})


addCommentArray
