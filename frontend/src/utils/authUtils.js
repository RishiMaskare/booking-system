// Authentication utility functions

export const getAuthToken = () => {
  return localStorage.getItem("authToken");
};

export const removeAuthToken = () => {
  localStorage.removeItem("authToken");
};

export const isUserLoggedIn = () => {
  return !!localStorage.getItem("authToken");
};

