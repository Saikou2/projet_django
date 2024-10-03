// src/components/Signup.js
import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  });
  const [message, setMessage] = useState('');

  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (formData.password !== formData.password2) {
      setMessage('Les mots de passe ne correspondent pas.');
      return;
    }

    try {
      
      await axios.post('http://localhost:8000/api/custom_auth/signup/', formData);

      
      setMessage('Inscription réussie !');
    } catch (error) {
      
      if (error.response && error.response.data) {
        const errorMessages = error.response.data;

        if (typeof errorMessages === 'object') {
          const errorMessageArray = [];
          for (const key in errorMessages) {
            if (errorMessages.hasOwnProperty(key)) {
              errorMessageArray.push(`${key}: ${errorMessages[key]}`);
            }
          }
          setMessage(errorMessageArray.join(', '));
        } else {
          setMessage(errorMessages);
        }
      } else {
        setMessage('Échec de l\'inscription. Veuillez réessayer.');
      }
    }
  };

  return (
    <div className="container">
      <div className="signup-box">
        <h2>S'inscrire</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <label>Nom d'utilisateur :</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="input-box">
            <label>Mot de passe :</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <label>Confirmer le mot de passe :</label>
            <input
              type="password"
              name="password2"
              value={formData.password2}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <label>Email :</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">S'inscrire</button>
        </form>
        <p>{message}</p> 
      </div>
    </div>
  );
};

export default Signup;
