import { useState } from "react";
import styles from "./Header.module.css";
import board from "./Shop.module.css";
import "./toggle.css";

export function Header({ cart, cartl }) {
  const [mobileMenu, setMobileMenu] = useState(0);

  function mobileMenuState() {
    const menu = document.querySelector("#mobileMenu");
    if (menu.className === "mobileMenu") {
      menu.setAttribute("class", "mobileMenuToggle");
    } else {
      menu.setAttribute("class", "mobileMenu");
    }
  }

  function showCart() {
    const cart = document.querySelector("#cart");
    const board = document.querySelector("#board");
    if (cart.className === "cart") {
      cart.setAttribute("class", "cartToggle");
      board.setAttribute("class", "boardOff");
    } else {
      cart.setAttribute("class", "cart");
      board.setAttribute("class", "board");
    }
  }

  return (
    <>
      <div className={styles.header}>
        <img
          src="src/assets/logo.png"
          alt="logo"
          className={styles.logoBar}
        ></img>
        <div className={styles.navBar}>
          <a href="https://www.google.com/" className={styles.a}>
            Handguns
          </a>
          <a className={styles.a}>Rifles</a>
          <a className={styles.a}>Ammunition</a>
        </div>
        <button class={styles.menuControl} onClick={mobileMenuState}>
          =
        </button>
        <div className="mobileMenu" id="mobileMenu">
          <a href="https://www.google.com/" className={styles.aToggle}>
            Handguns
          </a>
          <a className={styles.aToggle}>Rifles</a>
          <a className={styles.aToggle}>Ammunition</a>
        </div>

        <div id={styles.cart}>
          <a className={styles.cartbtn} onClick={showCart}>
            {" "}
            Cart: {cartl}{" "}
          </a>
        </div>
      </div>
    </>
  );
}
