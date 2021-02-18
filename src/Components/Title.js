import React from 'react';
import Paper from '@material-ui/core/Paper'

import '../App.css';
  
const Title= ()=> {

    return (
        <Paper className="text-center" elevation={3} style={{marginTop:'3vh',marginBottom:'5vh'}}>
            <h2 className="head">
                Grocery Store
            </h2>
        </Paper>
    );
}

export default Title;