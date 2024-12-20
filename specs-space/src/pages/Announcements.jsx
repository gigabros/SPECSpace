import React from 'react'
import Sidebar from '../components/Sidebar'
import img from '../data/img1.jpg'
import { BsChevronExpand } from 'react-icons/bs'
import axios from '../api/axios'
import { useState, useReducer, useEffect } from 'react'
import logo from '../components/specs_logo.png'

export default function Announcements() {
  const [data, setData] = useState([]);
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  const posted_activty = () => {
    axios.get('/get_posts')
      .then(res => {
        setData(res.data.data);
        forceUpdate()
      })
  }
  useEffect(() => {
    posted_activty()
  }, [])



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

          <div className='announcement-page'>

            <h1 className='announcement-title'>Announcements</h1>
            <div className="announce-container">
              {
                data != null
                  ?
                  data.map((task, index) => {
                    return (
                      <div className="announce-card" key={task.post_id}>
                        <input type="checkbox" id={index} className='chbx' />
                        <div className='announce-header'>
                          <div className="announce-title-holder">
                            <p className="announce-title">{task.title}</p>
                            <label htmlFor={index} className='btn-drpdwn'><BsChevronExpand size={30} className='exp-btn' /></label>
                          </div>
                          <p className="announce-date">Date Posted: {task.date}</p>
                        </div>
                        <div className='announce-desc-container'>
                          <p className="announce-desc">{task.message}</p>
                        </div>
                      </div>
                    )
                  })
                  :
                  <div className="announce-empty">
                    <div className="empty-logo-holder">
                      <img src={logo} alt="specs logo" className='empty-logo' />
                    </div>
                    <h1 className='empty-des'>No Announcement!</h1>
                  </div>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
