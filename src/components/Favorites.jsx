import React, {useContext} from "react";
import MovieList from "./MovieList";
import {MoviesContext} from "../context"

export default function Favorites({onFavoriteChange}){

  const [movies, setMovies] = useContext(MoviesContext)

  const favoriteMovies = movies.filter(movie => {
    return movie.favorite === true
  })

  return (
    <main>
      <h2>Favorites</h2>
      <MovieList movies={favoriteMovies} onFavoriteChange={onFavoriteChange} />
    </main>
  )
}