import React, { useEffect, useState } from 'react';
import axiosInstance from '../axiosConfig';
import { Link } from 'react-router-dom';
import '../components/style.css'; 

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');
  const token = localStorage.getItem('access_token'); 

  
  const fetchUsers = async () => {
    try {
      const response = await axiosInstance.get('custom_auth/user/', {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });
      if (Array.isArray(response.data)) {
        setUsers(response.data); 
      } else {
        setMessage('Les données utilisateurs ne sont pas au format attendu.');
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      if (error.response && error.response.status === 401) {
        setMessage('Vous devez être connecté pour voir cette page.');
      } else {
        setMessage('Erreur lors de la récupération des utilisateurs.');
      }
    }
  };

  useEffect(() => {
    if (token) { 
      fetchUsers();
    } else {
      setMessage('Vous devez être connecté pour voir cette page.');
    }
  }, [token]);

  // Fonction pour supprimer un utilisateur
  const handleDeleteUser = async (userId) => {
    try {
      await axiosInstance.delete(`custom_auth/user/${userId}/`, {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });
      setMessage('Utilisateur supprimé avec succès !');
      fetchUsers(); 
    } catch (error) {
      console.error('Error deleting user:', error);
      setMessage("Échec de la suppression de l'utilisateur.");
    }
  };

  return (
    <div>
      <h2>Liste des Utilisateurs</h2>
      {message && <p>{message}</p>}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom d'utilisateur</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  {/* Bouton de suppression uniquement pour les superutilisateurs */}
                  <button onClick={() => handleDeleteUser(user.id)}>Supprimer</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">Aucun utilisateur disponible.</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Lien vers d'autres pages si nécessaire */}
      <Link to="/other-page" className="btn btn-primary">Autre page</Link>
    </div>
  );
};

export default UserList;
