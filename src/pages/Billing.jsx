import AllPlans from "../components/AllPlans";
import CurrentPlan from "../components/CurrentPlan";
import { useState } from "react";

const Billing = () => {
    const [activeTab, setActiveTab] = useState('currentPlan');
  return (
    <div className="common_page_container_outer">
      <div className="common_page_container_inner overflow-y-auto">
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
