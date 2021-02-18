import React,{useState, useContext, useRef, createRef} from 'react';
import {AppContext} from "../State";

import InputField from '../Components/Form/InputField';
import Title from '../Components/Title';

import '../App.css'
import { EditLocationRounded, EditLocationSharp, EditLocationTwoTone } from '@material-ui/icons';

const Edit = (props)=>{ 
    
    console.log(props);
    const {state, dispatch}=  useContext(AppContext);

    const inputRefs= useRef([
        createRef(),createRef()
    ]);

    const [data,setData]= useState({});

    const handleChange = (name, value)=>{
        setData(prev=> ({
            ...prev, [name]:value
        }));
    }

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
                        value='asd'
                        onChange= {handleChange}
                        validation= "required|min:6|max:12"
                    />
                    <InputField
                        ref={inputRefs.current[1]}
                        name="password"
                        label="Password"
                        placeholder="Enter a password"
                        value='123'
                        onChange= {handleChange}
                        validation= "required|min:6|max:12"
                    />

                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}

export default Edit;