import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import app from "./App.module.css";

function App() {
  return (
    <>
      <video autoPlay muted loop className={app.mainVideo}>
        <source src="src/assets/mainVideo.mp4"></source>
      </video>
      <div className={app.wrapper}>
        <div className={app.header}>
          <img
            src="src/assets/logo.png"
            alt="logo"
            className={app.logoBar}
          ></img>
          <div className={app.navBar}>
            <a href="https://www.google.com/" className={app.aNav}>
              Handguns
            </a>
            <a className={app.aNav}>Rifles</a>
            <a className={app.aNav}>Ammo</a>
          </div>
        </div>
        <div className={app.panel}>
          <img
            src="src/assets/logo.png"
            alt="logo"
            className={app.mainImg}
          ></img>
          <h2>You want to be truly independent?</h2>

          <h1>Guns for ladies!</h1>

          <button className={app.mainButton}>Let's go shopping!</button>
        </div>
        <div className={app.footerBar}>
          <a className={app.aFoot}>License</a>
          <a className={app.aFoot}>Term & Conditions</a>
          <a className={app.aFoot}>About Us</a>
        </div>
      </div>
    </>
  );
}

export default App;
