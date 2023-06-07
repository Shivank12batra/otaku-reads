import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import { useAuth } from '../../context/auth/AuthContext'
import { useData } from '../../context/data/DataContext';
import { FaTrash } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './UserProfile.css'
import { ACTION_TYPE } from '../../utils';

const UserProfile = () => {
  const navigate = useNavigate()
  const {user, setUser, token, setToken} = useAuth() 
  const {dataDispatch} = useData()
  const [tab, selectTab] = useState('Profile')
  const [addressForm, showAddressForm] = useState(false)

  const logoutHandler = () => {
    setUser({})
    setToken('')
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    dataDispatch({
      type: ACTION_TYPE.LOG_OUT
    })
    navigate('/')
  }

  return (
    <div className='profile-container'>
      <h2 className='profile-header'>Your Account</h2>
      <div className='main-container'>
        <div className='profile-btns'>
          <button className={`${tab === 'Profile' ? 'selected' : ''}`}
           onClick={() => selectTab('Profile')}>
            Profile
            </button>
          <button className={`${tab === 'Address' ? 'selected' : ''}`}
           onClick={() => selectTab('Address')}>
            Address
            </button>
          </div>
          <div className="profile-divider"></div>
          {tab === 'Profile' ? 
          <div className='profile-details'>
            <h3>Profile Details</h3>
            <div className="profile-line"></div>
            <div className='user-details'>
              <div className='user-info'>
              <span className='attribute'>Email</span>
              <span className='value'>{user.email}</span>
              </div>
              <div className='user-info'>
              <span className='attribute'>Name</span>
              <span className='value'>{user.firstName} {user.lastName}</span>
              </div>
               
            </div>
             <h3>Account Settings</h3>
             <div className="profile-line"></div>
             <button className='logout-btn'
             onClick={logoutHandler}>
              Log Out
              </button>
          </div>
        : null}
      </div>
    </div>
  )
}

export default UserProfile