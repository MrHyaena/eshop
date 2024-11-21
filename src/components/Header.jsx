import { useState } from "react";
import "./Components.css";

function Header() {
  return (
    <>
      <div className="header">
        <img src="src/assets/logo.png" alt="logo" className="logoBar"></img>
        <div className="navBar">
          <a href="https://www.google.com/">Home</a>
          <a>Shop</a>
          <a>Courses</a>
        </div>
        <div id="cart">Cart</div>
      </div>
    </>
  );
}

export default Header;
