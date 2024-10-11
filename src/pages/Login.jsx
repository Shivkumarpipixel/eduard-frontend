import React from "react";
import LoginImage from "../assets/login.png";
import LogoImage from "../assets/logo.png";
import TextField from "@mui/material/TextField";

const Login = () => {
  return (
    <>
      <div className="relative w-full h-screen">
        <img
          className="w-full h-screen object-cover"
          src={LoginImage}
          alt="Login"
        />

        <div className="absolute inset-0 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg w-[1042px] h-[752px] p-8">
            <div className="flex justify-center items-center mt-16 flex-wrap flex-col">
              <img src={LogoImage} alt="LogoImage" />

              <h2 className="text-2xl font-bold mb-4">Welcome</h2>
              <p className="text-gray-200">Login to setter with AI</p>

              <div className="w-[339px] space-y-6">
                <TextField
                  className=""
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  width
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
