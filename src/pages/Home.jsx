import React, { useState } from 'react';
import HomeBanner from "../assets/home.svg";
// import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Home = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    {
      title: "Welcome To Setter With AI",
      subtitle: "Let's Explore And Start Our Journey!",
      heading: "Let's get Started!",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took."
    },
    {
      title: "Live Chat",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took."
    },
    {
      title: "Scripts",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took."
    }
  ];

  const handleNext = () => {
    setCurrentPage(prev => Math.min(prev + 1, pages.length - 1));
  };

  const handlePrev = () => {
    setCurrentPage(prev => Math.max(prev - 1, 0));
  };

  return (
    <div className="bg-gray-50 p-4">
      <div className="max-w-full p-6 mx-auto">
        {currentPage === 0 && (
          <div className="bg-[#FFF5E9] rounded-lg p-6 mb-6">
            <h1 className="text-2xl font-semibold text-gray-800">{pages[0].title}</h1>
            <p className="text-gray-600 mt-1">{pages[0].subtitle}</p>
          </div>
        )}

        <div className="relative h-screen-full">
          <div className="bg-white shadow-sm">
            <div className="p-6">
              <h2 className={`text-xl font-semibold ${currentPage === 0 ? 'text-orange-400' : 'text-gray-800'}`}>
                {currentPage === 0 ? pages[0].heading : pages[currentPage].title}
              </h2>
              <p className="text-gray-600 text-sm mt-2">
                {pages[currentPage].description}
              </p>

              <div className="relative mt-6 rounded-lg bg-gray-100 w-full h-full flex items-center justify-center">
                <div className="absolute top-4 left-4">
                  <img src="/api/placeholder/24/24" alt="Setter With AI" className="h-6" />
                </div>
                
                <div className="w-12 h-12 rounded-full bg-orange-300 flex items-center justify-center">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                </div>
                
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                </div>
                
                <div className="absolute bottom-4 right-4 flex items-center gap-2">
                  <span className="text-sm text-gray-600">0:12</span>
                </div>
              </div>
            </div>
          </div>

          {/* Overlay Navigation Arrows */}
          <div className="absolute inset-y-0 left-10 right-0 flex items-center justify-between pointer-events-none">
            <div className="pointer-events-auto">
              {currentPage > 0 && (
                <button
                  onClick={handlePrev}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg -ml-5 hover:bg-gray-50"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>
              )}
            </div>
            
            <div className="pointer-events-auto">
              {currentPage < pages.length - 1 && (
                <button
                  onClick={handleNext}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg -mr-5 hover:bg-gray-50"
                >
                  <ChevronRight className="w-6 h-6 text-gray-600" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;