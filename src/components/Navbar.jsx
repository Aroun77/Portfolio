import logo from "../assets/agblue.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import {motion} from "framer-motion";

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


const Navbar = () => {
  return (
  <nav className=" mb-20 flex items-center justify-between py-6"> 
    <div className="flex flex-shrink-0 items-center">
      <img className="mx-2 w-10"src={logo} alt="logo"  style={{width: '50px', height:'auto'}}  />
      </div>
      <motion.div 
      whileInView={{opacity: 1, x:0}}
      initial={{opacity: 0 , x: 100}}
      transition={{duration: 1}}

      className="bg--900 m-8 flex items-center justify-center gap-4 text-3xl">
        <div>  <a href="https://www.linkedin.com/in/aroun-gnanavelan-240111262/">
        <motion.div 
        
          variants={iconVariants(4)} 
                  iniatial= "iniatial"
                  animate="animate"
                >
                  <FaLinkedin/> </motion.div>
                  </a>
                  </div>
                  <div>  <a href="https://github.com/Aroun77">
        <motion.div
        variants={iconVariants(2)} 
                  iniatial= "iniatial"
                  animate="animate">
          <FaGithub/>
          </motion.div>
          </a>
          </div>
          <div>  <a href="https://www.instagram.com/aroun.gvln/">
        <motion.div
          variants={iconVariants(3)} 
          iniatial= "iniatial"
          animate="animate">
          <FaInstagram/></motion.div>
          </a>
          </div>
          <div> <a href="https://x.com/home?lang=fr">
       <motion.div
       variants={iconVariants(2)} 
       iniatial= "iniatial"
       animate="animate">

       <FaSquareXTwitter/></motion.div>
       </a>
       </div>
      </motion.div>
    </nav>
   );
  };

export default Navbar;