import React, { useState, useEffect, useRef } from "react";
import { MdOutlineError } from 'react-icons/md';
import { json, Link, Navigate } from 'react-router-dom';
import SpecsLogo from '../specs_logo.png';
import axios from "../../api/axios";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(LOGIN_URL,
        JSON.stringify({ email, password }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      )
      console.log(response['data']['stud_num'])
      sessionStorage.setItem('stud_num', response['data']['stud_num']);
      setSuccess(true);
    }
    catch (err) {
      if (!err?.response) {
        alert('No Server Response');
      }
      errRef.current.focus();
    }
  }




  return (
    <>
      {success ? (
        <Navigate to="/profile"></Navigate>
      ) : (
        <div className="box">
          <div className="right">
            <div className="logo"></div>
            <div>
              <img className="specslogo" src={SpecsLogo} alt="Specs Logo" />
            </div>
          </div>

          <form className="form" onSubmit={handleSubmit}>
            <h1>Login</h1>
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

            <button type="submit" className="login-btn" >Login</button>
            <p className="or">or</p>

            <div className="sign-up">
              <Link to="/Register" className='link'>Sign-up</Link>
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