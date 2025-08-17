import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';
import logo from './logo-img.jpg';
import resume from './Hariharan.pdf';


const Navbar = () => {
  return (
    <>

    <nav className='shadow-lg/30 flex justify-between items-center bg-blue-950 py-5 px-3'>
        <div className="flex  navbar-logo font-bold sm:text-[50px] text-2xl  items-center  hover:text-amber-400 "><img className='h-13 w-13 rounded-full hidden sm:not-empty:' src={logo} alt="" /> Hari<span className='text-amber-400 hover:text-emerald-50'>.M</span> </div>
                
                <ul className=" flex gap-7 text-2xl font-bold " >
                    <li className='hidden lg:flex hover:text-amber-400 no-underline -underline-offset-80 hover:underline-offset-8 hover:duration-300 hover:underline '><Link to="/">Home</Link></li>
                    <li className='hidden lg:flex hover:text-amber-400 no-underline -underline-offset-80 hover:underline-offset-8 hover:duration-300 hover:underline'><Link to="/about">About</Link></li>
                    <li className='hidden lg:flex hover:text-amber-400 no-underline -underline-offset-80 hover:underline-offset-8 hover:duration-300 hover:underline'><Link to="/project">Project</Link></li>
                    <li className='hidden lg:flex hover:text-amber-400 no-underline -underline-offset-80 hover:underline-offset-8 hover:duration-300 hover:underline'><Link to="/contect">Contect</Link></li>
                    {/* <li className='hover:text-amber-400 no-underline -underline-offset-80 hover:underline-offset-8 hover:duration-300 hover:underline'><Link to="/user">User</Link></li> */}
                    <li><button className=' bg-green-700 hover:text-green-700 hover:bg-amber-50 px-3 pb-1 rounded-2xl '> 
                        <a href={resume} download={resume}><i id="fond" class="fa-solid fa-download"></i> Resume</a>
                        </button></li>
                     <li className='hidden'><button>Menu</button></li>
                </ul>
    </nav>
    </>
    );
};
export default Navbar
