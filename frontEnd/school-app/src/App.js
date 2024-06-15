import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';// import LoginRegister from './Components/LoginRegister/LoginRegister';
import Login from './pages/Login';
import Register from './pages/register';
import Home from './pages/Home';
import UserContext from './contexts/userContext';
import Profile from './pages/student/Profile';
import ProtectedRoute from './hooks/ProtectedRoute';

function App() {
 
  return (
    <UserContext>
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            
          </Route>
          <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
            
          </Route>
          
          <Route path="*" element={<Navigate to="/" />} />
          
        </Routes>
      </div>
    </Router>
    </UserContext>

  );
}


export default App;
