 import aboutImg from "../assets/aboutme.png"
import { ABOUT_TEXT } from "../constants"
import {motion} from "framer-motion"; 
 
 const About = () => {
  return <div className="border-b border-neutral-900 pb-4">
    <motion.h2 

    whileInView={{opacity: 1 ,y: 0}}
    initial={{opacity: 0 , y: -100}}
    transition={{duration: 1.5}} 

    className="my-20 text-center text-4xl"
    >
        
        About 
        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"> Me</span>
        </motion.h2>
                <div className="flex flex-wrap">
            <motion.div 
            whileInView={{opacity:1, x:0 }}
            initial={{ opacity : 0, x: -100}}
            transition={{duration: 0.5 }}
            className="w-full lg:w-1/2 lg:p-8">
        <div className="flex items-center justify-center">
                <img className="rounded-2xl" src= {aboutImg} alt="about"  style={{width: '350px', height:'auto'}}/>
                 </div>
            </motion.div>
         <div 
         className="w-full lg:w-1/2">
        <motion.div 
        whileInView={{opacity: 1 , x:0}}
        initial={{opacity: 0, x: 100 }}
        transition={{duration: 0.5  }}
        className="flex justify-center lg:justify-start">
                <p className="my-2 max-w-xl py-6  ">{ABOUT_TEXT}</p>
                </motion.div>
            </div>
        </div>
    </div>
}

export default About