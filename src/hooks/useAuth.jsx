export const useAuth = () => {
  return localStorage.getItem("access_token") != null || "" ? true : false;
};
