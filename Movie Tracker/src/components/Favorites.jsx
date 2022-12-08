import React from "react";
import MovieList from "./MovieList";

export default function Favorites({movies, setMovies}){

  const favoriteMovies = movies.filter(movie => {
    return movie.favorite === true
  })

  return (
    <main>
      <h2>Favorites</h2>
      <MovieList movies={favoriteMovies} />
    </main>
  )
}