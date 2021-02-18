import React from 'react';

import Form from '../Components/Form/Form';

import '../App.css'

const Edit = (props)=>{ 

    const value1='dsdx';
    const value2='cdscd';
    
    return (
        <>
            <Form props={props} initialData={{username:value1,password:value2}} value1={value1} value2={value2} />
        </>
    );
}

export default Edit;