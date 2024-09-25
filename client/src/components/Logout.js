// Logout.js
import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout(); // Call the logout function
    navigate("/"); // Navigate to the home page after logging out
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-300"
    >
      Logout
    </button>
  );
};

export default Logout;
