import React from 'react'
import './pagestyle.scss';
import Sidebar from '../components/Sidebar'
import badge from '../data/badge-placeholder.png'

const carddata = [

  {
    img: badge,
    title: "Title",
  },
  {
    img: badge,
    title: "Title",
  },
  {
    img: badge,
    title: "Title",
  },
  {
    img: badge,
    title: "Title",
  },
  {
    img: badge,
    title: "Title",
  },
  {
    img: badge,
    title: "Title",
  },
  {
    img: badge,
    title: "Title",
  },
  {
    img: badge,
    title: "Title",
  },
]

export default function Achievements() {
  return (
    <>
      <div className="page-container">
        <div className="left-side">
          <Sidebar />
        </div>

        <div className="right-side">
          <div className='achievement-page'>
            <h1 className='achievement-title'>Achievements</h1>
            <div className="card-holder">
              {carddata.map((value, index) => {
                return (
                  <div className="card" key={index}>
                    <div>
                      <img src={value.img} className="card-img" />
                    </div>
                    <div>
                      <p className="card-title">{value.title}</p>
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
