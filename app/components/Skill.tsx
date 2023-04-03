
import Html from '../../public/skill/html.png'
import Css from '../../public/skill/css.png'
import Javascript from '../../public/skill/javascript.png'
import Type from '../../public/skill/types.jpg'
import Nextjs from '../../public/skill/nextjs.png'
import React from '../../public/skill/react.png'
import Tailwind from '../../public/skill/tailwind.png'
import Node from '../../public/skill/node.png'
import Github from '../../public/skill/github2.png'
import chakra from '../../public/skill/chakra.png'
import Image from "next/image"

// import AWS from '../public/assets/skills/aws.png';
const Skill = () => {
  return (

     
<div id='Skills'  className='w-full lg:h-screen p-2'>
<div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
  <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
    Skills
  </p>
  <h2 className='py-4'>What I Can Do</h2>
  <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
      <div className='grid grid-cols-2 gap-4 justify-center items-center'>
        <div className='m-auto'>
          <Image src={Html} alt='/' />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h3>HTML-5</h3>
        </div>
      </div>
    </div>
    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
      <div className='grid grid-cols-2 gap-4 justify-center items-center'>
        <div className='m-auto'>
          <Image src={Css}  alt='/' />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h3>CSS-3</h3>
        </div>
      </div>
    </div>
    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
      <div className='grid grid-cols-2 gap-4 justify-center items-center'>
        <div className='m-auto'>
          <Image src={Javascript}  alt='/' />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h3>JavaScript</h3>
        </div>
      </div>
    </div>
    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
      <div className='grid grid-cols-2 gap-4 justify-center items-center'>
        <div className='m-auto'>
          <Image src={Type} alt='/' />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h3>Typescript</h3>
        </div>
      </div>
    </div>
    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
      <div className='grid grid-cols-2 gap-4 justify-center items-center'>
        <div className='m-auto'>
          <Image src={React}  alt='/' />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h3>React-18</h3>
        </div>
      </div>
    </div>
    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
      <div className='grid grid-cols-2 gap-4 justify-center items-center'>
        <div className='m-auto'>
          <Image src={Nextjs}  alt='/' />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h3>Next-13</h3>
        </div>
      </div>
    </div>
    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
      <div className='grid grid-cols-2 gap-4 justify-center items-center'>
        <div className='m-auto'>
          <Image src={Tailwind}  alt='/' />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h3>Tailwind</h3>
        </div>
      </div>
    </div>

    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
      <div className='grid grid-cols-2 gap-4 justify-center items-center'>
        <div className='m-auto'>
          <Image src={chakra}  alt='/' />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h3>Chakra-ui</h3>
        </div>
      </div>
    </div>

    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
      <div className='grid grid-cols-2 gap-4 justify-center items-center'>
        <div className='m-auto'>
          <Image src={Node}  alt='/' />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h3>Node-js</h3>
        </div>
      </div>
    </div>
    
    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
      <div className='grid grid-cols-2 gap-4 justify-center items-center'>
        <div className='m-auto'>
          <Image src={Github}  alt='/' />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h3>Github</h3>
        </div>
      </div>
    </div>
    
  </div>
</div>
</div>
);
};
  
 export default Skill

//     <div
//     className=" flex items-center max-w-7xl   mx-auto leading-8 mb-10"
//     id="skills"
//   >
//     <div className=" px-10 mt-32 mx-auto">
//     <h1 className='text-xl tracking-widest uppercase text-[#5651e5]'>
//   Skills
// </h1>
// <h2 className='py-4'>What I Can Do</h2>

//       <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-20">

//         <div className=" p-5 ">
//         <Image src={Html} alt='/' className="w-20 h-20  object-contain  hover:-translate-y-2 duration-700"/>
//         <h3>HTML-5</h3>
//         </div>
    
//         <div className="p-5">
//         <Image src={Css} alt='/' className="w-20 h-20  object-contain  hover:-translate-y-2 duration-700"/>
//         <h3>CSS-3</h3>
//         </div>
   
//         <div className=" p-5 ">
//         <Image src={Javascript} alt='/' className="w-20 h-20  object-contain  hover:-translate-y-2 duration-700"/>
//         <h3>JAVASCRIPT</h3>
//         </div>
//         <div className=" p-5 ">
//         <Image src={Type} alt='/' className="w-20 h-20  object-contain  hover:-translate-y-2 duration-700"/>
//         <h3>TYPESCRIPT</h3>
//         </div>
      
//         <div className=" p-5 ">
//         <Image src={React} alt='/' className="w-20 h-20  object-contain  hover:-translate-y-2 duration-700"/>
//         <h3>React-js-18</h3>
//         </div>

//         <div className=" p-5 ">
//         <Image src={Nextjs} alt='/' className="w-20 h-20  object-contain  hover:-translate-y-2 duration-700"/>
//         <h3>NEXT-JS-13</h3> 
//         </div>
      
//         <div className=" p-5 ">
//         <Image src={Tailwind} alt='/' className="w-20 h-20  object-contain  hover:-translate-y-2 duration-700"/>
//         <h3 className=' uppercase'>Tailwind
//         </h3>
//         </div>

    
//         <div className=" p-5 ">
//         <Image src={chakra} alt='/' className="w-20 h-20  object-contain  hover:-translate-y-2 duration-700"/>
//         <h3>CHAKRA-UI
//         </h3>
//         </div>
        
        
//         <div className=" p-5 ">
//         <Image src={Node} alt='/' className="w-20 h-20  object-contain  hover:-translate-y-2 duration-700"/>
//         <h3>
//           Node-js
//         </h3>
//         </div>
      
        
//         <div className=" p-5 ">
//         <Image src={Github} alt='/' className="w-20 h-20  object-contain  hover:-translate-y-2 duration-700"/>
           
//         <h3>
//          Github
//         </h3>
//         </div>
       
//       </div>
//     </div>
//   </div>