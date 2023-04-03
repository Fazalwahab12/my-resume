import Image from 'next/image';
import React from 'react';
import price from '../../public/skill/price.png'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const page = () => {
  return (
    <div className='w-full'>
    <div className='w-screen h-[50vh] relative'>
      <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
      <Image src={price} alt='/' className=' w-full h-full'>

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
        The Pricing UI is a web application that displays pricing plans for a product or service. The app is built using Next.js 13 and Chakra UI, two popular libraries for building modern web applications. Next.js is a React framework that provides server-side rendering and other performance optimizations, while Chakra UI is a set of accessible and customizable UI components for React.

The app displays multiple pricing plans, each with its own set of features and price. The user can compare the plans and select the one that best fits their needs. The UI is designed using Chakra UI components, such as cards, buttons, and headings, and supports responsive design for different screen sizes.

The app also uses the React useState hook to manage the app state and toggle between monthly and yearly pricing plans. The pricing data is stored in a 

Overall, the Pricing UI is a functional and visually appealing web application that demonstrates the power of Next.js and Chakra UI for building modern web applications. It can be easily customized and extended to add more features and functionality.  </p>
        <a
          href='https://github.com/Fazalwahab12/pricing-ui'
          target='_blank'
          rel='noreferrer'
        >
          <button className='px-8 py-2 mt-4 mr-8'>Code</button>
        </a>
        <a
          href='https://pricing-ui-dun.vercel.app/'
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
              <RiRadioButtonFill className='pr-1' /> CHAKRA-UI
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