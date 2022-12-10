import React, {useState} from "react";

export default function({movie, onMovieDelete, onFavoriteChange}) {

  const {id, title, year, favorite, rating, description} = movie
  const centerText = {textAlign: "center"}
  // const [isFavorite, setIsFavorite] = useState(favorite)

  function handleDelete() {
    fetch(`http://localhost:3000/movies/${id}`, {
      method: "DELETE"
    })
    onMovieDelete(id)
  }

  function handleFavoriteChange() {
    // setIsFavorite(!isFavorite)

    fetch(`http://localhost:3000/movies/${id}` ,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({favorite: !favorite})
    })
      .then(r => r.json())
      .then(updatedMovie => onFavoriteChange(updatedMovie))
  }

  return (
    <tr>
      <td className="table-title">{title}</td>
      <td style={centerText}>{year}</td>
      <td style={centerText} onClick={handleFavoriteChange}>{favorite ? "⭐️" : "☆"}</td>
      <td style={centerText}>{rating}</td>
      <td>{description}</td>
      <td><button onClick={handleDelete}>×</button></td>
    </tr>
  )
}