import React from 'react';
import { BrowserRouter as Router,Redirect, Route, Switch} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Sidebar from './Components/SideBar/Sidebar';
import Home from './pages/Home';
import Create from './pages/Create';
import Edit from './pages/Edit';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 2,
    },
    control: {
      padding: theme.spacing(2),
    },
  })
);

const App = ()=>{
  const classes = useStyles();

  //Switch deals with the problem associated with wildcard (:id) navigation
  return (
    <div className="App" >
      <Router>
        <Grid container className={classes.root} spacing={2}>
          <Grid item>
            <Grid container justify="left" spacing="6">
              <Grid key="h" item >
                  <Sidebar />
              </Grid>
              <Grid key="h"  item>
                <Switch>
                  <Route path="/"  exact component= {Home} />
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