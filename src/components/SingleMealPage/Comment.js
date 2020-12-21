
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors'
import FaceIcon from '@material-ui/icons/Face';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    lineHeight: 40
  },
  pos: {
    marginBottom: 12,
  },
})

const useAvaStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));


export default function Comment({ comments }) {
  // console.log('comments', comments)
  const classes = useStyles();
  const ava = useAvaStyles()

  return (
    <>
      { comments.length !== 0
        ? (comments.map(item => {
          return (
            <Card className={classes.root}>
              <CardContent>
                <Avatar sizes="10" className={ava.orange}>N</Avatar>
                <Typography className={classes.bullet} color="textSecondary" gutterBottom>
                  {item.email}
                </Typography>
                <Typography variant="body1" component="p">
                  {item.comment}
                </Typography>
              </CardContent>
            </Card>
          )
        }))
        : ''
      }
    </>
  );
}
