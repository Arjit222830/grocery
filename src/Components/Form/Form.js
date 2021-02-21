import React,{useState, useContext, useRef, createRef} from 'react';
import { useHistory } from "react-router-dom";

import {AppContext} from "../../State";
import InputField from './InputField';
import {createProduct} from '../../actions';
import {editProduct} from '../../actions';

import '../../App.css'

const Form = (props)=>{ 

    let history = useHistory();
    
    const {state, dispatch}=  useContext(AppContext);

    const arrayRefs=()=>{
        var ar=[];
        for(var i=0;i<props.formData.length;i++)
            ar.push(createRef());

        return ar;
    }

    const initialState= ()=>{
        var object={};
        for(var i=0;i<props.formData.length;i++)
            object= {...object,[props.formData[i].name]:props.formData[i].initial_value}

        return object;
    }

    const inputRefs= useRef(arrayRefs());

    const [data,setData]= useState(initialState());

    const handleChange = (name, value)=>{
        setData(prev=> {
            console.log({...prev, [name]:value})
        return ({
            ...prev, [name]:value
        })});
    }

    console.log(data);

    const submitForm= async(e)=>{
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

        if(props.action=='create')
            dispatch(await createProduct(data));
        else
            dispatch(await editProduct(props.id,data));

        history.push('/');

    }

    const FormInfo= ()=>{
        var j=0;
        return props.formData.map((ob,index)=>{
            return (
                <InputField
                    key={index}
                    ref={inputRefs.current[j++]}
                    name={ob.name}
                    label={ob.label}
                    type={ob.type}
                    placeholder={ob.placeholder}
                    value={ob.initial_value}
                    enum={ob.enum}
                    onChange= {handleChange}
                    validation=  {ob.validation}
                />
            );
        });
    }

    return (
        <>

            <div className="ui form" style={{paddingBottom:'10vh'}}>
                {state.err &&  (
                    <p className="error" style={{textAlign:'center'}}>
                        Please fill correct details
                    </p>
                )}

                <form onSubmit={submitForm}>
                    {FormInfo()}
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}

export default Form;