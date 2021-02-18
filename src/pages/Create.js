import React from 'react';

import Form from '../Components/Form/Form';
import {formData} from '../helpers/formData';

import '../App.css'

const Create = (props)=>{ 

    const setInitialValues=()=>{
        for(var i=0;i<formData.length;i++)
            formData[i].initial_value='';

        console.log(formData);
    }

    setInitialValues();

    return (
        <>
            <Form props={props} formData={formData} />
        </>
    );
}

export default Create;