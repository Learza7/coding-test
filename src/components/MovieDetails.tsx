import React from 'react';
import { MovieDetails } from '../types';

interface MovieDetailsProps {
  movie: MovieDetails;
  onClose: () => void;
}

export const MovieDetailsComponent: React.FC<MovieDetailsProps> = ({ movie, onClose }) => {
  return (
    <div className="movie-details">
      <button onClick={onClose}>Close</button>
      <h2>{movie.Title} ({movie.Year})</h2>
      <img src={movie.Poster} alt={movie.Title} />
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Runtime:</strong> {movie.Runtime}</p>
      <p><strong>Rated:</strong> {movie.Rated}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>
    </div>
  );
};
