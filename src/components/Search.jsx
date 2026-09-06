import { useState } from "react";

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleChange(event) {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  }

  return (
    <input type="text" value={searchTerm} onChange={handleChange} placeholder="Search product"
      className="mb-8 w-full rounded-lg border p-3 outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}

export default Search;