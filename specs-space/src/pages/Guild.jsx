import React from 'react'
import './pagestyle.scss';
import Sidebar from '../components/Sidebar'

export default function Guild() {
  return (
    <>
      <div className="page-container">
        <div className="left-side">
          <Sidebar />
        </div>
        <div className="right-side">
          <h1>Guild Quest</h1>
        </div>
      </div>
    </>
  )
}
