import React, { useEffect } from 'react'
import { useUserContext } from '../../contexts/userContext';
import { Link, useNavigate } from 'react-router-dom';

function Profile() {
    const {isAuthenticated, token} = useUserContext();
    
  return (
    <div>
    <h1>PROFILE PAGE</h1>
    <Link to={'/home'}>
        <button>Home</button>
    </Link>
  </div>
  )
}

export default Profile