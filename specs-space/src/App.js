import './App.css';
import { Routes, Route } from 'react-router-dom';
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
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {
  return (
    <Routes >
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route element={ProtectedRoutes}>
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Achievements" element={<Achievements />} />
          <Route path="/Activity" element={<Guild />} />
          <Route path="/ViewActivity" element={<ViewActivity />} />
          <Route path="/Leaderboards" element={<Leaderboards />} />
          <Route path="/Announcements" element={<Announcements />} />
        </Route>
        

        <Route path="/Adquest" element={<Adquest />} />
        <Route path="/Adaccounts" element={<Adaccounts />} />
        <Route path="/Submits" element={<Submits />} />
        <Route path="/Requests" element={<Requests />} />
        <Route path="/Adleaderboards" element={<AdLeaderboards />} />
        <Route path="/Adannouncements" element={<Adannouncements />} />
      </Route>
    </Routes>
  );
}

export default App;
