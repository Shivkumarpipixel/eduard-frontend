import React from "react";
import BlueImage from "../assets/blue.svg";
import SettingImage from "../assets/setting.svg";
import { useNavigate } from "react-router-dom";
import apiClient from "../interceptor/AuthInterceptor";
import { useEffect } from "react";
import { useState } from "react";

const Setting = () => {
  const navigate = useNavigate();
  const [teammates, setTeammates] = useState([]);
  const userId = 1;

  const setting = [
    {
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: BlueImage,
    },
    {
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: BlueImage,
    },
  ];

  useEffect(() => {
    const fetchTeammates = async () => {
      try {
        const response = await apiClient.get(`/teammate/getAll/${userId}`);
        setTeammates(response.data);
      } catch (error) {
        console.error("Error fetching teammates:", error);
      }
    };

    fetchTeammates();
  }, [userId]);

  const handleCardClick = () => {
    navigate("/setting/add-teammates");
  };
  return (
    <>
      <div className="p-6 justify-between bg-gray-100 h-full">
        <div className="relative w-full py-5">
          <img className="w-full h-full" src={SettingImage} alt="Home Banner" />
          <div className="absolute inset-0 flex flex-col p-10 space-y-2 text-black ">
            <h1 className="text-5xl font-semibold">Setting</h1>
            <p className="text-slate-400 font-semibold">
              Manage your preferences and settings here.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg border">
          <div className="flex justify-end p-6">
            <button
              onClick={() => navigate("/profile/add-teammates")}
              className="px-4 py-2 bg-yellow-400"
            >
              Add Teammate
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6 p-6 mr-6">
            {teammates.length > 0 ? (
              teammates.map((teammate, index) => (
                <div
                  key={teammate.id || index}
                  onClick={() => navigate(`/profile/${teammate.id}`)}
                  className="bg-gray-100 rounded-lg shadow-sm p-4 w-full"
                >
                  <div className="flex items-start">
                    <div
                      className="w-28 h-28 rounded-lg mr-4 flex-shrink-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${BlueImage})` }}
                    ></div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg font-semibold">
                          {teammate.name}
                        </h3>
                        <label className="flex items-center cursor-pointer">
                          <div className="relative">
                            <input type="checkbox" className="sr-only" />
                            <div className="w-10 h-6 bg-gray-400 rounded-full shadow-inner"></div>
                            <div className="dot absolute w-4 h-4 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                          </div>
                        </label>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">
                        {teammate.description || "No description available"}
                      </p>
                      <div className="flex justify-end">
                        <button className="bg-white text-black border border-black px-4 py-1 rounded text-sm hover:bg-blue-50 transition-colors">
                          Connect
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-2">
                No teammates found.
              </p>
            )}
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
    </>
  );
};

export default Setting;
