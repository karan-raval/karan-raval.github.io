import React from "react";
import "./Services.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/backend.png";

const data = [
  {
    id: 1,
    image: Image2,
    title: "Web Development",
    description:
      "Build client-side features using HTML, CSS, and JavaScript, focusing on layout, design, and responsiveness.",
  },
  {
    id: 2,
    image: Image1,
    title: "Front-End Development",
    description:
      "Design and develop visually appealing, interactive, and responsive user interfaces across all platforms.",
  },
  {
    id: 3,
    image: Image3,
    title: "Back-End Development",
    description:
      "Manage server-side logic, databases, and APIs to ensure seamless data flow between the server and users.",
  },
];

const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Services</h2>

      <div className="services__container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" width="80" />

              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
