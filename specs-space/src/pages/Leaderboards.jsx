import React from 'react'
import './pagestyle.scss';
import Sidebar from '../components/Sidebar'

const lboarddata = [
  {
    rank: "1",
    top: "one",
    username: "John Wick",
    title: "Challenger",
    points: 9000,
  },
  {
    rank: "2",
    top: "two",
    username: "John Wick",
    title: "Challenger",
    points: 8000,
  },
  {
    rank: "3",
    top: "three",
    username: "John Wick",
    title: "Challenger",
    points: 6000,
  },
  {
    rank: "4",
    username: "John Wick",
    title: "Challenger",
    points: 2000,
  },
  {
    rank: "5",
    username: "John Wick",
    title: "Challenger",
    points: 1000,
  },
  {
    rank: "6",
    username: "John Wick",
    title: "Challenger",
    points: 900,
  },
  {
    rank: "7",
    username: "John Wick",
    title: "Challenger",
    points: 500,
  },
  {
    rank: "8",
    username: "John Wick",
    title: "Challenger",
    points: 100,
  },
  {
    rank: "9",
    username: "John Wick",
    title: "Challenger",
    points: 60,
  },
  {
    rank: "10",
    username: "John Wick",
    title: "Challenger",
    points: 10,
  },
]

export default function Leaderboards() {
  return (
    <>
      <div className="page-container">
        <div className="left-side">
          <Sidebar />
        </div>

        <div className="right-side">

          <div className="lboard-page">

            <div className="logo-container">
              <h1 className='lboard-title'>Leaderboards</h1>
            </div>

            <div className="lboard-container">

              <div className="lboard-content-holder">
                <h1 className="lboard-title">Ranking by Points</h1>
                {lboarddata.map((item, index) => {
                  return (
                    <div className="lboard-content" key={index} id={item.top}>
                      <p className='lboard-rank'>Rank {item.rank} </p>
                      <p className='lboard-username'>{item.username}</p>
                      <p className='lboard-points'>{item.points} pts</p>
                    </div>
                  )
                })}
              </div>

              <div className="lboard-content-holder">
                <h1 className="lboard-title">Ranking by Level</h1>
                {lboarddata.map((item, index) => {
                  return (
                    <div className="lboard-content" key={index} id={item.top}>
                      <p className='lboard-rank'>Rank {item.rank} </p>
                      <p className='lboard-username'>{item.username}</p>
                      <p className='lboard-points'>level {item.points}</p>
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
