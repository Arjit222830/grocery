import React,{useState,useEffect,useContext} from 'react';

import {AppContext} from "../State";
import Grid from '@material-ui/core/Grid';
import Card from '../Components/Card';
import GoogleAuth from '../Components/GoogleAuth';
import Title from '../Components/Title';
import {fetchProducts} from '../actions';

import '../App.css';

  
const Products= (props)=> {

    const {state, dispatch}=  useContext(AppContext);
    console.log(state);

    useEffect(async()=>{
        //dispatch(await fetchProductsWithId(props.match.params.id));
        dispatch(await fetchProducts());
        console.log('hel');
    },[]);

    console.log(state.isSignedIn);
    if(!state.isSignedIn)
        return <></>;

    return (
        <div className="container-fluid text-center">
            <h5>{props.match.params.id}</h5>
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

export default Products;