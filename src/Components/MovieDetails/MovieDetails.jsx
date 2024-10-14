import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function MovieDetails() {
  const { id } = useParams(); // Get the movie ID from the URL
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=c9fac173689f5f01ba1b0420f66d7093`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch movie details");
        }

        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; // Loading state
  }

  if (!movie) {
    return <div>No movie found</div>; // Error state
  }

  return (
    <div className="movie-details">
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <p>{movie.overview}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Rating: {movie.vote_average}</p>
      {/* Add more movie details as needed */}
    </div>
  );
}
