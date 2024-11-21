import app from "./App.module.css";
import logo from "/src/assets/logo.png";
import backVideo from "/src/assets/mainVideo.mp4";

function App() {
  return (
    <>
      <video autoPlay muted loop className={app.mainVideo}>
        <source src={backVideo}></source>
      </video>
      <div className={app.wrapper}>
        <div className={app.header}>
          <img src={logo} alt="logo" className={app.logoBar}></img>
          <div className={app.navBar}>
            <a href="https://www.google.com/" className={app.aNav}>
              Handguns
            </a>
            <a className={app.aNav}>Rifles</a>
            <a className={app.aNav}>Ammo</a>
          </div>
        </div>
        <div className={app.panel}>
          <img src={logo} alt="logo" className={app.mainImg}></img>
          <h2>Girl! You want to be truly independent?</h2>

          <h1>Pick your own gun!</h1>

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
