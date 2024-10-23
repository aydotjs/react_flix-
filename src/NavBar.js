import React from 'react'
import tempMovieData from './tempMovieData';
import { useState } from 'react';
const NavBar = () => {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState(tempMovieData);
  return (
    <nav className="nav-bar">
    <div className="logo">
      <span role="img">🍿</span>
      <h1>React Flix TB</h1>
    </div>
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  </nav>
  )
}

export default NavBar
