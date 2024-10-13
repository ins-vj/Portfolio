"use client"
import React from 'react';

const Contact = () => {
  return (
    <div className='h-[30vh] flex flex-col bg-black'>
      <div className='text-center text-6xl pt-10'>
        CONTACT ME
      </div>
      <div className='flex justify-between w-1/2 m-auto pt-5'>
        <a 
          href="https://github.com/ins-vj" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white hover:text-gray-300 transition duration-200">
          GITHUB
        </a>
        <a 
          href="https://www.linkedin.com/in/vikrant-jakhar-331b2a298/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white hover:text-gray-300 transition duration-200">
          LINKEDIN
        </a>
        <a 
          href="https://www.instagram.com/vikrant__jakhar/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white hover:text-gray-300 transition duration-200">
          INSTA
        </a>
        <a 
          href="https://x.com/vkrnt210152" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white hover:text-gray-300 transition duration-200">
          TWITTER
        </a>
      </div>
    </div>
  );
}

export default Contact;
