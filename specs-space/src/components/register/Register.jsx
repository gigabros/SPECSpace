import React, { useState } from "react";
import { MdCheckCircle } from 'react-icons/md';
import { json, Link } from 'react-router-dom';
import SpecsLogo from '../specs_logo.png';
import axios from "../../api/axios";


import './register.scss';


function Register() {

  const [popupStyle, showPopup] = useState("hide")

  const popup = () => {
    showPopup("signup-popup")
    setTimeout(() => showPopup("hide"), 1500)
  }

  const url = '/add_account'

  const [data, setData] = useState({
    fname: "",
    lname:"",
    id: "",
    email: "",
    pass: "",
    conpass: "",
    block:"A",
    level:"First Year",
  })

  function Pop(){
    return(
      <div className={popupStyle}>

            <MdCheckCircle color="green" size={100} />
            <h3>message</h3>

    </div>
    );
  }

  function submit(e) {
    e.preventDefault();
    axios.post(url, {
      first_name: data.fname,
      last_name: data.lname,
      block: data.block,
      year: data.level,
      id: data.id,
      email: data.email,
      password: data.pass,
      conpass: data.conpass

    }).then(res => {
      console.log(res);
      if (res['data']['status']['remarks'] == "Success") {
        alert("Account sucessfully added");

      } else if(res['data']['status']['remarks'] == "Password"){
        alert(res['data']['status']['message'])
      } else if(res['data']['status']['remarks'] == "Account"){
        alert(res['data']['status']['message'])
      }
    }
    ).catch(error => {
      alert("Server Error Please Try Again");
    });

  }
  function handle(e) {
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    setData(newdata)
  }
  function handleLevel(event) {
    const { level, value } = event.target;
    setData((prevData) => ({ ...prevData, ['level']: value }));
    console.log(data.level)
  }

  function handleBlock(event) {
    const { block, value } = event.target;
    setData((prevData) => ({ ...prevData, ['block']: value }));
    console.log(data.block)
  }
  function subSubmit(e){
    e.preventDefault()
    console.log(data)
  }
  return (
    <>
      <div className="signup-box">
        <div className="signup-right">
          <div className="logo"></div>
          <div>
            <img className="specslogo" src={SpecsLogo} alt="Specs Logo" />
          </div>
        </div>
        <form onSubmit={(e) => submit(e)} className="signup-form">
          <h1>Sign Up</h1>
          <input onChange={(e) => handle(e)} value={data.fname} type="text" placeholder="First Name" id="fname" required />
          <input onChange={(e) => handle(e)} value={data.lname} type="text" placeholder="Last Name" id="lname" required />
          <div className="BlockYear">
          <label for="Year">Year Level: </label>
          <select value={data.level} onChange={(e) => handleLevel(e)} name="level" id="level" required>
          <option value="First Year">First year</option>
          <option value="Second Year">Second year</option>
          <option value="Third Year">Third year</option>
          <option value="Fourth Year">Fourth year</option>
          </select>
          <label for="block">    Block: </label>
          <select value={data.block} onChange={(e) => handleBlock(e)} name="Block" id="block" required>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          </select>
          </div>
          <input onChange={(e) => handle(e)} value={data.id} type="text" placeholder="Student Number" id="id" required />
          <input onChange={(e) => handle(e)} value={data.email} type="email" placeholder="Email" id="email" required />
          <input onChange={(e) => handle(e)} value={data.pass} type="password" placeholder="Password" id="pass" required />
          <input onChange={(e) => handle(e)} value={data.conpass} type="password" placeholder="Confirm Password" id="conpass" required />


          <button className="signup-btn">Sign up</button>
          <p className="signup-or">Already have an account?</p>

          <div className="sign-up">

            <Link to="/" className='link'>Log in</Link>

          </div>
          <div className={popupStyle}>

            <MdCheckCircle color="green" size={100} />
            <h3>Sign up succesful</h3>

          </div>

        </form>
      </div>

      <div className="reg-area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>

  )
}

export default Register
