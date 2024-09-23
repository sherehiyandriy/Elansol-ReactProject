import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import './Login.css';
import Profile from '../Profile/profile.jpg';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/login', { email, password })
      .then(result => {
        if (result.data.success) {
          localStorage.setItem('token', result.data.token);
          navigate('/dashboard');
        } else {
          console.log(result.data.message);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className='login-template'>
      <div className='login-box'>
        <div className='signup-btn-container'>
          <Link to='/Register'><button className='btn signup-btn btn-primary'>SIGN UP</button></Link>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='text-center mb-1'>
            <img src={Profile} alt='Profile' className='rounded-circle profile-pic' />
          </div>
          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>
              <FontAwesomeIcon icon={faEnvelope} className='me-2' />
            </label>
            <input type='email' id='email' placeholder="Username" className='form-control'
              onChange={(e) => { setEmail(e.target.value) }} />
          </div>
          <div className='mb-3'>
            <label htmlFor='password' className='form-label'>
              <FontAwesomeIcon icon={faLock} className='me-2' />
            </label>
            <input type='password' id='password' placeholder="Password" className='form-control'
              onChange={(e) => { setPassword(e.target.value) }} />
          </div>
          <div className='d-flex justify-content-between align-items-center mb-3'>
            <div className='form-check'>
              <input type='checkbox' className='form-check-input' id='check' />
              <label className='form-check-label' htmlFor='check'>Remember me</label>
            </div>
            <div className='ml-2 hover-text-color-white'><a href='#'>Forgot your password?</a></div>
          </div>
          <div className='mb-3'>
            <button type='submit' className='btn btn-primary'>LOGIN</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
