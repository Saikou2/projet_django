import React, { useState, useEffect } from 'react';
import axiosInstance from '../axiosConfig'; // Importez votre configuration Axios

const LoanForm = () => {
    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [username, setUsername] = useState('');

    useEffect(() => {
       
        axiosInstance.get('books/books/')  
            .then(response => {
                setBooks(response.data);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des livres:', error);
            });

       
        axiosInstance.get('custom_auth/user/')  
            .then(response => {
                setUsername(response.data.username);  
            })
            .catch(error => {
                console.error('Erreur lors de la récupération de l\'utilisateur:', error);
            });
    }, []);

    const handleSubmit = async (e) => {
      e.preventDefault();
      const loanData = {
          book: selectedBook,
          return_date: returnDate,
      };
  
      try {
          const response = await axiosInstance.post('books/loans/', loanData, {
              
          });
          console.log('Emprunt créé avec succès:', response.data);
          console.log(loanData);
      } catch (error) {
          console.error('Erreur lors de la création de l\'emprunt:', error);
      }
  };
  
         

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nom d'utilisateur:</label>
                <input type="text" value={username} readOnly />
            </div>
            <div>
                <label>Sélectionnez un livre:</label>
                <select value={selectedBook} onChange={e => setSelectedBook(e.target.value)} required>
                    <option value="">Sélectionnez un livre</option>
                    {books.map(book => (
                        <option key={book.id} value={book.id}>{book.title}</option>
                    ))}
                </select>
            </div>
            <div>
                <label>Date de retour:</label>
                <input type="date" value={returnDate} onChange={e => setReturnDate(e.target.value)} required />
            </div>
            <button type="submit">Créer un emprunt</button>
        </form>
    );
};

export default LoanForm;
