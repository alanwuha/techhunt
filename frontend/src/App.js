import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

import Employees from './components/pages/Employees'
import Upload from './components/pages/Upload'
import CreateEmployee from './components/pages/CreateEmployee'
import SideNav from './components/layout/SideNav'
import Alert from './components/alerts/Alert'

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
            <Route exact path="/" component={Employees} />
            <Route exact path="/upload" component={Upload} />
            <Route exact path="/create" component={CreateEmployee} />
          </div>
        </div>
        <Alert status="success" displayText="Success" />
        <Alert status="danger" displayText="Error occurred" />
      </div>
    </Router>
  );
}

export default App;
