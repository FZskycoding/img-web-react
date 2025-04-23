import React, { useState } from "react";

const Search = ({ search, setInput }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    search();
  };
  return (
    <form onSubmit={handleSubmit} className="search">
      <input className="input" onChange={inputHandler} type="text" />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
