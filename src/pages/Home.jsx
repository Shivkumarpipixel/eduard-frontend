import React, { useState } from "react";
import HomeBanner from "../assets/home.svg";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useTheme } from "@mui/material/styles";
import NextImage from "../assets/Next.svg";
import PrevImage from "../assets/back.svg";

import { MobileStepper } from "@mui/material";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const slides = [
    {
      // poster: "https://train.yoursupport.ai/img/rating-thumb.jpg",
      description: "This is the description for Scripts 1.",

      videoSrc:
        "https://your-support.s3.eu-west-3.amazonaws.com/3d_getting_started_2.mp4",
    },
    {
      // poster: "https://example.com/video2-thumb.jpg",
      description: "This is the description for Scripts 2.",

      src: "https://your-support.s3.eu-west-3.amazonaws.com/sample_video_1.mp4",
    },
    {
      poster: "https://example.com/video3-thumb.jpg",
      videoSrc:
        "https://your-support.s3.eu-west-3.amazonaws.com/sample_video_2.mp4",
    },
    // Add more videos here
  ];

  // const slides = [
  //   {
  //     title: "Scripts 1",
  //     description: "This is the description for Scripts 1.",
  //     videoSrc:
  //       "https://your-support.s3.eu-west-3.amazonaws.com/3d_getting_started_2.mp4",
  //   },
  //   {
  //     title: "Scripts 2",
  //     description: "This is the description for Scripts 2.",
  //     videoSrc:
  //       "https://your-support.s3.eu-west-3.amazonaws.com/3d_getting_started_2.mp4",
  //   },
  // ];
  // const maxSteps = videos.length;

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="w-full h-full bg-[#E5E5E5] p-20">
      <div className="w-full ">
        <img className="w-[1024px] " src={HomeBanner} alt="" />
      </div>
      <div className=" mt-16 rounded-xl bg-white flex flex-col space-y-4  w-[800px] h-[750px] p-8">
        <h2 className="text-4xl text-[#F1BD6C] font-semibold mb-4">
          Let's get Started!
        </h2>
        <p className="text-lg text-slate-400 ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took.
        </p>

        <div className="video_section mb-4">
          <video
            width="100%"
            height="100%"
            className="max-w-[900px] max-h-[400px]"
            controls
            poster="https://train.yoursupport.ai/img/rating-thumb.jpg"
          >
            <source src={slides[currentSlide].videoSrc} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </div>

        <div className="flex justify-between items-center mt-2 w-[372px]"></div>
      </div>

      <div className="flex justify-end mt-4">
        <button onClick={handlePrev}>
          <img src={NextImage} alt="Next" />
        </button>
        {currentSlide > 0 && (
          <button onClick={handlePrev} className="mr-80">
            <img src={PrevImage} alt="Previous" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
