// Contact.js
import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/contact", formData);
      setSubmitted(true);
      setError("");
      setFormData({ name: "", email: "", message: "" }); // Clear form
    } catch (err) {
      setError("Failed to send message. Please try again.");
      setSubmitted(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col justify-center items-center bg-gradient-to-br from-blue-300 to-gray-500">
      <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">
        Contact Us
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full"
      >
        <p className="text-lg text-gray-1000 text-center max-w-3xl mb-8">
          We'd love to hear from you! Please fill out the form below.
        </p>
        {submitted && (
          <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-4">
            Thank you for your message! We will get back to you soon.
          </div>
        )}
        {error && (
          <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-4">
            {error}
          </div>
        )}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 w-full rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 w-full rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="border border-gray-300 p-2 w-full rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold w-full"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
