import React from "react";
import logo from './logo.svg';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Payroll from './component/payroll';
import Dashboard from './component/dashboard'
import { BrowserRouter as Router } from "react-router-dom";



  function App() {
    return (
     <Router>
        <>
      <Switch>
      <Route exact path='/payroll' component={Payroll}></Route>
      <Route exact path='/' component={Dashboard}></Route>
      <Route exact path="/payroll/:id" component={Payroll}/>
      </Switch> 
      
      </>
     </Router>
    );
  }
  
  export default App;  
