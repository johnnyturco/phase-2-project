import React from "react";
import Movie from "./Movie";

export default function MovieList({movies, onMovieDelete}) {

  const mappedMovies = movies.map(movie => {
    return <Movie key={movie.id} movie={movie} onMovieDelete={onMovieDelete} />
  })

  return (
    <table className="movie-table">
      <thead>
        <tr style={{textAlign: "center"}}>
          <th style={{textAlign: "left"}}><h3>Title</h3></th>
          <th><h3>Year</h3></th>
          <th><h3>Favorite</h3></th>
          <th><h3>Rating</h3></th>
          <th><h3>Description</h3></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {mappedMovies}
      </tbody>
    </table>
  )
}