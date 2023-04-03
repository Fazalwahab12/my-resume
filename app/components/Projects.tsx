

import Image from 'next/image';
import Link from 'next/link';
import todo from '../../public/skill/todo.png'
import pana from '../../public/skill/panav.png'
import pri from '../../public/skill/Capture.png'
const Projects = () => {
  return (
   
   
    <div id='Project' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-10 mx-auto '>
       
        <div className='relative  items-center justify-center mx-8   w-76   h-80 shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#374553]'>
    <Image className='rounded-xl group-hover:opacity-10' src={todo} alt='/' /> 
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>Next-js-13</h3>
        <p className='pb-4 pt-2 text-white text-center'>Todo-app</p>
        <Link href={'todo'}>
            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
        </Link>
    </div>
   
  
      </div>
    
     
        <div className='relative  items-center justify-center  mx-8     w-76      h-80 shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#76787a]'>
    <Image className='rounded-xl group-hover:opacity-10' src={pana} alt='/' /> 
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>Next-js-13</h3>
        <p className='pb-4 pt-2 text-white text-center'> Panaverse website</p>
        <Link href={'panaverse'}>
            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
        </Link>
       
    
      </div>
      </div>

      <div className='relative  items-center justify-center  mx-8     w-76     h-80 shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#8799ac]'>
    <Image className='rounded-xl group-hover:opacity-10' src={pri} alt='/' /> 
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>Next-js-13</h3>
        <p className='pb-4 pt-2 text-white text-center'>PRICING UI</p>
        <Link href={'price'}>
            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
        </Link>
       
    
      </div>
      </div>

      </div>
      
    </div>
  );
};

export default Projects;