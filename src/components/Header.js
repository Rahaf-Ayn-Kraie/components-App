import React from "react";
import "../css/Header.css";

function Header() {
  return (
    <header className="header">
      <h1>My React Page</h1>
      <nav>
        <ul className="nav-list">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;