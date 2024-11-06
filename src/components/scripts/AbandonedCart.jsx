import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import apiClient from "../../interceptor/AuthInterceptor";
// import { toast } from "react-toastify";

const AbandonedCart = ({
  chatbotId,
  setActivePage,
  templateData,
  getAllInstalledTemplates,
}) => {
  const [formData, setFormData] = useState({
    Abandon_Cart_Time_in_Hours: 0,
    Abandoned_Cart_Message1_Time: '',
    Abandoned_Cart_Message2_Time: '',
    Abandoned_Cart_Message3_Time: '',
    Abandoned_Cart_Message1_discount: 0,
    Abandoned_Cart_Message2_discount: 0,
    Abandoned_Cart_Message3_discount: 0,
    Abandoned_Cart_Message1_Discount_type: "percentage",
    Abandoned_Cart_Message2_Discount_type: "percentage",
    Abandoned_Cart_Message3_Discount_type: "percentage",
  });

  const [isAbandonedCartRequired, setIsAbandonedCartRequired] = useState(false);
  const navigate = useNavigate();

  const handleChange = (field, value) => {
    if (field === "Abandon_Cart_Time_in_Hours" && (value < 0 || value > 90)) {
      return;
    }
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));
  };

  const installAbandonedCart = async () => {
    try {
      const url = `/aiSkill/installAbandonedCart`;
      console.log(url);
      const response = await apiClient.post(url, {
        ...formData,
        Is_Abandoned_Cart_Required: "true",
        is_active: true,
        chatbot_id: chatbotId,
        Abandoned_Cart_Message1_Time_in_Minutes: convertDelayInMinutes(formData.Abandoned_Cart_Message1_Time_type, formData.Abandoned_Cart_Message1_Time),
        Abandoned_Cart_Message2_Time_in_Minutes: convertDelayInMinutes(formData.Abandoned_Cart_Message2_Time_type, formData.Abandoned_Cart_Message2_Time),
        Abandoned_Cart_Message3_Time_in_Minutes: convertDelayInMinutes(formData.Abandoned_Cart_Message3_Time_type, formData.Abandoned_Cart_Message3_Time),
      }, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) {
        console.log("Abandoned template added");
        // toast.success("Data saved successfully");
        getAllInstalledTemplates();
      }
    } catch (error) {
      console.error("Error:", error);
    //   toast.error("Error saving data");
    }
  };

  const convertDelayInMinutes = (delayType, delay) => {
    if (delayType === "hours") return delay * 60;
    if (delayType === "days") return delay * 60 * 24;
    return parseInt(delay); // Assume minutes if no type
  };

  useEffect(() => {
    if (templateData?.[0]?.template_data) {
      setFormData(templateData[0].template_data);
    }
  }, [templateData]);

  return (
    <div className="common_page_container_outer">
      <div className="common_page_container_inner overflow-auto">
        <div className='lg:w-1/2 w-full'>
          <div className="cm_title_head">
            <h3 className="flex text-3xl font-semibold text-gray-800 mb-2 text-center">Abandoned Cart Settings</h3>
            <p className="flex text-md text-gray-500 mb-6 text-center">Configure your abandoned cart messages below.</p>
          </div>

          <div className='mb-6'>
            <label className='text-sm font-medium text-gray-700'>Enable Abandoned Cart Messages?</label>
            <input
              type="checkbox"
              checked={isAbandonedCartRequired}
              onChange={(e) => setIsAbandonedCartRequired(e.target.checked)}
              className='ml-2'
            />
          </div>

          {isAbandonedCartRequired && (
            <>
              {[1, 2, 3].map((msgNum) => (
                <div key={msgNum} className='mb-6'>
                  <label className='text-sm font-medium text-gray-700'>Message {msgNum}:</label>
                  <textarea
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm sm:text-sm mt-2'
                    placeholder={`Enter Abandoned Cart Message ${msgNum}`}
                    rows={2}
                    value={formData[`Abandoned_Cart_Message${msgNum}`]}
                    onChange={(e) => handleChange(`Abandoned_Cart_Message${msgNum}`, e.target.value)}
                  ></textarea>

                  <label className='text-sm font-medium text-gray-700 mt-4'>Time Delay for Message {msgNum} (in Minutes):</label>
                  <input
                    type="number"
                    placeholder="Time in minutes"
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm sm:text-sm mt-2'
                    value={formData[`Abandoned_Cart_Message${msgNum}_Time`]}
                    onChange={(e) => handleChange(`Abandoned_Cart_Message${msgNum}_Time`, e.target.value)}
                  />

                  <label className='text-sm font-medium text-gray-700 mt-4'>Discount for Message {msgNum}:</label>
                  <div className='flex gap-3 mt-2'>
                    <input
                      type="number"
                      placeholder="Discount percentage"
                      className='w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm sm:text-sm'
                      value={formData[`Abandoned_Cart_Message${msgNum}_discount`]}
                      onChange={(e) => handleChange(`Abandoned_Cart_Message${msgNum}_discount`, e.target.value)}
                    />
                    <select
                      className='w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm sm:text-sm'
                      value={formData[`Abandoned_Cart_Message${msgNum}_Discount_type`]}
                      onChange={(e) => handleChange(`Abandoned_Cart_Message${msgNum}_Discount_type`, e.target.value)}
                    >
                      <option value="percentage">Percentage</option>
                      <option value="fixed">Fixed Amount</option>
                    </select>
                  </div>
                </div>
              ))}

              <div className='mb-6'>
                <label className='text-sm font-medium text-gray-700'>Preferred Channel for Abandoned Cart Messages:</label>
                <select
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm sm:text-sm mt-2'
                  value={formData.preferred_channel}
                  onChange={(e) => handleChange("preferred_channel", e.target.value)}
                >
                  <option value="email">Email</option>
                  <option value="sms">SMS</option>
                  <option value="whatsapp">WhatsApp</option>
                </select>
              </div>
            </>
          )}

          <div className="flex gap-4 mt-4">
            <button
              onClick={() => navigate('../../script')}
              className="py-2 px-8 text-black font-semibold rounded-lg border-2 border-black"
            >
              Cancel
            </button>
            <button
              onClick={installAbandonedCart}
              className="py-2 px-8 bg-[#F1BD6C] text-white font-semibold rounded-lg hover:bg-[#e0a635] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbandonedCart;
