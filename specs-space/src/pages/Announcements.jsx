import React from 'react'
import Sidebar from '../components/Sidebar'
import img from '../data/img1.jpg'
const announcedata = [

    {
      img: img,
      title: "Title",
      desc: "description description description description description description description description description"
    },
    {
      img: img,
      title: "Title",
      desc: "description description description description description description description description description"
    },
    {
      img: img,
      title: "Title",
      desc: "description description description description description description description description description"
    },
    {
      img: img,
      title: "Title",
      desc: "description description description description description description description description description"
    },
  ]
export default function Announcements() {
  return (
    <>
      <div className="page-container">
        <div className="left-side">
          <Sidebar />
        </div>

        <div className="right-side">
          <div className='announcement-page'>
            <h1 className='announcement-title'>Announcements</h1>
            <div className="announce-container">
              {announcedata.map((value, index) => {
                return (
                  <div className="announce-card" key={index}>
                    <div>
                      <img src={value.img} className="announce-img" />
                    </div>
                    <div>
                      <p className="announce-title">{value.title}</p>
                      <p className="announce-desc">{value.desc}</p>
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
