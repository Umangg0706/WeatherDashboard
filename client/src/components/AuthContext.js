// AuthContext.js
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import qs from "qs";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");

  // Check local storage on initial load
  useEffect(() => {
    const storedAuth = localStorage.getItem("isAuthenticated");
    if (storedAuth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (username, password) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/login/",
        qs.stringify({ username, password }),
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      );

      if (response.data.isAuthenticated) {
        setIsAuthenticated(true);
        localStorage.setItem("isAuthenticated", "true"); // Store in local storage
        setError(""); // Clear error if login is successful
      }
    } catch (error) {
      // Display the error message from the backend
      setError(error.response?.data?.error || "Login failed");
    }
  };

  const logout = async () => {
    try {
      await axios.post("http://localhost:8000/api/logout/");
      setIsAuthenticated(false);
      localStorage.removeItem("isAuthenticated"); // Clear from local storage
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
