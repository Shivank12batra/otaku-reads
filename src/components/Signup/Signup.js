import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Signup.css';

const SignupForm = () => {
  return (
    <div className="container">
      <h2 className="signup-header">Signup</h2>

      <form className="signup-form">
        <div className='form-field'>
        <label className="signup-label">Name:</label>
        <input className="signup-input" type="text" required />
        </div>

        <label className="signup-label">Email:</label>
        <input className="signup-input" type="email" required />

        <label className="signup-label">Password:</label>
        <input className="signup-input" type="password" required />

        <label className="signup-label">Confirm Password:</label>
        <input className="signup-input" type="password" required />

        <button className="signup-button" type="submit">Create Account</button>

        <p className="signup-login-link">
          Already have an account? <Link to='/login' className="blue-link">Sign In</Link>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;
