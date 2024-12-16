import React, { useState, useEffect } from 'react';
import { FiLink } from 'react-icons/fi';
import { IoIosHeartEmpty } from 'react-icons/io';
import RegisterForm from '../../components/RegisterForm';
import image1 from '../../assets/onlinebanking.svg';
import image2 from '../../assets/weather.svg';
import image3 from '../../assets/spam.svg';
import image4 from '../../assets/chat.svg';
import axios from 'axios';
import { MdClose } from "react-icons/md";


// Static project data moved outside the component
const initialData = [
  { id: 1, src: image1, alt: 'JAVA', link: 'https://example1.com' },
  { id: 2, src: image2, alt: 'C#', link: 'https://example2.com' },
  { id: 3, src: image3, alt: 'PYTHON', link: 'https://example3.com' },
  { id: 4, src: image4, alt: 'PYTHON', link: 'https://example4.com' },
];

const Project = () => {
  const [imageData, setImageData] = useState(initialData);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginFormVisible, setLoginFormVisible] = useState(false);
  const [pendingLink, setPendingLink] = useState(null); // To store the link the user wants to visit

  // Fetch like counts from the backend when the component mounts
  useEffect(() => {
    initialData.forEach((image) => {
      axios
        .get(`http://localhost:5000/api/likes/${image.id}`)
        .then((response) => {
          setImageData((prevData) =>
            prevData.map((img) =>
              img.id === image.id ? { ...img, likes: response.data.count } : img
            )
          );
        })
        .catch((error) => {
          console.error('Error fetching like counts:', error);
        });
    });
  }, []);

  // Handle "Like" functionality by sending a POST request to the backend
  const handleLike = (id) => {
    axios
      .post(`http://localhost:5000/api/likes/${id}`)
      .then((response) => {
        setImageData((prevData) =>
          prevData.map((img) =>
            img.id === id ? { ...img, likes: response.data.count } : img
          )
        );
      })
      .catch((error) => {
        console.error('Error updating like count:', error);
      });
  };

  // Handle link click
  const handleLinkClick = (link) => {
    if (isLoggedIn) {
      window.open(link, '_blank');
    } else {
      setPendingLink(link); // Store the link and show login form
      setLoginFormVisible(true);
    }
  };

  // Toggle login state
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setLoginFormVisible(false);

    if (pendingLink) {
      window.open(pendingLink, '_blank');
      setPendingLink(null);
    }
  };

  return (
    <div className="mt-12">
      <h1 className="text-center font-medium mt-10 text-3xl">
        <span className="text-red-400 text-5xl">P</span>ROJECTS
      </h1>

      {/* Feedback Message */}
      {isLoginFormVisible && (
        <div className="fixed inset-0 flex items-center justify-start px-8">
          <div className="relative bg-amber-300 p-12 rounded-lg shadow-lg">
            <RegisterForm onSuccess={handleLoginSuccess} />
            <button
              onClick={() => setLoginFormVisible(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              <MdClose  className='text-2xl'/>
            </button>
          </div>
        </div>
      )}

      {/* Project Cards */}
      <div className="flex flex-col gap-5 mt-5 md:flex-row  px-10 md:justify-center">
        {imageData.map((image) => (
          <div key={image.id} className="bg-white shadow-lg rounded-lg px-10">
            <img src={image.src} alt={image.alt} className="w-32 h-36 ml-10" />
            <div className="p-4">
              <p className="text-lg text-center text-red-400">{image.alt}</p>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => handleLinkClick(image.link)}
                className="text-blue-500 hover:text-yellow-300"
              >
                <FiLink className="flex mb-2" size={24} />
              </button>
            </div>
            <div className="flex justify-between items-center">
              <button
                onClick={() => handleLike(image.id)}
                className="flex justify-end text-red-400 p-1"
              >
                <div className="flex justify-start gap-2">
                  <IoIosHeartEmpty className="border-red-500 text-2xl -ml-8" />
                  <span className="text-black">{image.likes || 0}</span>
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;