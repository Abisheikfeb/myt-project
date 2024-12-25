import React, { useState, useEffect } from 'react';
import { IoIosHeartEmpty } from 'react-icons/io';
import { FiLink } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import image1 from '../../assets/onlinebanking.svg';
import image2 from '../../assets/weather.svg';
import image3 from '../../assets/spam.svg';
import image4 from '../../assets/chat.svg';
import axios from 'axios';

// Sample project data
const initialData = [
  { id: 1, src: image1, alt: 'JAVA', link:'https://abisheikfeb.github.io/tic-ta-to/' },
  { id: 2, src: image2, alt: 'C#', link: 'https://abisheikfeb.github.io/tempmessage/' },
  { id: 3, src: image3, alt: 'PYTHON', link: 'https://abisheikfeb.github.io/tempmessage/' },
  { id: 4, src: image4, alt: 'PYTHON', link: 'https://abisheikfeb.github.io/tempmessage/' },
];

const Project = ({ isLoggedIn }) => {
  const [showLoginMessage, setShowLoginMessage] = useState(false);
  const [likeCounts, setLikeCounts] = useState({});

  // Get API base URL from .env
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  // Fetch like counts from the backend
  useEffect(() => {
    const fetchLikeCounts = async () => {
      try {
        const likePromises = initialData.map((project) =>
          axios.get(`${API_BASE_URL}/api/likes/${project.id}`).then((response) => ({
            id: project.id,
            count: response.data.count,
          }))
        );
        const likes = await Promise.all(likePromises);
        const likeCountMap = likes.reduce((acc, like) => {
          acc[like.id] = like.count;
          return acc;
        }, {});
        setLikeCounts(likeCountMap);
      } catch (error) {
        console.error('Error fetching like counts:', error);
      }
    };

    fetchLikeCounts();
  }, [API_BASE_URL]);

  const handleLinkClick = (link) => {
    if (isLoggedIn) {
      window.open(link, '_blank');
    } else {
      setShowLoginMessage(true);
    }
  };

  const handleLikeClick = async (projectId) => {
    try {
      // Use the API_BASE_URL from .env
      const response = await axios.post(`${API_BASE_URL}/api/likes/${projectId}`);
      setLikeCounts((prev) => ({
        ...prev,
        [projectId]: response.data.count,
      }));
    } catch (error) {
      console.error('Error updating like count:', error);
    }
  };

  const closeLoginMessage = () => {
    setShowLoginMessage(false);
  };

  return (
    <div id='projects' className="mt-12">
      <h1 className="text-center font-medium mt-10 text-3xl">
        <span className="text-red-400 text-5xl">P</span>ROJECTS
      </h1>

      <div className="flex flex-col gap-5 mt-5 md:flex-row px-10 md:justify-center">
        {initialData.map((image) => (
          <div key={image.id} className="bg-white shadow-lg rounded-lg px-10">
            <img src={image.src} alt={image.alt} className="w-32 h-36 ml-10" />
            <div className="p-4">
              <p className="text-lg text-center text-red-400">{image.alt}</p>
            </div>
            <div className="flex justify-between items-center">
              {/* Like Button */}
              <button
                onClick={() => handleLikeClick(image.id)}
                className="flex justify-end text-red-400 p-1"
              >
                <div className="flex gap-2">
                  <IoIosHeartEmpty className="border-red-500 text-2xl -ml-8" />
                  <span className="text-black">{likeCounts[image.id] || 0}</span>
                </div>
              </button>

              {/* Link Button */}
              <button
                onClick={() => handleLinkClick(image.link)}
                className="text-blue-500 hover:text-yellow-300"
              >
                <FiLink className="flex mb-2" size={24} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {showLoginMessage && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white border-2 border-red-500 p-6 rounded-lg text-center relative w-80">
            <IoClose
              className="absolute top-2 right-2 text-2xl cursor-pointer text-gray-600 hover:text-red-600"
              onClick={closeLoginMessage}
            />
            <p className="text-lg mb-4 text-red-400 font-medium">
              🚫 Please log in to visit this link!
            </p>
            <button
              onClick={closeLoginMessage}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
