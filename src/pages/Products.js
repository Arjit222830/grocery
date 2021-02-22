import React,{useState,useEffect,useContext} from 'react';

import {AppContext} from "../State";
import Grid from '@material-ui/core/Grid';
import Card from '../Components/Card';
import {fetchProductsWithSubCategory} from '../actions';

import '../App.css';

  
const Products= (props)=> {

    const {state, dispatch}= useContext(AppContext);
    console.log(state);

    useEffect(async()=>{
        dispatch(await fetchProductsWithSubCategory(props.match.params.id+props.location.hash));
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
                                <Card id={item._id} name={item.productName} />
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