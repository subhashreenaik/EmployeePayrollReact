import React from 'react';
import './dashboard.scss';
import logo1 from './assets/images/logo.png';
import adduser from './assets/icons/add-24px.svg';
import Ellipse2 from './assets/profile-images/Ellipse -2.png';
import Ellipse8 from './assets/profile-images/Ellipse -8.png';
import Ellipse10 from './assets/icons/delete-black-18dp.svg';
import Ellipse11 from './assets/icons/create-black-18dp.svg';
  function Dashboard() {
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
            <a href="./payroll" className="add-button" >Add User</a>
            <img src={adduser} alt="Add User" />
           </div>
            </div>   
        </div>
        <div className="table-main">
            <table id="table-display" className="table">
            
            <tr>
            
                    <th scope="col">Image</th>
                    <th scope="col"> Name</th>
                    <th scope="col"> Gender</th>
                    <th scope="col"> Department</th>
                    <th scope="col"> Salary</th>
                    <th scope="col"> start Date</th>
                    <th scope="col"> Actions</th>
                    
                </tr>
            
                <tr>
                    <td><img className="profile" alt="" src={Ellipse2}/>
                    </td>
                    <td>Subhashree Naik</td>
                    <td>Female</td>
                    <td><div className="dept-lebel">HR</div>
                    <div className="dept-lebel">Finance</div></td>
                    <td>3000000</td>
                    <td>1 Nov 2020</td>
                    <td>
                        <img id="1" onclick="remove(this)" src={Ellipse10} alt="delete"/>
                        <img id="1" onclick="update(this)"  src={Ellipse11} alt="edit"/>
                    </td>

                </tr>
                <tr>
                    <td><img className="profile" alt="" src={Ellipse2}/>
                    </td>
                    <td>shreeram Naik</td>
                    <td>male</td>
                    <td><div className="dept-lebel">HR</div>
                    <div className="dept-lebel">Finance</div></td>
                    <td>2000000</td>
                    <td>4 Nov 2020</td>
                    <td>
                        <img id="1" onclick="remove(this)" src={Ellipse10} alt="delete"/>
                        <img id="1" onclick="update(this)"  src={Ellipse11} alt="edit"/>
                    </td>

                </tr>
                <tr>
                    <td><img className="profile" alt="" src={Ellipse8}/>
                    </td>
                    <td>shreya Dash</td>
                    <td>female</td>
                    <td><div className="dept-lebel">Sale</div>
                    <div className="dept-lebel">Finance</div></td>
                    <td>2000000</td>
                    <td>8 Nov 2020</td>
                    <td>
                        <img id="1" onclick="remove(this)" src={Ellipse10} alt="delete"/>
                        <img id="1" onclick="update(this)"  src={Ellipse11} alt="edit"/>
                    </td>

                </tr>
            </table>
          </div>
      </>
    );
  }
  
  export default Dashboard;  
