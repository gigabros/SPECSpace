import React, { useState, useEffect, useRef } from "react";
import { MdOutlineError } from 'react-icons/md';
import { json, Link, Navigate, useNavigate } from 'react-router-dom';
import SpecsLogo from '../specs_logo.png';
import sslogo from '../ss_logo.png';
import axios from "../../api/axios";
import get_data from "../../api/profdata";
import { useAuth } from "../auth";
import './login.scss';


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
  const LOGIN_URL = '/admin_login'

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

  const auth =useAuth()
  const userRef = useRef();
  const errRef = useRef();

  const navi = useNavigate();
  const nav_prof = () => navi('/profile')
  const nav_admin = () => navi('/Admin/Adannouncements')

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
              auth.login("admin")
              sessionStorage.setItem("stud_num","admin")
              nav_admin()
            }
            else if (result['data']['payload']['data'][0]['role'] == "Student"){
              alert("Access denied. Please use the Student Portal.")
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
        <Navigate to="/Admin/Adquest"></Navigate>
      ) : (
        <div className="admin-login-page">
          <div className="admin-box">
            <div className="admin-right">
              <div className="admin-logo-holder">
                <img className="admin-sslogo" src={sslogo} alt="Specs Logo" />
                <img className="admin-specslogo" src={SpecsLogo} alt="Specs Logo" />
              </div>
            </div>

            <form className="admin-login-form" onSubmit={handleSubmit}>
              <div className="form-title">
                <h1 className="admin-ss-title">SPECS SPACE</h1>
                <h1 className="admin-from-title">ADMIN LOGIN</h1>
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

              <button type="submit" className="admin-login-btn" ><p className="ad-btn-txt">LOGIN</p></button>

              <div className={popupStyle}>
                <MdOutlineError color="red" size={100} />
                <h3 className="incorrect" >Login Failed</h3>
                <p className="incorrect" >Incorrect Username or Password</p>
              </div>

            </form>
          </div>
        </div>

      )}

      <div className="ad-log-area">
        <ul className="ad-circles">
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