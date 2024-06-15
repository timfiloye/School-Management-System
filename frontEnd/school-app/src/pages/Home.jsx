import React, { useContext, useEffect } from 'react'
import { MyContext, useUserContext } from '../contexts/userContext'
import { Link, useNavigate } from 'react-router-dom';
import {TailSpin } from 'react-loader-spinner'

function Home() {
  const {isAuthenticated, user, loading,token} = useUserContext();

  if(loading) {
    return (
      <TailSpin color="#00BFFF" height={80} width={80} />
    )
  }

  return (
    <div>
      <h1>HOME PAGE</h1>
      <h1>WELCOME {user  && user.full_name}</h1>
    <Link to={'/profile'}>
      <button>Profile</button>
    </Link>
    </div>
  )
}

export default Home