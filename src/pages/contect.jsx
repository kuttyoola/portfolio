
import React, { useState } from "react";
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import './pages.css'

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const res = await fetch("https://formspree.io/f/xldlwqqq", {
      method: "POST",
      body: data,
      headers: { Accept:"application/json" },
    });

    if (res.ok) {
      form.reset();
      setStatus("SUCCESS");
    } else {
      setStatus("ERROR");
    }
  };

  return (
    <section className="mb-5 flex items-center justify-center p-6">
      <div className="bg-neutral-100 rounded-2xl shadow-lg/100 p-8 md:p-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Contact Me</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text" 
              name="name"
              required
              className="w-full text-[#07024e] font-bold border border-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border text-[#07024e] font-bold border-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full border text-[#07024e] font-bold border-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-500 transition"
          >
            Send Message
          </button>

          {status === "SUCCESS" && (
            <p className="text-green-600 text-center mt-4">Thanks! Your message has been sent.</p>
          )}
          {status === "ERROR" && (
            <p className="text-red-600 text-center mt-4">Oops! Something went wrong.</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;


