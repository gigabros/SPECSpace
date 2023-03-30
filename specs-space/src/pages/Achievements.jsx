import React from 'react'
import './pagestyle.scss';
import Sidebar from '../components/Sidebar'

export default function Achievements() {
  return (
    <>
      <div className="page-container">
        <div className="left-side">
          <Sidebar />
        </div>
        <div className="right-side">
          <h1>Achievements</h1>
        </div>
      </div>
    </>
    
  )
}