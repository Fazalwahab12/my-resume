
"use client"

import sig from '../../public/signature.png'

import Image from 'next/image'
import Link from 'next/link'
import {  useEffect, useState } from 'react';
import { AiOutlineClose,  AiOutlineMail,  AiOutlineMenu } from 'react-icons/ai';
import {  BsTwitter, BsWhatsapp } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, ] = useState('#ecf0f3');
 
 

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
          : 'fixed w-full h-20 z-[100]'
      }
    >
    
      <div className=' flex justify-between items-center w-full px-2 zxl:px-16 pt-2'>
      <Image src={sig} alt="panaverse Logo" />
      <div>
      <ul  className='hidden md:flex'>
            <li className='ml-10 text-sm uppercase hover:border-b hover:font-bold'>
              <Link href='/'>Home</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b hover:font-bold'>
              <Link href='/#about'>About</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b hover:font-bold'>
              <Link href='/#Skills'>Skills</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b hover:font-bold'>
              <Link href='/'>Projects</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b hover:font-bold'>
              <Link href='/'>Resume</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b hover:font-bold'>
              <Link href='/#contact'>Contact</Link>
            </li>
          </ul>
          <div onClick={handleNav} className='md:hidden sm:w-[240] sm:px-3 pt-6'>
          <AiOutlineMenu size={25} />
          </div>
          </div>
      </div>
      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
      
      <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
           <div>
          <div className='flex w-full  items-center justify-between '>
          <Image src={sig} alt="panaverse Logo" />
          <div onClick={handleNav}  className='  rounded-full shadow-lg shadow-gray-400 p-3   cursor-pointer '>
            <AiOutlineClose/>
          </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>
                Let&#39;s build something legendary together
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
          <ul className='uppercase'>
              <Link href='/'>
                <li  className='py-4 text-sm hover:font-bold'>
                  Home
                </li>
              </Link>
              <Link href='/#About'>
                <li  className='py-4 text-sm hover:font-bold'>
                  About
                </li>
              </Link>
              <Link href='/#Skills'>
                <li  className='py-4 text-sm hover:font-bold'>
                  Skills
                </li>
              </Link>
              <Link href='/#Projects'>
                <li  className='py-4 text-sm hover:font-bold'>
                  Projects
                </li>
              </Link>
              <Link href='/'>
                <li  className='py-4 text-sm hover:font-bold'>
                  Resume
                </li>
              </Link>
              <Link href='/# Contact'>
                <li  className='py-4 text-sm hover:font-bold'>
                  Contact
                </li>
              </Link>
            </ul>
            <div>
            <p className='uppercase tracking-widest text-[#5651e5] '>
              Let&#39;s Connect
            </p>
          
            <div className='flex items-center justify-between w-full sm:w-[120%] pt-20'>
            
            <a
                href='https://www.linkedin.com/in/fazal-wahab-738481225/'
                target='_blank'
                rel='noreferrer'
              >
              <div className='  flex rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  
               <FaLinkedinIn/>
               </div>
               </a>
               <a
                href='https://github.com/Fazalwahab12'
                target='_blank'
                rel='noreferrer'
              >
               <div className=' flex rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
              
               <FaGithub />
               </div>
               </a>
               <a
                href='https://wa.link/9izp97'
                target='_blank'
                rel='noreferrer'
              >
               <div className=' flex rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
              
               <BsWhatsapp />
               </div>
               </a>
               
              <a
                href='https://twitter.com/Fazalwa82367043?s=08'
                target='_blank'
                rel='noreferrer'
              >
               <div className=' flex rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
              
               
             
               <BsTwitter />
               
               </div>
               </a>
               <a
                href='https://twitter.com/Fazalwa82367043?s=08'
                target='_blank'
                rel='noreferrer'
              >
               <div className=' flex rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
              
               
             
               < AiOutlineMail/>
               
               </div>
               </a>
              </div>
              </div>
          </div>
        </div>
      </div>
     </div>
   )
  }
  
  export default Navbar