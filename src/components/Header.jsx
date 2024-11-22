import { useState } from "react";
import styles from "./Header.module.css";

export function Header({ cart }) {
  let cartLength = cart.length;
  console.log(cartLength);

  const [mobileMenu, setMobileMenu] = useState(0);

  function changeClassNav() {
    const mMenu = document.getElementById("mobileMenu");

    if (mobileMenu == 0) {
      mMenu.classList.remove("_mobileMenu_1nfx3_56");
      mMenu.classList.add("mobileMenuOpen");
      setMobileMenu(1);
    } else {
      mMenu.classList.remove("mobileMenuOpen");
      mMenu.classList.add("_mobileMenu_1nfx3_56");
      setMobileMenu(0);
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
        <button class={styles.menuControl} onClick={changeClassNav}>
          =
        </button>
        <div className={styles.mobileMenu} id="mobileMenu">
          <a href="https://www.google.com/" className={styles.a}>
            Handguns
          </a>
          <a className={styles.a}>Rifles</a>
          <a className={styles.a}>Ammunition</a>
        </div>
        <div id={styles.cart}>
          <a className={styles.a}> Cart: {cartLength} </a>
        </div>
      </div>
    </>
  );
}
