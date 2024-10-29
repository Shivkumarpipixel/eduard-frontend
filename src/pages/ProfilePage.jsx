import React, { useState } from "react";
import InputField from "../Layout/InputField";
import apiClient from "../interceptor/AuthInterceptor";
import { useForm } from "react-hook-form";

const ProfilePage = () => {
  const defaultImage = "https://via.placeholder.com/150";
  const [profileImage, setProfileImage] = useState(defaultImage);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const onSubmit = async (data) => {
    try {
      const id = data.id || "";
      const response = await apiClient.post(
        "/teammate/createOrUpdate/${id}",
        data
      ); // Update API endpoint as needed
      console.log("Response:", response.data);
      alert("Profile saved successfully!");
      reset();
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while saving the profile.");
    }
  };

  return (
    <div className="bg-[#F0F0F0] flex justify-center items-center w-full h-screen">
      <div className="relative bg-white rounded-lg shadow-lg p-8 w-[800px]">
        {/* Edit Profile Button */}
        <button
          className="absolute top-6 right-6 py-2 px-4 bg-white text-gray-800 border border-gray-300 font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          type="button"
        >
          Edit Profile
        </button>

        {/* Title and Subtitle */}
        <h2 className="text-3xl font-semibold text-gray-800 mb-1">Profile</h2>
        <p className="text-md text-gray-500 mb-6">
          Lorem Ipsum is simply dummy text of the printing.
        </p>

        <div className="flex gap-10">
          {/* Left Side - Form */}
          <form className="w-1/2" onSubmit={handleSubmit(onSubmit)}>
            {/* Input fields */}
            {[
              { label: "Name", type: "text", placeholder: "Enter your name" },
              { label: "Phone", type: "tel", placeholder: "+9999 9999 9999" },
              {
                label: "Address",
                type: "text",
                placeholder: "City town, London, 7090",
              },
              { label: "Email", type: "email", placeholder: "xyz@gmail.com" },
              { label: "Website", type: "url", placeholder: "www.website.com" },
              { label: "Gender", type: "text", placeholder: "Male" },
              {
                label: "Date of Birth",
                type: "date",
                placeholder: "10 Sep 1992",
              },
            ].map((field, index) => (
              <div key={index} className="flex items-center ">
                <label className="w-[150px] font-semibold text-gray-700">
                  {field.label}
                </label>
                <InputField
                  className="w-full border border-gray-300 rounded px-2 py-1"
                  placeholder={field.placeholder}
                  type={field.type}
                />
              </div>
            ))}

            {/* Save and Cancel Buttons */}
            <div className="flex items-center mt-5 gap-4">
              <button
                className="py-2 px-8 bg-[#F1BD6C] text-white font-semibold rounded-lg hover:bg-[#e0a635] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                type="submit"
              >
                Save
              </button>
              <button
                className="py-2 px-8 bg-white text-gray-700 font-semibold rounded-lg hover:bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                type="button"
              >
                Cancel
              </button>
            </div>
          </form>

          {/* Right Side - Profile Image with Hover Effect */}
          <div className="relative flex flex-col items-center">
            <div className="relative w-56 h-56 rounded-full overflow-hidden shadow-lg">
              <img
                src={profileImage}
                alt="Profile"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full">
                <button
                  onClick={() => document.getElementById("fileInput").click()}
                  className="text-white font-semibold text-sm"
                >
                  Change Image
                </button>
              </div>
            </div>
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
