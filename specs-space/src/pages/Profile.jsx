import React from 'react'
import './pagestyle.scss';
import Sidebar from '../components/Sidebar'
import { CgProfile } from 'react-icons/cg';
import badge from '../data/badge-placeholder.png'
import avatar from '../data/avatar-placeholder.png'
import dp from '../data/dp.jpg'

export default function Profile() {
  return (
    <>
      <div className="page-container">
        <div className="left-side">
          <Sidebar />
        </div>

        <div className="right-side">
          {/* <h1>Profile</h1> */}
          <div className="profile-container">

            <div className="avatar-container">
              <img src={avatar} className="badge-dsply" />
            </div>

            <div className="profile-details-container">

              <div className="profile-info">
                <div className="label">
                  <div className="prof-holder">
                    <p className='prof-title'>Name:</p>
                    <p className="prof-info">{sessionStorage.getItem('username')} weeewooo</p>
                  </div>
                  <div className="prof-holder">
                    <p className='prof-title'>Title: </p>
                    <p className="prof-info">{sessionStorage.getItem('title')} Challenger</p>
                    <p className='prof-lvl'>Level{sessionStorage.getItem('lvl')} 9000+</p>
                  </div>
                  <div className="stats-content">
                    <div className="stats-holder">
                      <p className="stats-title">Submitted Quest:</p>
                      <p className="stats-cnt">{sessionStorage.getItem('')}20</p>
                    </div>
                    <div className="stats-holder">
                      <p className="stats-title">Finished Quest:</p>
                      <p className="stats-cnt">{sessionStorage.getItem('')}10</p>
                    </div>
                  </div>
                </div>
                
                <div className='dp'><img src={dp} className="dp-img" /></div>
              </div>

              <div className='profile-badges'>
                <img src={badge} className="badge-dsply" />
                <img src={badge} className="badge-dsply" />
                <img src={badge} className="badge-dsply" />
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}
