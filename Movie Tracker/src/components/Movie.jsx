import React from "react";

export default function({movie}) {

  const {title, year, favorite, rating, description} = movie
  const centerText = {textAlign: "center"}

  return (
    <tr>
      <td className="table-title">{title}</td>
      <td style={centerText}>{year}</td>
      <td style={centerText}>{favorite ? "⭐️" : ""}</td>
      <td style={centerText}>{rating}</td>
      <td>{description}</td>
    </tr>
  )
}