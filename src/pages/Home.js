import React,{useEffect,useContext} from 'react';

import {AppContext} from "../State";
import Grid from '@material-ui/core/Grid';
import Card from '../Components/Card';
import {fetchProducts} from '../actions';

import '../App.css';
  
const Home= (props)=> {

    const {state, dispatch}=  useContext(AppContext);

    console.log(state);

    useEffect(async()=>{
        dispatch(await fetchProducts());
        console.log('hel');
    },[]);

    console.log(state.isSignedIn);
    if(!state.isSignedIn)
        return <></>;

    return (
        <div className="container-fluid text-center">

            <Grid container spacing={2}>
                <Grid item>
                    <Grid container spacing={6}>
                        {Object.values(state.form).map((item,index)=>{
                            return (
                            <Grid key={index} item xs>
                                <Card id={item._id}/>
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