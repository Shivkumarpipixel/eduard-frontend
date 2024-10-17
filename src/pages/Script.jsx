import React from 'react';

const Script = () => {
  const scripts = [
    { title: 'Lorem Ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', color: 'bg-pink-200' },
    { title: 'Lorem Ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', color: 'bg-yellow-200' },
    { title: 'Lorem Ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', color: 'bg-green-200' },
    { title: 'Lorem Ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', color: 'bg-blue-200' },
  ];

  return (
    <div className="p-6 bg-gray-100 h-full">
      <div className="bg-red-100 rounded-lg shadow-md p-4 mb-6">
        <h1 className="text-3xl font-bold mb-2">Scripts</h1>
        <p className="text-gray-600">Lorem Ipsum Is Simply Dummy Text Of The Printing</p>
      </div>
      <div className='bg-white p-6 rounded-lg'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {scripts.map((script, index) => (
          <div key={index} className="bg-gray-100 rounded-lg shadow-sm p-4">
            <div className="flex items-start">
              <div className={`w-28 h-28 ${script.color} rounded-lg mr-4 flex-shrink-0`}></div>
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
                <p className="text-sm text-gray-600 mb-4">{script.description}</p>
                <button className="bg-white text-blue-500 border border-blue-500 px-4 py-1 rounded text-sm hover:bg-blue-50 transition-colors">
                  Activate
                </button>
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