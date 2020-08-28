import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import EmployeeListComponent from './components/EmployeeListComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';
import updateEmployeeComponent from './components/updateEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
        <Router>
        <HeaderComponent/>
          <div className="container">
            <Switch>
              <Route exact path = {["/", "/employee"]} component = {EmployeeListComponent}></Route>
              <Route path = "/addEmployee" component = {AddEmployeeComponent}></Route>
              <Route path = "/updateEmployee/:empId" component = {updateEmployeeComponent}></Route>
            </Switch>
          </div>
          <FooterComponent/>
        </Router>
    </div>
    
  );
}

export default App;
