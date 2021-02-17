import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 2,
    },
    control: {
      padding: theme.spacing(2),
    },
  }
  )
);
  
const Home= ()=> {
    const classes = useStyles();

    return (
        <div>
            Home
        </div>
    );
}

export default Home;