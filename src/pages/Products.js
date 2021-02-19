import React,{useContext} from 'react';
import Grid from '@material-ui/core/Grid';

import Card from '../Components/Card';
import Title from '../Components/Title';
import GoogleAuth from '../Components/GoogleAuth';
import {AppContext} from "../State";

import '../App.css';

  
const Products= (props)=> {

    const {state, dispatch}=  useContext(AppContext);

    if(!state.isSignedIn)
        return <GoogleAuth />;

    return (
        <div className="container-fluid text-center">

            <GoogleAuth />
            <Title />

            <h4 style={{color:'red'}}>
                {props.match.params.id}
            </h4>
            
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

export default Products;