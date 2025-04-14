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
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const projectsInfo = projectsData.projects;

  return <div className="slider-container">
    <h2>Featured Projects</h2>
    <Slider {...settings}>
    {projectsInfo.map((project) => (
      <div key={project.name} style={{ padding: '0 10px' }}>
      <FeaturedProjectsCard img={project.image} title={project.name} blurb={project.blurb} netlify={project.netlify} github={project.github} />
      </div>
    ))}
    </Slider>
  </div>
}