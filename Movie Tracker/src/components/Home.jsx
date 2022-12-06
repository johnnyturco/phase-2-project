import React, {useState} from "react";
import MovieList from "./MovieList";
import Search from "./Search";

export default function Home({movies, setMovies}){

  const [searchQuery, setSearchQuery] = useState("")

  // Search
  const filteredMovies = movies.filter(movie => {
    return movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  })

  return (
    <main>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <MovieList movies={filteredMovies} />
    </main>
  )
}