import React from 'react'
import { Outlet } from 'react-router-dom'
import '../App.css';

const Layout = () => {
  return (
    <main className='App'>
        <Outlet/>
    </main>
  )
}

export default Layout