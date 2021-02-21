import React, { useState,useEffect,useContext } from 'react';

import {AppContext} from "../State";
import Title from '../Components/Title';
import Form from '../Components/Form/Form';
import {formData} from '../helpers/formData';
import GoogleAuth from '../Components/GoogleAuth';
import {fetchProducts} from '../actions';

import '../App.css'

const Edit= (props)=>{ 

    const {state, dispatch}=  useContext(AppContext);


    useEffect(async()=>{
        dispatch(await fetchProducts());
    },[]);

    const setInitialValues=()=>{
            
        for(var i=0;i<formData.length;i++){
            const key= formData[i].name;
            if(formData[i].type!="file")
                formData[i].initial_value= state.form[id][key];
        }
    }

    const id= props.match.params.id;

    if(!state.form[id])
        return <>Loading...</>;

    setInitialValues();

    return (
        <>
            <Form props={props} formData={formData} action="edit" id={id} />
        </>
    );
}

export default Edit;