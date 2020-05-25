import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

import Employees from './components/pages/Employees'
import Upload from './components/pages/Upload'
import CreateEmployee from './components/pages/CreateEmployee'
import SideNav from './components/layout/SideNav'
import Alert from './components/alert/Alert'

import './App.css';
import MobileNav from './components/layout/MobileNav';

function App() {
  return (
    <Router>
      <div className="App container-fluid p-0">
        <div className="row no-gutters">
          <div className="col-md-3 col-lg-2 d-none d-md-block" style={navStyle}>
            <SideNav />
          </div>
          <div className="col">
            <MobileNav />
            <Route exact path="/" component={Employees} />
            <Route exact path="/upload" component={Upload} />
            <Route exact path="/create" component={CreateEmployee} />
          </div>
        </div>
        <Alert />
      </div>
    </Router>
  );
}

const navStyle = {
  minHeight: '100vh',
  maxWidth: '220px',
  backgroundColor: '#243a81',
}

export default App;
