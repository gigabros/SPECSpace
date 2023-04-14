import React, { useState} from "react";
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

  const url='/add_account'

  const[data,setData] = useState({
    name: "",
    id:"",
    email:"",
    pass:"",
    conpass:""
  })

  

  function submit(e) {
    e.preventDefault();
    axios.post(url, {
        name: data.name,
        id: data.id,
        email: data.email,
        password: data.pass,
        conpass: data.conpass

    }).then( res => {
        console.log(res);
        if(res['data']['status']['remarks']=="Success"){
            alert("Account sucessfully added");
            
        }else{
          alert("Incorrect input of credentials");
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
    console.log(newdata)
}

  return (
   <div className="signup-box">
    <div className="signup-right">
    <div className="logo"></div>
    <div>
         <img className="specslogo" src={SpecsLogo} alt="Specs Logo" />
      </div>
    </div>
      <form onSubmit={(e) => submit(e)} className="signup-form">
            <h1>Sign Up</h1>
            <input onChange={(e) => handle(e)} value={data.name} type="text" placeholder="Name" id="name" required />
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
             
                  <MdCheckCircle  color= "green"size={100}/>
                  <h3>Sign up succesful</h3>
 
            </div>

        </form>
   </div>
    
   
  )
}

export default Register
