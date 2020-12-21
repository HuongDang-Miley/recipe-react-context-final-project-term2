import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { SignalCellularNullOutlined } from '@material-ui/icons'
import {AuthContext} from './Context'

export const Test = () => {
    let {test, favList} = useContext(AuthContext)
    console.log('favList in Test',favList)
    const [content, setContent] = useState('initial Content')
    const [array, setArray] = useState([])



    useEffect(async () => {
        let response = await axios.get(`https://jsonplaceholder.typicode.com/${content}`)
        setArray(response.data)
        console.log('array in useEffect', array)
    }, [content])
    
    console.log('array out of useEffect', array)
    
    return (
        <div>
            <button
                onClick={() => setContent('users')}
            >User</button><br />
            <button
                onClick={() => setContent('posts')}
            >Post</button><br />
            <button
                onClick={() => setContent('comments')}
            >Comment</button><br />
            {array.map(item => {
                return (
                    <pre>{JSON.stringify(item)}</pre>
                )
            })}

        </div>
    )
}
