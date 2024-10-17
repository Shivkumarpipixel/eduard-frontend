import React from 'react';

const Header = ({ siderBarFn }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-full mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
           
          </div>
          <div className="flex items-center space-x-6">
            <button className="text-gray-400 hover:text-gray-500">
              {/* Bell icon SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <div className="flex items-center space-x-6">
              <img src="/api/placeholder/32/32" alt="User" className="h-8 w-8 rounded-full" />
              <span className="text-sm font-medium text-gray-700">Shiv</span>
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;