import React from 'react'
import './pagestyle.scss';
import Sidebar from '../components/Sidebar'
import { GiTrophy } from 'react-icons/gi'

const lboarddata = [
  {
    rank: "1",
    username: "John Wick",
    title: "Challenger",
    points: 9000,
  },
  {
    rank: "2",
    username: "John Wick",
    title: "Challenger",
    points: 9000,
  },
  {
    rank: "3",
    username: "John Wick",
    title: "Challenger",
    points: 9000,
  },
  {
    rank: "4",
    username: "John Wick",
    title: "Challenger",
    points: 9000,
  },
  {
    rank: "5",
    username: "John Wick",
    title: "Challenger",
    points: 9000,
  },
  {
    rank: "6",
    username: "John Wick",
    title: "Challenger",
    points: 9000,
  },
  {
    rank: "7",
    username: "John Wick",
    title: "Challenger",
    points: 9000,
  },
  {
    rank: "8",
    username: "John Wick",
    title: "Challenger",
    points: 9000,
  },
  {
    rank: "9",
    username: "John Wick",
    title: "Challenger",
    points: 9000,
  },
  {
    rank: "10",
    username: "John Wick",
    title: "Challenger",
    points: 9000,
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
              <div className="graphic-holder">
                <GiTrophy size={100} className='lboard-graphic' />
                <GiTrophy size={150} className='lboard-graphic' />
                <GiTrophy size={100} className='lboard-graphic' />
              </div>
            </div>

            <div className="lboard-container">
              <div className="label-content">
                <p className='lboard-label lbrank'>Rank</p>
                <p className='lboard-label lbusername'>Username</p>
                <p className='lboard-label lbtitle'>Title</p>
                <p className='lboard-label lbpoints'>Points</p>
              </div>
              {lboarddata.map((item, index) => {
                return (
                  <div className="lboard-content" key={index}>
                    <p className='lboard-rank'>{item.rank} </p>
                    <p className='lboard-username'>{item.username}</p>
                    <p className='lboard-title'>{item.title}</p>
                    <p className='lboard-points'>{item.points}</p>
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
