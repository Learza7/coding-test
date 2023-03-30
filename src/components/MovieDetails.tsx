import React from 'react';
import { MovieDetails } from '../types';
import '../styles/MovieDetails.css';
interface MovieDetailsProps {
  movie: MovieDetails;
  onClose: () => void;
}

export const MovieDetailsComponent: React.FC<MovieDetailsProps> = ({ movie, onClose }) => {

  const generateStarRating = (rating: number): string => {
    const fullStars = Math.floor(rating / 2);
    const halfStars = rating % 2 === 1 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      '★'.repeat(fullStars) +
      '½'.repeat(halfStars) +
      '☆'.repeat(emptyStars)
    );
  };


  return (
    <div className="movie-details">
      <div className="movie-header">
        <h2>{movie.Title} ({movie.Year})</h2>
        <button onClick={onClose} className="close-button">Close</button>
      </div>
      <div className="movie-content">
        <img src={movie.Poster} alt={`${movie.Title} Poster`} />
        <div className="movie-info">
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Runtime:</strong> {movie.Runtime}</p>
          <p><strong>Rated:</strong> {movie.Rated}</p><p>
            <strong>Rating:</strong> {movie.imdbRating}{' '}
            <span className="rating-stars">{generateStarRating(parseFloat(movie.imdbRating))}</span>
          </p>


          <p><strong>Plot:</strong> {movie.Plot}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Actors:</strong> {movie.Actors}</p>
        </div>
      </div>
    </div>
  );
};
