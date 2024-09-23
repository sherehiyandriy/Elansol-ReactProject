// src/Component/Regis.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Regis() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/Register', { name, email, date, password })
      .then(result => {
        console.log(result);
        if (result.data) {
          // Store token or some identifier if needed
          localStorage.setItem('token', 'some-token'); // Assuming a token is returned and it's named 'some-token'
          navigate('/dashboard');
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="nam">
              <strong>Name</strong>
            </label>
            <input type="text" placeholder="Enter Name"
              autoComplete="off" name="nam" className="form-control rounded-0"
              onChange={(e) => { setName(e.target.value) }}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor="email">
              <strong>DOB</strong>
            </label>
            <input type="date" placeholder="Enter date"
              autoComplete="off" name="dob"
              className="form-control rounded-0"
              onChange={(e) => { setDate(e.target.value) }}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input type="email" placeholder="Enter Email"
              autoComplete="off" name="email"
              className="form-control rounded-0"
              onChange={(e) => { setEmail(e.target.value) }}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor="email">
              <strong>Password</strong>
            </label>
            <input type="password" placeholder="Enter password"
              autoComplete="off" name="pass"
              className="form-control rounded-0"
              onChange={(e) => { setPassword(e.target.value) }}
            />
          </div>
          <button type='submit' className='btn btn-success w-100 rounded-0'>Register</button>
          <p>Already have an Account?</p>
          <Link to='/login'>
            <button className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Regis;
