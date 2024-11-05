import React from 'react';
import InputField from "../../Layout/InputField";
import { useNavigate } from "react-router-dom";

const BirthdayCampaign = () => {

    const navigate = useNavigate();

    return (
        <div className="common_page_container_outer">
            <div className="common_page_container_inner">

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
                    />

                    <InputField
                        name="role" // Pass the name prop here
                        label={"Feedback link"}
                        placeholder={"Role of social media manager"}
                        type="text"
                    />

                    <div className='mb-6'>
                        <label className='text-sm font-medium text-gray-700'>For which holiday would you like to send a promotion?</label>
                        <select
                            name="holiday_name" // Pass the name prop here
                            label={"For which holiday would you like to send a promotion?"}
                            placeholder={"Select holiday"}
                            type="text"
                            className='w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm sm:text-sm mt-2'
                        >
                            <option value="new_year">New Year</option>
                            <option value="easter">Easter</option>
                            <option value="easter">Black friday</option>
                        </select>
                    </div>



                    <label className='text-sm font-medium text-gray-700'>Goal of the campaign:</label>

                    <div className='flex gap-5 mb-6 mt-2'>
                        <div className='flex gap-1 items-center'>
                            <input
                                name="channel" // Pass the name prop here
                                value={"positive"}
                                type="radio"
                                id="wish_only"
                                className='w-6 h-6 bg-gray-100 border-gray-300'
                            />
                            <label className='text-sm font-medium text-gray-700' htmlFor="positive_comments">Only wish</label>
                        </div>

                        <div className='flex gap-1 items-center'>
                            <input
                                name="channel" // Pass the name prop here
                                type="radio"
                                value={"negative"}
                                id="wish_discount"
                                className='w-6 h-6 bg-gray-100 border-gray-300'
                            />
                            <label className='text-sm font-medium text-gray-700' htmlFor="negative_comments">Wish & discount</label>
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
                                />
                            </div>
                            <div className='w-full'>
                                <InputField
                                    name="role" // Pass the name prop here
                                    placeholder={"Coupon"}
                                    type="text"
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
                        >
                            <option value="new_year">Whatsapp</option>
                            <option value="easter">Email</option>
                            <option value="easter">SMS</option>
                        </select>
                    </div>

                    <div className='mt-6'>
                        <label className='text-sm font-medium text-gray-700' htmlFor="">Guidelines</label>
                        <textarea className='w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm sm:text-sm mt-2' name="" id="" placeholder='write your guidelines' rows={6}></textarea>
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
                    >
                        <span>Save</span>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default BirthdayCampaign