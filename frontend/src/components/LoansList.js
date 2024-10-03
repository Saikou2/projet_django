import React, { useEffect, useState } from 'react';
import axiosInstance from '../axiosConfig';

const LoanList = () => {
    const [loans, setLoans] = useState([]);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {
        const fetchLoans = async () => {
            const token = localStorage.getItem('token'); 
            if (!token) {
                setMessage('Vous devez être connecté pour voir les prêts.');
                return;
            }

            try {
                const response = await axiosInstance.get('books/loans/', {
                    headers: {
                        'Authorization': `Bearer ${token}`, 
                    }
                });
                console.log('Prêts récupérés:', response.data);
                setLoans(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des prêts:', error);
                setMessage('Erreur lors de la récupération des prêts.');
            } finally {
                setLoading(false); 
            }
        };

        fetchLoans();
    }, []);

   
    const deleteLoan = async (id) => {
        const token = localStorage.getItem('token');
        if (!token) {
            setMessage('Vous devez être connecté pour supprimer un prêt.');
            return;
        }

        if (window.confirm('Voulez-vous vraiment supprimer ce prêt ?')) {
            try {
                await axiosInstance.delete(`books/loans/${id}/`, {
                    headers: {
                        'Authorization': `Bearer ${token}`, 
                    }
                });
                setLoans(loans.filter(loan => loan.id !== id));
                setMessage('Prêt supprimé avec succès !');
            } catch (error) {
                console.error('Erreur lors de la suppression du prêt:', error);
                setMessage('Échec de la suppression du prêt.');
            }
        }
    };

    if (loading) {
        return <p>Chargement des prêts...</p>;
    }

    return (
        <div>
            <h2>Liste des Prêts</h2>
            {message && <p>{message}</p>}
            <ul>
                {loans.map((loan) => (
                    <li key={loan.id}>
                       <div> {loan.book ? loan.book.title : 'Livre non disponible'} - Emprunté par {loan.user ? loan.user.username : 'Utilisateur non identifié'}</div>
                       <div> <button onClick={() => deleteLoan(loan.id)}>Supprimer</button></div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LoanList;
