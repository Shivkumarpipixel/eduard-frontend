import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ siderBarFn }) => {
  const profileImage = "https://via.placeholder.com/150";
  const user = { name: "John Doe" };

  const handleError = () => {};
  const navigate =  useNavigate();;

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="top_header flex justify-between h-16 bg-white p-5 pl-12">
      <div className="top_header_left flex items-center gap-2.5"></div>

      <div className="top_header_inner flex items-center gap-2.5">
        <button className="text-gray-400 hover:text-gray-500">
          {/* Bell icon SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </button>
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2.5 py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="w-10 h-10 max-w-[40px] max-h-[40px] rounded-full overflow-hidden">
              <img
                src={profileImage}
                onError={handleError}
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span className="text-gray-900">{user.name}</span>
            <svg
              className={`w-[14px] h-[8px] transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
              viewBox="0 0 14 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 1L7 7L1 1"
                stroke="#161E32"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50">
              <button
                onClick={() => {
                  navigate("/setting-profile");
                  setIsOpen(false);
                }}
                className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Profile
              </button>
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Logout
              </button>
            </div>
          )}
        </div>

        <div
          className="hum_burger_svg ml-4 cursor-pointer"
          onClick={siderBarFn}
        >
          <svg
            width="32px"
            height="32px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
