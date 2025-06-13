import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MovieList({ user }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.post('https://hoblist.com/api/movieList', {
      category: 'movies',
      language: 'kannada',
      genre: 'all',
      sort: 'voting'
    })
    .then(response => {
      setMovies(response.data.result);
    })
    .catch(error => {
      console.error('Error fetching movie data:', error);
    });
  }, []);

  return (
    <div>
      <h2>Welcome, {user.name}</h2>
      <h3>Movie List</h3>
      <ul>
        {movies.map(movie => (
          <li key={movie._id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;