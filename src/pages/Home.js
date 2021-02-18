import React from 'react';
import Paper from '@material-ui/core/Paper'

import Card from '../Components/Card';
import Title from '../Components/Title';

import '../App.css';
  
const Home= ()=> {

    return (
        <div className="conatiner text-center">

            <Title />

            <div className="row">
                <div className="col-sm-4">
                    <Card/>
                </div>
                <div className="col-sm-4">
                    <Card/>
                </div>
                <div className="col-sm-4">
                    <Card/>
                </div>
            </div>
        </div>
    );
}

export default Home;