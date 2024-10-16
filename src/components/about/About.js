import React from "react";
import "./About.css";
import Image from "../../assets/myphoto.jpg";
import Resume from "../../assets/Karan_Raval_Resume.pdf";
import AboutBox from "./AboutBox";

const About = () => {
  const downloadResume = async () => {
    window.open(Resume, "_blank");
    const link = document.createElement("a");
    link.href = Resume;
    link.download = "Karan_Raval_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me </h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              A Passionate Full Stack Web Developer proficient in front-end and
              full-stack technologies, with expertise in the MERN stack. Skilled
              at creating attractive, functional, and responsive websites, with
              a successful track record of building both solo and collaborative
              projects. Responsible and detail-oriented, with strong
              problemsolving and communication skills, eager to apply knowledge
              in realworld projects. An Electrical Engineering graduate
              transitioning to web development, looking forward to contributing
              innovative solutions while continuing to grow as an aspiring
              full-stack developer
            </p>
            <ul className="about__list">
              <li>HTML 5</li>
              <li>Css3</li>
              <li>Jquery</li>
              <li>C</li>
              <li>C++</li>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
            </ul>
            <button className="btn" onClick={downloadResume}>
              Donwload CV
            </button>
          </div>
        </div>
      </div>
      <AboutBox />
    </section>
  );
};

export default About;
