import {err} from "../actions";

export const Validation= (props,value,setError,dispatch)=>{

    if(props.validation){
        const rules= props.validation.split('|');
        for(let i=0;i<rules.length;i++){
            const current= rules[i];
            if(current== "required"){
                if(!value){
                    setError('This field is required');
                    dispatch(err(true));
                    return false;
                }
            }

            const pair= current.split(':');
            switch(pair[0]){
                case "min":
                    if(value.length<pair[1]){
                        setError(`This field must be at least ${pair[1]} characters long`);
                        dispatch(err(true));
                        return false;
                    }
                    break;
                case "max":
                    if(value.length>pair[1]){
                        setError(`This field must be at no longer than ${pair[1]} characters long`);
                        dispatch(err(true));
                        return false;
                    }
                    break;
                default:
                    break;

            }
        }
    }
return true;
}