import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import angular from '../assets/angular.svg';
import sqlserver from '../assets/sqlserver.png';
import aspdotnetcore from '../assets/aspdotnet.png';
import Csharplogo from '../assets/Csharplogo.png';

function Skills() {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
    {/* Container */}
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
      <div>
        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
        <p className='py-4'>// These are the technologies I've worked with</p>
      </div>
      <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
      
      <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={aspdotnetcore} alt="HTML icon"/>
          <p className='my-4'>Asp.Net Core</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={sqlserver} alt="Sql Server icon"/>
          <p className='my-4'>Ms-Sql Server</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={angular} alt="Angular Icon"/>
          <p className='my-4'>Angular</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon"/>
          <p className='my-4'>React</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={Csharplogo} alt="HTML icon"/>
          <p className='my-4'>C#</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={HTML} alt="HTML icon"/>
          <p className='my-4'>HTML</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={CSS} alt="HTML icon"/>
          <p className='my-4'>CSS</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon"/>
          <p className='my-4'>JavaScript</p>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Skills
