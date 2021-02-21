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
    const [ar,setAr]= useState([]);

    useEffect(()=>{
        if(props.name=="category")
            setAr(state.categories);
        else
            setAr(state.subCategories);
    })

    const handleChange= (event)=>{
        setValue(event.target.value);
        setError('');
        dispatch(err(false));
        props.onChange(event.target.name,event.target.value );
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

    const select= ()=>{
        if(props.action=="create")
            return (
                <select name={props.name} style={styleWidth()} onChange={(e)=>handleChange(e)}>
                    <option value=""></option>
                    {ar.map((item,key)=>{
                        return <option value={item.id} key={key}>{item.name}</option>
                    })}
                </select>
            );
        
        return (
            <select name={props.name} style={styleWidth()} onChange={(e)=>handleChange(e)}>
                {ar.map((item,key)=>{
                    if(item.id==props.value)
                        return <option value={item.id} key={key}>{item.name}</option>
                })}
                {ar.map((item,key)=>{
                    if(item.id!=props.value)
                        return <option value={item.id} key={key}>{item.name}</option>
                })}
            </select>
        )
    }

    const selection= ()=>{
        if(props.type=='select')
           return select();

        return (
            <Input
                fluid 
                size='big'
                placeholder={props.placeholder} 
                name={props.name} 
                onChange={(e)=> handleChange(e,props)} 
                type={props.type} 
                value={value} 
                autoComplete= 'off'
                style={styleWidth()}
            />
        );
    }

    return (
        <div>
            {props.label && (
                <label>{props.label}</label>
            )}
            {selection()}
            {error &&  (
                <p className="error">
                    {error}
                </p>
            )}
        </div>
    );
});


export default InputField;