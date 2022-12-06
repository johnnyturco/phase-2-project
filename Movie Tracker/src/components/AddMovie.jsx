import React, {useState} from "react";

export default function AddMovie({onSubmit}){

  const defaultFormData = {
    title: "",
    year: "",
    rating: "",
    description: "",
    favorite: false
  }

  const [formData, setFormData] = useState(defaultFormData)

  function handleChange(e) {
    const {name, value, type, checked} = e.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

function handleSubmit(e) {
  e.preventDefault()

  fetch('http://localhost:3000/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(r => r.json())
      .then(newMovie => {
        onSubmit(newMovie)
      })
  setFormData(defaultFormData)
}

  return (
    <div className="add-movie-form">
      <h2>Add Movie</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Movie Title"
          value={formData.title}
          onChange={handleChange}
        />
        <input
          type="number"
          name="year"
          placeholder="Release Year"
          value={formData.year}
          onChange={handleChange}
        />
        <input
          type="number"
          name="rating"
          placeholder="Rating"
          value={formData.rating}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <div className="add-movie-favorite">
          <input
            type="checkbox"
            name="favorite"
            id="favorite"
            checked={formData.favorite}
            onChange={handleChange}
            className="add-movie-favorite-checkbox"
          />
          <label htmlFor="favorite">Favorite</label>
        </div>
        <button type="submit">Add Movie</button>
      </form>
    </div>
  )
}