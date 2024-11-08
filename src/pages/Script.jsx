import React, { useState, useEffect } from "react";
import BlueImage from "../assets/blue.svg";
import RedImage from "../assets/red.svg";
import GreenImage from "../assets/green.svg";
import YellowImage from "../assets/yellow.svg";
import ScriptImage from "../assets/script.svg";
import { useNavigate } from "react-router-dom";
import constants from "../utils/constant";
import apiClient from "../interceptor/AuthInterceptor";

const Script = () => {

  const userId = localStorage.getItem('userId');
  const navigate = useNavigate();
  const [installedTemplates, setInstalledTemplates] = useState([]);

  const scripts = [
    {
      title: "Social Auto-Reply",
      description: "Automatically respond to comments on your social media posts, keeping engagement high and customers connected.",
      image: RedImage,
      url: '/script/social-media',
      templateId: constants.TEMPLATE_IDS.SOCIAL_MEDIA_MANAGER,
      toggleActivate: (data) => toggleSmmCampaign(data)
  
    },
    {
      title: "Festive Discount Messenger",
      description: "Send timely, personalized discount messages during festivals to boost customer interest and sales.",
      image: YellowImage,
      url: '/script/festive-discount',
      templateId: constants.TEMPLATE_IDS.HOLIDAY_CAMPAIGN,
      toggleActivate: (data) => toggleHolidayCampaign(data)
    },
    {
      title: "Birthday Greetings",
      description: "Deliver warm birthday wishes and special offers directly to your customers on their special day.",
      image: GreenImage,
      url: '/script/birthday-greeting',
      templateId: constants.TEMPLATE_IDS.BIRTHDAY_CAMPAIGN,
      toggleActivate: (data) => toggleBirthdayCampaign(data)
    },
    {
      title: "Abandoned Cart Reminder",
      description: "Reach out to customers who left items in their cart, encouraging them to complete their purchase.",
      image: BlueImage,
      url: '/script/abandoned-cart',
      templateId: constants.TEMPLATE_IDS.ABANDONED_CART,
      toggleActivate: (data) => toggleAbandonedCartCampaign(data)
    },
  ];

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
    navigate(url + '?id=' + result[0]?.id);
  }

  const toggleHolidayCampaign =  async (data) => {
    if (data) {
      try {
        // Toggle the values and update the state immediately
        const updatedFormData = {
          ...data,
          is_Holiday_Campaigns_required: data.is_Holiday_Campaigns_required === "true" ? "false" : "true",
          is_active: data.is_Holiday_Campaigns_required === "true" ? false : true,
          userId: userId,
        };

        console.log(updatedFormData);

        const url = `/aiSkill/uninstallHolidaycampaign`;
        const response = await apiClient.post(url, updatedFormData, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.status === 200) {
          console.log(response.data);
          getAllInstalledTemplates();
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }

  };


  const toggleBirthdayCampaign = async (data) => {
    try {
      // Toggle the values and update the state immediately
      const updatedFormData = {
        ...data,
        is_birthday_campaign_required:
          data.is_birthday_campaign_required === "true" ? "false" : "true",
        is_active:
          data.is_birthday_campaign_required === "true" ? false : true,
        user_id: userId,
      };

      console.log(updatedFormData);
      // Optionally make an API call if needed
      const url = `/aiSkill/uninstallBirthdaycampaign`;
      const response = await apiClient.post(url, updatedFormData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        console.log(response.data);
        getAllInstalledTemplates();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const toggleAbandonedCartCampaign = async (data) => {
    try {
      // Toggle the values and update the state immediately
      const updatedFormData = {
        ...data,
        Is_Abandoned_Cart_Required:
          data.Is_Abandoned_Cart_Required === "true" ? "false" : "true",
        is_active:
          data.Is_Abandoned_Cart_Required === "true" ? false : true,
        chatbot_id: chatbotId,
      };

      console.log(updatedFormData);
      const url = `/aiSkill/uninstallAbandonedCart`;
      const response = await apiClient.post(url, updatedFormData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        console.log(response.data);
        getAllInstalledTemplates();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const toggleSmmCampaign = async (data) => {
    console.log(data)
    try {
      // Toggle the values and update the state immediately
      const updatedFormData = {
        ...data,
        is_Social_Media_Manager_required:
        data.is_Social_Media_Manager_required === "true"
            ? "false"
            : "true",
        is_active:
        data.is_Social_Media_Manager_required === "true" ? false : true,
        user_id: userId,
      };

      console.log(updatedFormData);
      const url = `/aiSkill/uninstallSocialMedia`;
      const response = await apiClient.post(url, updatedFormData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        console.log(response.data);
        getAllInstalledTemplates();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };



  const handleDeactivate = (script) => {

    const data = installedTemplates.filter(
      (element) =>
        element.template_id == script.templateId && element.is_active === true
    );

    if (data) {
      console.log(data[0].template_data)
      script.toggleActivate(data[0].template_data); // Calls the specific deactivation function
    }

  }


  return (
    <div className="bg-gray-100 p-5 h-full">
      <div className="relative w-full py-5">
        <img className="w-full h-full" src={ScriptImage} alt="Home Banner" />
        <div className="absolute inset-0 flex flex-col p-10 space-y-2 text-black ">
          <h1 className="text-5xl font-semibold">Automations</h1>
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
                        <input type="checkbox" className="sr-only" checked={checkInstalledTemplate(script.templateId) || false} onClick={() => handleDeactivate(script)} />
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
