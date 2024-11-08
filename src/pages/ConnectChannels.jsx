import React from "react";
import NoProfileImage from "../assets/login.png";
import WhatsAppImage from "../assets/whatsapp.svg";
import FacebookImage from "../assets/facebook.svg";
import InstagramImage from "../assets/instagram.svg";
import ChannelImage from "../assets/channels.svg";
import { useNavigate } from "react-router-dom";


const ConnectChannels = () => {

  const navigate = useNavigate();

  const channels = [
    {
      title: "Facebook",
      description:
        "Engage with your audience on Facebook by connecting seamlessly, allowing for automated responses, post scheduling, and insightful analytics to drive brand interaction.",
      image: FacebookImage,
      url:'/channel/facebook'
    },
    {
      title: "Instagram",
      description:
        "Connect with Instagram to streamline posting, manage direct messages, and monitor audience engagement, keeping your profile active and responsive.",
      image: InstagramImage,
      url:'/channel/instagram'
    },
    {
      title: "WhatsApp",
      description:
        "Stay close to your customers on WhatsApp by automating responses, sending notifications, and managing inquiries in real-time for quick, efficient support.",
      image: WhatsAppImage,
      url:'/channel/whatsapp'
    },
  ];

  const handleNavigate = (url) => {
    console.log(url);
    navigate(url);
  }

  return (
    <div className="p-6 bg-gray-100 space-y-6 h-full">
      <div className="relative w-full py-5">
        <img className="w-full h-full" src={ChannelImage} alt="Home Banner" />
        <div className="absolute inset-0 flex flex-col p-10 space-y-2 text-black ">
          <h1 className="text-5xl font-semibold">Connect Channels</h1>
          <p className="text-slate-400 font-semibold">
            Connect channels to automate engagement and streamline communication.
          </p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl">
        <div className="grid grid-cols-3 md:grid-cols-2 gap-6">
          {channels.map((channel, index) => (
            <div key={index} className="bg-gray-100 rounded-lg shadow-sm p-4">
              <div className="flex items-start">
                <div
                  className="w-28 h-28 rounded-lg mr-4 flex-shrink-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${channel.image})` }}
                ></div>
                <div className="flex-grow">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold">{channel.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    {channel.description}
                  </p>
                  <div className="flex justify-end">
                    <button
                      key={index}
                      onClick={() => handleNavigate(channel.url)}
                      className="bg-white text-black border border-black px-4 py-1 rounded text-sm hover:bg-blue-50 transition-colors">
                      Connect
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConnectChannels;
