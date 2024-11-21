import { useState } from "react";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="header">
        <img src="src/assets/logo.png" alt="logo" className="logoBar"></img>
        <div className="navBar">
          <button>Home</button>
          <button>Shop</button>
          <button>Courses</button>
        </div>
        <div id="cart">Cart</div>
      </div>
    </>
  );
}

export default Header;
