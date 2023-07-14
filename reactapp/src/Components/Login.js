import React, { useState } from 'react';
import './styles/Login.css';
import { Link, Navigate } from "react-router-dom";
import {useNavigate} from "react-router-dom"
  

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
    return pattern.test(email);
  }
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    
    navigate('/main');
    setEmailError('');
  }
  
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className="error-message">{emailError}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn-primary1">
            Login
          </button>
        </form>
        <p className="register-link1" id='reg-link'>
          <Link to="/Regester">Create an Account</Link>
        </p>
        <p className="register-link2">
          <Link to="/Regester">Forgot Password?</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
