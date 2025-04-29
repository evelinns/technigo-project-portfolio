import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FeaturedProjectsCard } from "./FeaturedProjectsCard";
import projectsData from "../data.json";

export const FeaturedProjects = () => {
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    pauseOnHover: true,
    focusOnSelect: true,
    arrows: true,
    centerMode: true,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 890,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          swipeToSlide: true,
        }
      },
      {
        breakpoint: 490,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipe: true,
          swipeToSlide: true,
          centerPadding: "20px", 
        }
      }
    ]
  };

  const projectsInfo = projectsData.projects;

  return <div className="slider-container">
    <h2>Featured Projects</h2>
    <Slider {...settings}>
    {projectsInfo.map((project) => (
      <div key={project.name}>
      <FeaturedProjectsCard img={project.image} title={project.name} blurb={project.blurb} netlify={project.netlify} github={project.github} />
      </div>
    ))}
    </Slider>
  </div>
}