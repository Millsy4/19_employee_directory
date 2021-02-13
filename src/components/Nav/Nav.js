import React from "react";

function Nav({ handleInputChange }) {
  return (
    <div>
      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={e => handleInputChange(e)}
        ></input>
      </form>
    </div>
  );
}

export default Nav;
