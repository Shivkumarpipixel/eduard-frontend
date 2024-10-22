import React, { useState } from "react";
import { useForm } from "react-hook-form";
import LoginImage from "../assets/login.png";
import LogoImage from "../assets/logo.png";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { FormControl, FormHelperText } from "@mui/material"; // Import MUI form components
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { Navigate } from "react-router-dom";
const apiUrl = import.meta.env.VITE_API_URL;

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [errorMessage, SetErrorMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      SetErrorMessage("");
      const response = await axios.post(`${apiUrl}/auth/register`, data);
      if (response.status == 201) {
        localStorage.setItem("userId", response.data.user_id);
        localStorage.setItem("access_token", response.data.access_token);
        setIsLoggedIn(true);
        console.log("user created successfully", response.data);
      }
    } catch (error) {
      console.error(
        "Error registering user:",
        error.response?.data || error.message
      );
      SetErrorMessage("Registration falied.pleae try again later");
    } finally {
      setLoading(false);
    }
  };

  if (isLoggedIn) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <img
        className="w-full h-screen object-cover"
        src={LoginImage}
        alt="Login"
      />

      {/* Registration Form Container */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="bg-white rounded-lg shadow-lg flex justify-center items-center flex-col w-full max-w-[1042px] max-h-[752px] p-8 mx-4 md:mx-6 lg:mx-8">
          <img src={LogoImage} alt="LogoImage" className="mb-4" />
          <h2 className="text-2xl font-bold mb-2">Welcome</h2>
          <p className="text-gray-400 text-lg mb-6">
            Register to Setter with AI
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-5 w-1/2 "
          >
            {/* Name Field */}
            <FormControl fullWidth>
              <TextField
                id="name"
                variant="outlined"
                placeholder="Name"
                {...register("name", { required: "Name is required" })}
                error={!!errors.name}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px", // Adjust the border radius here
                  },
                }}
              />
              {errors.name && (
                <FormHelperText error>{errors.name.message}</FormHelperText>
              )}
            </FormControl>

            {/* Email Field */}
            <FormControl fullWidth>
              <TextField
                id="email"
                variant="outlined"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email format",
                  },
                })}
                error={!!errors.email}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px", // Adjust the border radius here
                  },
                }}
              />
              {errors.email && (
                <FormHelperText error>{errors.email.message}</FormHelperText>
              )}
            </FormControl>

            {/* Password Field */}
            <FormControl fullWidth>
              <TextField
                id="password"
                type="password"
                variant="outlined"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                  pattern: {
                    value:
                      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                    message:
                      "Password must include at least one letter, one number, and one special character",
                  },
                })}
                error={!!errors.password}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px", // Adjust the border radius here
                  },
                }}
              />
              {errors.password && (
                <FormHelperText error>{errors.password.message}</FormHelperText>
              )}
            </FormControl>

            {/* Confirm Password Field */}
            <FormControl fullWidth>
              <TextField
                id="confirmPassword"
                type="password"
                variant="outlined"
                placeholder="Confirm Password"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
                error={!!errors.confirmPassword}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px", // Adjust the border radius here
                  },
                }}
              />
              {errors.confirmPassword && (
                <FormHelperText error>
                  {errors.confirmPassword.message}
                </FormHelperText>
              )}
            </FormControl>

            {/* Terms and Conditions */}
            <div className="flex items-center w-full">
              <Checkbox
                {...register("terms", {
                  required: "You must agree to the terms and conditions",
                })}
                color="warning"
              />
              <p className="text-gray-400 text-sm font-semibold">
                I agree to the{" "}
                <a
                  href="/terms"
                  className="text-black underline hover:text-gray-700"
                >
                  Terms and Conditions
                </a>
              </p>
            </div>
            {errors.terms && (
              <p className="text-red-500 text-sm">{errors.terms.message}</p>
            )}

            {/* Register Button */}
            <div className="w-1/2 relative flex justify-center items-center ml-40 ">
              <Button
                type="submit"
                disabled={loading}
                sx={{
                  width: "100%",
                  backgroundColor: "black",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                  },
                }}
                startIcon={
                  loading ? (
                    <CircularProgress size={20} color="inherit" />
                  ) : null
                }
              >
                {loading ? "Registering..." : "Register"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
