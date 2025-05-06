import React, { useState } from 'react';
import { FaListUl, FaHome, FaUser, FaLaptopCode, FaCertificate, FaPhoneAlt } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import RegisterForm from '../../components/RegisterForm';

const Navbar = ({ onLogin, user }) => {
  const [nav, setNav] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const handleNavigation = () => setNav(!nav);

  const openRegister = () => setIsRegisterOpen(true);
  const closeRegister = () => setIsRegisterOpen(false);

  const handleLogin = (loggedInUser) => {
    onLogin(loggedInUser);
    closeRegister();
  };

  return (
    <div id="home" className="w-full bg-gray-400/90 mt-1 rounded-3xl border-2 border-red-500 drop-shadow-lg md:rounded-4xl relative">

      {/* Top Navbar */}
      <div className="flex items-center justify-between h-[50px] w-full px-8">
        <div className="flex items-center">
          <h1 className="text-pink-800 text-2xl font-black md:text-4xl">ABISHEIK</h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-10 font-black text-lg p-5 ml-40">
            <li className="text-yellow-400 flex border-2 border-yellow-500 rounded-lg items-center"><FaHome className="mr-2 text-red-400" /><a href="#home">Home</a></li>
            <li className="text-yellow-400 flex border-2 border-yellow-500 rounded-lg items-center"><FaUser className="mr-2 text-blue-400" /><a href="#aboutme">About Me</a></li>
            <li className="text-yellow-400 flex border-2 border-yellow-500 rounded-lg items-center"><FaLaptopCode className="mr-2" /><a href="#myskill">My Skill</a></li>
            <li className="text-yellow-400 flex border-2 border-yellow-500 rounded-lg items-center"><FaLaptopCode className="mr-2" /><a href="#projects">Projects</a></li>
            <li className="text-yellow-400 flex border-2 border-yellow-500 rounded-lg items-center"><FaCertificate className="mr-2 text-red-400" /><a href="#certificate">Certificate</a></li>
            <li className="text-yellow-400 flex border-2 border-yellow-500 rounded-lg items-center"><FaPhoneAlt className="mr-2 text-blue-400" /><a href="#contactme">Contact Me</a></li>
          </ul>

          {/* Login Button */}
          <div className="ml-2 gap-6">
            {user ? (
              <button className="bg-green-600 px-3 py-1 rounded-lg text-sm sm:text-base truncate md:ml-20">
                Welcome, {user.name}
              </button>
            ) : (
              <button
                className="bg-blue-600 fixed top-1 right-24 rounded-xl p-2 text-white"
                onClick={openRegister}
              >
                Sign In
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden" onClick={handleNavigation}>
          {nav ? <IoClose className="text-blue-700 h-5 w-5" /> : <FaListUl className="text-blue-700 h-5 w-5" />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <ul className={!nav ? 'hidden' : 'w-full bg-white/98 absolute px-2 flex justify-center'}>
          <div className="border-2 animate-borderChange border-red-500 bg-slate-400 p-3 mt-5 rounded-2xl flex flex-col gap-2 cursor-pointer">
            <a href="#home" className="border-2 px-2 py-2 rounded-2xl border-indigo-200 flex items-center">
              <FaHome className="mr-2" /> Home
            </a>
            <a href="#aboutme" className="border-2 px-2 py-2 rounded-2xl border-indigo-200 flex items-center">
              <FaUser className="mr-2" /> About Me
            </a>
            <a href="#myskill" className="border-2 px-2 py-2 rounded-2xl border-indigo-200 flex items-center">
              <FaLaptopCode className="mr-2" /> My Skill
            </a>
            <a href="#projects" className="border-2 px-2 py-2 rounded-2xl border-indigo-200 flex items-center">
              <FaLaptopCode className="mr-2" /> Projects
            </a>
            <a href="#certificate" className="border-2 px-2 py-2 rounded-2xl border-indigo-200 flex items-center">
              <FaCertificate className="mr-2" /> Certificate
            </a>
            <a href="#contactme" className="border-2 px-2 py-2 rounded-2xl border-indigo-200 flex items-center">
              <FaPhoneAlt className="mr-2" /> Contact Me
            </a>
          </div>
        </ul>
      </div>

      {/* Register Form Modal */}
      {isRegisterOpen && (
        <div className="absolute w-full flex justify-center mt-16 z-50">
          <div className="bg-blue-200 max-w-md p-10 px-5 w-72 md:w-full rounded-lg shadow-lg relative">
            <IoClose
              className="absolute top-2 right-2 text-2xl cursor-pointer text-gray-600"
              onClick={closeRegister}
            />
            <RegisterForm onLogin={handleLogin} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
