import React,{useState,useEffect,useContext} from 'react';

import {AppContext} from "../State";
import { signIn, signOut } from '../actions';

var auth={};

const GoogleAuth= ()=> {

    const {state, dispatch}=  useContext(AppContext);

    useEffect(()=>{
        window.gapi.load('client:auth2', ()=>{
            window.gapi.client.init({
                clientId: '463472134104-1f50sa8fh2jsbtq8n4gj0l649i3udhus.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=> {
                auth= window.gapi.auth2.getAuthInstance();
                onAuthChange(auth.isSignedIn.get());
                auth.isSignedIn.listen(onAuthChange);
            });
        });
    },[]);

    const onAuthChange= (isSignedIn)=>{
        const user= auth.currentUser.get();
        if(isSignedIn)
            dispatch(signIn({name:user.Es.sd, email:user.Es.kt, Id: user.getId()}));
        else
            dispatch(signOut());
    }

    const onSignInClick= ()=> {
        auth.signIn();
    }

    const onSignOutClick= ()=> {
        auth.signOut();
    }

    const renderAuthButton= ()=> {
        if(state.isSignedIn)
            return (
                <button onClick={onSignOutClick} className="ui red google button">
                    <i className="google icon" />
                        Sign Out
                </button>   
            );
        else
            return (
                
                <button  onClick={onSignInClick} className="ui red google button">
                    <i className="google icon" />
                        Sign In Google
                </button>   
            );
    }

    return (
        <div className="text-right" style={{marginTop:'3vh'}}>
            {renderAuthButton()}
        </div>
    );
}

export default GoogleAuth;