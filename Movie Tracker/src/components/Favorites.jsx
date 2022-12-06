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
    <div>
      <h1>Favorites</h1>
      <MovieList movies={favoriteMovies} />
    </div>
  )
}