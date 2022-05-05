import React from 'react';
import {useState } from "react";
import { useEffect } from 'react';
import './payroll.scss';
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
//import EmployeeService from '../services/employeeservice'
import logo from './assets/images/logo.png';
import { Link } from 'react-router-dom';
import Ellipse1 from './assets/profile-images/Ellipse -1.png';
import Ellipse2 from './assets/profile-images/Ellipse -2.png';
import Ellipse8 from './assets/profile-images/Ellipse -8.png';
import Ellipse7 from './assets/profile-images/Ellipse -7.png';
import employeeservice from '../services/employeeservice';
const Payroll = (props) =>{
    
    const [user,setUser]=useState({
        name:'',
        profilePic:'',
        gender:'',
        allDepartment: [
            'HR', 'Sales', 'Finance', 'Engineer', 'Others'
        ],
        profilePicArray: [
            {url: './assets/profile-images/Ellipse -1.png'},
            {url: './assets/profile-images/Ellipse -2.png'},
            {url:'./assets/profile-images/Ellipse -8.png'},
            {url:'./assets/profile-images/Ellipse -7.png'}
        ],
        departMentValue: [],  
        salary:[300000,500000],
        startDate:'',
        day: '',
        month: '',
        year: '',
        notes: '',
        id: '',
        isUpdate: false,
        error: {
            name: '',
            profilePic: '',
            gender: '',
            department: '',
            salary: '',
            startDate: ''
        }
    });
    const validateData = async () => {
        let isError = false;
        let error = {
            department: '',
            name: '',
            gender: '',
            salary: '',
            profilePic: '',
            notes:''
        }
        if (!user.name.match('^[A-Z]{1}[a-z]{3,}$')) {
            error.name = 'Invalid NAME'
            isError = true;
        }
        if (user.gender.length < 1) {
            error.gender = 'Select GENDER'
            isError = true;
        }
        if (user.salary.length < 1) {
            error.salary = 'Required SALARY'
            isError = true;
        }
        if (user.profilePic.length < 1) {
            error.profilePic = 'Select PROFILE PIC'
            isError = true;
        }
        if (user.departMentValue.length < 1) {
            error.department = 'Select DEPARTMENT'
            isError = true;
        }
        if (user.notes.length < 1){
            error.notes = "Required NOTES"
            isError = true;
        }
        setUser({ ...user, error: error })
        return isError;
    }
    

    const handleInput = async event => {  
        setUser({ ...user, [event.target.name]: event.target.value })
        console.log(event.target.value)
    }
    const params = useParams();
    const getEmployeeByID = (id) => {
        employeeservice.getEmployee(id).then((response) => {
            let obj = response.data;
            console.log(obj);
            setData(obj);
        }).catch((error) => {
            alert(error);
        });
    }
    const setData = (obj) => {
        let array=obj.startDate;
        setUser({
             ...user,
             ...obj,
             id: obj.id,
             name: obj.name,
             profilePic: obj.profilePic,
             gender: obj.gender,
             departMentValue: obj.department,
             salary: obj.salary,
             notes: obj.notes,
             isUpdate: true,
             day:array[0]+array[1],
                       month:array[3]+array[4]+array[5],
                       year:array[7]+array[8]+array[9]+array[10],
             
         });
     }
        
        
        useEffect(() => {
            if (params.id) {
                getEmployeeByID(params.id);
            }
        }, []);
    

    const onCheckChange = (name) => {
        let index = user.departMentValue.indexOf(name);

        let checkArray = [...user.departMentValue]
        if (index > -1)
            checkArray.splice(index, 1)
        else
            checkArray.push(name);
        setUser({ ...user, departMentValue: checkArray });
    }
    const getChecked = (name) => {
        return user.departMentValue && user.departMentValue.includes(name);
    }


  const rangeSelector = (event,newvalue) => {
    setUser({ ...user, [event.target.name]: event.target.value });
    console.log(newvalue)
  };
  

  const handleSubmit = async (event) => {
    console.log(user)
    //localStorage.setItem('employee', JSON.stringify(user)); 
    event.preventDefault();
    if (await validateData()) {
        return;
    }
    let object ={
        name:user.name,
        department:user.departMentValue,
        gender:user.gender,
        profilePic:user.profilePic,
        salary:user.salary,
        startDate: `${user.day} ${user.month} ${user.year}`,
        id:user.id,
        notes:user.notes
        
    }
    
    if (user.isUpdate) {
        employeeservice.updateEmployee(params.id, object).then((response) => {
            props.history.push('');
        }).catch((error) => {
            alert(error);
        })
    }
    else {
    
    employeeservice.addEmployee(object).then(data =>{
        console.log("data added")
        props.history.push(' ')
    }).catch(error =>{
        console.log("error while added")
    })
    
    }
}

    
    
      return (
        <>
        <header className="header-content header">
     <div className="logo-content">
         <img className="logo" src={logo} alt="logo"/>
          <div>
              <span className="emp-text">EMPLOYEE</span><br/>
              <span className="emp-text emp-payroll">PAYROLL</span>
          </div>
     </div>
    </header>
    <div className="form-content">
    <form className='form' action="#" onSubmit={handleSubmit} >
    
        <div className='form-head'><center>Employee Payroll form</center></div>
        <div className="row-content">
        <label className="label text" htmlFor="name">Name</label>
        <input type="text" name="name" id="name" className="input" value={user.name}
        onChange={handleInput} placeholder="Your Name ..." required/>
        <error-output className="text-error" >{user.error.name}</error-output>
        </div>
        
        <div className="row-content">
        <label className="label text" htmlFor="profilePic">Profile image</label>
        <div className="profile-radio-content">
                <label>
                    <input type="radio" id="profile1"  name="profilePic" checked={user.profilePic === "./assets/profile-images/Ellipse -1.png"}  onChange={handleInput} value="./assets/profile-images/Ellipse -1.png"/>
                    <img className="profile" src={Ellipse1} alt="img"/>
                    </label>
                    <label>
                    <input type="radio" id="profile2" name="profilePic"  checked={user.profilePic === "./assets/profile-images/Ellipse -2.png"} onChange={handleInput} value="./assets/profile-images/Ellipse -2.png"/>
                    <img className="profile" id="image2" src={Ellipse2} alt="img"/>
                    </label>
                    <label>
                    <input type="radio" id="profile3" name="profilePic" checked={user.profilePic === "./assets/profile-images/Ellipse -8.png"} onChange={handleInput} value="./assets/profile-images/Ellipse -8.png"/>
                    <img className="profile" id="image3" src={Ellipse7} alt="img"/>
                    </label>
                    <label>
                    <input type="radio" id="profile4" name="profilePic"  checked={user.profilePic === "./assets/profile-images/Ellipse -7.png"} onChange={handleInput} value="./assets/profile-images/Ellipse -7.png"/>
                    <img className="profile" id="image4" src={Ellipse8} alt="img"/>
                    </label>
                </div>
                <error-output className="text-error" >{user.error.profilePic}</error-output>
            </div>
            <div className="row-content">
            <label className="label text" htmlFor='gender'>Gender</label>
            <div>
                <input type="radio" id="male" name="gender" value="male" checked={user.gender === "male"}  onChange={handleInput}/>
                <label className="text" for="male">Male</label>
                <input type="radio" id="female" name="gender" value="female" checked={user.gender === "female"}  onChange={handleInput}/>
                <label className="text" for="female">Female</label>
            </div>
            <error-output className="text-error" >{user.error.gender}</error-output>
            </div>
            <div className="row-content">
            <label className="label text" htmlFor="department">Department</label>
            <div>
            {user.allDepartment.map(item => (
                                <span key={item}>
                                    <input className="checkbox" type="checkbox" onChange={() => onCheckChange(item)} name={item}
                                        checked={getChecked(item)} value={item} />
                                    <label className="text" htmlFor={item}>{item}</label>
                                </span>
                            ))}
            </div>
            <error-output className="text-error" >{user.error.department}</error-output>
        </div>
        <div className="row-content">
        <label className="label text" htmlFor="salary">Choose your Salary: </label>
        
        <input className="input" type="range" id="salary" name="salary" min="300000" max="500000" step="100"
        value={user.salary} onChange={rangeSelector} />
        <output className="salary-output text" for="salary">400000</output>
        <error-output className="text-error" >{user.error.salary}</error-output>
        </div>
        
        
        <div className="row-content">
            <label className="label text" htmlFor="startDate">Start Date</label>
            <div>
                <select id="day" name="day"  value={user.day} onChange={handleInput}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                </select>
                <select name="month" id="month" value={user.month} onChange={handleInput}>
                    <option value="Jan">January</option>
                    <option value="Feb">Febuary</option>
                    <option value="Mar">March</option>
                    <option value="Apr">April</option>
                    <option value="May">May</option>
                    <option value="Jun">June</option>
                    <option value="Jul">July</option>
                    <option value="Aug">August</option>
                    <option value="Sep">September</option>
                    <option value="Oct">October</option>
                    <option value="Nov">November</option>
                    <option value="Dec">December</option>
                </select>
                <select name="year" id="year" value={user.year} onChange={handleInput}>
                    <option value="2020">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                </select>
            </div>
        </div>
        <div className="row-content">
        <label className="label text" htmlFor="notes">Notes</label>
        <textarea id="notes" className="input" name="notes" placeholder=""  value={user.notes} onChange={handleInput}></textarea>
        <error-output className="text-error" >{user.error.notes}</error-output>
        </div>
        <div className="buttonParent">
            <Link to="/" className="resetButton button cancelButton">Cancel</Link>
        <div className="submit-reset">
            {/* <Link to="/" className="button submitButton" > */}
             <button type="submit" className="button submitButton" id="submitButton">{user.isUpdate ? 'Update' : 'Submit'}</button>
             {/* </Link> */}
             <button type="reset" className="resetButton button">Reset</button>
         </div>
      </div>
            </form>
        </div>
        <div className="form"> 
        </div>
        </>
      );
    }
    export default Payroll;