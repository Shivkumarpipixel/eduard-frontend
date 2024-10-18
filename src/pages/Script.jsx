import React from "react";
import BlueImage from "../assets/blue.svg";
import RedImage from "../assets/red.svg";
import GreenImage from "../assets/green.svg";
import YellowImage from "../assets/yellow.svg";
import ScriptImage from "../assets/script.svg";

const Script = () => {
  const scripts = [
    {
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: RedImage,
    },
    {
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: YellowImage,
    },
    {
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: GreenImage,
    },
    {
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      color: "bg-blue-200",
      image: BlueImage,
    },
  ];

  return (
    <div className="p-6 bg-gray-100 h-full">
      <div className="relative w-full py-5">
        <img className="w-full h-full" src={ScriptImage} alt="Home Banner" />
        <div className="absolute inset-0 flex flex-col p-10 space-y-2 text-black ">
          <h1 className="text-5xl font-semibold ">Connect Channels</h1>
          <p className="text-slate-400 font-semibold">
            Lorem Ipsum is simply dummy text of the printing.
          </p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {scripts.map((script, index) => (
            <div key={index} className="bg-gray-100 rounded-lg shadow-sm p-4">
              <div className="flex items-start">
                <div
                  className="w-28 h-28 rounded-lg mr-4 flex-shrink-0 bg-cover  bg-center"
                  style={{ backgroundImage: `url(${script.image})` }}
                ></div>
                <div className="flex-grow">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold">{script.title}</h3>
                    <label className="flex items-center cursor-pointer">
                      <div className="relative">
                        <input type="checkbox" className="sr-only" />
                        <div className="w-10 h-6 bg-gray-400 rounded-full shadow-inner"></div>
                        <div className="dot absolute w-4 h-4 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                      </div>
                    </label>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    {script.description}
                  </p>
                  <div className="flex justify-end">
                    <button className="bg-white text-black border border-black px-4 py-1 rounded text-sm hover:bg-blue-50 transition-colors">
                      Connect
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .dot {
          top: 0.2rem;
          left: 0.2rem;
          transition: all 0.3s ease-in-out;
        }
        input:checked ~ .dot {
          transform: translateX(100%);
        }
        input:checked ~ div:first-of-type {
          background-color: #3b82f6;
        }
      `}</style>
    </div>
  );
};

export default Script;
