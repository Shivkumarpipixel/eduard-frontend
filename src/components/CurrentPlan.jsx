import React from "react";
import billingIcon from "../assets/billing-card-icon.svg";
import { LinearProgress } from "@mui/material";

const CurrentPlan = ({ setActiveTab }) => {
  return (
    <div>
      <div>
        <div className="flex justify-between my-10">
          <h5 className="text-xl font-semibold text-gray-800">Current plan</h5>
          <div className="flex gap-4">
            <button className="border border-black rounded-lg px-4 py-2">
              Cancel Subscription
            </button>
            <button
              className="border border-black rounded-lg  px-4 py-2"
              onClick={() => setActiveTab("allPlan")}
            >
              Change Plan
            </button>
          </div>
        </div>

        <div>
          <div>
            <h6 className="font-semibold text-gray-800">Usage</h6>
            <p className="flex text-md text-gray-500 mb-6 text-center">
              Your usage is renewed every month.
            </p>
          </div>

          <div className="flex gap-3">
            <div className="w-full bg-[#F7F7F5] rounded-xl p-8">
              <div className="flex justify-between">
                <span className="text-md font-semibold text-gray-500 text-sm">
                  Monthly plan
                </span>
                <p className="text-[#1CB07E] text-sm flex gap-1 items-center bg-[#1CB07E15] px-2 py-0.5 rounded-xl">
                  <p className="w-2 h-2 rounded-full bg-[#1CB07E]"></p> Active
                </p>
              </div>
              <h3 className="text-3xl font-semibold flex items-end mt-5">
                $100 <p className="text-gray-500 text-base">/months</p>{" "}
              </h3>
            </div>

            <div className="w-full bg-[#F7F7F5] rounded-xl p-8">
              <p className="font-semibold text-gray-500 text-sm">Renew At</p>
              <p className="text-3xl font-semibold flex items-end mt-5">
                Oct 26, 2024
              </p>
            </div>
          </div>

          <div className="flex gap-5 mt-5">
            <div className="bg-[#F7F7F5] rounded-xl w-full p-8">
              <img src={billingIcon} alt="" />
              <p className="font-semibold text-gray-500 text-sm mt-3">
                Total Messages{" "}
              </p>
              <p className="text-2xl font-semibold flex items-end my-3">
                100 of 2000
              </p>
              <LinearProgress
                variant="determinate"
                value={30}
                sx={{
                  backgroundColor: "#FFFFFF",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#F1BD6C", // Customize the bar color
                  },
                }}
              />
            </div>

            <div className="bg-[#F7F7F5] rounded-xl w-full p-8">
              <img src={billingIcon} alt="" />
              <p className="font-semibold text-gray-500 text-sm mt-3">
                Used Messages
              </p>
              <p className="text-2xl font-semibold flex items-end my-3">
                100 of 2000
              </p>
              <LinearProgress
                variant="determinate"
                value={30}
                sx={{
                  backgroundColor: "#FFFFFF",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#F1BD6C", // Customize the bar color
                  },
                }}
              />
            </div>

            <div className="bg-[#F7F7F5] rounded-xl w-full p-8">
              <img src={billingIcon} alt="" />
              <p className="font-semibold text-gray-500 text-sm mt-3">
                Total skillset
              </p>
              <p className="text-2xl font-semibold flex items-end my-3">
                100 of 2000
              </p>
              <LinearProgress
                variant="determinate"
                value={30}
                sx={{
                  backgroundColor: "#FFFFFF",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#F1BD6C", // Customize the bar color
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentPlan;
