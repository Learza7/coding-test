// src/App.tsx

import React, { useState } from 'react';
import { MovieSearchResult, MovieDetails } from './types';
import { searchMovies, getMovieDetails } from './api_requests';
import { SearchBar } from './components/SearchBar';
import { MovieList } from './components/MovieList';
import { MovieDetailsComponent } from './components/MovieDetails';

const App: React.FC = () => {
  const [movies, setMovies] = useState<MovieSearchResult[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<MovieDetails | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (query: string) => {
    setSelectedMovie(null);
    setLoading(true);
    setError('');
    try {
      const results = await searchMovies(query);
      setMovies(results);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectMovie = async (imdbID: string) => {
    setLoading(true);
    setError('');
    try {
      const movieDetails = await getMovieDetails(imdbID);
      setSelectedMovie(movieDetails);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseMovieDetails = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="container">
      <h1 className='app-title'>Movie Search App</h1>
      <SearchBar onSearch={handleSearch} loading={loading} />
      {error && <p>Error: {error}</p>}
      {!selectedMovie && <MovieList movies={movies} onSelectMovie={handleSelectMovie} />}
      {selectedMovie && <MovieDetailsComponent movie={selectedMovie} onClose={handleCloseMovieDetails} />}
    </div>
  );
};

export default App;
