// src/axiosConfig.js
import axios from 'axios';

// Créez une instance d'Axios avec des configurations par défaut
const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api/', // Remplacez par votre URL d'API
});

// Ajoutez un intercepteur pour inclure le token dans tous les en-têtes des requêtes
axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token'); // Récupérer le token depuis le stockage local
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`; // Ajouter le token à l'en-tête
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default axiosInstance;
