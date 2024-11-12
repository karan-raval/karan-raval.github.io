import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import GitHubCalendar from 'react-github-calendar';
import "swiper/css";
import 'swiper/css/navigation';
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
const Testimonials = () => {
  

  return (
    <section className="testimonials container section">
      <h2 className="section__title">Github Stats</h2>

      <Swiper
        className="testimonial__container grid"
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        cssMode={true}
        navigation={true}
        // spaceBetween={30}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
      >
            
            <SwiperSlide className="testimonial__item">
              <img id="github-streak-stats" className="imgs" src="https://github-readme-streak-stats.herokuapp.com/?user=karan-raval&theme=transparent" alt="GitHub Streak Stats" />
            </SwiperSlide>
            <SwiperSlide className="testimonial__item">
              <div className="thumb">
               <GitHubCalendar username="karan-raval"/>
              </div>
            </SwiperSlide>
            <SwiperSlide className="testimonial__item imgs">
               <img id="github-stats-card" src="https://github-readme-stats.vercel.app/api?username=karan-raval&theme=transparent&show_icons=true&locale=en" alt="GitHub Stats Card" />
            </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
