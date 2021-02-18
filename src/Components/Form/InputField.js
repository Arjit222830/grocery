import React,{useState, useEffect, useContext, forwardRef, useImperativeHandle} from 'react';
import { Input } from 'semantic-ui-react';

import {AppContext} from "../../State";
import {err} from "../../actions";

import '../../App.css'
import {Validation} from '../../helpers/Validation';

const InputField= forwardRef((props,ref)=>{

    const {state, dispatch}=  useContext(AppContext);

    const [value, setValue]= useState(props.value);
    const [error,setError]= useState('');


    const handleChange= (event)=>{
        setValue(event.target.value);
        setError('');
        dispatch(err(false));
        props.onChange(event.target.name, event.target.value);
    }

    useImperativeHandle(ref, ()=>{
        return {
            validate: ()=> Validation(props,value,setError,dispatch)
        }
    });

    const styleWidth=()=>{
        if(state.openSidebar)
            return {width:'70vw', transition: 'width 1s'};
        
        return {width:'90vw', transition: 'width 1s'};
    }

    if(!state)
        return;

    return (
        <div>
            {props.label && (
                <label>{props.label}</label>
            )}
            <Input
                fluid 
                size='big'
                placeholder={props.placeholder} 
                name={props.name} 
                onChange={(e)=> handleChange(e)} 
                type={props.type} 
                value={value} 
                autoComplete={props.autoComplete}
                style={styleWidth()}
            />
            {error &&  (
                <p className="error">
                    {error}
                </p>
            )}
        </div>
    );
});


export default InputField;