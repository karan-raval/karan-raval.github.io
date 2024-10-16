import React, { useEffect } from "react";
import "./Home.css";
import Me from "../../assets/2.gif";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";
import Typed from "typed.js";

const Home = () => {
  useEffect(() => {
    const options = {
      strings: [
        "Full-Stack Web Development.", 
        "Backend Development", 
        "Frontend  Development", 
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    };
    
    const typed = new Typed(".typing-text", options);

    return () => {
      typed.destroy();
    };
  }, []); 

  return (
    <>
        <section className="home container" id="home">
          <div className="intro">
            <img src={Me} className="home__img" width="320" alt="Karan Raval" />
            <h1 className="home__name">Karan Raval</h1>
            <span className="home__education">
              I'm into <span className="typing-text"></span>
            </span>
            <HeaderSocials />
            <ScrollDown />
          </div>
          <Shapes />
        </section>
    </>
  );
};

export default Home;
