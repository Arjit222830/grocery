import React,{useState,useEffect,useContext} from 'react';

import {AppContext} from "../State";
import Grid from '@material-ui/core/Grid';
import SubCard from '../Components/SubCard';
import {categoriesConstant} from '../helpers/categoriesConstant';

import '../App.css';

  
const Products= (props)=> {

    const {state, dispatch}= useContext(AppContext);

    const [ar,setAr]= useState(null);
    console.log(state);

    useEffect(async()=>{
        console.log(props.match.params.id);
        await Object.values(categoriesConstant()).map( (p) =>{
            if(p.NAME==props.match.params.id){
                console.log(p.NAME);   
                setAr(p);
            }
        });

        console.log(ar);
    },[props.match.params.id]);

    console.log(ar);
    if(!state.isSignedIn || !ar)
        return <></>;

    return (
        <div className="container-fluid text-center">
            <h5>{props.match.params.id}</h5>
            <Grid container spacing={2}>
                <Grid item>
                    <Grid container spacing={6}>
                        {Object.entries(ar.SUBCATEGORIES).map(([key,value],index)=>{
                            console.log(key);
                            return (
                            <Grid key={index} item xs>
                                <SubCard id={key} name={value}/>
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