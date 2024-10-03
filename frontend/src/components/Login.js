import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';  
import '../components/style.css';  
const Login = ({ setAuth }) => {
  const [credential, setCredential] = useState({
    username: 'saikou',
    password: 'saikou1234'
  });
  
  const navigate = useNavigate();  
  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await axios.post('http://127.0.0.1:8000/api/custom_auth/login/', credential);
      console.log('Réponse complète:', res); 
     
      const accessToken = res.data.access; 
      const superuser = res.data.is_superuser
      if (accessToken || superuser) {
        localStorage.setItem('token', accessToken); 
        localStorage.setItem('superuser', superuser);
        console.log('Token stocké:', accessToken); 
        setAuth(true);  
        navigate('/home');  
      } else {
        console.log('Token d\'accès introuvable dans la réponse');
      }
    } catch (err) {
      console.error('Erreur lors de la connexion:', err);
     
    }
  };

  return (
    <div className="container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="text"
              onChange={onChange}
              name="username"
              value={credential.username}
              required
            />
            <label>Username</label>
          </div>
          <div className="input-box">
            <input
              type="password"
              onChange={onChange}
              name="password"
              value={credential.password}
              required
            />
            <label>Password</label>
          </div>
          <div className="forgot-password">
           
          </div>
          <button type="submit" className="btn">Login</button>
          <div className="signup-link">
            <Link to="/signup">Signup</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
