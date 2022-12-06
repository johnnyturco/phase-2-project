import React from "react";

export default function Search({searchQuery, setSearchQuery}) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search movies…"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  )
}