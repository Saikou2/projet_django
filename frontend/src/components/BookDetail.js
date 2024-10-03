// src/components/BookDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BookDetail = () => {
    const { id } = useParams(); 
    const [book, setBook] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchBookDetails = async () => {
            const token = localStorage.getItem('token');

            if (!token) {
                setError('Vous devez être connecté pour voir les détails du livre.');
                return;
            }

            try {
                const response = await axios.get(`http://localhost:8000/api/books/books/${id}/`, {
                    headers: {
                        'Authorization': `Bearer ${token}`, 
                    }
                });
                setBook(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des détails du livre:', error);
                setError('Erreur lors de la récupération des détails du livre.');
            }
        };

        fetchBookDetails();
    }, [id]);

    if (error) {
        return <p>{error}</p>;
    }

    if (!book) {
        return <p>Chargement...</p>;
    }

    return (
        <div>
            <h2>Détails du Livre</h2>
            <h3>{book.title}</h3>
            <p>Auteur: {book.author}</p>
            <p>Genre: {book.genre}</p>
            <p>ISBN: {book.isbn}</p>
            <p>Date de publication: {book.publication_date}</p>
            <p>{book.available ? 'Disponible' : 'Non disponible'}</p>
        </div>
    );
};

export default BookDetail;