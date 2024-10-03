import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';  // Importez useNavigate
import '../components/style.css';  // Importez le fichier CSS

const Login = ({ setAuth }) => {
  const [credential, setCredential] = useState({
    username: 'saikou',
    password: 'saikou1234'
  });
  
  const navigate = useNavigate();  // Créez une instance de navigate

  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await axios.post('http://127.0.0.1:8000/api/custom_auth/login/', credential);
      console.log('Réponse complète:', res); // Vérifie la structure de la réponse

      // Supposons que le token se trouve dans res.data.access
      const accessToken = res.data.access; 
      const superuser = res.data.is_superuser
      if (accessToken || superuser) {
        localStorage.setItem('token', accessToken); // Stocke le token dans le localStorage
        localStorage.setItem('superuser', superuser); // Stocke le token dans le localStorage
        console.log('Token stocké:', accessToken); // Vérifie que le token est bien stocké
        setAuth(true);  // Met à jour l'état d'authentification
        navigate('/home');  // Redirige vers la page d'accueil
      } else {
        console.log('Token d\'accès introuvable dans la réponse');
      }
    } catch (err) {
      console.error('Erreur lors de la connexion:', err);
      // Vous pouvez afficher un message d'erreur à l'utilisateur ici
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
            {/* <a href="#">Forgot Password?</a> */}
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
