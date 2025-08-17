import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer';
import Admission from '../pages/image/admission.jpg'
import Food from '../pages/image/foodorder.jpg'
import Portfolio from '../pages/image/Portfolio.png'
const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with React and Tailwind CSS to showcase my skills and projects.",
    image:`${Portfolio}`,
    link: "#"
  },
  {
    title: "E-commerce App",
    description: "A fully responsive e-commerce web app with shopping cart, product filters, and secure checkout.",
    image:`${Food}`,
    link: "https://hariuma-hariharan-m-s-projects.vercel.app"
  },
  {
    title: "Automation Student counselling & Filteration System",
    description: "This project built with Python (Flask) for college Student online application Filter the student data to generate.",
    image: `${Admission}`,
    link: "#"
  }
];

const Projects = () => {
  return (
    <section className="bg-[#07024e] min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-0 mb-10">My Projects</h1>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-5 h-">
                <h2 className="text-2xl h- font-semibold text-gray-800 mb-2">{project.title}</h2>
                <p className="text-gray-600 h- mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

