import React from "react";
import MovieList from "./MovieList";

export default function Favorites({movies, setMovies}){

  const favoriteMovies = movies.filter(movie => {
    return movie.favorite === true
  })

  // const favoriteMovieItem = favoriteMovies.map(movie => {
  //   console.log(movie.title)
  // })

  // console.log(favoriteMovies)

  return (
    <main>
      <h2>Favorites</h2>
      <MovieList movies={favoriteMovies} />
    </main>
  )
}