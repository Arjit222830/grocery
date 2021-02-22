import React,{useContext, useState, useEffect} from 'react';
import { BrowserRouter as Router,Redirect, Route, Switch} from 'react-router-dom';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Grid from '@material-ui/core/Grid';

import Sidebar from './Components/SideBar/Sidebar';
import Home from './pages/Home';
import Edit from './pages/Edit';
import Create from './pages/Create';
import Products from './pages/Products';
import SubCategories from './pages/SubCategories';
import GoogleAuth from './Components/GoogleAuth';
import Title from './Components/Title';

import {openSidebar} from './actions';
import {AppContext} from "./State";
import {categoriesConstant} from './helpers/categoriesConstant';
import {fetchCategories} from './actions';
import {fetchSubCategories} from './actions'


const App = ()=>{
  
  const {state, dispatch}=  useContext(AppContext);

  useEffect(async ()=>{
    var ar1=[];var ar2=[];
    await Object.values(categoriesConstant()).map((p)=>{
        ar1.push({id:p.NAME, name: p.NAME});
        for (const [key, value] of Object.entries(p.SUBCATEGORIES)) 
            ar2.push({id:key, name:value})
    });
    dispatch(fetchCategories(ar1));
    dispatch(fetchSubCategories(ar2))
  },[]);

  const [val,setVal]= useState('2');

  useEffect(()=>{
    if(state.openSidebar)
      setVal('2');
    else
      setVal('0');
  },[state.openSidebar])
  
  console.log(state);

  const arrow=()=>{
    if(!state.openSidebar)
      return  (
        <div className="no-sidebar">
          <ArrowForwardIosIcon id="top-icon" fontSize='large' color='primary' style={{color:'black',fontSize: '50px'}} onClick={()=>dispatch(openSidebar(true))} />
      </div>
    );

    return (
      <div className="no-sidebar">
        <ArrowBackIosIcon id="top-icon" fontSize='large' color='primary' style={{color:'black',fontSize: '50px'}} onClick={()=>dispatch(openSidebar(false))} />
      </div>
    )
  }


  //Switch deals with the problem associated with wildcard (:id) navigation
  return (
    <div className="App" >
      <Router>
        <div className="row">

          <div className={`col-sm-${val}`}>
            <Sidebar />
          </div>

          <div className={`col-sm-1`}>
            {arrow()}
          </div>
        
          <div className={`col-sm-${10-val}`}>
            <GoogleAuth />
            <Title />
            <Switch>
              <Route path="/"  exact component= {Home} />
              <Route path="/categories/:id" exact component= {SubCategories} />
              <Route path="/categories/products/:id" exact component= {Products} />
              <Route path="/create" exact component= {Create} />
              <Route path="/edit/:id" exact component= {Edit} />
            </Switch>
          </div>
        </div>  
      </Router>
    </div>
  );
}

export default App;