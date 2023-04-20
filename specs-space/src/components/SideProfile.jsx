import React from 'react'
import { NavLink } from 'react-router-dom';
import dp from '../data/dp.jpg'

export default function SideProfile() {
  return (
    <>
      <div key='3' className='profile-btn' >
        <NavLink to='/profile' className='link'>
          <div className="profilebtn-content">
            <div className='icon'><img src={dp} className="icon-img" /></div>
            <div className="label">
              <span id='Profile'>Anya Forger</span>
              <span>Level 99</span>
            </div>

          </div>
        </NavLink>
      </div>
    </>

  )
}