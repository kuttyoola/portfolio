import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer';
import Photo from './Photo.png'
import './pages.css'
import About from './about'
import Contact from './contect'
import Project from './project'

const home = () => {
  return (
    <div className='mx-auto container relative flex flex-col items-center '>
      <div className='bg-fuchsia-600 h-50 w-50 -z-50 blur-3xl top-6 left-0 opacity-40 absolute rounded-full'></div>
      <h1 className='text-white text-3xl text-shadow-cyan-200 pt-5'>Hello, I'm <span className='text-amber-400 font-bold'>HARIHARAN M</span> </h1>
      <h3 className='text-gray-400 text-2xl font-bold pt-3'>Full Stact Developer | SAS Developer</h3>
      <h3 className='  w=dvw m-5 text-2xl font-bold content'>i build modern, responsive web interfaces with React anad other cool tools.lets create something amazing!</h3>
      <div className='p-1 my-8 rounded-bl-full rounded-e-full 
        bg-gradient-to-r
        from-pink-500
        via-yellow-500
        to-blue-500
        hover:from-blue-500
        hover:via-pink-500
        hover:to-yellow-500'>
        <img className=' h-60 w-60 lg:h-80 lg:w-80 rounded-full border-4 border-[#07024e] object-cover' src={Photo} alt="" />
      </div>
      
      <div className=" py-4">
      <h2 className="text-center text-white text-2xl font-bold mb-4">
        SKILLS
      </h2>

      <marquee
        behavior="scroll"
        direction=""
        scrollamount="20" // speed
        loop="infinite"
        height="120"
      >
        <div className="flex gap-16">
          <img
            src="https://brandeps.com/icon-download/H/Html-5-icon-vector-01.svg"
            alt="Logo 1"
            className="h-[50px] sm:h-[100px] w-[200px]"
          />
          <img
            src="https://cdn.worldvectorlogo.com/logos/tailwind-css-1.svg"
            alt="Logo 2"
            className="h-[50px] sm:h-[100px] w-[200px]"
          />
          <img
            src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
            alt="Logo 3"
            className="h-[50px] sm:h-[100px] w-[200px]"
          />
          <img
            src="https://cdn.worldvectorlogo.com/logos/python-logo-and-wordmark.svg"
            alt="Logo 4"
            className="h-[50px] sm:h-[100px] w-[200px]"
          />
          <img
            src="https://cdn.worldvectorlogo.com/logos/flask.svg"
            alt="Logo 5"
            className="h-[50px] sm:h-[100px] w-[200px]"
          />
          <img
            src="https://cdn.worldvectorlogo.com/logos/mysql-logo-pure.svg"
            alt="Logo 6"
            className="h-[50px] sm:h-[100px] w-[200px]"
          />
          <img
            src="https://cdn.worldvectorlogo.com/logos/sas-6.svg"
            alt="Logo 6"
            className="h-[50px] sm:h-[100px] w-[100px]"
          />
        </div>
      </marquee>
 <hr/>      
      <div className='bg-red-600 h-50 w-50 lg:h-50 lg:w-50 -z-50 blur-3xl bottom-0 right-0 opacity-40 absolute rounded-full'></div>
      <div className='flex sm:hidden'><About/></div>
      <div className='flex sm:hidden'><Project/></div>
      <div className='flex sm:hidden'><Contact/></div>
    </div>
  
</div>

    )
}
export default home
