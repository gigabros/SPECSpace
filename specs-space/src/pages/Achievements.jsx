import React from 'react'
import './pagestyle.scss';
import Sidebar from '../components/Sidebar'
import badge from '../data/badge-placeholder.png'
import { useReducer, useEffect, useState } from 'react'
import axios from '../api/axios'
import { RiMedalLine } from 'react-icons/ri'

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

export default function Achievements() {

  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  var data = [];
  var finished = sessionStorage.getItem('finished')

  if (sessionStorage.getItem('lvl') <= 9) {
    data.push({
      img: lvl1,
      title: "Rookie",
      description: "lvl 1"
    })
  } else if ( sessionStorage.getItem('lvl') <= 10) {
    data.push({
      img: lvl2,
      title: "Amateur",
      description: "Reached Lvl 10"
    })

  } else if (sessionStorage.getItem('lvl') <= 20) {
    data.push({
      img: lvl3,
      title: "Trained",
      description: "Reached Lvl 20"
    })

  } else if (sessionStorage.getItem('lvl') <= 30) {
    data.push({
      img: lvl4,
      title: "Skilled",
      description: "Reached Lvl 30"
    })
  } else if ( sessionStorage.getItem('lvl') >= 40) {
    data.push({
      img: lvl5,
      title: "Gladiator",
      description: "Reached Lvl 40"
    })
  }

  if (finished > 1 && finished <=19) {
    data.push({
      img: submit1,
      title: "Pioneer",
      description: "Finish 1 Activity"
    })
  } else if (finished >= 20 && finished <=99) {
    data.push({
      img: submit2,
      title: "Task Finisher",
      description: "Finish 20 Activity"
    })

  } else if (finished >= 100 && finished <=149) {
    data.push({
      img: submit3,
      title: "Quest Buster",
      description: "Finish 100 Activity"
    })

  } else if (finished >= 150 && finished <=299) {
    data.push({
      img: submit4,
      title: "Unstoppable",
      description: "Finish 150 Activity"
    })
  } else if (finished >= 300) {
    data.push({
      img: submit5,
      title: "Quest Slayer",
      description: "Finish 300 Activity"
    })

  }


  if (sessionStorage.getItem('submitted') >1 && sessionStorage.getItem('submitted')<=19) {
    data.push({
      img: finish1,
      title: "Iron Will",
      description: "Submitted 1 Activity"
    })
  } else if (sessionStorage.getItem('submitted') >= 20 && sessionStorage.getItem('submitted') <=49) {
    data.push({
      img: finish2,
      title: "Relentless",
      description: "submitted 20 Activity"
    })

  } else if (sessionStorage.getItem('submitted') >= 50 && sessionStorage.getItem('submitted') <=99) {
    data.push({
      img: finish3,
      title: "Productive",
      description: "submitted 50 Activity"
    })

  } else if (sessionStorage.getItem('submitted') >= 100 && sessionStorage.getItem('submitted') <=199) {
    data.push({
      img: finish4,
      title: "Perserverance",
      description: "submitted 100 Activity"
    })
  } else if (sessionStorage.getItem('submitted') >= 200) {
    data.push({
      img: finish5,
      title: "Hard working",
      description: "submitted 200 Activity"
    })
  }



  return (
    <>
      <div className="page-container">
        <div className="left-side">
          <Sidebar />
        </div>

        <div className="area">
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

        <div className="right-side">
          <div className='achievement-page'>
            <h1 className='achievement-title'>Achievements</h1>
            <div className="awrd-card-holder">
              {data.map((value, index) => {
                return (
                  <div className="awrd-container" key={index}>
                    <div className='awrd-img-holder'>
                      <img src={value.img} className="awrd-img" />
                    </div>
                    <div className='awrd-label'>
                      <p className="awrd-title"><RiMedalLine/> {value.title} <RiMedalLine/></p>
                      <p className="awrd-cond">{value.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>


        </div>
      </div>
    </>

  )
}
