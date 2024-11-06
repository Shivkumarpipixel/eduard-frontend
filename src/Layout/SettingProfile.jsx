import React from "react";
import InputField from "../Layout/InputField";
import apiClient from "../interceptor/AuthInterceptor";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useToast } from "../context/ToastProvider";
import { useState } from "react";
import { useEffect } from "react";
import { useUser } from "../context/UserContext";

const SettingProfile = () => {
  const defaultImage = "https://via.placeholder.com/150";
  const [profileImage, setProfileImage] = useState(defaultImage);
  const [selectedFile, setSelectedFile] = useState(null);
  const { updateUser } = useUser();

  const showToast = useToast();
  const navigate = useNavigate();

  const userId = localStorage.getItem("userId");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  

  useEffect(() => {
    const fetchTeammateData = async () => {
      try {
        const response = await apiClient.get(`/user/getById/${userId}`);
        const UserData = response.data;
        console.log(response.data);

        if (UserData) {
          reset(UserData);
          setProfileImage(UserData.profile_photo_path || defaultImage);
        }
      } catch (error) {
        console.error("Error fetching teammate data:", error);
      }
    };

    if (userId) fetchTeammateData();
  }, [userId, reset]);

  const onFileChange = (event) => {
    console.log("onFileChange triggered");
    let file = event.target.files[0];
    console.log("File selected:", file);
    if (file) {
      console.log("File exists, setting state and uploading");
      setSelectedFile(file);
      handleUpload(file);
      file = null;
    } else {
      console.log("No file selected.");
    }
  };

  const handleUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("user_id", userId);

    try {
      const response = await apiClient.post(
        `/user/uploadProfile/${userId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        setSelectedFile(null);
        console.log("Upload response:", response);
      }
    } catch (error) {
      console.error(
        "Error uploading file:",
        error.response?.data || error.message
      );
    }
  };

  const onSubmit = async (data) => {
    try {
      // Prepare JSON data for user profile fields
      const jsonData = {
        user_id: userId,
        name: data.name,
        phone: data.phone,
        // address: data.address,
        email: data.email,
        website: data.website,
        gender: data.gender,
        dob: data.dob,
      };

      let response;

      // Check if there is a file to upload
      if (selectedFile) {
        // If there's a file, use FormData for the file upload only
        const formData = new FormData();
        formData.append("file", selectedFile);
        formData.append("user_id", userId);

        // Upload the file separately
        await apiClient.post(`/user/uploadProfile/${userId}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      }

      // Send profile data as JSON
      response = await apiClient.put(`/user/updateUser/${userId}`, jsonData, {
        headers: { "Content-Type": "application/json" },
      });

      console.log("Response:", response.data);
      showToast("Profile saved successfully!", "success");
      updateUser({ name: data.name });
      console.log(updateUser)
      reset();
      // setTimeout(() => navigate("/setting"), 1500);
    } catch (error) {
      console.error("Error updating profile:", error);
      showToast("An error occurred while saving the profile.", "error");
    }
  };

  return (
    <div className="common_page_container_outer">
      <div className="common_page_container_inner">
        <h2 className="text-3xl font-semibold text-gray-800 mb-1">Profile</h2>
        <p className="text-md text-gray-500 mb-6">
          Lorem Ipsum is simply dummy text of the printing.
        </p>

        <div className="flex gap-10">
          <form
            className="container lg:w-1/2"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Input fields */}
            {[
              {
                name: "name",
                label: "Name",
                type: "text",
                placeholder: "Enter your name",
              },
              {
                name: "phone",
                label: "Phone",
                type: "tel",
                placeholder: "+9999 9999 9999",
              },
              {
                name: "email",
                label: "Email",
                type: "email",
                placeholder: "xyz@gmail.com",
              },
              {
                name: "website",
                label: "Website",
                type: "url",
                placeholder: "www.website.com",
              },
              {
                name: "gender",
                label: "Gender",
                type: "text",
                placeholder: "Male",
              },
              {
                name: "dob",
                label: "Date of Birth",
                type: "date",
                placeholder: "10 Sep 1992",
              },
            ].map((field, index) => (
              <div key={index} className="flex items-center mb-6">
                <label className="w-[150px] font-semibold text-gray-700">
                  {field.label}
                </label>
                <div className="-mb-6 w-full">
                  <InputField
                    name={field.name}
                    register={register(field.name, { required: true })}
                    placeholder={field.placeholder}
                    type={field.type}
                  />
                </div>
              </div>
            ))}

            <div className="flex items-center mt-5 gap-4">
              <button
                className="py-2 px-8 bg-[#F1BD6C] text-white font-semibold rounded-lg hover:bg-[#e0a635] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                type="submit"
              >
                Save
              </button>
              <button
                onClick={() => navigate("/setting")}
                className="py-2 px-8 bg-white text-gray-700 font-semibold rounded-lg hover:bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                type="button"
              >
                Cancel
              </button>
            </div>
          </form>

          <div className="lg:w-1/2 flex">
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
              onChange={onFileChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingProfile;
