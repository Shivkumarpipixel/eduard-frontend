import { useState, useEffect } from "react";
import InputField from "../../Layout/InputField";
import { useNavigate } from "react-router-dom";
import apiClient from "../../interceptor/AuthInterceptor";
import { useToast } from "../../context/ToastProvider";

const FestivalCampaign = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const showToast = useToast();

  const installHolidaycampaign = async () => {
    console.log(formData);
    const user_id = localStorage.getItem("userId");
    try {
      // Modifying formData before sending to backend
      formData.is_Holiday_Campaigns_required = "true";
      formData.user_id = user_id;
      formData.is_active = true;
      formData.holiday_ai_campaign_product =
        formData.promote_product == "yes" ? formData.product_name : "no";
      formData.holiday_ai_campaign_purpose =
        formData.campaign_purpose == "discount"
          ? `wish with ${formData.discount_percent}% discount using coupon ${formData.coupon_code}`
          : "wish only";
      console.log(formData);

      const url = `/aiSkill/installHolidaycampaign`;
      const response = await apiClient.post(url, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) {
        console.log("Birthday campain templete added");
        showToast("Data  saved successfully!", "success");
      }
    } catch (error) {
      console.error("Error:", error);

      showToast("An error occurred while saving the profile.", "error");
    }
  };

  const handleChange = (field, value) => {
    if (field === "discount_percent") {
      const numberValue = Number(value);

      if (numberValue < 0) {
        return;
      }
      if (numberValue > 100) {
        return;
      }
    }
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));
  };

  const getTemplateById = async () => {
    try {
      const query = new URLSearchParams(location.search);
      const id = query.get("id");

      // Check if id is neither undefined nor "undefined" nor null
      if (id && id !== "undefined") {
        const url = `/aiSkill/getData/${id}`;
        const response = await apiClient.get(url);
        if (response.status === 200) {
          let template = response.data;
          console.log(template);
          setFormData(template.template_data || {});
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTemplateById();
  }, []);

  return (
    <div className="common_page_container_outer">
      <div className="common_page_container_inner overflow-auto">
        <div className="lg:w-1/2 w-full">
          <div className="cm_title_head">
            <div className="cm_title_wrap">
              <h3 className=" flex text-3xl font-semibold text-gray-800 mb-2 text-center">
                Skill Set Settings
              </h3>
              <p className="flex text-md text-gray-500 mb-6 text-center">
                Enter the required information below.
              </p>
            </div>
          </div>

          <InputField
            name="role" // Pass the name prop here
            label={"Persona"}
            placeholder={"Persona"}
            type="text"
            value={formData.holiday_ai_persona}
            onChange={(ev) =>
              handleChange("holiday_ai_persona", ev.target.value)
            }
          />

          <InputField
            name="role" // Pass the name prop here
            label={"Role"}
            placeholder={"Role"}
            type="text"
            value={formData.holiday_ai_role}
            onChange={(ev) => handleChange("holiday_ai_role", ev.target.value)}
          />

          <div className="mb-6">
            <label className="text-sm font-medium text-gray-700">
              For which holiday would you like to send a promotion?
            </label>
            <select
              name="holiday_name" // Pass the name prop here
              label={"For which holiday would you like to send a promotion?"}
              placeholder={"Select holiday"}
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm sm:text-sm mt-2"
              value={formData.holiday_ai_campaign_details}
              onChange={(ev) =>
                handleChange("holiday_ai_campaign_details", ev.target.value)
              }
            >
              <option value="new_year">New Year</option>
              <option value="easter">Easter</option>
              <option value="easter">Black friday</option>
            </select>
          </div>

          <label className="text-sm font-medium text-gray-700">
            Goal of the campaign:
          </label>

          <div className="flex gap-5 mb-6 mt-2">
            <div className="flex gap-1 items-center">
              <input
                type="radio"
                id="wish_only"
                className="w-6 h-6 bg-gray-100 border-gray-300"
                value="wish_only"
                checked={formData.campaign_purpose === "wish_only"}
                onChange={(ev) =>
                  handleChange("campaign_purpose", ev.target.value)
                }
              />
              <label
                className="text-sm font-medium text-gray-700"
                htmlFor="wish_only"
              >
                Only wish
              </label>
            </div>

            <div className="flex gap-1 items-center">
              <input
                type="radio"
                id="wish_discount"
                className="w-6 h-6 bg-gray-100 border-gray-300"
                value="discount"
                checked={formData.campaign_purpose === "discount"}
                onChange={(ev) =>
                  handleChange("campaign_purpose", ev.target.value)
                }
              />
              <label
                className="text-sm font-medium text-gray-700"
                htmlFor="wish_discount"
              >
                Wish & discount
              </label>
            </div>
          </div>

          <div>
            <label htmlFor="">How much discount would you like to offer?</label>
            <div className="flex gap-3 mt-2">
              <div className="w-full">
                <InputField
                  name="role" // Pass the name prop here
                  placeholder={"20%"}
                  type="number"
                  min={0}
                  max={100}
                  value={formData.discount_percent}
                  className="form-control"
                  onChange={(ev) =>
                    handleChange("discount_percent", ev.target.value)
                  }
                />
              </div>
              <div className="w-full">
                <InputField
                  name="role" // Pass the name prop here
                  placeholder={"Coupon"}
                  type="text"
                  value={formData.coupon_code}
                  onChange={(ev) =>
                    handleChange("coupon_code", ev.target.value)
                  }
                />
              </div>
            </div>
          </div>

          <label className="text-sm font-medium text-gray-700">
            Do you have specific product(s) you would like to promote?
          </label>
          <div className="flex gap-5 mb-6 mt-2">
            <div className="flex gap-1 items-center">
              <input
                type="radio"
                id="promote_yes"
                className="w-6 h-6 bg-gray-100 border-gray-300"
                value="yes"
                checked={formData.promote_product === "yes"}
                onChange={(ev) =>
                  handleChange("promote_product", ev.target.value)
                }
              />
              <label
                className="text-sm font-medium text-gray-700"
                htmlFor="promote_yes"
              >
                Yes
              </label>
            </div>

            <div className="flex gap-1 items-center">
              <input
                type="radio"
                id="promote_no"
                className="w-6 h-6 bg-gray-100 border-gray-300"
                value="no"
                checked={formData.promote_product === "no"}
                onChange={(ev) =>
                  handleChange("promote_product", ev.target.value)
                }
              />
              <label
                className="text-sm font-medium text-gray-700"
                htmlFor="promote_no"
              >
                No
              </label>
            </div>
          </div>

          <InputField
            name="role" // Pass the name prop here
            label={"What is the name of the product?"}
            placeholder={"Type the product name"}
            type="text"
            value={formData.product_name}
            onChange={(ev) => handleChange("product_name", ev.target.value)}
          />

          <div className="">
            <select
              label={
                "Which channel would you like to send this campaign through?"
              }
              type="text"
              value={formData.channal_preference}
              onChange={(ev) =>
                handleChange("channal_preference", ev.target.value)
              }
            >
              <option value="whatsapp">Whatsapp</option>
              <option value="email">Email</option>
              <option value="sms">SMS</option>
            </select>
          </div>

          <InputField
            name="role" // Pass the name prop here
            label={
              "Enter the date for the discount or promotion you would like to offer?"
            }
            type="date"
            value={formData.broadcast_date}
            onChange={(ev) => handleChange("broadcast_date", ev.target.value)}
          />

          <div className="mt-6">
            <label className="text-sm font-medium text-gray-700" htmlFor="">
              Guidelines
            </label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm sm:text-sm mt-2"
              name=""
              id=""
              placeholder="write your guidelines"
              rows={6}
              value={formData.holiday_ai_guidelines}
              onChange={(ev) =>
                handleChange("holiday_ai_guidelines", ev.target.value)
              }
            ></textarea>
          </div>
        </div>

        <div className="flex gap-4 mt-4">
          <button
            className="py-2 px-8 text-black font-semibold rounded-lg border-2 border-black"
            onClick={() => navigate("../../script")}
          >
            <span>Back</span>
          </button>

          <button
            className="py-2 px-8 bg-[#F1BD6C] text-white font-semibold rounded-lg hover:bg-[#e0a635] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            onClick={() => installHolidaycampaign()}
          >
            <span>Save</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FestivalCampaign;
