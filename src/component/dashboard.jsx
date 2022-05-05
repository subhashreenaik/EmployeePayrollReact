import React from 'react';
import './dashboard.scss';
import {useState } from "react";
import { useEffect } from 'react';

import logo1 from './assets/images/logo.png';
import adduser from './assets/icons/add-24px.svg';
import DashboardLayout from './dashboard-layout';
import {Link} from "react-router-dom";
import employeeservice from '../services/employeeservice';




 function Dashboard() {
    
  const [employeeArray, setEmployee] = useState([]);

useEffect(() => {
    getAllEmployees();
}, []);



const getAllEmployees = async () => {
    employeeservice.getAllEmployee().then((employee) => {
       
    const allEmployees = employee.data;
       setEmployee(allEmployees);
   }).catch((error) => {
       alert(error);
   })
}
      
    return (
      <>
       <header className="header-content header">
            <div className="logo-content">
                <img className="logo" src={logo1} alt="logo"/>
                <div className="emp-content">
                    <span className="emp-text"><strong>EMPLOYEE</strong></span>
                    <span className="emp-text emp-payroll"><strong>PAYROLL</strong></span>
                </div>
            </div>
        </header>
        
        <div className="main-content">
            <div className="header-content">
               <div className="emp-detail-text"><strong>Employee Details</strong>
                  <div className="emp-count  add-button">10</div>
                </div>
           <div className="add-botton">
           <Link to="/payroll" className="add-button">Add User
           <img className="add-button" src={adduser} alt=""/>
            </Link>
           </div>
            </div>   
        </div>
        <div className="table-main">
                <DashboardLayout employeeArray={employeeArray} />
                </div>         
      </>
    );
  }
  
  export default Dashboard;  
