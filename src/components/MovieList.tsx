import React from 'react';
import { MovieSearchResult } from '../types';
import '../styles/MovieList.css';

interface MovieListProps {
  movies: MovieSearchResult[];
  onSelectMovie: (imdbID: string) => void;
}

export const MovieList: React.FC<MovieListProps> = ({ movies, onSelectMovie }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.imdbID} className="movie-item" onClick={() => onSelectMovie(movie.imdbID)}>
          <div className="movie-title">{movie.Title}</div>
          <div className="movie-year">{movie.Year}</div>
          {movie.Poster !== 'N/A' && <img className="movie-poster" src={movie.Poster} alt={movie.Title} />}
        </div>
      ))}
    </div>
  );
};
