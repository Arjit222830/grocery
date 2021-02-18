import React from 'react';
import { BrowserRouter as Router,Redirect, Route, Switch} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Sidebar from './Components/SideBar/Sidebar';
import Home from './pages/Home';
import Edit from './pages/Edit';
import Create from './pages/Create';
import Categories from './pages/Categories';

const App = ()=>{

  //Switch deals with the problem associated with wildcard (:id) navigation
  return (
    <div className="App" >
      <Router>
        <Grid container spacing={2}>
          <Grid item>
            <Grid container spacing={6}>
              <Grid key="h" item >
                  <Sidebar />
              </Grid>
              <Grid key="ho"  item>
                <Switch>
                  <Route path="/"  exact component= {Home} />
                  <Route path="/categories" exact component= {Categories} />
                  <Route path="/create" exact component= {Create} />
                  <Route path="/edit" exact component= {Edit} />
                </Switch>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Router>
    </div>
  );
}

export default App;