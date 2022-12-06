import React from "react";

export default function({movie}) {

  const {title, year, favorite, rating, description} = movie

  return (
    <tr>
      <td>{title}</td>
      <td>{year}</td>
      <td>{favorite ? "⭐️" : ""}</td>
      <td>{rating}</td>
      <td>{description}</td>
    </tr>
  )
}