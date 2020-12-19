import { BrowserRouter as Router, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
// import { MealThumbWrapper } from './components/MealThumb/MealThumbWrapper'
import FullWidthGrid from './components/MealThumb/MealThumbWrapper'
import MenuAppBar from './components/MenuAppBar/MenuAppBar'
// import FullWidthGrid  from './components/MealThumb/Grid'
import './App.css';

function App() {
  let [randomList, setRandomList] = useState([])

  useEffect(async () => {
    try {
      let response = await axios.get('https://themealdb.p.rapidapi.com/randomselection.php', {
        headers: {
          'x-rapidapi-key': '1eccb1fd0fmsh1264571b8ded970p1f1396jsn3b376a8754cf',
          'x-rapidapi-host': 'themealdb.p.rapidapi.com',
          useQueryString: true
        }
      })

      // Add like = false property to every meal
      // let latestMeals = response.data.meals
      let latestMeals = response.data.meals.map(item => {
        item.like = false
        return item
      })
      console.log(latestMeals)
      setRandomList(latestMeals)
    }
    catch (e) { console.log(e) }
  }, [])

  const displayMeals = (randomList) => {
    if (randomList !== undefined) {
      return (
        <FullWidthGrid randomList={randomList} />
      )
    }
  }



  return (
    <div className="App">
      <MenuAppBar/>
      {/* <FullWidthGrid /> */}
      This is a new app
      <Router>
        {displayMeals(randomList)}
      </Router>
    </div>
  );
}

export default App;
