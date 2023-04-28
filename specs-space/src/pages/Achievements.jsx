import React from 'react'
import './pagestyle.scss';
import Sidebar from '../components/Sidebar'
import badge from '../data/badge-placeholder.png'
import { useReducer, useEffect, useState } from 'react'
import axios from '../api/axios'
import { RiMedalLine } from 'react-icons/ri'

export default function Achievements() {

  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  const [prof, setProf] = useState({
    lvl: sessionStorage.getItem('data.lvl'),
    finished: sessionStorage.getItem('finished'),
    submitted: sessionStorage.getItem('totalsubs')
  })

  var data = [];


  // useEffect(()=>{
  //   getData()
  //   console.log(data)

  // },[])


  // var data.lvl = sessionStorage.getItem('data.lvl')
  var finished = sessionStorage.getItem('finished')
  var points = sessionStorage.getItem('points')








  //data.lvl
  if (prof.lvl <= 5) {
    data.push({
      img: badge,
      title: "Rookie",
      description: "lvl 1 and above"
    })
  } else if (data.lvl <= 10) {
    data.push({
      img: badge,
      title: "Amateur",
      description: "lvl 10 and above"
    })

  } else if (data.lvl <= 20) {
    data.push({
      img: badge,
      title: "Trained",
      description: "lvl 20 and above"
    })

  } else if (data.lvl <= 30) {
    data.push({
      img: badge,
      title: "Skilled",
      description: "lvl 30 and above"
    })
  } else if (data.lvl >= 40) {
    data.push({
      img: badge,
      title: "Gladiator",
      description: "lvl 40 and above"
    })
  }

  if (finished <= 20) {
    data.push({
      img: badge,
      title: "Pioneer",
      description: "Finish 20 Activity or below"
    })
  } else if (finished <= 50) {
    data.push({
      img: badge,
      title: "Task Finisher",
      description: "Finish 50 Activity or below"
    })

  } else if (finished <= 100) {
    data.push({
      img: badge,
      title: "Quest Buster",
      description: "Finish 100 Activity or below"
    })

  } else if (finished <= 150) {
    data.push({
      img: badge,
      title: "Unstoppable",
      description: "Finish 150 Activity or below"
    })
  } else if (finished <= 300) {
    data.push({
      img: badge,
      title: "Quest Slayer",
      description: "Finish 300 Activity or below"
    })
  } else if (finished >= 300) {
    data.push({
      img: badge,
      title: "Quest Slayer",
      description: "Finish 300 Activity or below"
    })

  }


  if (prof.submitted <= 10) {
    data.push({
      img: badge,
      title: "Iron Will",
      description: "submitted 10 Activity"
    })
  } else if (prof.submitted <= 20) {
    data.push({
      img: badge,
      title: "Relentless",
      description: "submitted 20 Activity"
    })

  } else if (prof.submitted <= 50) {
    data.push({
      img: badge,
      title: "Productive",
      description: "submitted 50 Activity"
    })

  } else if (prof.submitted <= 100) {
    data.push({
      img: badge,
      title: "Perserverance",
      description: "submitted 100 Activity"
    })
  } else if (prof.submitted >= 200) {
    data.push({
      img: badge,
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
