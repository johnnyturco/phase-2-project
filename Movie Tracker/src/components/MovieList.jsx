import React from "react";
import Movie from "./Movie";

export default function MovieList({movies}) {

  const mappedMovies = movies.map(movie => {
    return <Movie key={movie.id} movie={movie} />
  })

  return (
    <table className="movie-table">
      <thead>
        <tr>
          <th><h3>Title</h3></th>
          <th><h3>Year</h3></th>
          <th><h3>Favorite</h3></th>
          <th><h3>Rating</h3></th>
          <th><h3>Description</h3></th>
        </tr>
      </thead>
      <tbody>
        {mappedMovies}
      </tbody>
    </table>
  )
}