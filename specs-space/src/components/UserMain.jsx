import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Profile from '../pages/Profile';
import Achievements from '../pages/Achievements'
import Guild from '../pages/Guild';
import Leaderboards from '../pages/Leaderboards';

function UserMain() {
  return (
    <>
      {/* <div>UserMain</div> */}
      <Routes>
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Achievements" element={<Achievements />} />
        <Route path="/Guild" element={<Guild />} />
        <Route path="/Leaderboards" element={<Leaderboards />} />
      </Routes>

    </>


  )
}

export default UserMain