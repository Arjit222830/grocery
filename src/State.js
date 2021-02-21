import React, {createContext,useReducer} from "react";
import _ from 'lodash';

const AppContext= createContext({});

const initialState= {
    openSidebar: true,
    err: false,
    isSignedIn: null,
    username: null,
    form: [],
    categories:[],
    subCategories:[]
}

const reducer= (state, action)=>{
    switch (action.type){
        case "setOpenSidebar":
            return {...state, openSidebar: action.payload};
        case "setError":
            return {...state, err: action.payload};
        case "signIn": 
            return {...state, isSignedIn: true, username: action.payload.name, email:action.payload.email, userId: action.payload.Id};
        case "signOut":
            return {...state, isSignedIn: false, username: null};
        case "fetchProducts":
            return {...state, form: _.mapKeys(action.payload,'_id')};
        case "fetchProductsWithCategory":
            return {...state, form: _.mapKeys(action.payload,'_id')};
        case "fetchProduct":
            return { ...state, form: {[action.payload._id]: action.payload }};
        case "createProduct":
            return { ...state, form: {...state.form, [action.payload._id]: action.payload }};
        case "editProduct":
            return { ...state, form: {...state.form,[action.payload._id]: action.payload} };
        case "deleteProduct":
            return {...state, form: _.omit(state.form, action.payload)};
        case "fetchCategories":
            console.log(action.payload);
            return {...state, categories: action.payload};
        case "fetchSubCategories":
            return {...state,subCategories: action.payload};
        default:
            return {...state};
    }
}

const AppContextProvider= (props)=>{
    const appState= {...initialState};

    const [state,dispatch]= useReducer(reducer,appState);

    let value = {state,dispatch};

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export {AppContext, AppContextProvider};