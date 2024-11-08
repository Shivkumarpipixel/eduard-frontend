import React, { useEffect, useState } from "react";
import InputField from "../../Layout/InputField";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const apiUrl = import.meta.env.VITE_API_URL;

const EmailPassword = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
    resetToken: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [passTouched, setPassTouched] = useState(false);
  const [confirmPassTouched, setConfirmPassTouched] = useState(false);
  const resetToken = localStorage.getItem("access_token");

  useEffect(() => {
    const storeEmail = localStorage.getItem("userEmail");
    if (storeEmail) {
      setFormData((prev) => ({ ...prev, email: storeEmail }));
    }
  }, []);

  const inputFields = [
    {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: formData.email || "Enter your email",
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

  const isFormValid =
    formData.newPassword &&
    formData.newPassword === formData.confirmPassword &&
    formData.newPassword.length >= 6;

  // Updated handleChange function
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPassTouched(true);
    setConfirmPassTouched(true);

    // Check if `newPassword` and `resetToken` are strings
    if (
      typeof formData.newPassword !== "string" ||
      typeof formData.resetToken !== "string"
    ) {
      setError("Please check your inputs.");
      return;
    }

    if (!isFormValid) {
      setError("Please check your password inputs");
      return;
    }

    if (!resetToken) {
      setError("Reset token not found!");
      return;
    }

    setLoading(true);

    try {
      const url = `${apiUrl}/auth/reset-password`;
      const body = {
        reset_token: resetToken,
        newPassword: formData.newPassword,
      };

      const response = await axios.put(url, body, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        setSuccess("Password reset successful!");
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          const errorMessage = error.response.data.message;
          if (errorMessage === "TokenExpiredError") {
            setError("Token expired!");
          } else if (errorMessage === "JsonWebTokenError") {
            setError("Invalid token!");
          }
        } else {
          setError("Internal server error!");
        }
      } else {
        setError("Network error. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="common_page_container_outer">
      <div className="common_page_container_inner">
        <h2 className="flex text-3xl font-semibold text-gray-800 mb-2 text-center">
          Change Password
        </h2>
        <p className="flex text-md text-gray-500 mb-6 text-center">
          Please enter a new password below to change your password
        </p>

        {error && (
          <div className="mb-4 p-4 bg-red-50 text-red-700 rounded-md border border-red-200">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-4 p-4 bg-green-50 text-green-700 rounded-md border border-green-200">
            {success}
          </div>
        )}

        <div>
          <form onSubmit={handleSubmit} className="container lg:w-1/2">
            {inputFields.map((field) => (
              <div className="flex gap-4 mb-4" key={field.id}>
                <label
                  className="mt-2 w-[190px] font-semibold"
                  htmlFor={field.id}
                >
                  {field.label}
                </label>
                <div className="w-full">
                  <input
                    id={field.id}
                    disabled={field.id === "email"}
                    value={formData[field.id] || ""}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder={field.placeholder}
                    type={field.type}
                  />
                </div>
              </div>
            ))}
            <div className="">
              <button
                className="py-3 px-8 bg-[#F1BD6C] text-white font-semibold rounded-lg hover:bg-[#e0a635] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
                type="submit"
                disabled={loading}
              >
                {loading ? "Updating..." : "Change Password"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailPassword;
