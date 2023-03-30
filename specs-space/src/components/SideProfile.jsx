import React from 'react'
import { NavLink } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';

export default function SideProfile() {
  return (
    <>
      <div key='3' className='profile-btn' >
        <NavLink to='/profile' className='link'>
          <div className="profilebtn-content">
            <div className='icon'><CgProfile size={100} /></div>
            <div className="label">
              <span id='Profile'>Username</span>
              <span>Title</span>
              <span>Level</span>
            </div>

          </div>
        </NavLink>
      </div>
    </>

  )
}
