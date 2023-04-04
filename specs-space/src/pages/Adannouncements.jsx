import React from 'react'
import './pagestyle.scss';
import AdSidebar from '../components/AdSidebar'
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

export default function Adannouncements() {
  return (
    <>
      <div className="page-container">
        <div className="left-side">
          <AdSidebar />
        </div>

        <div className="right-side">
          <div className='adannouncement-page'>
            <h1 className='adannouncement-title'>Announcements</h1>
            <div className="adannounce-container">
              <div className="announce-list">
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

              <div className="add-announce-holder">
                <form className='add-announce-form'>

                  <h1 className='add-announce-title'>Add Announcement</h1>
                  <input type="text" placeholder='Add Announcement Title' id='title' />
                  <input type="text" placeholder='Announcement Description' id='description' />
                  <input type="file" id='ann-img' />
                  <div className='btn-holder'>
                    <button id="submit" className='submit-btn'>Add</button>
                    <button className='cancel-btn'>Cancel</button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
