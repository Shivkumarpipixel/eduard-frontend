import React, { useEffect, useState } from "react";
import HomeBanner from "../assets/BannerImage.svg";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
const apiUrl = import.meta.env.VITE_API_URL;

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const theme = useTheme();

  const slides = [
    {
      title: "Let’s get Started!.",
      description:
        "We build intelligent bots that simplify your workflow and enhance productivity. From automating tasks to optimizing processes, our solutions are designed to make your business smarter and more efficient. Discover how Automationz can drive your success forward!",
      videoSrc:
        "https://your-support.s3.eu-west-3.amazonaws.com/3d_getting_started_2.mp4",
    },
    {
      title: "Scripts",

      description:
        "We build intelligent bots that simplify your workflow and enhance productivity. From automating tasks to optimizing processes, our solutions are designed to make your business smarter and more efficient. Discover how Automationz can drive your success forward!",
      videoSrc: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    },
    {
      title: "Live Chat",

      description:
        "We build intelligent bots that simplify your workflow and enhance productivity. From automating tasks to optimizing processes, our solutions are designed to make your business smarter and more efficient. Discover how Automationz can drive your success forward!",
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

  useEffect(() => {
    // fetchUserData();
    // setActive(parseInt(user?.panel_step));
    let sso = localStorage.getItem("sso");
    if (sso !== "true") callSSOAPI();
    //  ? callSSOAPI() : console.log("api already called");
  }, []); // Empty dependency array to run only once on component mount

  async function callSSOAPI() {
    try {
      // Retrieve user_id from the cookie
      let user_id = localStorage.getItem("userId");
      // Make POST request to /dashboard/sso API
      const response = await fetch(`${apiUrl}/auth/sso`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_id: user_id }),
      });

      // Handle API response
      const response2 = await response.json();
      const responseData = response2.data;
      if (responseData === "error") {
        // If response is 'error', show an alert
      } else if (responseData.startsWith("https://")) {
        // If response is a URL, open it in a new tab
        openURLInNewTab(responseData);
        localStorage.setItem("sso", "true");
      } else {
        // Unexpected response
        console.error("Unexpected response:", responseData);
      }
    } catch (error) {
      console.error("error:", error);
      // Handle error as needed
    }
  }

  return (
    <div className="relative w-full h-full bg-gray-100 p-10">
      {/* <div className="relative w-full py-5">
        <img className="w-full h-full" src={ScriptImage} alt="Home Banner" />
        <div className="absolute inset-0 flex flex-col p-10 space-y-2 text-black ">
          <h1 className="text-5xl font-semibold">Script</h1>
          <p className="text-slate-400 font-semibold">
            Lorem Ipsum is simply dummy text of the printing.
          </p>
        </div>
      </div> */}

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
          {/* <video
            width="100%"
            height="100%"
            className="max-w-[900px] max-h-[400px]"
            controls
            poster="https://train.yoursupport.ai/img/rating-thumb.jpg"
          >
            <source src={slides[currentSlide].videoSrc} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video> */}
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/z_1xpi938bw?si=XjJ4ttcGGM5pZ2O8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
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
