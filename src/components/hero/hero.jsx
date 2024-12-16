import React, { useState, useEffect } from 'react';
import photo from '../../assets/my image.jpg';
import { IoCallOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { FaInstagram } from "react-icons/fa";
import axios from 'axios'; // Import axios to fetch the view count

const Hero = () => {
  const [showMore, setShowMore] = useState(false);
  const [viewCount, setViewCount] = useState(0);  // State to store the view count
  
  const toggleIcons = () => {
    setShowMore(!showMore);
  };

  // Fetch view count from the backend on component mount
  useEffect(() => {
    // Replace with the appropriate API call to get the view count
    axios.get('http://localhost:5000/api/views/1')  // Example: Get view count for project with ID 1
      .then(response => {
        setViewCount(response.data.views);  // Set the fetched view count
      })
      .catch(error => {
        console.error('Error fetching view count:', error);
      });
  }, []);

  return (
    <div>
      <div className="my-10 flex items-center justify-center">
        <img
          className="h-72 w-40 rounded-3xl border-2 border-red-300 shadow-2xl shadow-red-400"
          src={photo}
          alt="Profile"
        />
      
</div>
      {/* View Count - Displayed on the left side */}
      <div className=" absolute top-16 ml-4 text-white font-bold">
        <h2 className="text-xs">View Count: {viewCount}</h2>
      </div>

      <div className="md:hidden relative flex flex-col items-start space-y-4 ">
        <button onClick={toggleIcons} className="p-3">
          <IoCallOutline className="text-blue-500" size={24} />
        </button>

        {showMore && (
          <div className="absolute flex flex-col bottom-14 ">
            <button className="p-3 flex flex-col gap-5">
              <FaLinkedin size={24} />
              <BsGithub size={24} />
              <GoMail size={24} />
              <FaInstagram size={24} />
            </button>
          </div>
        )}
      </div>

      <div className="flex ml-10 font-bold md:ml-20 md:mt-10">
        <div>
          <h1 className="text-4xl text-amber-700">I am Abisheik</h1>
          <p className="text-2xl text-lime-200">Back end developer in Java</p>
          <p className="mt-2 md:max-w-md md:break-words md:text-2xl">
            Using Spring Boot API server on backend development while using SQL data structure backend.
          </p>
          <button className="bg-slate-600 border-2 p-2 mt-2 rounded-lg border-rose-800">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;