import React from "react"
import {NavLink} from "react-router-dom"

export default function NavBar(){
  return (
    <div>
      <NavLink exact to="/">Home</NavLink>
      <NavLink exact to="/favorites">Favorites</NavLink>
      <NavLink exact to="addmovie">Add Movie</NavLink>
    </div>
  )
}