import React from 'react';

import Form from '../Components/Form/Form';

import '../App.css'

const Create = (props)=>{ 

    const value1='';
    const value2='';
    
    return (
        <>
            <Form props={props} initialData={{username:value1,password:value2}} value1={value1} value2={value2} />
        </>
    );
}

export default Create;