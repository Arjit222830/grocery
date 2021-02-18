import React,{useState, useContext, useRef, createRef} from 'react';
import {AppContext} from "../../State";

import InputField from './InputField';
import Title from '../Title';

import '../../App.css'

const Form = (props)=>{ 
    
    const {state, dispatch}=  useContext(AppContext);

    const inputRefs= useRef([
        createRef(),createRef()
    ]);

    const [data,setData]= useState(props.initialData);

    const handleChange = (name, value)=>{
        setData(prev=> ({
            ...prev, [name]:value
        }));
    }

    console.log(data);

    const submitForm= (e)=>{
        e.preventDefault();
        let isValid= true;
        for(let i=0;i<inputRefs.current.length;i++){
            const valid= inputRefs.current[i].current.validate();
            if(!valid){
                isValid=false;
                break;
            }
        }

        if(!isValid)
            return ;

    }

    return (
        <>
            <Title />

            <div className="form" style={{paddingBottom:'10vh'}}>
                {state.err &&  (
                    <p className="error" style={{textAlign:'center'}}>
                        Please fill correct details
                    </p>
                )}
                <form onSubmit={submitForm}>
                    <InputField
                        ref={inputRefs.current[0]}
                        name="username"
                        label="Username"
                        placeholder="Enter a username"
                        value={props.value1}
                        onChange= {handleChange}
                        validation= "required|min:6|max:12"
                    />
                    <InputField
                        ref={inputRefs.current[1]}
                        name="password"
                        label="Password"
                        placeholder="Enter a password"
                        value={props.value2}
                        onChange= {handleChange}
                        validation= "required|min:6|max:12"
                    />

                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}

export default Form;