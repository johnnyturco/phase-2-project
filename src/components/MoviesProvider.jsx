import React, {useState} from "react";
import { MoviesContext } from "../context";

export default function MoviesProvider({children}) {
  const [movies, setMovies] = useState([])

  return(
    <MoviesContext.Provider value={[movies, setMovies]}>
      {children}
    </MoviesContext.Provider>
  )
}