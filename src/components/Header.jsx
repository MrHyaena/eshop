import { useState } from "react";
import styles from "./Header.module.css";

export function Header() {
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
            Home
          </a>
          <a className={styles.a}>Shop</a>
          <a className={styles.a}>Courses</a>
        </div>
        <div id="cart">Cart</div>
      </div>
    </>
  );
}
