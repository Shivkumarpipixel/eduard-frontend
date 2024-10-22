import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;
// Create an axios instance
const apiClient = axios.create({
  baseURL: apiUrl, // Replace with your API base URL
});

// Request interceptor to add the token to headers
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle token expiration
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Token has expired or is invalid
    if (error.response && error.response.status === 401) {
      // Clear local storage and other app-specific logout procedures
      localStorage.clear();
      localStorage.removeItem("access_token");
      window.location.href = "/login"; // Redirect to login page
    }
    return Promise.reject(error);
  }
);

export default apiClient;
