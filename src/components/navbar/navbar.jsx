import React, { useState } from 'react';
import { FaListUl } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import RegisterForm from '../../components/RegisterForm'; // Ensure this is the correct import

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false); // State to track Register modal

  const handleNavigation = () => setNav(!nav);
  const openRegister = () => setIsRegisterOpen(true); // Open Register Modal
  const closeRegister = () => setIsRegisterOpen(false); // Close Register Modal

  return (
    <div className="w-90 h-[60px] bg-gray-400/90 mt-1 rounded-3xl border-2 border-red-500 drop-shadow-lg md:rounded-4xl">
      <div className="flex items-center justify-between h-full w-full px-8">
        <div className="flex items-center">
          <h1 className="text-pink-800 text-2xl font-semibold md:text-4xl">ABISHEIK</h1>
          <ul className="hidden md:flex space-x-10">
            <li><a href="#home">Home</a></li>
            <li><a href="#aboutme">About Me</a></li>
            <li><a href="#myskill">My Skill</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#certificate">Certificate</a></li>
            <li><a href="#contactme">Contact Me</a></li>
          </ul>
          <div className="flex items-end ml-2 rounded-3xl gap-6">
            <button
              className="bg-blue-600 px-1 py-1 rounded-lg"
              onClick={openRegister} // Open Register on Sign In click
            >
              Sign In
            </button>
          </div>
        </div>
        <div className="md:hidden" onClick={handleNavigation}>
          {!nav ? <FaListUl className="text-blue-700 h-5 w-5" /> : <IoClose className="text-blue-700 h-5 w-5" />}
        </div>
      </div>

      <div className="md:hidden">
        <ul className={!nav ? 'hidden' : 'w-full bg-white/98 absolute px-2 flex justify-end'}>
          <div className="border-2 border-red-500 bg-slate-400 p-3 ml-10 px-2 mt-5 rounded-2xl flex flex-col gap-2 cursor-pointer">
            <button className="border-2 px-1 mr-20 py-2 rounded-2xl border-indigo-200">Home</button>
            <button className="border-2 px-1 mr-20 py-2 rounded-2xl border-indigo-200">Aboutme</button>
            <button className="border-2 px-1 mr-20 py-2 rounded-2xl border-indigo-200">Myskill</button>
            <button className="border-2 px-1 mr-20 py-2 rounded-2xl border-indigo-200">Project</button>
            <button className="border-2 px-1 mr-20 py-2 rounded-2xl border-indigo-200">Certificate</button>
            <button className="border-2 px-1 mr-20 py-2 rounded-2xl border-indigo-200">Contact</button>
          </div>
        </ul>
      </div>

      {/* Render RegisterForm when modal opens */}
      {isRegisterOpen && (
        <div className=" mt-12 flex justify-center items-center z-50">
          <div className="bg-red-200 p-6 rounded-lg shadow-lg relative w-[400px]">
            <IoClose
              className="absolute top-2 right-2 text-2xl cursor-pointer text-gray-600"
              onClick={closeRegister} // Close Register Modal
            />
            <RegisterForm onClose={closeRegister} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
