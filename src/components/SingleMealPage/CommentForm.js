import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(0),
            width: '100%',
        },
    },
}));

export const CommentForm = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState('Controlled');
    const [inputValue, setInputValue] = React.useState('');


    const addComment = (e) => {
        e.preventDefault()
        // console.log('inputValue', inputValue)
        setInputValue('')
    }

    useEffect(async () => {
        try {
            await axios.post('http://localhost:3001/api/comments/post-comment', {
                idMeal: 'test idMeal',
                email: 'test email',
                comment: inputValue
            })
        }
        catch (e) {
            console.log(e)
        }
    }, [inputValue])
    return (
        <form
            onSubmit={addComment}
            className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField
                    id="outlined-multiline-static"
                    label="Comment"
                    multiline
                    rows={4}
                    onChange={(e) => setInputValue(e.target.value)}
                    variant="outlined"
                    value={inputValue}
                />
                <Button
                    type='submit'
                    variant="contained"
                    color="primary"
                    style={{ marginTop: 8 }}
                >Submit</Button>
            </div>
        </form>
    );
}
