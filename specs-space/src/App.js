import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminLogin from './components/login/AdminLogin'
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
  return (
    <Routes >
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Navigate to="/Student/Login" />}/>
        <Route path='/Student/Login' element={<Login/>}/>
        <Route path='/Student/Register' element={<Register/>}/>

        <Route path="/Student/Profile" element={<Profile />} />
        <Route path="/Student/Achievements" element={<Achievements />} />
        <Route path="/Student/Activity" element={<Guild />} />
        <Route path="/Student/ViewActivity" element={<ViewActivity />} />
        <Route path="/Student/Leaderboards" element={<Leaderboards />} />
        <Route path="/Student/Announcements" element={<Announcements />} />

        <Route path='/Admin/Login' element={<AdminLogin/>}/>

        <Route path="/Admin/Adquest" element={<Adquest />} />
        <Route path="/Admin/Adaccounts" element={<Adaccounts />} />
        <Route path="/Admin/Submits" element={<Submits />} />
        <Route path="/Admin/Requests" element={<Requests />} />
        <Route path="/Admin/Adleaderboards" element={<AdLeaderboards />} />
        <Route path="/Admin/Adannouncements" element={<Adannouncements />} />
      </Route>
    </Routes>
  );
}

export default App;
