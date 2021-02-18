import React,{useContext} from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import Card from '../Components/Card';
import Title from '../Components/Title';

import '../App.css';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 2,
    },
    control: {
      padding: theme.spacing(5),
    },
  })
);

  
const Home= ()=> {

    const classes = useStyles();

    return (
        <div className="container-fluid text-center">
            <Title />

            <Grid container className={classes.root} spacing={2}>
                <Grid item>
                    <Grid container spacing={6}>
                        <Grid key="dcvx" item xs>
                            <Card/>
                        </Grid>
                        <Grid key="cxd" item xs>
                            <Card/>
                        </Grid>
                        <Grid key="cds" item xs>
                            <Card/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default Home;