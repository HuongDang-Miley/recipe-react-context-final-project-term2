import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import Login from './components/loginAndRegister/Login'
import Register from './components/loginAndRegister/Register'
import RandomList from './components/MealThumb/RandomList'
import FavList from './components/MealThumb/FavList'
import { SingleMealPage } from './components/SingleMealPage/SingleMealPage'
import { AuthContext } from './components/Context'
import { PrivateRoute } from './components/privateRoute/PrivateRoute'
import { Main } from './components/privateRoute/Main'

import './App.css';
import { SignalCellularNull } from '@material-ui/icons'

function App() {
  let [randomList, setRandomList] = useState([])
  let [favList, setFavList] = useState([])
  let [jwtToken, setJwtToken] = useState(null)
  let [auth, setAuth] = useState(false)
  let [user, setUser] = useState(null)
  let [test, setTest] = useState('testing context useState')

  // Get user data from jwtToken
  const authorize = (jwtToken) => {
    // console.log('jwtToken in authorize', jwtToken)
    setJwtToken(jwtToken)
  }


  // console.log('jwtToken ', token)

  useEffect(() => {
    let token = localStorage.getItem('jwtToken')
    // console.log('token in useEffect', token)
    if (token) {
      let decodedToken = jwt_decode(token)
      // console.log('decoded browser token', decodedToken)
      setAuth(true)
      setUser({
        email: decodedToken.email,
        _id: decodedToken._id
      })
    }




  }, [])

  useEffect(() => {
    // console.log("---")
    if (user) {
      getFavsMeal()
    }
  }, [user])

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
      let commentResponse = await axios.get('http://localhost:3001/api/comments/get-all-comments')
      let allComments = commentResponse.data.arrayComments
      let randomMealsWithComments = latestMeals.map(meal => {
        meal.comments = []
        for (let item of allComments) {
          if (meal.idMeal === item.idMeal) {
            meal.comments.push(item)
          }
        }
        return meal
      })
      
      setRandomList(randomMealsWithComments)
    }
    catch (e) { console.log(e) }
  }, [])

    async function getFavsMeal() {
      try {
        let favResponse = await axios.get(`http://localhost:3001/api/recipes/all-user-fav-meals/${user._id}`)
        let favMeals = favResponse.data.allUserFavMeals.favMeals
        let commentResponse = await axios.get('http://localhost:3001/api/comments/get-all-comments')
        let allComments = commentResponse.data.arrayComments
  
        let favMealsWithComments = favMeals.map(meal => {
          meal.comments = []
          for (let item of allComments) {
            if (meal.idMeal === item.idMeal) {
              meal.comments.push(item)
            }
          }
          return meal
        })
  
        // console.log('favMealsWithComments', favMealsWithComments)
        // console.log('favMeals', favMeals)
        // console.log('allComments', allComments)
        // setFavList(favResponse.data.allUserFavMeals.favMeals)
        // console.log("====")
        setFavList(favMealsWithComments)
      }
      catch (e) { console.log(e) }
    }

  // Get Fav List
  // useEffect(async () => {
  //   console.log('user', user)
  //   try {
  //     let favResponse = await axios.get(`http://localhost:3001/api/recipes/all-user-fav-meals/${user._id}`)
  //     let favMeals = favResponse.data.allUserFavMeals.favMeals
  //     let commentResponse = await axios.get('http://localhost:3001/api/comments/get-all-comments')
  //     let allComments = commentResponse.data.arrayComments

  //     let favMealsWithComments = favMeals.map(meal => {
  //       meal.comments = []
  //       for (let item of allComments) {
  //         if (meal.idMeal === item.idMeal) {
  //           meal.comments.push(item)
  //         }
  //       }
  //       return meal
  //     })

  //     // console.log('favMealsWithComments', favMealsWithComments)
  //     // console.log('favMeals', favMeals)
  //     // console.log('allComments', allComments)
  //     // setFavList(favResponse.data.allUserFavMeals.favMeals)
  //     console.log("====")
  //     setFavList(favMealsWithComments)
  //   }
  //   catch (e) { console.log(e) }
  // }, [jwtToken, user])
  
  return (
    <div className="App">
      <AuthContext.Provider value={{ auth, user, authorize, randomList, favList, test }}>
        <Router>
          <Switch>
            <Route exact path='/login' component={(props) => <Login {...props} authorize={authorize} />} />
            <Route exact path='/register' component={(props) => <Register {...props} authorize={authorize} />} />
            {/* <PrivateRoute
                path='/main'
                // state={this.state}
                // logOut={this.logOut}
                // addToFavorites={this.addToFavorites}
                // loadAllFavMeals={this.loadAllFavMeals}
                component={Main} /> */}
            <PrivateRoute path='/main' render={(props) => { <Main /> }} />


            <Route exact path='/all-meals' component={RandomList} />
            <Route exact path='/favorites' component={FavList} />
            {/* <Route exact path={MY_ROUTE(':idMeal')} component={(props) => <SingleMealPage {...props} test={test} user={user} auth={auth} favList={favList} />} /> */}
            <Route exact path={MY_ROUTE(':idMeal')} component={(props) => <SingleMealPage {...props} test={test} user={user} auth={auth} favList={favList} />} />
            <Route exact path='/logout' render={() => <Redirect to='/login' />} />
            {/* <Route exact path='/single-meal' component={(props) => <SingleMealPage {...props} test={test} user={user} auth={auth} />} /> */}
          </Switch>
        </Router>
        {/* <Test/> */}
      </AuthContext.Provider>
    </div>
  );
}

export default App;


export const MY_ROUTE = (idMeal) => `/single-meal/${idMeal}/`;

// <Route path={MY_ROUTE(':userId')} />
// And so in your component

{/* <Link to={MY_ROUTE(idMeal)} params={{userId: idMeal}} /> */ }
// <Link to={MY_ROUTE(1)} params={{userId: 1}} />