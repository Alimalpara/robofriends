import React from "react";

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <>
      <div className="pa2">
        <input
          className="tc pa3 ba b--green bg-lightest-blue grow"
          type="search"
          placeholder="Search Robots"
          // {/* themethod search change called from app to get the vlaue inputted */}
          onChange={searchChange}
        />
      </div>
    </>
  );
};

export default SearchBox;
