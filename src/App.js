import React from 'react';
import { BrowserRouter as Router,Redirect, Route, Switch} from 'react-router-dom';

import Sidebar from './Components/SideBar/Sidebar';
import Home from './pages/Home';
import Cage from './pages/Cage';

import { Container,Row,Col } from 'react-bootstrap';

import './App.css';
import { Collapse } from 'bootstrap';

const App = ()=>{
    //Switch deals with the problem associated with wildcard (:id) navigation
    return (
        <Container fluid className="App" >
          <Router>
            <Row>
              <Col>
                <Sidebar />
              </Col>
              <Col>
                <Switch>
                  <Route path="/"  exact={true} component= {Home} />
                  <Route path="/hel" component= {Cage} />
                </Switch>
              </Col>
            </Row>
          </Router>
        </Container>
    );
}

export default App;