import { useEffect, useState } from 'react';
import InputField from "../../Layout/InputField";
import { useNavigate } from "react-router-dom";
import apiClient from '../../interceptor/AuthInterceptor';
import { useToast } from "../../context/ToastProvider";


const BirthdayCampaign = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({});

    const showToast = useToast();


    const getTemplateById = async () => {
        try {
            const query = new URLSearchParams(location.search);
            const id = query.get('id');
            if(id && id !== 'undefined') {
                const url = `/aiSkill/getData/${id}`;
                const response = await apiClient.get(url);
                if (response.status === 200) {
                    let templete = response.data;
                    console.log("*************");
                    console.log(templete.template_data);
                    setFormData(templete.template_data || {})
                }
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getTemplateById();
    }, []);


    const installBirthdayCampaign = async () => {
        try {
            // Ensure the necessary fields are set before submitting
            const submissionData = {
                ...formData,
                is_birthday_campaign_required: "true",
                user_id : localStorage.getItem('userId'),
                is_active: true,
            };

            if (submissionData.campaign_purpose === "wish_only") {
                submissionData.birthday_campaign_gift = "wish only";
                delete submissionData.birthday_campaign_purpose;
            }

            if (submissionData.campaign_purpose === "discount") {
                submissionData.birthday_campaign_purpose = `wish with ${submissionData.discount_percent}% discount using coupon ${submissionData.coupon_code}`;
                delete submissionData.birthday_campaign_gift;
            }

            console.log(submissionData);
            const url = `/aiSkill/installBirthdaycampaign`;
            const response = await apiClient.post(url, submissionData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.status === 201) {
                console.log("Birthday campaign template added");
                showToast("Data  saved successfully!", "success");

            }
        } catch (error) {
            console.error("Error:", error);
            showToast("An error occurred while saving the profile.", "error");

        }
    };

    const handleChange = (field, value) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [field]: value,
        }));
    };


    return (
        <div className="common_page_container_outer">
            <div className="common_page_container_inner overflow-y-auto">

                <div className='lg:w-1/2 w-full'>
                    <div className="cm_title_head">
                        <div className="cm_title_wrap">
                            <h3 className=" flex text-3xl font-semibold text-gray-800 mb-2 text-center">Skill Set Settings</h3>
                            <p className="flex text-md text-gray-500 mb-6 text-center">Enter the required information below.</p>
                        </div>
                    </div>

                    <InputField
                        name="role" // Pass the name prop here
                        placeholder={'Birthday greeting Persona'}
                        label={"Persona"}
                        type="text"
                        value={formData.birthday_campaign_ai_persona}
                        onChange={(ev) =>
                            handleChange("birthday_campaign_ai_persona", ev.target.value)
                        }
                    />

                    <InputField
                        name="role" // Pass the name prop here
                        label={"Role"}
                        placeholder={"Role"}
                        type="text"
                        value={formData.birthday_campaign_ai_role}
                        onChange={(ev) =>
                            handleChange("birthday_campaign_ai_role", ev.target.value)
                        }
                    />

                    <label className='text-sm font-medium text-gray-700'>Purpose of the birthday campaign:</label>

                    <div className='flex gap-5 mb-6 mt-2'>
                        <div className='flex gap-1 items-center'>
                            <input
                                name="channel" // Pass the name prop here
                                type="radio"
                                id="wish_only"
                                className='w-6 h-6 bg-gray-100 border-gray-300'
                                value="wish_only"
                                checked={formData.campaign_purpose === "wish_only"}
                                onChange={(ev) =>
                                    handleChange("campaign_purpose", ev.target.value)
                                }
                            />
                            <label className='text-sm font-medium text-gray-700' htmlFor="wish_only">Wish only</label>
                        </div>

                        <div className='flex gap-1 items-center'>
                            <input
                                name="channel" // Pass the name prop here
                                type="radio"
                                id="wish_discount"
                                className='w-6 h-6 bg-gray-100 border-gray-300'
                                value="discount"
                                checked={formData.campaign_purpose === "discount"}
                                onChange={(ev) =>
                                    handleChange("campaign_purpose", ev.target.value)
                                }
                            />
                            <label className='text-sm font-medium text-gray-700' htmlFor="wish_discount">Wish & discount</label>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="">How much discount would you like to offer?</label>
                        <div className='flex gap-3 mt-2'>
                            <div className='w-full'>
                                <InputField
                                    name="role" // Pass the name prop here
                                    placeholder={"20%"}
                                    type="number"
                                    value={formData.discount_percent}
                                    className="form-control"
                                    onChange={(ev) =>
                                        handleChange("discount_percent", ev.target.value)
                                    }
                                />
                            </div>
                            <div className='w-full'>
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

                    <div className='mb-6'>
                        <label className='text-sm font-medium text-gray-700'>Which channel would you like to send this campaign through?</label>
                        <select
                            name="holiday_name" // Pass the name prop here
                            label={"For which holiday would you like to send a promotion?"}
                            placeholder={"Select holiday"}
                            type="text"
                            className='w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm sm:text-sm mt-2'
                            value={formData.Birthday_Campaign_Channel_Preference}
                            onChange={(ev) =>
                                handleChange(
                                    "Birthday_Campaign_Channel_Preference",
                                    ev.target.value
                                )
                            }
                        >
                            <option value="whatsapp">Whatsapp</option>
                            <option value="email">Email</option>
                            <option value="sms">SMS</option>
                        </select>
                    </div>

                    <div className='mt-6'>
                        <label className='text-sm font-medium text-gray-700' htmlFor="">Guidelines</label>
                        <textarea
                            className='w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm sm:text-sm mt-2'
                            name="" id="" placeholder='write your guidelines'
                            rows={6}
                            value={formData.birthday_campaign_ai_response_guidelines}
                            onChange={(ev) =>
                                handleChange(
                                    "birthday_campaign_ai_response_guidelines",
                                    ev.target.value
                                )
                            }
                        ></textarea>
                    </div>
                </div>

                <div className="flex gap-4 mt-4">
                    <button
                        className="py-2 px-8 text-black font-semibold rounded-lg border-2 border-black"
                        onClick={() => navigate('../../script')}
                    >
                        <span>Back</span>
                    </button>

                    <button
                        className="py-2 px-8 bg-[#F1BD6C] text-white font-semibold rounded-lg hover:bg-[#e0a635] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                        onClick={() => installBirthdayCampaign()}
                    >
                        <span>Save</span>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default BirthdayCampaign