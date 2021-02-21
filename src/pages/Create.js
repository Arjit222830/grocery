import React, { useEffect, useContext } from 'react';

import {AppContext} from "../State";
import Title from '../Components/Title';
import Form from '../Components/Form/Form';
import {formData} from '../helpers/formData';
import GoogleAuth from '../Components/GoogleAuth';

import '../App.css'

const Create= (props)=>{ 

    const {state, dispatch}=  useContext(AppContext);

    const setInitialValues=()=>{
        for(var i=0;i<formData.length;i++){
            if(formData[i].type!="file")
                formData[i].initial_value='';
        }
    }

    setInitialValues();

    if(!state.isSignedIn)
        return <></>;
    
    return (
        <>
            <Form props={props} formData={formData} action='create' />
        </>
    );
}

export default Create;