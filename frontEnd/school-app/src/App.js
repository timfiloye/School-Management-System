import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';// import LoginRegister from './Components/LoginRegister/LoginRegister';
import Login from './pages/Login';
import Register from './pages/register';

function App() {
 
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
