import React, { useState } from "react";

const Search = ({ search, setInput, input }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    search();
  };
  return (
    <form onSubmit={handleSubmit} className="search">
      <input className="input" onChange={inputHandler} type="text" value={input} />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
