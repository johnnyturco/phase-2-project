import React from "react";

export default function({movie, onMovieDelete}) {

  const {id, title, year, favorite, rating, description} = movie
  const centerText = {textAlign: "center"}

  function handleDelete() {
    fetch(`http://localhost:3000/movies/${id}`, {
      method: "DELETE"
    })
    onMovieDelete(id)
  }

  return (
    <tr>
      <td className="table-title">{title}</td>
      <td style={centerText}>{year}</td>
      <td style={centerText}>{favorite ? "⭐️" : ""}</td>
      <td style={centerText}>{rating}</td>
      <td>{description}</td>
      <td><button onClick={handleDelete}>×</button></td>
    </tr>
  )
}