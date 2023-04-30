import React, { useState, useEffect } from 'react'
import './pagestyle.scss';
import Sidebar from '../components/Sidebar'
import axios from '../api/axios';
import logo from '../components/specs_logo.png'
import { BsAward } from 'react-icons/bs'

export default function Leaderboards() {
  const [points, setPoints] = useState([]);
  const [lvl, setLvl] = useState([])

  useEffect(() => {
    getPoints()
    getLvl()
  }, [])

  const getPoints = () => {
    axios.get('/board_points')
      .then(res => {
        setPoints(res.data.data)
        console.log(res)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const getLvl = () => {
    axios.get('/board_lvl')
      .then(res => {
        setLvl(res.data.data)
        console.log(res)
      })
      .catch(error => {
        console.log(error)
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

          <div className="lboard-page">

            <div className="logo-container">
              <h1 className='lboard-title'>Leaderboards</h1>
            </div>

            <div className="lboard-container">

              <h1 className="lboard-title"><BsAward/> Ranking by Points <BsAward/></h1>
              <div className="lboard-content-holder">
                {points.map((item, index) => {
                  return (
                    <div className="lboard-content" key={item.stud_num} id={item.top}>
                      <div className="lboard-dp-holder">
                        <img src={logo} className='lboard-dp' />
                      </div>
                      <div className="lboard-label">
                        <p className='lboard-rank'>RANK {(index + 1)}</p>
                        <p className='lboard-username'>{item.last_name}, {item.first_name}</p>
                        <p className='lboard-points'>{item.points} pts</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <h1 className="lboard-title"><BsAward/> Ranking by Level <BsAward/></h1>
              <div className="lboard-content-holder">
                {lvl.map((item, index) => {
                  return (
                    <div className="lboard-content" key={index} id={item.top}>
                    <div className="lboard-dp-holder">
                      <img src={logo} className='lboard-dp' />
                    </div>
                    <div className="lboard-label">
                      <p className='lboard-rank'>RANK {(index + 1)}</p>
                      <p className='lboard-username'>{item.last_name}, {item.first_name}</p>
                      <p className='lboard-points'>Level {item.lvl}</p>
                    </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
