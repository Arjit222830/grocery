import React,{useContext} from 'react';
import {AppContext} from "../State";

import Grid from '@material-ui/core/Grid';
import Card from '../Components/Card';
import GoogleAuth from '../Components/GoogleAuth';
import Title from '../Components/Title';

import '../App.css';

  
const Home= ()=> {

    const {state, dispatch}=  useContext(AppContext);

    if(!state.isSignedIn)
        return <GoogleAuth />;

    return (
        <div className="container-fluid text-center">

            <GoogleAuth />
            <Title />

            <Grid container spacing={2}>
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