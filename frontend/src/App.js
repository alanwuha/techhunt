import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

import Employees from './components/pages/Employees';
import SideNav from './components/layout/SideNav';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App container-fluid p-0">
        <div className="row no-gutters">
          <div className="col-md-3 col-lg-2 d-md-block collapse" id="nav">
            <SideNav />
          </div>
          <div className="col">
          <Route exact path="/employees" component={Employees} />
          <Router exact path="/">
            <Redirect to="/employees" />
          </Router>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
