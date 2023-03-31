import React from 'react'
import './pagestyle.scss';
import Sidebar from '../components/Sidebar'

export default function Leaderboards() {
  return (
    <>
      <div className="page-container">
        <div className="left-side">
          <Sidebar />
        </div>
        <div className="right-side">
          <h1>Leaderboards</h1>
        </div>
      </div>
    </>
  )
}
