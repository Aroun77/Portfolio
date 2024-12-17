import  {RiReactjsLine} from "react-icons/ri"
import { FaJsSquare } from "react-icons/fa"
import { SiTailwindcss } from "react-icons/si";
import { TbBrandPhp } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi"
import { SiCsharp } from "react-icons/si";
import {animate, motion } from "framer-motion"; 


const iconVariants = (duration) => ({
    iniatial : { y: -10 }, 
    animate: {
        y: [10 , -10], 
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity, 
            repeatType: "reverse",
        },
    },

});

 const Technologies = () => {
  return ( 
<div className="border-b border-neutral-800 pb-24"> 
     <motion.h2 
    whileInView={{opacity: 1 , y:0}}
    initial={{opacity: 0 , y: -100}}
    transition={{duration: 1.5}} 

     className="my-20 text-center text-4xl "
     >
        Technologies
        
        </motion.h2>
         <motion.div 
         whileInView={{opacity: 1 , x:0}}
         initial={{opacity: 0 , x: -100}}
         transition={{duration: 1.5}}
         className="flex flex-wrap items-center justify-center gap-4 ">
        <motion.div 
        variants={iconVariants(2.5)} 
        iniatial= "iniatial"
        animate="animate"
        
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-blue-400"/>
        </motion.div>

        <motion.div 
        variants={iconVariants(1.5)} 
        iniatial= "iniatial"
        animate="animate"

        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaJsSquare className="text-7xl text-yellow-400"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(3)} 
        iniatial= "iniatial"
        animate="animate"

        className="rounded-2xl border-4 border-neutral-800 p-4">
            <TbBrandPhp className="text-7xl text-indigo-500"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(2)} 
        iniatial= "iniatial"
        animate="animate"
        
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiTailwindcss className="text-7xl background-black text-blue-300"/>
         </motion.div>
         <motion.div 
         variants={iconVariants(3.5)} 
         iniatial= "iniatial"
         animate="animate"

         className="rounded-2xl border-4 border-neutral-800 p-4">
            <BiLogoPostgresql className="text-7xl text-sky-600"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(4)} 
        iniatial= "iniatial"
        animate="animate"
        
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiCsharp className="text-7xl text-violet-400"/>
        </motion.div>
     </motion.div>
  </div>
  );
};

export default Technologies;
