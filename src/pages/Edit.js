import React, { useEffect } from 'react';

import Title from '../Components/Title';
import Form from '../Components/Form/Form';
import {formData} from '../helpers/formData';
import GoogleAuth from '../Components/GoogleAuth';

import '../App.css'

const Edit= (props)=>{ 


    const setInitialValues=()=>{
        for(var i=0;i<formData.length;i++){
            if(formData[i].type!="file")
                formData[i].initial_value='213';
        }

        console.log(formData);
    }

    setInitialValues();
    
    return (
        <>
            <GoogleAuth />
            <Title />
            <Form props={props} formData={formData} />
        </>
    );
}

export default Edit;