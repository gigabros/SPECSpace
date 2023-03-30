import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import Achievements from './pages/Achievements'
import Guild from './pages/Guild';
import UserMain from './components/UserMain';
import Login from './components/login/Login'

function App() {
  return (
    <div className="App">
        {/* <h1>App main</h1> */}
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/*" element={<UserMain />} />
          </Routes>
        </Router>

    </div>
  );
}

export default App;
