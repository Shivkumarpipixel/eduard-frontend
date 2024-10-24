import AllPlans from "../components/AllPlans";
import CurrentPlan from "../components/CurrentPlan";
import { useState } from "react";

const Billing = () => {
    const [activeTab, setActiveTab] = useState('currentPlan');
  return (
    <div className="bg-[#F0F0F0] flex justify-center items-center w-full max-h-screen p-10 overflow-hidden">
      <div className="bg-white rounded-lg shadow-lg w-full h-full py-16 px-10 overflow-y-scroll">
        <h2 className="flex text-3xl font-semibold text-gray-800 mb-2 text-center">
          Plan & Billing
        </h2>
        <p className="flex text-md text-gray-500 mb-6 text-center">
          Manage your plan and payments.
        </p>

        {
            activeTab == 'currentPlan' &&
                <CurrentPlan setActiveTab={setActiveTab} />
        }

        {
            activeTab == 'allPlan' &&
                <AllPlans />
        }
      </div>
    </div>
  );
};
export default Billing;
