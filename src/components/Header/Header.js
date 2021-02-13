import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="container-fluid headerCon">
        <div className="row headerRow">
          <div className="col-2"></div>
          <div className="col">Employee Directory</div>
          <div className="col-2"></div>
        </div>
        <div className="row headerRow2">
          <div className="col-2"></div>
          <div className="col">Click "Name" to sort by first name!</div>
          <div className="col-2"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
