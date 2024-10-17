import React from "react";
import LoginImage from "../assets/login.png";
import LogoImage from "../assets/logo.png";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

const Login = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <>
      <div className="relative w-full h-screen">
        <img
          className="w-full h-screen object-cover"
          src={LoginImage}
          alt="Login"
        />

        <div className="absolute inset-0 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg flex justify-center items-center flex-col  w-[1042px] h-[752px] p-8">
            <img src={LogoImage} alt="LogoImage" />
            <h2 className="text-2xl font-bold mb-4">Welcome</h2>
            <p className="text-gray-400 text-lg">Login to setter with AI</p>

            <div className=" flex flex-col space-y-4 mt-3 ">
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Email adress"
                sx={{ width: 339, height: 50 }}
              />
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Password"
                sx={{ width: 339, height: 50 }}
              />
            </div>

            <div className="flex justify-between items-center mt-2 w-[372px]">
              <div className="flex items-center">
                <Checkbox {...label} defaultChecked color="warning" />
                <p className="text-gray-400 text-sm font-semibold">
                  keep me signed in
                </p>
              </div>
              <a
                className="text-gray-400 cursor-pointer text-sm font-semibold"
                href=""
              >
                Forgot password?
              </a>
            </div>
            <Button
              variant=""
              sx={{
                width: "339px",
                backgroundColor: "black",
                color: "white",
                "&:hoveer": {
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                },
              }}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
