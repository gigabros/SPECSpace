import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserMain from './components/UserMain';
import Login from './components/login/Login';
import Register from './components/register/Register';


function App() {
  return (
    <div className="App">
        {/* <h1>App main</h1> */}
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/*" element={<UserMain />} />
            <Route path="/Register" element={<Register/>} />
          </Routes>
        </Router>

    </div>
  );
}

export default App;
