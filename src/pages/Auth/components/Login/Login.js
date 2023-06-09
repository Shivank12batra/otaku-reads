import React, {useState} from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../../../../context/auth/AuthContext';
import {loginSchema} from '../../../../services/ValidationSchema/loginSchema';
import {loginService} from '../../../../services/login/loginService';
import './Login.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Login = () => {
  const loginValues = {
    email: "",
    password: ""
  }

  const guestCreds = {
    email: "adarshbalika@gmail.com",
    password: "adarshbalika"
  }

  const [creds, setCreds] = useState(loginValues)
  const [error, setError] = useState('')
  const {setToken, setUser} = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const updateCreds = (e, fieldName) => {
    setCreds(prev => ({...prev, [fieldName]: e.target.value}))
  }

  // helper function
  const loginCheck = async(creds) => {
    try {
      const data = await loginService(creds)
      const {foundUser, encodedToken} = data
      if (!encodedToken) {
          toast.error('Failed to log in', {
              className: 'toast-error',
              progressClassName: 'toast-progress',
          });
      } else {
          setUser(foundUser)
          setToken(encodedToken)
          localStorage.setItem('user', JSON.stringify(foundUser))
          localStorage.setItem('token', encodedToken)
          console.log(localStorage.getItem('user'))
          console.log(localStorage.getItem('token'))
          toast.success('Successfully logged in', {
              className: 'toast-success',
              progressClassName: 'toast-progress',
            })
          setTimeout(() => navigate(location.state.from.pathname), 3000)
        }
    } catch (e) {
      console.log(e)
      toast.error('Failed to log in', {
          className: 'toast-error',
          progressClassName: 'toast-progress',
        });
    }
  }

  const loginUser = async(e) => {
    e.preventDefault();
    const {isValid, msg} = loginSchema(creds);
    if (isValid) {
      setError('');
      loginCheck(creds);
    } else {
      setError(msg)
    }
  }

  const loginGuest = async(e) => {
    e.preventDefault();
    setCreds(guestCreds)
    loginCheck(guestCreds)
  }

  return (
    <div className="container">
        <ToastContainer/>
      <h2 className="login-header">Login</h2>
      <form className="login-form">
        <label className="login-label">Email:</label>
        <input className="login-input" type="email" value={creds.email} onChange={(e) => updateCreds(e, "email")} required />

        <label className="login-label">Password:</label>
        <input className="login-input" type="password" value={creds.password} onChange={(e) => updateCreds(e, "password")} required />

        <div className='error-message'>{error}</div>

        <button className="login-button" type="submit" onClick={loginUser}>Login</button>

        <button className="guest-login-button" type="submit" onClick={loginGuest}>Login as Guest</button>

        <p className="login-signup-link">
          Don't have an account? <Link to='/signup' className="blue-link">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};
