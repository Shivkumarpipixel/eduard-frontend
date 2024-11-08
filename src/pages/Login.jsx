import React, { useEffect, useState } from "react";
import LoginImage from "../assets/login.png";
import LogoImage from "../assets/AutomationzLogo.png";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import CircularProgress from "@mui/material/CircularProgress";
import { Navigate } from "react-router-dom";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const checkLoginStatus = async () => {
      const accessToken = localStorage.getItem("access_token");
      console.log(accessToken);
      if (accessToken) {
        setIsLoggedIn(true);
      }
    };

    checkLoginStatus();
  }, []);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      setErrorMessage("");
      const response = await axios.post(`${apiUrl}/auth/login`, data);
      if (response.status === 200) {
        localStorage.setItem("userId", response.data.user_id);
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("userEmail", data.email);
        setIsLoggedIn(true);
        console.log("User logged in successfully", response.data);
      }
    } catch (error) {
      console.error(
        "Error logging in user:",
        error.response?.data || error.message
      );
      setErrorMessage("Login failed. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  console.log(isLoggedIn);
  if (isLoggedIn) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <div className="relative w-full h-screen">
        <img
          className="w-full h-screen object-cover"
          src={LoginImage}
          alt="Login"
        />

        <div className="absolute inset-0 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg flex justify-center items-center flex-col w-[1042px] h-[752px] p-8">
            <img src={LogoImage} alt="Logo" />
            <h2 className="text-2xl font-bold mb-4">Welcome</h2>
            <p className="text-gray-400 text-lg">Login to Automationz</p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col space-y-4 mt-3"
            >
              <TextField
                id="outlined-email"
                variant="outlined"
                placeholder="Email address"
                sx={{ width: 339, height: 50 }}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                })}
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : null}
              />

              <TextField
                id="outlined-password"
                variant="outlined"
                type="password"
                placeholder="Password"
                sx={{ width: 339, height: 50 }}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                error={!!errors.password}
                helperText={errors.password ? errors.password.message : null}
              />

              <div className="flex justify-between items-center mt-2 w-[372px]">
                <div className="flex items-center">
                  <Checkbox {...label} defaultChecked color="warning" />
                  <p className="text-gray-400 text-sm font-semibold">
                    Keep me signed in
                  </p>
                </div>
                <a
                  className="text-gray-400 cursor-pointer text-sm font-semibold"
                  href="#"
                >
                  Forgot password?
                </a>
              </div>

              {errorMessage && (
                <p className="text-red-500 text-sm">{errorMessage}</p>
              )}

              <Button
                disabled={loading}
                type="submit"
                sx={{
                  width: "339px",
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
                {loading ? "Logging in..." : "Login"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
