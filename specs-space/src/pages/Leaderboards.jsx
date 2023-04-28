import React, { useState,useEffect } from 'react'
import './pagestyle.scss';
import Sidebar from '../components/Sidebar'
import axios from '../api/axios';

const lboarddata = [
  {
    rank: "1",
    top: "one",
    username: "John Wick",
    lvl: 97,
    points: 9000,
  },
  {
    rank: "2",
    top: "two",
    username: "John Wick",
    lvl: 83,
    points: 8000,
  },
  {
    rank: "3",
    top: "three",
    username: "John Wick",
    lvl: 77,
    points: 6000,
  },
  {
    rank: "4",
    username: "John Wick",
    lvl: 75,
    points: 2000,
  },
  {
    rank: "5",
    username: "John Wick",
    lvl: 70,
    points: 1000,
  },
  {
    rank: "6",
    username: "John Wick",
    lvl: 69,
    points: 900,
  },
  {
    rank: "7",
    username: "John Wick",
    lvl: 45,
    points: 500,
  },
  {
    rank: "8",
    username: "John Wick",
    lvl: 41,
    points: 100,
  },
  {
    rank: "9",
    username: "John Wick",
    lvl: 32,
    points: 60,
  },
  {
    rank: "10",
    username: "John Wick",
    lvl: 10,
    points: 10,
  },

]



export default function Leaderboards() {
  const [points,setPoints] = useState([]);
  const [lvl,setLvl] = useState([])

    useEffect(()=>{
      getPoints()
      getLvl()
    },[])

  const getPoints =()=>{
    axios.get('/board_points')
    .then(res=>{
      setPoints(res.data.data)
      console.log(res)
    })
    .catch(error=>{
      console.log(error)
    })
  }

  const getLvl =()=>{
    axios.get('/board_lvl')
    .then(res=>{
      setLvl(res.data.data)
      console.log(res)
    })
    .catch(error=>{
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

              <div className="lboard-content-holder">
                <h1 className="lboard-title">Ranking by Points</h1>
                {points.map((item, index) => {
                  return (
                    <div className="lboard-content" key={item.stud_num} id={item.top}>
                      <p className='lboard-rank'>RANK {(index+1)}</p>
                      <p className='lboard-username'>{item.name}</p>
                      <p className='lboard-points'>{item.points} pts</p>
                    </div>
                  )
                })}
              </div>

              <div className="lboard-content-holder">
                <h1 className="lboard-title">Ranking by Level</h1>
                {lvl.map((item, index) => {
                  return (
                    <div className="lboard-content" key={index} id={item.top}>
                      <p className='lboard-rank'>RANK {(index+1)} </p>
                      <p className='lboard-username'>{item.name}</p>
                      <p className='lboard-level'>level {item.lvl}</p>
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
