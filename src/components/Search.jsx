import React from "react";

export default function Search({searchQuery, setSearchQuery}) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search Movies…"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  )
}