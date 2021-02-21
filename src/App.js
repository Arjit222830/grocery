import React from 'react';
import { BrowserRouter as Router,Redirect, Route, Switch} from 'react-router-dom';

import Grid from '@material-ui/core/Grid';

import Sidebar from './Components/SideBar/Sidebar';
import Home from './pages/Home';
import Edit from './pages/Edit';
import Create from './pages/Create';
import Products from './pages/Products';

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
                  <Route path="/categories/:id" exact component= {Products} />
                  <Route path="/create" exact component= {Create} />
                  <Route path="/edit/:id" exact component= {Edit} />
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