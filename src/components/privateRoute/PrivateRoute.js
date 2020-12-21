import React, {useState, useContext} from 'react'
import { Route, Redirect } from 'react-router-dom'
import Main from './Main'
import {AuthContext} from '../Context'




export const PrivateRoute = ({ component: Main, ...rest }) => {
    const [auth, user, favMeals, randomMeals] = useContext(AuthContext)
   
    return (
        <>

        this is private route
        <Main/>
            {/* {rest.state.isAuth ? (
                <Route
                    {...rest}
                    render={(props) => <Main {...props}{...rest} />}
                />
            ) : (
                    <Redirect to='/register' />
                )} */}
        </>
    )
}

export default PrivateRoute
