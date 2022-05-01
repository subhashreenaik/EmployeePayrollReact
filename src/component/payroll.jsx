import React from 'react';
import { useState } from "react";
import './payroll.scss';
import logo from './assets/images/logo.png';
import Ellipse1 from './assets/profile-images/Ellipse -1.png';
import Ellipse2 from './assets/profile-images/Ellipse -2.png';
import Ellipse8 from './assets/profile-images/Ellipse -8.png';
import Ellipse7 from './assets/profile-images/Ellipse -7.png';
function Payroll() {
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const [gender, setGender] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [value, setValue] =  React.useState([300000,500000]);
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [note,setNote] =useState('');
  const rangeSelector = (event,newvalue) => {
    setValue(newvalue);
    console.log(newvalue)
  };
  const handleSubmit = event => {
    event.preventDefault();
    alert('You have submitted the form.')
  }
    
    console.log(name,profilePic,gender,isChecked);
    console.log(day+month+year);
    console.log(note);
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
    <form className='form' onSubmit={handleSubmit} >
    
        <div className='form-head'>Employee Payroll form</div>
        <div className="row-content">
        <label className="label text" htmlFor="name">Name</label>
        <input type="text" name="name" id="name" className="input" value={name}
        onChange={(e) => setName(e.target.value)} placeholder="Your Name ..." required/>
        <error-output className="text-error" ></error-output>
        </div>
        
        <div className="row-content">
        <label class="label text" for="profile">Profile image</label>
        <div className="profile-radio-content">
                <label>
                    <input type="radio" id="profile1" value="profilepic1"  checked={profilePic === "profilepic1"}  onChange={(e) => setProfilePic(e.target.value)}/>
                    <img className="profile" src={Ellipse1} alt="img"/>
                    </label>
                    <label>
                    <input type="radio" id="profile2" value="profile2" checked={profilePic === "profile2"} onChange={(e) => setProfilePic(e.target.value)}/>
                    <img className="profile" id="image2" src={Ellipse2} alt="img"/>
                    </label>
                    <label>
                    <input type="radio" id="profil3" value="profil3" checked={profilePic === "profile3"} onChange={(e) => setProfilePic(e.target.value)}/>
                    <img className="profile" id="image3" src={Ellipse7} alt="img"/>
                    </label>
                    <label>
                    <input type="radio" id="profile4" value="profile4" checked={profilePic === "profile4"} onChange={(e) => setProfilePic(e.target.value)}/>
                    <img className="profile" id="image4" src={Ellipse8} alt="img"/>
                    </label>
                </div>
            </div>
            <div className="row-content">
            <label className="label text" for="gender">Gender</label>
            <div>
                <input type="radio" id="male" name="gender" value="male" checked={gender === "male"}  onChange={(e) => setGender(e.target.value)}/>
                <label className="text" for="male">Male</label>
                <input type="radio" id="female" name="gender" value="female" checked={gender === "female"}  onChange={(e) => setGender(e.target.value)}/>
                <label className="text" for="female">Female</label>
            </div>
            </div>
            <div className="row-content">
            <label className="label text" for="department">Department</label>
            <div>
                <input className="checkbox" type="checkbox" id="hr" name="hr" value="HR"  onChange={(e) => setIsChecked(e.target.value)}/>
                <label className="text" for="hr">HR</label>
                <input className="checkbox" type="checkbox" id="sales" name="sales" value="Sales"  onChange={(e) => setIsChecked(e.target.value)}/>
                <label className="text" for="sales">Sales</label>
                <input className="checkbox" type="checkbox" id="finance" name="finance" value="Finance"  onChange={(e) => setIsChecked(e.target.value)}/>
                <label className="text" for="finance">Finance</label>
                <input className="checkbox" type="checkbox" id="engineer" name="engineer" value="Engineer"  onChange={(e) => setIsChecked(e.target.value)}/>
                <label className="text" for="engineer">Engineer</label>
                <input className="checkbox" type="checkbox" id="others" name="others" value="Others"  onChange={(e) => setIsChecked(e.target.value)}/>
                <label className="text" for="others">Others</label>
            </div>
        </div>
        <div className="row-content">
        <label className="label text" for="salary">Choose your Salary: </label>
        
        <input className="input" type="range" id="salary" name="salary" min="300000" max="500000" step="100"
        value={value} onChange={rangeSelector} />
        <output className="salary-output text" for="salary">400000</output>
        </div>
        
        <div className="row-content">
            <label className="label text" for="startDate">Start Date</label>
            <div>
                <select id="day" name="Day"  value={day} onChange={(e) => setDay(e.target.value)}>
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
                <select name="Month" id="month" value={month} onChange={(e) => setMonth(e.target.value)}>
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
                <select name="Year" id="year" value={year} onChange={(e) => setYear(e.target.value)}>
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
        <label className="label text" for="notes">Notes</label>
        <textarea id="notes" className="input" name="Notes" placeholder=""  value={note} onChange={(e) => setNote(e.target.value)}></textarea>
        </div>
        <div className="buttonParent">
            <a href="./dashboard" className="resetButton button cancelButton">Cancel</a>
        <div className="submit-reset">
             <button type="submit" className="button submitButton" id="submitButton">Submit</button>
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