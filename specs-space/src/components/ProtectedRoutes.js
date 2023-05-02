import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoutes() {
    let isAuthenticated = localStorage.getItem('isLogged')
  return (
    isAuthenticated != true ? <Navigate to="/"/> : <Outlet/>
  )
}
