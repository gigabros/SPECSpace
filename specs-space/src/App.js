import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Catcher from './pages/Catcher';
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
import { AuthProvider } from './components/auth';
import { RequireAuth } from './components/RequireAuth';
function App() {
  return (
    <AuthProvider>
      <Routes >
        <Route path='/' element={<Layout />}>
          <Route path="*" element={<Navigate to='/404-Not-Found' />} />
          <Route path='/404-Not-Found' element={<Catcher />} />
          <Route path='/' element={<Navigate to="/Student/Login" />} />
          <Route path='/Student/Login' element={<Login />} />
          <Route path='/Student/Register' element={<Register />} />

          <Route path="/Student/Profile" element={<RequireAuth><Profile /></RequireAuth>} />
          <Route path="/Student/Achievements" element={<RequireAuth><Achievements /></RequireAuth> } />
          <Route path="/Student/Activity" element={<RequireAuth><Guild /></RequireAuth>} />
          <Route path="/Student/ViewActivity" element={<RequireAuth><ViewActivity /></RequireAuth>} />
          <Route path="/Student/Leaderboards" element={<RequireAuth><Leaderboards /></RequireAuth>} />
          <Route path="/Student/Announcements" element={<RequireAuth><Announcements /></RequireAuth>} />

          <Route path='/Admin/Login' element={<AdminLogin />} />

          <Route path="/Admin/Adquest" element={ <RequireAuth><Adquest /></RequireAuth> } />
          <Route path="/Admin/Adaccounts" element={<RequireAuth><Adaccounts /></RequireAuth>} />
          <Route path="/Admin/Submits" element={<RequireAuth><Submits /></RequireAuth>} />
          <Route path="/Admin/Requests" element={<RequireAuth><Requests /></RequireAuth>} />
          <Route path="/Admin/Adleaderboards" element={<RequireAuth><AdLeaderboards /></RequireAuth>} />
          <Route path="/Admin/Adannouncements" element={<RequireAuth><Adannouncements /></RequireAuth>} />
        </Route>
      </Routes>
    </AuthProvider>

  );
}

export default App;
