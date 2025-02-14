import React from "react";

function Navbar() {
  return (
    <>
      <div className="container bg-gray-400 text-white w-full h-full">
        <nav className="navBar">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">Register</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
