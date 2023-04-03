
import React from 'react'
import {  AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

import Link from 'next/link';
import { BsTwitter, BsWhatsapp } from 'react-icons/bs';
const Home = () => {
  return (
   <div  className='w-full h-screen text-center'>
    <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
    <div>
    <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, I&#39;m <span className='text-[#5651e5]'> Fazal wahab </span>
          </h1>
          <h1 className='py-2 text-gray-700'>A Front-End Web Developer</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            I’m focused on building responsive front-end web applications
            integrating back-end technologies.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <Link href={'https://www.linkedin.com/in/fazal-wahab-738481225/'}>
             <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
              <FaLinkedinIn/>
             
              
              </div>
              </Link>
              <Link href={'https://github.com/Fazalwahab12'}>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
              <FaGithub/>
              </div>
              </Link>
              <Link href={'https://wa.link/9izp97'}>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
              <BsWhatsapp/>
              </div>
              </Link>
              <Link href={'https://mail.google.com/mail/u/0/#inbox'}>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
              <AiOutlineMail/>
              </div>
              </Link>
              <Link href={'https://mail.google.com/mail/u/0/#inbox'}>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
              <BsTwitter/>
              </div>
              </Link>
              </div>
          </div>
   </div>
    </div>
  
  )
}

export default Home