// src/Component/Dashboard.js

import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import {Link} from 'react-router-dom'
function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the users!', error);
      });
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.date}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Link to='/login'>
        <button className='d-flex justify-content-center btn-primary'>LOGOUT</button></Link>
    </div>
  );
}

export default Dashboard;
