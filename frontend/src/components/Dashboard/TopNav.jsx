import React from 'react'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { Logout } from '../../redux/userSlice';
function TopNav() {


  const dispatch = useDispatch();
  const navigate = useNavigate();

  let handleLogout = async () => {
    try {
      console.log("in handleLogout");
      await dispatch(Logout());
      navigate('/login');
    } catch (error) {
      next(error)
    }
  }

  return (
    <div className='flex items-center justify-between px-6 h-16  border-b border-gray-200'>
      <h1 className='text-xl font-semibold'>Welcome {localStorage.getItem('name')}</h1>
      <div>
        <button onClick={handleLogout} >Logout</button>
      </div>
    </div>
  )
}

export default TopNav
