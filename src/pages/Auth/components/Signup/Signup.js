import React, {useState} from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../../../../context/auth/AuthContext';
import {signupSchema} from '../../../../services/ValidationSchema/signupSchema';
import {signupService} from '../../../../services/signup/signupService';
import './Signup.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
export const Signup = () => {
  const signupValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  }
  const [creds, setCreds] = useState(signupValues)
  const [error, setError] = useState('')
  const {setToken, setUser} = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const updateCreds = (e, fieldName) => {
    console.log(e.target.value)
    setCreds(prev => ({...prev, [fieldName]: e.target.value}))
  }

  const signupUser = async(e) => {
    e.preventDefault();
    const {isValid, msg} = signupSchema(creds)
    if (isValid) {
      setError('')
      try {
        const {confirmPassword, ...signupCreds} = creds
        console.log(signupCreds)
        const data = await signupService(signupCreds)
        console.log(data)
        const {createdUser, encodedToken} = data
        if (!encodedToken) {
          toast.error('email already exists', {
              className: 'toast-error',
              progressClassName: 'toast-progress',
          });
      } else {
          setUser(createdUser)
          setToken(encodedToken)
          localStorage.setItem('user', JSON.stringify(createdUser))
          localStorage.setItem('token', encodedToken)
          console.log(localStorage.getItem('user'))
          console.log(localStorage.getItem('token'))
          toast.success('Successfully logged in', {
              className: 'toast-success',
              progressClassName: 'toast-progress',
            })
          console.log(location)
          setTimeout(() => navigate('/'), 3000)
        }
      } catch (error) {
        console.log(error)
        toast.error('Failed to log in', {
          className: 'toast-error',
          progressClassName: 'toast-progress',
        });
      }
    } else {
      setError(msg)
    }
  }
  return (
    <div className="container">
      <ToastContainer/>
      <h2 className="signup-header">Signup</h2>
      <form className="signup-form">
        <label className="signup-label">First Name:</label>
        <input className="signup-input" type="text" value={creds.firstName} onChange={(e) => updateCreds(e, "firstName")} required />

        <label className="signup-label">Last Name:</label>
        <input className="signup-input" type="text" value={creds.lastName} onChange={(e) => updateCreds(e, "lastName")} required />

        <label className="signup-label">Email:</label>
        <input className="signup-input" type="email" value={creds.email} onChange={(e) => updateCreds(e, "email")} required />

        <label className="signup-label">Password:</label>
        <input className="signup-input" type="password" value={creds.password} onChange={(e) => updateCreds(e, "password")} required />

        <label className="signup-label">Confirm Password:</label>
        <input className="signup-input" type="password" value={creds.confirmPassword} onChange={(e) => updateCreds(e, "confirmPassword")} required/>

        <div className='error-message'>{error}</div>

        <button className="signup-button" type="submit" onClick={signupUser}>Create Account</button>

        <p className="signup-login-link">
          Already have an account? <Link to='/login' className="blue-link">Sign In</Link>
        </p>
      </form>
    </div>
  );
};
