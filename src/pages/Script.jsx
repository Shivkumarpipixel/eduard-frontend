import React, { useState, useEffect } from "react";
import BlueImage from "../assets/blue.svg";
import RedImage from "../assets/red.svg";
import GreenImage from "../assets/green.svg";
import YellowImage from "../assets/yellow.svg";
import ScriptImage from "../assets/script.svg";
import { useNavigate } from "react-router-dom";
import constants from "../utils/constant";
import apiClient from "../interceptor/AuthInterceptor";

const scripts = [
  {
    title: "Social Auto-Reply",
    description: "Automatically respond to comments on your social media posts, keeping engagement high and customers connected.",
    image: RedImage,
    url: '/script/social-media',
    templateId: constants.TEMPLATE_IDS.SOCIAL_MEDIA_MANAGER

  },
  {
    title: "Festive Discount Messenger",
    description: "Send timely, personalized discount messages during festivals to boost customer interest and sales.",
    image: YellowImage,
    url: '/script/festive-discount',
    templateId: constants.TEMPLATE_IDS.HOLIDAY_CAMPAIGN
  },
  {
    title: "Birthday Greetings",
    description: "Deliver warm birthday wishes and special offers directly to your customers on their special day.",
    image: GreenImage,
    url: '/script/birthday-greeting',
    templateId: constants.TEMPLATE_IDS.HOLIDAY_CAMPAIGN
  },
  {
    title: "Abandoned Cart Reminder",
    description: "Reach out to customers who left items in their cart, encouraging them to complete their purchase.",
    image: BlueImage,
    url: '/script/abandoned-cart',
    templateId: constants.TEMPLATE_IDS.ABANDONED_CART
  },
];

const Script = () => {

  const navigate = useNavigate();
  const [installedTemplates, setInstalledTemplates] = useState([]);

  const getAllInstalledTemplates = async () => {
    try {
      const user_id = localStorage.getItem('userId');
      const url = `/aiSkill/getAllTemplate/${user_id}`;
      const response = await apiClient.get(url);
      if (response.status === 200) {
        let templetes = response.data.data;
        console.log(templetes);
        setInstalledTemplates(templetes);
        console.log("Data is loaded");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllInstalledTemplates();
  }, []);

  const checkInstalledTemplate = (templateId) => {
    return installedTemplates.some(
      (element) =>
        element.template_id == templateId && element.is_active === true
    );
  };

  const handleNavigate = (templateId, url) => {
    const result = installedTemplates.filter(
      (element) => element.template_id == templateId
    );
    console.log(result);
    navigate(url + '?id=' + result[0].id);
  }

  return (
    <div className="bg-gray-100 p-5 h-full">
      <div className="relative w-full py-5">
        <img className="w-full h-full" src={ScriptImage} alt="Home Banner" />
        <div className="absolute inset-0 flex flex-col p-10 space-y-2 text-black ">
          <h1 className="text-5xl font-semibold">Script</h1>
          <p className="text-slate-400 font-semibold">
            Automate offers, greetings, and replies and much more to boost customer engagement.
          </p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {scripts.map((script, index) => (
            <div key={index} className="bg-gray-100 rounded-lg shadow-sm p-4">
              <div className="flex items-start">
                <div
                  className="w-28 h-28 rounded-lg mr-4 flex-shrink-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${script.image})` }}
                ></div>
                <div className="flex-grow">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold">{script.title}</h3>
                    <label className="flex items-center cursor-pointer">
                      <div className="relative">
                        <input type="checkbox" className="sr-only" checked={checkInstalledTemplate(script.templateId) || false} />
                        <div className="w-10 h-6 bg-gray-400 rounded-full shadow-inner"></div>
                        <div className="dot absolute w-4 h-4 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                      </div>
                    </label>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    {script.description}
                  </p>
                  <div className="flex justify-end">
                    <button
                      onClick={() => handleNavigate(script.templateId, script.url)}
                      className="bg-white text-black border border-black px-4 py-1 rounded text-sm hover:bg-blue-50 transition-colors"
                    >
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
