import React,{useState,useEffect,useContext} from 'react';

import {AppContext} from "../State";
import Grid from '@material-ui/core/Grid';
import Card from '../Components/Card';
import GoogleAuth from '../Components/GoogleAuth';
import Title from '../Components/Title';
import {fetchProducts} from '../actions';

import '../App.css';

  
const Home= ()=> {

    const {state, dispatch}=  useContext(AppContext);
    console.log(state);

    useEffect(async()=>{
        dispatch(await fetchProducts());
    },[]);


    if(!state.isSignedIn)
        return <GoogleAuth />;

    return (
        <div className="container-fluid text-center">

            <GoogleAuth />
            <Title />

            <Grid container spacing={2}>
                <Grid item>
                    <Grid container spacing={6}>
                        {Object.values(state.form).map((item,index)=>{
                            return (
                            <Grid key={index} item xs>
                                <Card id={item.id}/>
                            </Grid>
                            );
                        })}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default Home;