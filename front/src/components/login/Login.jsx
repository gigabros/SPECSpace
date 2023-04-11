import React, { useState} from "react";
import { MdOutlineError } from 'react-icons/md';
import { json, Link } from 'react-router-dom';
import SpecsLogo from '../specs_logo.png';

import './login.scss';


function Login() {

  const [popupStyle, showPopup] = useState("hide")

  const popup = () => {
      showPopup("login-popup")
      setTimeout(() => showPopup("hide"), 1500)
  }

  
  return (
   <div className="box">
    <div className="right">
    <div className="logo"></div>
      <div>
         <img className="specslogo" src={SpecsLogo} alt="Specs Logo" />
      </div>
     </div>
     
      <form className="form">
            <h1>Login</h1>
            <input type="text" placeholder="username" required/>
            <input type="password" placeholder="password" required />

            <div className="login-btn" onClick={popup}>Login</div>
            <p className="or">or</p>

            <div className="sign-up">
            <Link to="/Register" className='link'>Sign-up</Link>                
            </div>

            <div className={popupStyle}>
                <MdOutlineError color= "red"size={100}/>
                <h3 className="incorrect" >Login Failed</h3>
                <p className="incorrect" >Incorrect Username or Password</p>
            </div>
            
        </form>
   </div>
    
   
  )
}

export default Login