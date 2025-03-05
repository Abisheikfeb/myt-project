import React, { useState, useEffect } from 'react';
import photo from '../../assets/my image.jpg';
import { IoCallOutline, IoEyeOutline } from "react-icons/io5";
import { FaLinkedin, FaInstagram, FaDownload } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import sample1 from '../../pdf/RESUME.pdf';
import axios from 'axios';

const Hero = () => {
  const [showMore, setShowMore] = useState(false);
  const [viewCount, setViewCount] = useState(0);

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    axios.get(`${API_BASE_URL}/api/views/1`)  
      .then(response => {
        setViewCount(response.data.views); 
      })
      .catch(error => {
        console.error('Error fetching view count:', error);
      });

    // Auto-open after 10 seconds
    const timer = setTimeout(() => {
      setShowMore(true);
    }, 5000);

    return () => clearTimeout(timer); 
  }, [API_BASE_URL]);

  const toggleIcons = () => {
    setShowMore(!showMore);
  };

  const handleDownload = (fileUrl) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileUrl.split("/").pop(); 
    link.click();
  };

  return (
    <div>
      <div className="my-10 flex items-center justify-center">
        <img
          className="h-72 w-40 rounded-3xl border-2 border-red-300 shadow-2xl shadow-red-400"
          src={photo}
          alt="Profile"
        />
      </div>
      <div className="absolute top-16 ml-4 text-white font-bold">
        <h2 className="text-xs flex items-center gap-1">
          Views <IoEyeOutline className='text-red-800' size={16} />: {viewCount}
        </h2>
      </div>

      <div className="md:hidden relative flex flex-col items-start bottom-6 space-y-4">
        <button 
          onClick={toggleIcons} 
          className="p-3 transition-transform  duration-300  ease-in-out transform hover:scale-110"
        >
          {showMore ? (
            <span className="text-red-500 text-xl  font-bold">Hey, I am available</span>
          ) : (
            <IoCallOutline className="text-blue-500" size={24} />
          )}
        </button>

        {/* Social Media Links */}
        <div className={`absolute flex flex-col ml-1 bottom-20 space-y-3 shadow-md transition-all duration-500 ease-in-out  ${
          showMore ? 'opacity-100 scale-100' : 'opacity-0 scale-90 hidden'
        }`}>
          <a className='bg-white rounded-full p-2 text-blue-500 ' href="https://www.linkedin.com/in/abisheik-s-7227b2304/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a className='bg-white rounded-full p-2 text-black' href="https://github.com/Abisheikfeb" target="_blank" rel="noopener noreferrer">
            <BsGithub size={30} />
          </a>
          <a className='bg-white rounded-full p-2 text-red-500 ' href="mailto:abisheik2004feb@gmail.com">
            <GoMail size={30} />
          </a>
          <a className='bg-white rounded-full p-2 text-pink-500' href="https://www.instagram.com/abisheik_feb27/profilecard/?igsh=MWRkNzR3bDZudDVscg==" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
        </div>
      </div>

      <div className="flex ml-10 font-bold md:ml-20 md:mt-10">
        <div>
          <h1 className="text-4xl text-amber-700">I am Abisheik</h1>
          <p className="text-2xl text-lime-200">Generative AI Developer and Java Developer</p>
          <p className="mt-2 md:max-w-md md:break-words md:text-2xl overflow-hidden">
            Working on AI algorithms and developing Java applications, focusing on efficient data storage and algorithmic optimization.
          </p>

          <div className="mt-4 flex space-x-4">
            <a href="#contactme">
              <button className="bg-slate-600 border-2 p-2 rounded-lg border-rose-800 hover:bg-slate-700 transition-colors">
                Contact Us
              </button>
            </a>
            <button
              onClick={() => handleDownload(sample1)}
              className="bg-green-600 border-2 p-2 rounded-lg border-green-800 flex items-center hover:bg-green-700 transition-colors"
            >
              <span>RESUME</span>
              <FaDownload className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
