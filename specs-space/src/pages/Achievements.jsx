import React from 'react'
import './pagestyle.scss';
import Sidebar from '../components/Sidebar'
import badge from '../data/badge-placeholder.png'

const carddata = [

  {
    img: badge,
    title: "Burning Legend",
    cond: "finish 100 quests"
  },
  {
    img: badge,
    title: "Phoenix's Flame",
    cond: "Earned 1st Place at leaderboard"
  },
  {
    img: badge,
    title: "Legendary Scorer",
    cond: "Reached score 5,000 points"
  },
  {
    img: badge,
    title: "Phoenix Master",
    cond: "Reached level 50"
  },
]

export default function Achievements() {
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
              {carddata.map((value, index) => {
                return (
                  <div className="awrd-container" key={index}>
                    <div className='awrd-img-holder'>
                      <img src={value.img} className="awrd-img" />
                    </div>
                    <div className='awrd-label'>
                      <p className="awrd-title">{value.title}</p>
                      <p className="awrd-cond">{value.cond}</p>
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
