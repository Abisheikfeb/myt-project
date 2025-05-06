import React from 'react';
import { FaJava } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { SiSpringboot } from "react-icons/si";
import { Bs0Circle } from "react-icons/bs";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const About = () => {
  return (
    <div id="aboutme" className="p-6 md:p-12">
      
      <h1 className="text-center text-4xl md:text-5xl font-semibold">
        <span className="text-red-500">A</span>bout Me
      </h1>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">

        
        <div className="flex flex-col items-center md:items-start space-y-6">
          <h1 className="text-2xl md:text-4xl font-semibold text-center md:text-start">
            I work on
          </h1>
          <p className="text-xl text-gray-500 text-center md:text-start">Some of my key skills</p>

     
          <div className="w-40 h-40 md:w-48 md:h-48">
            <CircularProgressbar
              value={80}
              text="Backend"
              styles={buildStyles({
                textColor: 'orange',
                pathColor: '#4caf50',
                trailColor: '#e0e0e0',
                textSize: '18px',
              })}
            />
          </div>

       
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <FaJava className="text-5xl text-orange-600" />
              <h3 className="text-2xl font-medium">Java</h3>
            </div>
            <div className="flex items-center gap-4">
              <TbBrandCSharp className="text-5xl text-blue-600" />
              <h3 className="text-2xl text-red-600 font-medium">C#</h3>
            </div>
            <div className="flex items-center gap-4">
              <SiSpringboot className="text-5xl text-green-700" />
              <h3 className="text-2xl text-blue-500  font-medium">Spring Boot</h3>
            </div>
          </div>
        </div>

       
        <div className="flex flex-col justify-center md:justify-start items-center md:items-start space-y-6 border-l-2 border-r-2 border-gray-300 px-4 md:px-8">
          <p className="text-lg md:text-xl text-blue-100 text-center md:text-start leading-relaxed">
            As a Java and backend developer, I specialize in designing and implementing
            server-side logic, ensuring that applications run smoothly and efficiently.
          </p>
          <p className="text-lg md:text-xl text-blue-100 text-center md:text-start leading-relaxed">
            My expertise lies in creating scalable APIs, managing databases, and optimizing
            system performance.
          </p>
    </div>
    <h1 className='text-red-300 text-7xl'> hellow world</h1>
        {/* Right - Strengths */}
        <div className="w-full bg-white border-2 p-6 shadow-xl rounded-lg">
          <h2 className="text-lg md:text-xl font-semibold mb-4 text-center md:text-start">Key Strengths</h2>

          <div className="space-y-5">
            {/* Strength 1 */}
            <div className="flex items-center justify-between text-base sm:text-xl">
              <div className="flex items-center gap-2">
                <Bs0Circle className="text-lg text-red-500" />
                <span className='text-red-500 font-bold'>Problem Solving</span>
              </div>
              <div className="w-28 sm:w-36 bg-gray-200 h-2 rounded-full">
                <div className="bg-red-500 h-2 rounded-full w-3/4"></div> 
              </div>
            </div>

            {/* Strength 2 */}
            <div className="flex items-center justify-between text-base sm:text-xl">
              <div className="flex items-center gap-2">
                <Bs0Circle className="text-lg text-yellow-500" />
                <span className='text-yellow-500 font-bold'>Backend API & REST</span>
              </div>
              <div className="w-28 sm:w-36 bg-gray-200 h-2 rounded-full">
                <div className="bg-yellow-500 h-2 rounded-full w-2/3"></div> 
              </div>
            </div>

            {/* Strength 3 */}
            <div className="flex items-center justify-between text-base sm:text-xl">
              <div className="flex items-center gap-2">
                <Bs0Circle className="text-lg text-blue-500" />
                <span className='text-blue-500 font-bold'>Banking Projects</span>
              </div>
              <div className="w-28 sm:w-36 bg-gray-200 h-2 rounded-full">
                <div className="bg-blue-500 h-2 rounded-full w-4/5"></div> 
              </div>
            </div>

            {/* Strength 4 */}
            <div className="flex items-center justify-between text-base sm:text-xl">
              <div className="flex items-center gap-2">
                <Bs0Circle className="text-lg text-green-500" />
                <span className='text-green-500 font-bold'>Multi-Function Handling</span>
              </div>
              <div className="w-28 sm:w-36 bg-gray-200 h-2 rounded-full">
                <div className="bg-green-500 h-2 rounded-full w-1/2"></div> 
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};

export default About;
