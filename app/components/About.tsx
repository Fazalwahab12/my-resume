

import Image from 'next/image'

import React from 'react'
import pro from '../../public/prog.jpg'
const About = () => {
  return (
    <div id='about'  className='w-full md:h-screen p-2 flex items-center py-6'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2 '>
        <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
          My specialty is building web-responsive front-end UI applications that connect with APIs and other back-end technologies. I have a passion for learning new technologies and I understand that there are multiple ways to accomplish a task. While I am most proficient in building front-end applications using HTML, CSS, Javascript,  React, and next js framework I am a quick learner and can adapt to new tech stacks as needed.

I believe that being a great developer means not relying on one specific language, but instead choosing the best tool for the job. This approach allows me to create effective and efficient solutions that meet the unique needs of each project. Overall, my focus on constant learning and versatility make me a valuable asset to any team.
          </p>
          
          
    </div>
    <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
        <Image src={pro} alt=''className='rounded-xl' ></Image>
    </div>
        </div>
    </div>
  )
}

export default About