// Home.js
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-6">
      <h1 className="text-5xl font-bold text-blue-600 mb-6 text-center">
        Welcome to the Weather Dashboard
      </h1>
      <p className="text-lg text-gray-700 text-center max-w-3xl mb-8">
        Discover accurate and real-time weather data for any city in the world.
        This project, built using the MERN stack along with Django for the
        backend, empowers users with a user-friendly interface to access weather
        updates, predictive analysis, and more.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold mb-2 text-blue-500">
            Real-time Weather Data
          </h2>
          <p className="text-gray-600">
            Fetch live weather data for any city in the world using a powerful
            weather API.
          </p>
        </div>

        <div className="bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold mb-2 text-blue-500">
            Predictive Weather
          </h2>
          <p className="text-gray-600">
            Predict weather for the next few hours or days using different
            forecast models.
          </p>
        </div>

        <div className="bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold mb-2 text-blue-500">
            User-Friendly Dashboard
          </h2>
          <p className="text-gray-600">
            Interactive and intuitive design for easy navigation and a better
            user experience.
          </p>
        </div>
      </div>

      <button
        onClick={() => navigate("/dashboard")}
        className="mt-6 bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition duration-300 text-lg font-semibold"
      >
        Explore Dashboard
      </button>
    </div>
  );
};

export default Home;
