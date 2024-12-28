import React from 'react';
import { FaJava } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { SiSpringboot } from "react-icons/si";
import { Bs0Circle } from "react-icons/bs";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const About = () => {
  return (
    <div id="aboutme" className="p-4">
      <h1 className="text-center text-3xl mt-4">
        <span className="text-red-400 text-5xl">A</span>bout Me
      </h1>
      <div className="mt-10">
        <h1 className="ml-0 text-2xl mt-10 md:text-5xl md:ml-10">
          I work on
          <p className="text-3xl font-extralight text-red-200">Here are some of my skills</p>
        </h1>
        <div className="ml-0 mt-8 flex flex-col items-center md:ml-10 md:items-start">
         
          <div className="w-40 h-40 md:w-40 md:h-40">
            <CircularProgressbar
              value={80}
              text="backend"
              styles={buildStyles({
                textColor: 'orange',
                pathColor: '#4caf50',
                trailColor: '#e0e0e0',
                textSize: '16px',
              })}
            />
          </div>
          <p className="text-lg mt-4 text-center">Backend Development Proficiency</p>
          <div className="flex flex-col gap-4 mt-5">
            <div className="flex items-center gap-4">
              <FaJava className="text-3xl text-orange-600" />
              <h3 className="text-2xl">Java</h3>
            </div>
            <div className="flex items-center gap-4">
              <TbBrandCSharp className="text-3xl text-blue-600" />
              <h3 className="text-2xl">C#</h3>
            </div>
            <div className="flex items-center gap-4">
              <SiSpringboot className="text-3xl text-green-700" />
              <h3 className="text-2xl">Spring Boot</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="text-start md:ml-72 md:mt-10 md:text-2xl">
        <p className="ml-5 mt-5 md:text-xl break-words">
          As a Java and backend developer, you specialize in designing and implementing server-side logic,
          ensuring that applications run smoothly and efficiently.
        </p>
      </div>
      <div className="ml-0 md:ml-72 mt-5 w-full max-w-lg">
      <div className="border-2 px-2 py-4 shadow-2xl bg-gradient-to-b from-green-500 shadow-red-500 to-blue-500 rounded-3xl border-red-400">

    <div className="flex flex-col gap-4 text-black">
      <div className="flex items-center justify-between text-base sm:text-xl">
        <div className="flex items-center gap-2">
          <Bs0Circle className="text-base text-red-500" />
          <span>Problem Solving</span>
        </div>
        <div className="w-16 sm:w-24 bg-gray-200 h-2 rounded-full">
          <div className="bg-red-500 h-2 rounded-full w-3/4"></div> {/* Adjust width percentage based on proficiency */}
        </div>
      </div>
      <div className="flex items-center justify-between text-base sm:text-xl">
        <div className="flex items-center gap-2">
          <Bs0Circle className="text-base text-red-500" />
          <span>Backend API & REST Operations</span>
        </div>
        <div className="w-16 sm:w-24 bg-gray-200 h-2 rounded-full">
          <div className="bg-yellow-500 h-2 rounded-full w-2/3"></div> {/* Adjust width percentage based on proficiency */}
        </div>
      </div>
      <div className="flex items-center justify-between text-base sm:text-xl">
        <div className="flex items-center gap-2">
          <Bs0Circle className="text-base text-red-500" />
          <span>Experience in Banking Projects</span>
        </div>
        <div className="w-16 sm:w-24 bg-gray-200 h-2 rounded-full">
          <div className="bg-blue-500 h-2 rounded-full w-4/5"></div> {/* Adjust width percentage based on proficiency */}
        </div>
      </div>
      <div className="flex items-center justify-between text-base sm:text-xl">
        <div className="flex items-center gap-2">
          <Bs0Circle className="text-base text-red-500" />
          <span>Multi-Function Handling</span>
        </div>
        <div className="w-16 sm:w-24 bg-gray-200 h-2 rounded-full">
          <div className="bg-green-500 h-2 rounded-full w-1/2"></div> {/* Adjust width percentage based on proficiency */}
        </div>
      </div>
    </div>
  </div>
</div>


    </div>
  );
};

export default About;
