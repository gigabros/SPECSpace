import React, { useState, useEffect, useRef } from "react";
import { MdOutlineError } from 'react-icons/md';
import { json, Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import SpecsLogo from '../specs_logo.png';
import sslogo from '../ss_logo.png';
import axios from "../../api/axios";
import get_data from "../../api/profdata";

import './login.scss';
import { useAuth } from "../auth";


function Login() {
  useEffect(() => {
    for (var x = 0; x < sessionStorage.length; x++) {
      sessionStorage.clear();
    }
  }, [])

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrmsg] = useState('');
  const [success, setSuccess] = useState(false);
  const LOGIN_URL = '/login'

  const [popupStyle, showPopup] = useState("hide")

  const popup = () => {
    showPopup("login-popup")
    setTimeout(() => showPopup("hide"), 1500)
  }
  useEffect(() => {
    userRef.current.focus();
  }, [])
  useEffect(() => {
    setErrmsg('');
  }, [email, password])


  const userRef = useRef();
  const errRef = useRef();

  const navi = useNavigate();
  const nav_prof = () => navi('/student/profile')
  const nav_admin = () => navi('/Adannouncements')
  const auth = useAuth()
  const location = useLocation()
  const redirectPath = location.state?.path || '/'

  const login_true = async (e) => {
    try {
      const response = await axios.post(LOGIN_URL,
        JSON.stringify({ email, password }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      )
      if (response['data']['status']['remarks'] == "Password") {
        alert(response['data']['status']['message'])
      }
      else if (response['data']['status']['remarks'] == "Account") {
        alert(response['data']['status']['message'])
      } else {
        const role = axios.get('/get_status/' + email).then
          (result => {
            if (result['data']['payload']['data'][0]['role'] == "Admin") {
              alert("Access denied. Please use the Admin Portal.")
            }
            else if (result['data']['payload']['data'][0]['role'] == "Student") {
              sessionStorage.setItem('stud_num', response['data']['payload']['stud_num'])
              get_data(response['data']['payload']['stud_num'])    
              auth.login(response['data']['payload']['stud_num'])
              // navi(redirectPath,{replace: true})
              navi('/Student/profile')
            }

          })
          

      }
    } catch (err) {
      console.log(err)
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    axios.get('/check_login_unverified/' + email)
      .then(res => {
        if (res.data == true) {
          alert("Account still not verified.")
        }
        else {
          login_true()
        }
      }).catch(error => {
        console.log(error)
      })

  }




  return (
    <>
      {success ? (
        <Navigate to="/Student/profile"></Navigate>
      ) : (
        <div className="box">
          <div className="right">
            <div className="logo-holder">
              <img className="sslogo" src={sslogo} alt="Specs Logo" />
            </div>
            <div className="logo-holder">
              <img className="specslogo" src={SpecsLogo} alt="Specs Logo" />
            </div>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-title">
              <h1 className="ssform-title">SPECS SPACE</h1>
              <h1 className="login-title">STUDENT LOGIN</h1>
            </div>
            
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              ref={userRef}
              autoComplete="off"
              required />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              required />

            <button type="submit" className="login-btn">LOGIN</button>
            <p className="or">or</p>

            <div>
              <Link to="/Student/Register" className="signup-link">Sign-up</Link>
            </div>

            <div className={popupStyle}>
              <MdOutlineError color="red" size={100} />
              <h3 className="incorrect" >Login Failed</h3>
              <p className="incorrect" >Incorrect Username or Password</p>
            </div>

          </form>
        </div>
      )}

      <div className="log-area">
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

export default Login