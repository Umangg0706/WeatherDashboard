import React, { useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [city, setCity] = useState("");
  const [filter, setFilter] = useState("current"); // Default filter is 'current'
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async () => {
    try {
      const filterEndpointMap = {
        current: "current",
        "3hours": "3hours",
        "6hours": "6hours",
        "1day": "1day",
        "3days": "3days",
      };

      const response = await axios.get(
        `http://localhost:8000/api/weather/${filterEndpointMap[filter]}/`,
        {
          params: {
            city: city,
          },
        }
      );

      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <div className="text-center bg-gradient-to-r from-blue-100 to-blue-300 py-4 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800">Weather Dashboard</h1>
      </div>

      <div className="min-h-[90vh] bg-gradient-to-r from-blue-100 to-blue-300 p-8 flex flex-col items-center">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full">
          {/* Filter & City Search */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
            {/* Filter Dropdown */}
            <div className="w-full sm:w-1/4 mb-4 sm:mb-0">
              <label
                htmlFor="filter"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Select Forecast Filter:
              </label>
              <select
                id="filter"
                value={filter}
                onChange={handleFilterChange}
                className="block w-full bg-gray-200 border border-gray-300 text-gray-700 py-2 px-3 rounded focus:outline-none focus:border-blue-500"
              >
                <option value="current">Current</option>
                <option value="3hours">In 3 Hours</option>
                <option value="6hours">In 6 Hours</option>
                <option value="1day">In 1 Day</option>
                <option value="3days">In 3 Days</option>
              </select>
            </div>

            {/* City Search Bar */}
            <div className="w-full sm:w-2/3 flex items-center space-x-4">
              <input
                type="text"
                placeholder="Enter city name"
                value={city}
                onChange={handleCityChange}
                className="flex-grow bg-gray-200 border border-gray-300 text-gray-700 py-2 px-3 rounded focus:outline-none focus:border-blue-500"
              />
              <button
                onClick={fetchWeatherData}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-200"
              >
                Search
              </button>
            </div>
          </div>

          {/* Weather Data Display */}
          {weatherData && (
            <div className="weather-info grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
              <div className="p-4 bg-blue-50 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold text-gray-700">
                  Temperature
                </h2>
                <p className="text-2xl font-bold text-blue-500">
                  {weatherData.main.temp}°C
                </p>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold text-gray-700">
                  Feels Like
                </h2>
                <p className="text-2xl font-bold text-blue-500">
                  {weatherData.main.feels_like}°C
                </p>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold text-gray-700">
                  Humidity
                </h2>
                <p className="text-2xl font-bold text-blue-500">
                  {weatherData.main.humidity}%
                </p>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold text-gray-700">
                  Wind Speed
                </h2>
                <p className="text-2xl font-bold text-blue-500">
                  {weatherData.wind.speed} km/h
                </p>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold text-gray-700">
                  Visibility
                </h2>
                <p className="text-2xl font-bold text-blue-500">
                  {weatherData.visibility} m
                </p>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold text-gray-700">
                  Min/Max Temp
                </h2>
                <p className="text-2xl font-bold text-blue-500">
                  {weatherData.main.temp_min}/{weatherData.main.temp_max} °C
                </p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold text-gray-700">
                  Description
                </h2>
                <p className="text-2xl font-bold text-blue-500">
                  {weatherData.weather[0].description}
                </p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold text-gray-700">
                  Pressure
                </h2>
                <p className="text-2xl font-bold text-blue-500">
                  {weatherData.main.pressure}
                </p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold text-gray-700">
                  Sea Level
                </h2>
                <p className="text-2xl font-bold text-blue-500">
                  {weatherData.main.sea_level} m
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
