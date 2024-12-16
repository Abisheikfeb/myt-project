import React from 'react'
import { FaGraduationCap } from "react-icons/fa";
import { FaSchool } from "react-icons/fa6";
import { GiSchoolBag } from "react-icons/gi";
import { RiPresentationLine } from "react-icons/ri";

const myskill = () => {
  return (
    <div className=''>
        <h1 className=' text-center font-medium mt-10 text-3xl'><span className='text-red-500 text-4xl'>My</span> education</h1>
       
       
        <div className='flex flex-col items-center mr-10 mt-10 '>
          
        <div className=' mr-64 text-4xl  md:text-8xl text-purple-500 '><FaGraduationCap /></div>
        <div className='h-10 w-1 mr-64 bg-orange-500'></div>
            <div className='w-72 h-16 border-red-300 border-2 rounded-md'>
              <div className='flex-col gap-2 mr-3 '>
              <h1>HSE</h1>
                <p><FaSchool  className='text-yellow-300'/></p>
                <h1 className='ml-16 text-start place-items-center text-lg -mt-11'>maths computer at model school dharmapuri</h1>
                </div>
            </div>
            <div className='h-10 w-1 mr-64 bg-orange-500'></div>
            <div className='w-72 h-16  border-red-300 border-2 rounded-md'>
              <div className='flex-col gap-2 mr-3'>
              <h1>college</h1>
            <p><GiSchoolBag className='text-yellow-300 ' /></p>
            <h1 className='ml-16 text-start place-items-center text-lg -mt-11'>computer applications at don bosco college</h1>
            
            </div>
            </div>
            <div className='h-10 w-1 mr-64 bg-orange-500'></div>
            <div className='w-72 h-16 border-red-300 border-2 rounded-md shadow-xl shadow-amber-500'>
            <div className='flex-col gap-2 mr-3'>
              <h1>course</h1>
            <p>< RiPresentationLine className='text-yellow-300 ' /></p>
            <h1 className='ml-16 text-start place-items-center text-lg -mt-11'> oracal data base at oracal university</h1>
           
            </div>
            </div>

            <div className='h-10 w-1 mr-64 bg-orange-500'></div>
            <div className='w-72 h-16 border-red-300 border-2 rounded-md shadow-xl shadow-amber-500'>
            <div className='flex-col gap-2 mr-3'>
              <h1>course</h1>
            <p>< RiPresentationLine className='text-yellow-300 ' /></p>
            <h1 className='ml-16 text-start place-items-center text-lg -mt-11'> cyber security in standard and regulations</h1>
           
            </div>
            </div>
     </div>
    </div>
  )
}

export default myskill