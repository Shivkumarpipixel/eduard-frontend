import React, { useState, useEffect } from 'react';
import InputField from "../../Layout/InputField";
import Modal from '@mui/material/Modal';
import { useNavigate } from "react-router-dom";

const SocialMediaManager = () => {

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
                        name="persona" // Pass the name prop here
                        label={"How would you like your AI employee to ask for a review? Provide the instruction and/or write an example"}
                        placeholder={"Persona of manager"}
                        type="text"
                    />

                    <InputField
                        name="role" // Pass the name prop here
                        label={"Feedback link"}
                        placeholder={"Role of social media manager"}
                        type="text"
                    />

                    <label className='text-sm font-medium text-gray-700'>Through which channel would you like to send the message?</label>

                    <div className='flex gap-5 mt-2'>
                        <div className='flex gap-1 items-center'>
                            <input
                                name="channel" // Pass the name prop here
                                value={"positive"}
                                type="radio"
                                id="positive_comments"
                                className='w-6 h-6 bg-gray-100 border-gray-300'
                            />
                            <label className='text-sm font-medium text-gray-700' htmlFor="positive_comments">Positive comment</label>
                        </div>

                        <div className='flex gap-1 items-center'>
                            <input
                                name="channel" // Pass the name prop here
                                type="radio"
                                value={"negative"}
                                id="negative_comments"
                                className='w-6 h-6 bg-gray-100 border-gray-300'
                            />
                            <label className='text-sm font-medium text-gray-700' htmlFor="negative_comments">Negative comment</label>
                        </div>

                        <div className='flex gap-1 items-center'>
                            <input
                                name="channel" // Pass the name prop here
                                type="radio"
                                value={"all"}
                                id="all_comments"
                                className='w-6 h-6 bg-gray-100 border-gray-300'
                            />
                            <label className='text-sm font-medium text-gray-700' htmlFor="all_comments">All comment</label>
                        </div>
                    </div>

                    <div className='mt-6'>
                        <label className='text-sm font-medium text-gray-700' htmlFor="">Guidelines for response</label>
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
    );
}

export default SocialMediaManager