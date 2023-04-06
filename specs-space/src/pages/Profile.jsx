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
          <div className="profile-page">
            <div className="profile-header">
              <div className="prof-header-info">
                <p className="prof-name">{sessionStorage.getItem('username')} ANYA FORGER</p>
                <p className='prof-lvl'>LEVEL{sessionStorage.getItem('lvl')} 97</p>
                <p className="prof-pts">{sessionStorage.getItem('pts')} 9000 POINTS</p>
              </div>

              <div className='prof-dp'>
                <img src={dp} className="prof-dp-img" />
              </div>
            </div>

            <div className="profile-details">
              <div className="stats-badge-container">
                <div className="stats-content">
                  <div className="stats-holder">
                    <p className="stats-title">SUBMITTED ACTIVITIES</p>
                    <p className="stats-cnt">{sessionStorage.getItem('')}20</p>
                  </div>
                  <div className="stats-holder">
                    <p className="stats-title">FINISHED ACTIVITITES</p>
                    <p className="stats-cnt">{sessionStorage.getItem('')}10</p>
                  </div>
                </div>

                <div className='profile-badges'>
                  <div className="badge-container">
                    <div className="badge-img-holder">
                      <img src={badge} className="badge-img" />
                    </div>
                    <div className="badge-label">
                      <p className="badge-title">BURNING LEGEND</p>
                      <p className="badge-cond">Finish 100 Activities</p>
                    </div>
                  </div>
                  <div className="badge-container">
                    <div className="badge-img-holder">
                      <img src={badge} className="badge-img" />
                    </div>
                    <div className="badge-label">
                      <p className="badge-title">PHOENIX'S FLAME</p>
                      <p className="badge-cond">Earn 1st Place in Leaderboards</p>
                    </div>
                  </div>
                  <div className="badge-container">
                    <div className="badge-img-holder">
                      <img src={badge} className="badge-img" />
                    </div>
                    <div className="badge-label">
                      <p className="badge-title">PHOENIX'S MASTER</p>
                      <p className="badge-cond">Reach Level 50</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="avatar-container">
                <img src={avatar} className="avtr-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
