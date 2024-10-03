import React, { useState } from 'react';
// import axiosInstance from './axiosConfig'
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './pages/home';
import BooksList from './components/BooksList';
import LoansList from './components/LoansList';
import BookDetail from './components/BookDetail';
import LoanForm from './components/LoanForm';
import HomePage from './pages/homePage';
import UserProfile from './components/profil'; 
import UserList from './components/UserList';

const App = () => {
  const [isAuth, setAuth] = useState(!localStorage.getItem('access_token'));

  

  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={ isAuth? <Login setAuth={setAuth} /> :Navigate='/home'} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/books" element={isAuth ? <BooksList /> : <Navigate to="/login" />} />
        <Route path="/loans" element={isAuth ? <LoansList /> : <Navigate to="/login" />} />
        <Route path="/books/:id" element={<BookDetail />} />
        <Route path="/loans/new" element={ isAuth? <LoanForm />: <Navigate to="/login"/> } />
        <Route path="/profile" element={<UserProfile  />} />
        <Route path="/users"  element={<UserList />} />

      </Routes>
    </Router>
  );
};

export default App;
