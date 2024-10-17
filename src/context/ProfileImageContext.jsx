import React, { createContext, useEffect, useState } from "react";
import noProfile from "../assets/login.png";
// import apiClient from "../interceptor/interceptor";

const ProfileImageContext = createContext();

export const ProfileImageProvider = ({ children }) => {
  const api_url = process.env.REACT_APP_API_URL;
  const [profileImage, setProfileImage] = useState(noProfile);
  const [user, setUser] = useState({});

  const fetchUserData = async () => {
    try {
      const user_id = localStorage.getItem("userId");
      const response = await apiClient.get(`/user/getById/${user_id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        const data = response.data;
        setUser(data);
        console.log(data);

        if (data.user_workspace && data.user_workspace.length > 0) {
          localStorage.setItem("flow_ns", data.user_workspace[0].flow_ns);
        } else {
          localStorage.removeItem("flow_ns");
        }
      }

      // const data = await response.json();
      
    } catch (error) {
      // console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    let token = localStorage.getItem('access_token');
    if(token){
      // console.log("Got the token after that I am calling this");
      // fetchUserData();
    }
  }, []);

  useEffect(() => {
    if (user.profile_photo_path != "" || user.profile_photo_path != null) {
      setProfileImage(user.profile_photo_path);
    }
  }, [user]);

  const handleImageUpload = (newImageURL) => {
    setProfileImage(newImageURL);
  };


  const clearProfileImage = () => {
    setProfileImage(null);
  };

  return (
    <ProfileImageContext.Provider value={{ profileImage, handleImageUpload, clearProfileImage }}>
      {children}
    </ProfileImageContext.Provider>
  );
};

export default ProfileImageContext;
