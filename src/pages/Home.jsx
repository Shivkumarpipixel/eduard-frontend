import React, { useState } from "react";
import HomeBanner from "../assets/home.svg";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const theme = useTheme();

  const slides = [
    {
      title: "Let’s get Started!.",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
      videoSrc:
        "https://your-support.s3.eu-west-3.amazonaws.com/3d_getting_started_2.mp4",
    },
    {
      title: "Scripts",

      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
      videoSrc: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    },
    {
      title: "Live Chat",

      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
      videoSrc: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    },
  ];

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
    <div className="relative w-full h-full bg-gray-100 p-10">
      {/* Banner */}
      <div className="w-full ml-16 ">
        <img className="w-[1024px]" src={HomeBanner} alt="Home Banner" />
      </div>

      {/* Card Section */}
      <div className="relative mt-10 rounded-xl bg-white flex flex-col space-y-2 w-[700px] h-[550px] p-6 mx-20">
        <h2
          className={`text-4xl font-semibold ${
            currentSlide === 1 || currentSlide == 2
              ? "text-black"
              : "text-[#F1BD6C]"
          } `}
        >
          {slides[currentSlide].title}
        </h2>
        <p className="text-md text-slate-400">
          {slides[currentSlide].description}
        </p>

        {/* Video Section */}
        <div className="video_section">
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
      </div>

      {/* Buttons: Positioned outside the card */}
      <div className="absolute top-1/2 left-12 transform -translate-y-1/2">
        {/* Previous Button: Only show if not on the first slide */}
        {currentSlide > 0 && (
          <button
            onClick={handlePrev}
            className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full"
          >
            <KeyboardArrowLeft />
          </button>
        )}
      </div>

      <div className="absolute top-1/2 right-48 transform -translate-y-1/2">
        {/* Next Button */}
        {currentSlide < slides.length - 1 && (
          <button
            onClick={handleNext}
            className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full"
          >
            <KeyboardArrowRight />
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
