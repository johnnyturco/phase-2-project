import React, {useState, useEffect} from 'react'
import {Route, Switch} from "react-router-dom"
import NavBar from "./NavBar"
import Home from "./Home"
import Favorites from "./Favorites"
import AddMovie from "./AddMovie"

function App() {

  const [movies, setMovies] = useState([])

  // GET Request
  useEffect(() => {
    fetch('http://localhost:3000/movies')
      .then(r => r.json())
      .then(moviesFromServer => setMovies(moviesFromServer))
  }, [])

  function handleSubmit(newMovie){
    setMovies(prevMovies => {
      return [...prevMovies, newMovie]
    })
  }

  function handleFavoriteChange(updatedMovie) {
    setMovies(prevMovies => prevMovies.map(movie => {
      if(movie.id === updatedMovie.id) {
        return updatedMovie;
      } else {
        return movie
      }
    }))
  }

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/favorites"><Favorites movies={movies} setMovies={setMovies} onFavoriteChange={handleFavoriteChange} /></Route>
        <Route path="/addmovie"><AddMovie onSubmit={handleSubmit} /></Route>
        <Route path="/"><Home movies={movies} setMovies={setMovies} onFavoriteChange={handleFavoriteChange} /></Route>
      </Switch>
    </div>
  )
}

export default App
