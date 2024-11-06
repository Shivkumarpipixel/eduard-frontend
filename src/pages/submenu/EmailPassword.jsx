import React, { useEffect, useState } from "react";
import InputField from "../../Layout/InputField";

const EmailPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const storeEmail = localStorage.getItem("userEmail");
    if (storeEmail);
    {
      setEmail(storeEmail);
    }
  }, []);

  const inputFields = [
    {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: email || "Enter your email",
    },
    {
      id: "oldPassword",
      label: "Old Password",
      type: "password",
      placeholder: "Enter your old password",
    },
    {
      id: "newPassword",
      label: "New Password",
      type: "password",
      placeholder: "Enter your new password",
    },
    {
      id: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      placeholder: "Confirm your new password",
    },
  ];

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
            {inputFields.map((field) => (
              <div className="flex gap-4" key={field.id}>
                <label
                  className="mt-2 w-[190px] font-semibold"
                  htmlFor={field.id}
                >
                  {field.label}
                </label>
                <div className="w-full">
                  <InputField
                    id={field.id}
                    disabled={field.id === "email"} // Disable email field
                    value={field.id === "email" ? email : undefined} // Set email value
                    onChange={(e) => {
                      if (field.id === "newPassword")
                        setNewPassword(e.target.value);
                      if (field.id === "confirmPassword")
                        setConfirmPassword(e.target.value);
                    }}
                    className=""
                    placeholder={field.placeholder}
                    type={field.type}
                  />
                </div>
              </div>
            ))}
            <div className="">
              <button
                className="py-3 px-8 bg-[#F1BD6C] text-white font-semibold rounded-lg hover:bg-[#e0a635] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 mt-6"
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
