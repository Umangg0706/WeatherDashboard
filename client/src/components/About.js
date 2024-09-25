// About.js
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold text-blue-600 mb-6 text-center">
        About the Weather Dashboard
      </h1>
      <p className="text-lg text-gray-700 text-center max-w-3xl mb-8">
        The Weather Dashboard is a comprehensive web application that allows
        users to access real-time weather information for cities around the
        globe. Built using the MERN stack (MongoDB, Express, React, Node.js) and
        Django for the backend, this project combines powerful technology with
        user-friendly design.
      </p>

      <h2 className="text-3xl font-semibold text-blue-500 mb-4">
        Key Features
      </h2>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-8 max-w-2xl">
        <li>🔹 Real-time weather data from reliable sources.</li>
        <li>🔹 Predictive weather models for short and long-term forecasts.</li>
        <li>🔹 User-friendly interface with easy navigation.</li>
        <li>🔹 Option to save favorite cities for quick access.</li>
        <li>🔹 Responsive design for seamless experience across devices.</li>
      </ul>

      <h2 className="text-3xl font-semibold text-blue-500 mb-4">
        Technologies Used
      </h2>
      <p className="text-lg text-gray-700 text-center max-w-3xl mb-8">
        This application leverages various technologies to deliver an efficient
        and scalable experience. Some of the key technologies include:
      </p>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-8 max-w-2xl">
        <li>🔹 MongoDB for database management</li>
        <li>🔹 Express.js as a web application framework</li>
        <li>🔹 React.js for building the user interface</li>
        <li>🔹 Node.js for server-side development</li>
        <li>🔹 Django for handling backend processes</li>
      </ul>

      <button
        onClick={() => window.history.back()}
        className="mt-6 bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition duration-300 text-lg font-semibold"
      >
        Go Back
      </button>
    </div>
  );
};

export default About;
