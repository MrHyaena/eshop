import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <video autoPlay muted loop id="mainVideo">
        <source src="src/assets/mainVideo.mp4"></source>
      </video>
      <div className="wrapper">
        <Header />
        <div className="panel">
          <img src="src/assets/logo.png" alt="logo" id="mainImg"></img>
          <h2>You want to be truly independent?</h2>

          <h1>Guns for ladies!</h1>

          <button className="mainButton">Let's go shopping!</button>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
