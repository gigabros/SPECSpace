import React from 'react'
import './pagestyle.scss';
import Sidebar from '../components/Sidebar'
import { CgProfile } from 'react-icons/cg';
import badge from '../data/badge-placeholder.png'
import avatar from '../data/avatar-placeholder.png'
import dp from '../data/dp.jpg'
import logo1 from '../components/specs_logo.png'
import { useReducer, useEffect } from 'react';
import axios from '../api/axios'
import { useAuth } from '../components/auth';

import phnx1 from '../data/avatar/egg.png'
import phnx2 from '../data/avatar/hatched-egg.png'

import lvl1 from '../data/badge/lvl/lvl1.png';
import lvl2 from '../data/badge/lvl/lvl2.png';
import lvl3 from '../data/badge/lvl/lvl3.png';
import lvl4 from '../data/badge/lvl/lvl4.png';
import lvl5 from '../data/badge/lvl/lvl5.png';


import submit1 from '../data/badge/submit/submit1.png';
import submit2 from '../data/badge/submit/submit2.png';
import submit3 from '../data/badge/submit/submit3.png';
import submit4 from '../data/badge/submit/submit4.png';
import submit5 from '../data/badge/submit/submit5.png';


import finish1 from '../data/badge/finish/finish1.png';
import finish2 from '../data/badge/finish/finish2.png';
import finish3 from '../data/badge/finish/finish3.png';
import finish4 from '../data/badge/finish/finish4.png';
import finish5 from '../data/badge/finish/finish5.png';

export default function Profile() {
  useEffect(() => {
    profdata()
  },[])
  useEffect(() => {
    forceUpdate()
  },[])
  const profdata = () => {
    axios.get('/profile/' + sessionStorage.getItem('stud_num'))
      .then(res => {
        sessionStorage.setItem('first_name', res.data.first_name)
        sessionStorage.setItem('last_name', res.data.last_name)
        sessionStorage.setItem('block', res.data.block)
        sessionStorage.setItem('year', res.data.year)
        sessionStorage.setItem('lvl', res.data.lvl)
        sessionStorage.setItem('points', res.data.points)
      })
    axios.get('/get_finished/' + sessionStorage.getItem('stud_num'))
      .then(finished => {
        sessionStorage.setItem('finished', finished['data']['data'][0]['count(*)'])
      })
    axios.get('/get_submitted/' + sessionStorage.getItem('stud_num'))
      .then(submitted => {

        sessionStorage.setItem('submitted', submitted['data']['payload']['data'][0]['count(*)'])
      })
      
    axios.get('/achieve_submitted/'+sessionStorage.getItem('stud_num'))
      .then(res=>{
          
          sessionStorage.setItem('totalsubs',res['data']['data'][0]['count(*)'])
          

        })
      
  }

  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  

  var data = [];
  var finished = sessionStorage.getItem('finished')
  var character_model = null
  if(sessionStorage.getItem('lvl')<=10){
    character_model = phnx1;
  }else{
    character_model = phnx2
  }

  if (sessionStorage.getItem('lvl') <= 5) {
    data.push({
      img: lvl1,
      title: "Rookie",
      description: "Lvl 1 and above"
    })
  } else if ( sessionStorage.getItem('lvl') <= 10) {
    data.push({
      img: lvl2,
      title: "Amateur",
      description: "Lvl 10 and above"
    })

  } else if (sessionStorage.getItem('lvl') <= 20) {
    data.push({
      img: lvl3,
      title: "Trained",
      description: "Lvl 20 and above"
    })

  } else if (sessionStorage.getItem('lvl') <= 30) {
    data.push({
      img: lvl4,
      title: "Skilled",
      description: "Lvl 30 and above"
    })
  } else if ( sessionStorage.getItem('lvl') >= 40) {
    data.push({
      img: lvl5,
      title: "Gladiator",
      description: "Lvl 40 and above"
    })
  }

  if (finished <= 20) {
    data.push({
      img: submit1,
      title: "Pioneer",
      description: "Finish 20 Activity or below"
    })
  } else if (finished <= 50) {
    data.push({
      img: submit2,
      title: "Task Finisher",
      description: "Finish 50 Activity or below"
    })

  } else if (finished <= 100) {
    data.push({
      img: submit3,
      title: "Quest Buster",
      description: "Finish 100 Activity or below"
    })

  } else if (finished <= 150) {
    data.push({
      img: submit4,
      title: "Unstoppable",
      description: "Finish 150 Activity or below"
    })
  } else if (finished <= 300) {
    data.push({
      img: submit5,
      title: "Quest Slayer",
      description: "Finish 300 Activity or below"
    })
  } else if (finished >= 300) {
    data.push({
      img: submit5,
      title: "Quest Slayer",
      description: "Finish 300 Activity or below"
    })

  }


  if (sessionStorage.getItem('submitted')) {
    data.push({
      img: finish1,
      title: "Iron Will",
      description: "Submitted 10 Activity"
    })
  } else if (sessionStorage.getItem('submitted') <= 20) {
    data.push({
      img: finish2,
      title: "Relentless",
      description: "Submitted 20 Activity"
    })

  } else if (sessionStorage.getItem('submitted') <= 50) {
    data.push({
      img: finish3,
      title: "Productive",
      description: "Submitted 50 Activity"
    })

  } else if (sessionStorage.getItem('submitted') <= 100) {
    data.push({
      img: finish4,
      title: "Perserverance",
      description: "Submitted 100 Activity"
    })
  } else if (sessionStorage.getItem('submitted') >= 200) {
    data.push({
      img: finish5,
      title: "Hard working",
      description: "Submitted 200 Activity"
    })
  }

  return (
    <>
      <div className="page-container">
        <div className="left-side">
          <Sidebar />
        </div>

        {/* <div className="area">
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
        </div> */}

        <div className="right-side">
          {/* <h1>Profile</h1> */}
          <div className="profile-page">
            <div className="profile-header">
              <div className="prof-header-info">

                <p className="prof-name">{sessionStorage.getItem('first_name')} {sessionStorage.getItem('last_name')}</p>
                <p className="prof-lvl">{sessionStorage.getItem('year')} ,Block:{sessionStorage.getItem('block')}</p>
                <p className='prof-lvl'>LEVEL {sessionStorage.getItem('lvl')}</p>
                <p className="prof-pts">{sessionStorage.getItem('points')} POINTS</p>
              </div>

              <div className='prof-dp'>
                <img src={logo1} className="prof-dp-img" />
              </div>
            </div>

            <div className="profile-details">
              <div className="stats-badge-container">
                <div className="stats-content">
                  <div className="stats-holder">
                    <p className="stats-title">PENDING ACTIVITITES</p>
                    <p className="stats-cnt">{sessionStorage.getItem('submitted')}</p>
                  </div>
                  <div className="stats-holder">
                    <p className="stats-title">FINISHED ACTIVITITES</p>
                    <p className="stats-cnt">{sessionStorage.getItem('finished')}</p>
                  </div>
                </div>

                <div className='profile-badges'>
                {
                  data.map((value)=>{
                    return(
                      <div className="badge-container">
                    <div className="badge-img-holder">
                      <img src={value.img} className="badge-img" />
                    </div>
                    <div className="badge-label">
                      <p className="badge-title">{value.title}</p>
                      <p className="badge-cond">{value.description}</p>
                    </div>
                  </div>
                    )
                    
                  })
                }
                </div>
              </div>

              <div className="avatar-container">
                <img src={character_model} className="phnx-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

