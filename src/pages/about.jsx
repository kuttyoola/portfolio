import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer';
const About = () => {
  return (
    <section className="bg-[#07024e]  flex items-center justify-center p-6">
      <div className="max-w-4xl bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Me</h1>
        <p className="text-lg text-gray-600 mb-6">
          Hi! I’m <span className="font-semibold text-gray-800">HARIHARAN M</span>,
          a passionate <span className="text-blue-600">Web Developer</span> with
          experience in building responsive and interactive web applications.
          I enjoy creating user-friendly designs and writing clean, maintainable
          code.
        </p>
        <p className="text-lg text-gray-600 mb-6">
          My expertise includes React, JavaScript, Tailwind CSS, and backend
          development with Node.js. I love learning new technologies and
          improving my skills to deliver the best solutions for clients.
        </p>
        <p className="text-lg text-gray-600">
          When I’m not coding, you’ll probably find me exploring new tech trends,
          reading, or enjoying a cup of coffee while brainstorming new ideas.
        </p>
      </div>
    </section>
  );
};

export default About;

