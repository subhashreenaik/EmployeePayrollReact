import React from "react";
import logo from './logo.svg';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Payroll from './component/payroll';
import Dashboard from './component/dashboard'



  function App() {
    return (
      <>
      <Switch>
      <Route exact path='/payroll' component={Payroll}></Route>
      <Route exact path='/dashboard' component={Dashboard}></Route>
      </Switch> 
      
      </>
    );
  }
  
  export default App;  
