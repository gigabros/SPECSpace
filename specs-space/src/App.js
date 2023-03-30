import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import Achievements from './pages/Achievements'
import Guild from './pages/Guild';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>App main</h1>
        <Router>
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Achievements" element={<Achievements />} />
            <Route path="/Guild" element={<Guild />} />
          </Routes>
        </Router>

      </header>
    </div>
  );
}

export default App;
