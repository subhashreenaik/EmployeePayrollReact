import React from "react";
import Ellipse1 from './assets/profile-images/Ellipse -1.png';
import Ellipse2 from './assets/profile-images/Ellipse -2.png';
import Ellipse8 from './assets/profile-images/Ellipse -8.png';
import Ellipse7 from './assets/profile-images/Ellipse -7.png';

import './dashboard';
import editEmp from './assets/icons/create-black-18dp.svg';
import deleteEmp from './assets/icons/delete-black-18dp.svg';
import { withRouter } from "react-router-dom";
import employeeservice from '../services/employeeservice';


const DashboardLayout = (props) => {

    const update= (id) => {
        props.history.push(`payroll/${id}`);
    }

    const remove = (id) => {
        employeeservice.deleteEmployee(id).then((response) => {
            console.log(response.data);
            window.location.reload();
        }).catch((error) =>{
            alert(error)
        })
    }

    return (
        <table id="table-display" className="table">
           <tbody>
            <tr key={-1}>
                <th>Employee ID</th>
                <th>Image</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Department</th>
                <th>Salary</th>
                <th>Start Date</th>
                <th>Actions</th>
                
            </tr>
            
                {
                    props.employeeArray && props.employeeArray.map((element, index) =>(
                       <tr key={index}>
                            <td>{element.id}</td>
                            <td><img className="profile" src={
                                element.profilePic ===
                                "./assets/profile-images/Ellipse -1.png"
                                  ? Ellipse1
                                  : element.profilePic ===
                                    "./assets/profile-images/Ellipse -2.png"
                                  ? Ellipse2
                                  : element.profilePic ===
                                    "./assets/profile-images/Ellipse -7.png"
                                  ? Ellipse8
                                  : Ellipse7
                            } alt=""/></td>
                            <td>{element.name}</td>
                            <td>{element.gender}</td>
                            <td>
                                {element.department && element.department.map((dept => 
                                    (<div className="dept-label" >{dept}</div>)))}
                            </td>
                            <td>{element.salary}</td>
                            <td>{element.startDate}</td>
                            <td>
                                <img src={editEmp} alt="edit" onClick={() => update(element.id)}/>
                                <img src={deleteEmp} alt="delete" onClick={() => remove(element.id)} />
                            </td>
                       </tr> 
                    ))
                }
                </tbody> 
        </table>
    );
}

export default withRouter(DashboardLayout);