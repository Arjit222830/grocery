import React, {createContext,useReducer} from "react";

const AppContext= createContext({});

const initialState= {
    openSidebar: true,
    err: false
}

const reducer= (state, action)=>{
    switch (action.type){
        case "setOpenSidebar":
            return {...state, openSidebar: action.payload};
        case "setError":
            return {...state, err: action.payload};
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