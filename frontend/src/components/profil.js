import React, { useState, useEffect } from 'react';
import axiosInstance from '../axiosConfig';

const UserProfile = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '', 
    is_superuser: false
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    
    axiosInstance
      .get('/custom_auth/user/', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        setError('Failed to fetch user data');
      });
  }, []);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axiosInstance
      .put('/custom_auth/user/', user, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      })
      .then((response) => {
        setSuccess('Profile updated successfully!');
        setError('');
      })
      .catch((error) => {
        setError(error.response ? error.response.data : 'Failed to update profile');
        setSuccess('');
      });
  };

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>New Password:</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Superuser:</label>
          <input
            type="checkbox"
            name="is_superuser"
            checked={user.is_superuser}
            onChange={(e) => handleChange({
              target: { name: 'is_superuser', value: e.target.checked }
            })}
          />
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default UserProfile;
