import React from 'react'
import { FaJava } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { SiSpringboot } from "react-icons/si";
import { Bs0Circle } from "react-icons/bs";

const About = () => {
  return (
    <div>
        
        <h1 className='text-center text-3xl mt-4 '><span className='text-red-400 text-5xl'>A</span>bout me </h1>
        <div className='mt-10 ' >
        <h1 className='ml-14 text-2xl mt-10 md:text-5xl md:ml-10'>Iam work on
            <p className='text-3xl font-extralight text-red-200'>Here somy my skills</p>
        </h1>
        <div className='ml-16 '>
            <h1 className=' mt-5  text-blue-600 text-2xl'>BACK END</h1>
            <hr className='border h-2 bg-pink-500 my-2 rounded-md w-56 '/>
           <h1 className='flex mt-5 text-3xl gap-4'> <FaJava className=' text-3xl'/> java</h1>
          <h1 className='flex mt-5 text-3xl gap-3' ><TbBrandCSharp className='text-4xl' />c sharp</h1>
          <h1 className='flex mt-5 text-3xl gap-3' ><SiSpringboot className='text-4xl' />springboot</h1>
    
        </div>
        </div>
        <div className= 'text-start md:ml-72 md:-mt-80  md:96 md:text-2xl '>
          <p className='ml-5 mt-5 md:text-xl md:break-words '>As a Java and backend developer,you specialize in designing and implementing server-side logic ensuring that applications run smoothly and efficiently. </p>

           
</div>
<div className='hidden md:block ml-72 mt-5 w-50 '>
  <div className=' border-2 px-5 h-64 mr-10 ml-7 bg-slate-400 shadow-2xl shadow-orange-500 rounded-3xl border-red-400'>
  
   <div className='flex flex-col mt-7 ml-24 text-black gap-6'>
  <p className='flex text-2xl box-border h-9 w-80 gap-4 border-yellow-400 border-2 rounded-lg'> <Bs0Circle className='text-base  text-red-500 mt-2'/>probelom solving </p>
  <p className='flex text-2xl box-border h-9 w-80 gap-4 border-yellow-400 border-2 rounded-lg'> <Bs0Circle className='text-base  text-red-500 mt-2'/>backing api and rest oprtions </p>
  <p className='flex text-2xl box-border h-9 w-80 gap-4 border-yellow-400 border-2 rounded-lg'> <Bs0Circle className='text-base  text-red-500 mt-2'/>exprencis in banking project </p>
  <p className='flex text-2xl box-border h-9 w-80 gap-4 border-yellow-400 border-2 rounded-lg'> <Bs0Circle className='text-base  text-red-500 mt-2'/>muliti function handelable </p>

   
   
   </div>
  </div>

</div>
        
        
    </div>
  )
}

export default About