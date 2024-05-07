import { useState } from 'react';
import {  Routes, Route } from 'react-router-dom';
import { SharedLayout } from './components/Layout/SharedLayout';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import MovieCast from './components/MovieCast/MovieCast'
import MovieReviews from './components/MovieReviews/MovieReviews'
import './App.css';
import MoviesPage from './pages/MoviesPage';


function App() {
  

  return (
    <>
     <Routes>
        <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies/" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
        
    </>
  )
}

export default App
