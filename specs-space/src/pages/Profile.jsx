import React from 'react'
import './pagestyle.scss';
import Sidebar from '../components/Sidebar'

export default function Profile() {
  return (
    <>
      <div className="page-container">
        <div className="left-side">
          <Sidebar />
        </div>
        <div className="right-side">
          <h1>Profile</h1>
        </div>
      </div>
    </>
  )
}
