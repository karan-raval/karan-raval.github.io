import React from "react";
import "./Blog.css";
import { RiGithubLine, RiLink } from "react-icons/ri";
import Image1 from "../../assets/AdminDashboard.png";
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <section className="blog container section" id="blog">
      <h2 className="section__title">Latest Project</h2>

      <div className="portfolio__container grid">
        <motion.div
          layout
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="portfolio__card"
        >
          <div className="portfolio__thumbnail">
            <img src={Image1} alt="" className="portfolio__img" />
            <div className="portfolio__mask"></div>
          </div>

          <span className="portfolio__category">React</span>
          <h3 className="portfolio__title">Admin Dashboard</h3>
          <a
            href="https://incredible-sorbet-2c1d6e.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="portfolio__button"
          >
            <RiLink className="portfolio__button-icon" />
          </a>
          <a
            href="https://github.com/karan-raval/REACT/tree/main/Project_2"
            target="_blank"
            rel="noreferrer"
            className="portfolio__github-button"
          >
            <RiGithubLine className="portfolio__button-icon" />
          </a>
        </motion.div>
      </div>
      {/* <div className="blog__container grid">
                <div className="blog__card">
                    <div className="blog__thumb">
                        <span ><span className="blog__category">Example</span></span>
                        <span ><img src={Image1} alt="" className='blog__img' /></span>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">Example Blog</h3>
                        <div className="blog__meta">
                            <span>09 February, 2022</span>
                            <span className="blog__dot">.</span>
                            <span>Greg</span>
                        </div>
                    </div>
                </div>
            </div> */}
    </section>
  );
};

export default Blog;
