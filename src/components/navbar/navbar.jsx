import React, { useState } from 'react';
import { FaListUl } from 'react-icons/fa';
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
    <div id='home' className="w-full bg-gray-400/90 mt-1 rounded-3xl border-2 border-red-500 drop-shadow-lg md:rounded-4xl relative">
      
      <div className="flex items-center justify-between h-[50px] w-full px-8">
        <div className="flex items-center">
          <h1 className="text-pink-800 text-2xl font-semibold md:text-4xl">ABISHEIK</h1>
          <ul className="hidden md:flex space-x-10 ml-40">
            <li><a href="#home">Home</a></li>
            <li><a href="#aboutme">About Me</a></li>
            <li><a href="#myskill">My Skill</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#certificate">Certificate</a></li>
            <li><a href="#contactme">Contact Me</a></li>
          </ul>
          <div className="flex items-end ml-2 rounded-3xl gap-6">
            {user ? (
              <button className="bg-green-600 px-3 py-1 rounded-lg flex md:ml-20 text-sm sm:text-base truncate">
                Welcome, {user.name}
              </button>
            ) : (
              <button
                className="bg-blue-600 px-3 py-1 rounded-lg flex ml-20"
                onClick={openRegister}
              >
                Sign In
              </button>
            )}
          </div>
        </div>
        <div className="md:hidden" onClick={handleNavigation}>
          {!nav ? <FaListUl className="text-blue-700 h-5 w-5" /> : <IoClose className="text-blue-700 h-5 w-5" />}
        </div>
      </div>

     
      <div className="md:hidden">
        <ul className={!nav ? 'hidden' : 'w-full bg-white/98 absolute px-2 flex justify-end'}>
        <div className="border-2 animate-borderChange
         border-red-500 bg-slate-400 p-3 ml-10 px-2 mt-5 rounded-2xl flex flex-col gap-2 cursor-pointer">
  <button className="border-2 px-2 mr-20 py-2 rounded-2xl border-indigo-200">
    <a href="#home">Home</a>
  </button>
  <button className="border-2 px-2 mr-20 py-2 rounded-2xl border-indigo-200">
    <a href="#aboutme">About Me</a>
  </button>
  <button className="border-2 px-2 mr-20 py-2 rounded-2xl border-indigo-200">
    <a href="#myskill">My Skill</a>
  </button>
  <button className="border-2 px-2 mr-20 py-2 rounded-2xl border-indigo-200">
    <a href="#projects">Projects</a>
  </button>
  <button className="border-2 px-2 mr-20 py-2 rounded-2xl border-indigo-200">
    <a href="#certificate">Certificate</a>
  </button>
  <button className="border-2 px-2 mr-20 py-2 rounded-2xl border-indigo-200">
    <a href="#contactme">Contact</a>
  </button>

</div>
</ul>
</div>

     

      {isRegisterOpen && (
        <div className="absolute w-full flex justify-center mt-16">
          <div className="bg-red-200 max-w-md p-10 px-5 w-72 md:w-full rounded-lg shadow-lg relative">
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
