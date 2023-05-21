import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

const LoginForm = () => {
  return (
    <div className="container">
      <h2 className="login-header">Login</h2>

      <form className="login-form">
        <label className="login-label">Email:</label>
        <input className="login-input" type="email" required />

        <label className="login-label">Password:</label>
        <input className="login-input" type="password" required />

        <button className="login-button" type="submit">Login</button>

        <button className="guest-login-button" type="button">Login as Guest</button>

        <p className="login-signup-link">
          Don't have an account? <Link to='/signup' className="blue-link">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
