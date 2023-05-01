import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PublicRoute, UserRoute, AdminRoute } from './components/ProtectedRoutes';

import Login from './components/login/Login';
import Register from './components/register/Register';

import Profile from './pages/Profile';
import Achievements from './pages/Achievements'
import Guild from './pages/Guild';
import ViewActivity from './pages/ViewActivity';
import Leaderboards from './pages/Leaderboards';
import Announcements from './pages/Announcements';

import Adquest from './pages/Adquest.jsx';
import Adaccounts from './pages/Adaccounts.jsx';
import Submits from './pages/Submits';
import Requests from './pages/Requests';
import AdLeaderboards from './pages/AdLeaderboards';
import Adannouncements from './pages/Adannouncements.jsx';

import Layout from './components/Layout';

function App() {

  // const [isAuthenticated, setIsAuthenticated] = useState('public');
  const isAuthenticated = 'admin';

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<PublicRoute isAuthenticated={isAuthenticated}> <Login /> </PublicRoute>} />
          <Route path='/Register' element={<PublicRoute isAuthenticated={isAuthenticated}> <Register /> </PublicRoute>} />

          <Route path="/Profile" element={<UserRoute isAuthenticated={isAuthenticated}> <Profile /> </UserRoute>} />
          <Route path="/Achievements" element={<UserRoute isAuthenticated={isAuthenticated}> <Achievements /> </UserRoute>} />
          <Route path="/Activity" element={<UserRoute isAuthenticated={isAuthenticated}> <Guild /> </UserRoute>} />
          <Route path="/ViewActivity" element={<UserRoute isAuthenticated={isAuthenticated}> <ViewActivity /> </UserRoute>} />
          <Route path="/Leaderboards" element={<UserRoute isAuthenticated={isAuthenticated}> <Leaderboards /> </UserRoute>} />
          <Route path="/Announcements" element={<UserRoute isAuthenticated={isAuthenticated}> <Announcements /> </UserRoute>} />

          <Route path="/Adquest" element={<AdminRoute isAuthenticated={isAuthenticated}> <Adquest /> </AdminRoute>} />
          <Route path="/Adaccounts" element={<AdminRoute isAuthenticated={isAuthenticated}> <Adaccounts /> </AdminRoute>} />
          <Route path="/Submits" element={<AdminRoute isAuthenticated={isAuthenticated}> <Submits /> </AdminRoute>} />
          <Route path="/Requests" element={<AdminRoute isAuthenticated={isAuthenticated}> <Requests /> </AdminRoute>} />
          <Route path="/Adleaderboards" element={<AdminRoute isAuthenticated={isAuthenticated}> <AdLeaderboards /> </AdminRoute>} />
          <Route path="/Adannouncements" element={<AdminRoute isAuthenticated={isAuthenticated}> <Adannouncements /> </AdminRoute>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
