import React, {useState} from 'react'
import {AuthContext} from '../Context'

export const Main = () => {
    const [auth, user, favMeals, randomMeals] = useState(AuthContext)
    // console.log('auth in main', auth)
    // console.log('favMeals in main', favMeals)
    // console.log('randomMeals in main', randomMeals)
    // console.log('user in main', user)
    

    return (
        <div>
            This is Main Component
        </div>
    )
}
