import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';

import Profile from './pages/Profile';
import Achievements from './pages/Achievements'
import Guild from './pages/Guild';
import Leaderboards from './pages/Leaderboards';
import Announcements from './pages/Announcements';

import Adquest from './pages/Adquest.jsx';
import Adaccounts from './pages/Adaccounts.jsx';
import AdLeaderboards from './pages/AdLeaderboards';
import Adannouncements from './pages/Adannouncements.jsx';

import Layout from './components/Layout';

function App() {
  return (
    <Routes >
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Login/>}/>

        <Route path="/Profile" element={<Profile />} />
        <Route path="/Achievements" element={<Achievements />} />
        <Route path="/Guild" element={<Guild />} />
        <Route path="/Leaderboards" element={<Leaderboards />} />
        <Route path="/Announcements" element={<Announcements />} />

        <Route path="/Adquest" element={<Adquest />} />
        <Route path="/Adaccounts" element={<Adaccounts />} />
        <Route path="/Adleaderboards" element={<AdLeaderboards />} />
        <Route path="/Adannouncements" element={<Adannouncements />} />
      </Route>
    </Routes>
  );
}

export default App;
