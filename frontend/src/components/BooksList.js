import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../components/style.css';
import axiosInstance from '../axiosConfig';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [isbn, setIsbn] = useState('');
  const [publicationDate, setPublicationDate] = useState('');
  const [message, setMessage] = useState('');
  const [isSuperuser, setIsSuperuser] = useState(false);
  
  // Récupérer le token
  const token = localStorage.getItem('access_token');
  console.log("Token récupéré :", token);

 // Fonction pour récupérer les livres et vérifier si l'utilisateur est superuser
useEffect(() => {
const fetchBooks = async () => {
      // Récupérer le token depuis le localStorage
      const token = localStorage.getItem('token');

      if (!token) {
          console.error("Token non disponible");
          setMessage('Token non disponible. Veuillez vous connecter.');
          return;
      }

      try {
          // Récupérer la liste des livres
          const bookResponse = await axios.get('http://localhost:8000/api/books/books/', {
              headers: {
                  Authorization: `Bearer ${token}`, // Utilisation du token dans l'en-tête
              },
          });
          console.log('Livres reçus:', bookResponse.data);
          setBooks(bookResponse.data);

          
          const userResponse = await axios.get('http://localhost:8000/api/custom_auth/user/', {
              headers: {
                  Authorization: `Bearer ${token}`, 
              },
          });
          console.log('Données utilisateur reçues:', userResponse.data);

          
          if (userResponse.data.is_superuser) {
              setIsSuperuser(true);
              console.log("L'utilisateur est un superuser");
          } else {
              setIsSuperuser(false);
              console.log("L'utilisateur est un simple utilisateur");
          }
      } catch (error) {
          console.error('Erreur lors de la récupération des données:', error);
          if (error.response && error.response.status === 401) {
              setMessage('Vous devez être connecté pour voir cette page.');
          } else {
              setMessage('Erreur lors de la récupération des livres.');
          }
      }
  };

  fetchBooks(); 
}, []);

  
  
  const handleAddBook = async (e) => {
    e.preventDefault();

    if (!isSuperuser) {
        setMessage("Vous n'avez pas l'autorisation d'ajouter un livre.");
        return;
    }

    try {
        const response = await axiosInstance.post('/books/books/',
            
            {
                title,
                author,
                genre,
                isbn,
                publication_date: publicationDate,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`, 
                },
            }
        );

        console.log('Livre ajouté avec succès:', response.data);
        setMessage('Livre ajouté avec succès !');

        
        setBooks((prevBooks) => [...prevBooks, response.data]);

        
        setTitle('');
        setAuthor('');
        setGenre('');
        setIsbn('');
        setPublicationDate('');

    } catch (error) {
        console.error('Erreur lors de l\'ajout du livre:', error);
        setMessage("Échec de l'ajout du livre.");
    }
};

  return (
    <div>
      <section id="mu-book-overview">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-book-overview-area">
                <div className="mu-heading-area">
                  <h2 className="mu-heading-title">Liste des Livres</h2>
                  <ul>
                    <li>
                      <Link to="/books">Liste des Livres</Link>
                    </li>
                  </ul>
                  <span className="mu-header-dot"></span>
                  <p>Lorem Ipsum est simplement un texte factice de l'industrie de l'imprimerie et de la composition.</p>
                </div>

                <div className="mu-book-overview-content">
                  <div className="row">
                    {books.length > 0 ? (
                      books.map((book) => (
                        <div className="col-md-3 col-sm-6" key={book.id}>
                          <div className="mu-book-overview-single">
                            <span className="mu-book-overview-icon-box">
                              <i className="fa fa-book" aria-hidden="true"></i>
                            </span>
                            <h4>{book.title}</h4>
                            <p>{book.description || 'Aucune description disponible.'}</p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p>Aucun livre disponible.</p>
                    )}
                  </div>
                </div>

                
                {isSuperuser && (
                  <div className="add-book-form">
                    <h3>Ajouter un Livre</h3>
                    <form onSubmit={handleAddBook}>
                      <input type="text" placeholder="Titre" value={title} onChange={(e) => setTitle(e.target.value)} required />
                      <input type="text" placeholder="Auteur" value={author} onChange={(e) => setAuthor(e.target.value)} required />
                      <input type="text" placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} />
                      <input type="text" placeholder="ISBN" value={isbn} onChange={(e) => setIsbn(e.target.value)} />
                      <input type="date" placeholder="Date de publication" value={publicationDate} onChange={(e) => setPublicationDate(e.target.value)} />
                      <button type="submit">Ajouter le livre</button>
                    </form>
                    {message && <p>{message}</p>}
                  </div>
                )}

                <div className="mu-book-overview-links">
                  <Link to="/loans" className="btn btn-primary">Voir les Prêts</Link>
                  <Link to="/loans/new" className="btn btn-primary">Créer un Prêt</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookList;
