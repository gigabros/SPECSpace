import React, { useState} from "react";
import { MdCheckCircle } from 'react-icons/md';
import { json, Link } from 'react-router-dom';
import SpecsLogo from '../specs_logo.png';


import './register.scss';


function Register() {

  const [popupStyle, showPopup] = useState("hide")

  const popup = () => {
      showPopup("signup-popup")
      setTimeout(() => showPopup("hide"), 1500)
  }

  
  return (
   <div className="signup-box">
    <div className="signup-right">
    <div className="logo"></div>
    <div>
         <img className="specslogo" src={SpecsLogo} alt="Specs Logo" />
      </div>
    </div>
      <div className="signup-form">
            <h1>Sign Up</h1>
            <input type="signup-text" placeholder="username" required />
            <input type="signup-password" placeholder="password" required />
            

            <div className="signup-btn" onClick={popup}>Sign up</div>
            <p className="signup-or">Already have an account?</p>

            <div className="sign-up">

            <Link to="/" className='link'>Log in</Link>
                            
            </div>

           

            <div className={popupStyle}>
             
                  <MdCheckCircle  color= "green"size={100}/>
                  <h3>Sign up succesful</h3>
 
            </div>
            
        </div>
   </div>
    
   
  )
}

export default Register
