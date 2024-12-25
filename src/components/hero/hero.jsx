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
  const [viewCount, setViewCount] = useState(0); // State to store the view count

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL; // Fetching from .env

  const toggleIcons = () => {
    setShowMore(!showMore);
  };

  const pdfFiles = [
    { file: sample1 },
  ];

  const handleDownload = (fileUrl) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileUrl.split("/").pop(); // Extract filename
    link.click();
  };

  // Fetch view count from the backend on component mount
  useEffect(() => {
    axios.get(`${API_BASE_URL}/api/views/1`)  // Use API_BASE_URL from .env
      .then(response => {
        setViewCount(response.data.views); // Set the fetched view count
      })
      .catch(error => {
        console.error('Error fetching view count:', error);
      });
  }, [API_BASE_URL]);

  return (
    <div>
      {/* Profile Image */}
      <div className="my-10 flex items-center justify-center">
        <img
          className="h-72 w-40 rounded-3xl border-2 border-red-300 shadow-2xl shadow-red-400"
          src={photo}
          alt="Profile"
        />
      </div>

      {/* View Count */}
      <div className="absolute top-16 ml-4 text-white font-bold">
        <h2 className="text-xs flex items-center gap-1">
          Views <IoEyeOutline className='text-red-800' size={16} />: {viewCount}
        </h2>
      </div>

      {/* Contact Icons Toggle (For Mobile) */}
      <div className="md:hidden relative flex flex-col items-start space-y-4">
        <button onClick={toggleIcons} className="p-3">
          <IoCallOutline className="text-blue-500" size={24} />
        </button>

        {showMore && (
          <div className="absolute flex flex-col bottom-14 space-y-3 bg-red-800 p-4 rounded-lg shadow-md">
            <a href="https://www.linkedin.com/in/abisheik-s-7227b2304/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/Abisheikfeb" target="_blank" rel="noopener noreferrer">
              <BsGithub size={24} />
            </a>
            <a href="mailto:abisheik2004feb@gmail.com">
              <GoMail size={24} />
            </a>
            <a href="https://www.instagram.com/abisheik_feb27/profilecard/?igsh=MWRkNzR3bDZudDVscg==" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
          </div>
        )}
      </div>

      {/* Text Content */}
      <div className="flex ml-10 font-bold md:ml-20 md:mt-10">
        <div>
          <h1 className="text-4xl text-amber-700">I am Abisheik</h1>
          <p className="text-2xl text-lime-200">Back end developer in Java</p>
          <p className="mt-2 md:max-w-md md:break-words md:text-2xl overflow-hidden">
            Using Spring Boot API server on backend development while using SQL data structure backend.
          </p>
          
          {/* Buttons */}
          <div className="mt-4 flex space-x-4">
            <a href="#contactme">
              <button className="bg-slate-600 border-2 p-2 rounded-lg border-rose-800">
                Contact Us
              </button>
            </a>
            <button
              onClick={() => handleDownload(pdfFiles[0].file)}
              className="bg-green-600 border-2 p-2 rounded-lg border-green-800 flex items-center" 
            >
              <span>Download</span>
              <FaDownload className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
