import React from "react";
import checkbox from "../assets/checkbox.svg";

const AllPlans = () => {
  return (
    <div className="common_page_container_outer">
      <div className="common_page_container_inner overflow-y-auto">
        <h2 className="flex text-3xl font-semibold text-gray-800 mb-2 text-center">
          Plan & Billing
        </h2>
        <p className="flex text-md text-gray-500 mb-6 text-center">
          Manage your plan and payments.
        </p>

        <div className="flex gap-4 my-5">
          <span>Choose your plan</span>
          <div className="bg-[#F7F7F5] px-2 py-1">
            <button className="px-2 bg-[#F1BD6C] text-white">Monthly</button>
            <button className="px-2">Yearly</button>
          </div>
        </div>

        <div className="flex gap-5">
          <div className="bg-[#F7F7F5] py-14 px-10 rounded-2xl w-full shadow-md shadow-[#F7F7F5]">
            <div>
              <p className="text-2xl font-semibold">Basic Plan</p>
              <p>For end-to-end marketing for fast-growing companies.</p>
              <p className="flex text-2xl font-semibold items-end my-4">
                $ 50 <p className="text-base text-gray-500">/month</p>
              </p>

              <ul className="space-y-3">
                <li className="flex gap-2">
                  <img src={checkbox} alt="" />
                  1000 Messages
                </li>
                <li className="flex gap-2">
                  <img src={checkbox} alt="" />1 Member
                </li>
                <li className="flex gap-2">
                  <img src={checkbox} alt="" />
                  All Channels
                </li>
                <li className="flex gap-2">
                  <img src={checkbox} alt="" />1 AI Employee
                </li>
              </ul>

              <button className="border w-full py-2 mt-10 rounded-lg bg-white">
                Upgrade Now
              </button>
            </div>
          </div>

          <div className="bg-[#F7F7F5] py-14 px-10 rounded-2xl shadow-md shadow-[#F1BD6C] w-full border-2 border-[#F1BD6C]">
            <div>
              <p className="text-2xl font-semibold">Basic Plan</p>
              <p>For end-to-end marketing for fast-growing companies.</p>
              <p className="flex text-2xl font-semibold items-end my-4">
                $ 50 <p className="text-base text-gray-500">/month</p>
              </p>

              <ul className="space-y-3">
                <li className="flex gap-2">
                  <img src={checkbox} alt="" />
                  5000 Messages
                </li>
                <li className="flex gap-2">
                  <img src={checkbox} alt="" />3 Member
                </li>
                <li className="flex gap-2">
                  <img src={checkbox} alt="" />
                  All Channels
                </li>
                <li className="flex gap-2">
                  <img src={checkbox} alt="" />1 AI Employee
                </li>
              </ul>

              <button className="border w-full py-2 mt-10 rounded-lg bg-[#F1BD6C] text-white">
                Active
              </button>
            </div>
          </div>

          <div className="bg-[#F7F7F5] py-14 px-10 rounded-2xl w-full shadow-md shadow-[#F7F7F5]">
            <div>
              <p className="text-2xl font-semibold">Basic Plan</p>
              <p>For end-to-end marketing for fast-growing companies.</p>
              <p className="flex text-2xl font-semibold items-end my-4">
                $ 50 <p className="text-base text-gray-500">/month</p>
              </p>

              <ul className="space-y-3">
                <li className="flex gap-2">
                  <img src={checkbox} alt="" />
                  12500 Messages
                </li>
                <li className="flex gap-2">
                  <img src={checkbox} alt="" />5 Member
                </li>
                <li className="flex gap-2">
                  <img src={checkbox} alt="" />
                  All Channels
                </li>
                <li className="flex gap-2">
                  <img src={checkbox} alt="" />5 Skillset
                </li>
              </ul>

              <button className="border w-full py-2 mt-10 rounded-lg bg-white">
                Upgrade Now
              </button>
            </div>
          </div>
        </div>

        <h3 className="flex text-3xl font-semibold text-gray-800 mb-2 text-center my-5">
          Billing history
        </h3>

        <table className="w-full" border="1">
          <thead className="bg-[#F7F7F5]">
            <tr>
              <th className="text-start px-4 py-2">Plan</th>
              <th className="text-start px-4 py-2">Billing</th>
              <th className="text-start px-4 py-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="text-start px-4 py-4">Basic</td>
              <td className="text-start px-4 py-4">Monthly</td>
              <td className="text-start px-4 py-4">$10</td>
            </tr>
            <tr className="border-b">
              <td className="text-start px-4 py-4">Standard</td>
              <td className="text-start px-4 py-4">Quarterly</td>
              <td className="text-start px-4 py-4">$25</td>
            </tr>
            <tr className="border-b">
              <td className="text-start px-4 py-4">Premium</td>
              <td className="text-start px-4 py-4">Yearly</td>
              <td className="text-start px-4 py-4">$100</td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default AllPlans;
