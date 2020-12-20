import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import Login from './components/loginAndRegister/Login'
import Register from './components/loginAndRegister/Register'
import RandomList from './components/MealThumb/RandomList'
import FavList from './components/MealThumb/FavList'
import { SingleMealPage } from './components/SingleMealPage/SingleMealPage'
import { AuthContext } from './components/Context'

import './App.css';
import { SignalCellularNull } from '@material-ui/icons'

function App() {
  let [randomList, setRandomList] = useState([])
  let [favList, setFavList] = useState([])
  let [jwtToken, setJwtToken] = useState(null)
  let [auth, setAuth] = useState(false)
  let [user, setUser] = useState(null)
  let [test, setTest] = useState('testing context')

  // Get user data from jwtToken
  const authorize = (jwtToken) => {
    console.log('jwtToken in authorize', jwtToken)
    setJwtToken(jwtToken)
  }
  
  
  // console.log('jwtToken ', token)
  
  useEffect(() => {
    let token = localStorage.getItem('jwtToken')
    console.log('token in useEffect', token)
    let decodedToken = jwt_decode(token)
    console.log('decoded browser token', decodedToken)
    setAuth(true)
    setUser({
      email: decodedToken.email,
      _id: decodedToken._id
    })
  }, [jwtToken])

  // const authorize = (jwtToken) => {
  //   let decodedToken = jwt_decode(jwtToken)
  //   console.log('decoded browser token', decodedToken)
  //   setAuth(true)
  //   setUser({
  //     email: decodedToken.email,
  //     _id: decodedToken._id
  //   })
  // }

  useEffect(async () => {
    try {
      let response = await axios.get('https://themealdb.p.rapidapi.com/randomselection.php', {
        headers: {
          'x-rapidapi-key': '1eccb1fd0fmsh1264571b8ded970p1f1396jsn3b376a8754cf',
          'x-rapidapi-host': 'themealdb.p.rapidapi.com',
          useQueryString: true
        }
      })
      // Add key like = false  to every meal
      let latestMeals = response.data.meals.map(item => {
        item.like = false
        return item
      })
      setRandomList(latestMeals)
    }
    catch (e) { console.log(e) }
  }, [])


  return (
    <div className="App">
      <AuthContext.Provider value={{ auth, user, authorize, randomList, favList, test }}>
        <Router>
          <Switch>
            <Route exact path='/login' component={(props) => <Login {...props} authorize={authorize} />} />
            <Route exact path='/register' component={(props) => <Register {...props} authorize={authorize} />} />
            <Route exact path='/all-meals' component={RandomList} />
            <Route exact path='/favorites' component={FavList} />
  <Route exact path='/single-meal' component={(props) => <SingleMealPage {...props} test={test} user={user} auth={auth}/> }/>
          </Switch>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
