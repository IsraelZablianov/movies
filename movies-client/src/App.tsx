import React from 'react';
import './App.scss';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { MovieDetailsModal } from './components/movie-details-modal/MovieDetailsModal';
import { MoviesFilterModal } from './components/movies-filter-modal/MoviesFilterModal';
import { Movies } from './pages/movies/Movies';

function App() {
  return (
    <div className='App'>
      <MovieDetailsModal />
      <MoviesFilterModal />
      <Header></Header>
      <Movies></Movies>
      <Footer></Footer>
    </div>
  );
}

export default App;
