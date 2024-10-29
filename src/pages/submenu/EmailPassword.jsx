import React, { useState } from "react";
import InputField from "../../Layout/InputField";

const EmailPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="common_page_container_outer">
      <div className="common_page_container_inner">
        <h2 className=" flex text-3xl font-semibold text-gray-800 mb-2 text-center">
          Change Password
        </h2>
        <p className="flex text-md text-gray-500 mb-6 text-center">
          Please enter a new password below to change your password
        </p>
        <div>
          <form className="container lg:w-1/2">
            <div className=" flex  gap-4">
              <label className="mt-2 w-[190px] font-semibold " htmlFor="">
                Email
              </label>
              <div className="w-full  ">
                <InputField
                  disabled={true}
                  className=""
                  placeholder="xyz@gmail.com"
                  // label="Email"
                  type="email"
                />
              </div>
            </div>
            <div className=" flex  gap-4">
              <label className="mt-2 w-[190px] font-semibold " htmlFor="">
                Old Password
              </label>
              <div className="w-full  ">
                <InputField
                  className=""
                  placeholder="xyz@gmail.com"
                  // label="Email"
                  type="password"
                />
              </div>
            </div>
            <div className=" flex  gap-4">
              <label className="mt-2 w-[190px] font-semibold " htmlFor="">
                New Password
              </label>
              <div className="w-full  ">
                <InputField
                  className=""
                  placeholder="xyz@gmail.com"
                  // label="Email"
                  type="password"
                />
              </div>
            </div>
            <div className=" flex  gap-4">
              <label className="mt-2 w-[190px] font-semibold " htmlFor="">
                Confirm Password
              </label>
              <div className="w-full  ">
                <InputField
                  className=""
                  placeholder="xyz@gmail.com"
                  // label="Email"
                  type="password"
                />
              </div>
            </div>

            <div className="">
              <button
                className=" py-3 px-8 bg-[#F1BD6C] text-white font-semibold rounded-lg hover:bg-[#e0a635] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 mt-6"
                type="submit"
              >
                Change Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailPassword;
