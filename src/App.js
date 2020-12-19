import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import FullWidthGrid from './components/MealThumb/MealThumbWrapper'

import { SingleMealPage } from './components/SingleMealPage/SingleMealPage'
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
      let latestMeals = response.data.meals.map(item => {
        item.like = false
        return item
      })
      console.log(latestMeals)
      setRandomList(latestMeals)
    }
    catch (e) { console.log(e) }
  }, [])


  return (
    <div className="App">
      <Router>
        {/* <MenuAppBar /> */}
        <Switch>
          <Route exact path='/all-meals'>
            <FullWidthGrid randomList={randomList} />
          </Route>
          <Route exact path='/single-meal' component={SingleMealPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
