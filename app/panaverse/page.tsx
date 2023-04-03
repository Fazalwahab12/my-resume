import Image from 'next/image';
import React from 'react';
import pana from '../../public/ps.png'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const page = () => {
  return (
    <div className='w-full'>
    <div className='w-screen h-[50vh] relative'>
      <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
      <Image src={pana} alt='/' className=' w-full h-full'>

      </Image>
      <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
        <h2 className='py-2'> TODO-APP</h2>
        <h3 className=' uppercase'>Next-js-13 / CHAKRA-UI </h3>
      </div>
    </div>

    <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
      <div className='col-span-4'>
        <p>Project</p>
        <h2>Overview</h2>
        <p>
        Panaverse DAO is a movement to spread these technologies globally. It is a community of Web 3 and Metaverse developers, designers, trainers, startup founders ,and service providers.
Using Next js and Tailwind CSS is a sleek and modern design that provides an intuitive and user-friendly experience .
 The panaverse -dao website is fully responsive, adapting to different screen sizes and devices. The mobile version of the UI provides a streamlined experience that is optimized for smaller screens, with easy-to-use navigation.     </p>
        <a
          href='https://github.com/Fazalwahab12/panaverse-dao'
          target='_blank'
          rel='noreferrer'
        >
          <button className='px-8 py-2 mt-4 mr-8'>Code</button>
        </a>
        <a
          href='https://panaverse-dao-pink.vercel.app/'
          target='_blank'
          rel='noreferrer'
        >
          <button className='px-8 py-2 mt-4'>Demo</button>
        </a>
      </div>
      <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
        <div className='p-2'>
          <p className='text-center font-bold pb-2'>Technologies</p>
          <div className='grid grid-cols-3 md:grid-cols-1'>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> NEXT-JS-13
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' />Tailwind-css
            </p>
            
            
          </div>
        </div>
      </div>
      <Link href='/'>
        <p className='underline cursor-pointer'>Back</p>
      </Link>
    </div>
  </div>
  )
}

export default page