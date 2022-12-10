import React, {useState} from "react";
import MovieList from "./MovieList";
import Search from "./Search";

export default function Home({movies, setMovies, onFavoriteChange}){

  const [searchQuery, setSearchQuery] = useState("")

  // Search
  const filteredMovies = movies.filter(movie => {
    return movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  })

  // Callback for DELETE
  function handleMovieDelete(id) {
    const updatedMovies = movies.filter(movie => movie.id !== id)
    setMovies(updatedMovies)
  }

  return (
    <main>
      <h2>Home</h2>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <MovieList movies={filteredMovies} onMovieDelete={handleMovieDelete} onFavoriteChange={onFavoriteChange} />
    </main>
  )
}