import React, { useState } from "react";
import "./Portfolio.css";
import { RiGithubLine, RiLink } from "react-icons/ri";
import { motion } from "framer-motion";

import Work1 from "../../assets/bt1.png";
import Work2 from "../../assets/react1.png";
import Work3 from "../../assets/bt2.png";
import Work4 from "../../assets/jspro.png";

const Menu = [
  {
    id: 1,
    image: Work1,
    title: "Bootstrap Project-1",
    category: ["Frontend"],
    url: "https://my-first-website-bay.vercel.app",
    repositoryUrl: "https://github.com/karan-raval/my-first-website",
  },
  {
    id: 2,
    image: Work2,
    title: "NAYKAA CLONE",
    category: ["React"],
    url: "https://gentle-queijadas-99e549.netlify.app",
    repositoryUrl: "https://github.com/karan-raval/REACT/tree/main/Project_1",
  },
  {
    id: 3,
    image: Work3,
    title: "Bootstrap Project-2",
    category: ["Frontend"],
    url: "https://profound-gumption-fd67b9.netlify.app",
    repositoryUrl: "https://github.com/karan-raval/BOOTSTRAP-WEBSITE-2-PROJECT",
  },
  {
    id: 5,
    image: Work4,
    title: "FLIPKART CLONE",
    category: ["Js"],
    url: "https://js-api-project-jet.vercel.app/",
    repositoryUrl: "https://github.com/karan-raval/JS-API-Project",
  },
];

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const [activeFilter, setActiveFilter] = useState(0);

  const filterItems = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) =>
      curElem.category.includes(categoryItem)
    );
    setItems(updatedItems);
  };

  return (
    <section className="portfolio container section" id="portfolio">
      <h2 className="section__title">Recent Projects</h2>

      <div className="portfolio__filters">
        <span
          className={
            activeFilter === 0
              ? "portfolio__item portfolio__item-active"
              : "portfolio__item"
          }
          onClick={() => {
            setItems(Menu);
            setActiveFilter(0);
          }}
        >
          All
        </span>
        <span
          className={
            activeFilter === 1
              ? "portfolio__item portfolio__item-active"
              : "portfolio__item"
          }
          onClick={() => {
            filterItems("Frontend");
            setActiveFilter(1);
          }}
        >
          Frontend
        </span>
        
        <span
          className={
            activeFilter === 3
              ? "portfolio__item portfolio__item-active"
              : "portfolio__item"
          }
          onClick={() => {
            filterItems("Js");
            setActiveFilter(3);
          }}
        >
          JavaScript
        </span>
        <span
          className={
            activeFilter === 4
              ? "portfolio__item portfolio__item-active"
              : "portfolio__item"
          }
          onClick={() => {
            filterItems("React");
            setActiveFilter(4);
          }}
        >
          React
        </span>
      </div>

      <div className="portfolio__container grid">
        {items.map((elem) => {
          const { id, image, title, category, url, repositoryUrl } = elem;

          return (
            <motion.div
              layout
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="portfolio__card"
              key={id}
            >
              <div className="portfolio__thumbnail">
                <img src={image} alt="" className="portfolio__img"  />
                <div className="portfolio__mask"></div>
              </div>

              <span className="portfolio__category">
                {category.join(", ")}
              </span>
              <h3 className="portfolio__title">{title}</h3>
              {url && (
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="portfolio__button"
                >
                  <RiLink className="portfolio__button-icon" />
                </a>
              )}
              <a
                href={repositoryUrl}
                target="_blank"
                rel="noreferrer"
                className="portfolio__github-button"
              >
                <RiGithubLine className="portfolio__button-icon" />
              </a>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
