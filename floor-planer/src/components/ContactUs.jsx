import React, { useState } from "react";
import TopNav from "./TopNav";
import Footer from "./Footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Replace 'your-api-endpoint' with the actual API endpoint
    const apiEndpoint = "https://api.example.com/contact";

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Message sent successfully");
        // Reset the form
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <>
      <TopNav />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded p-8 w-full max-w-md">
        <h2 className="text-3xl font-semibold mb-6 text-center text-[#c29525]">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="message">
              Message:
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="input h-32"
              required
            />
          </div>
          <button
            type="submit"
            className="btn-primary w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
      <Footer />
    </>
  );
};

export default ContactUs;
