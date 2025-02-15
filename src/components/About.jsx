import aboutImg from "../assets/aboutme.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import cvFile from "../assets/projects/aroun.pdf";

const About = () => {
  const handleDownloadCV = () => {
    window.open(cvFile, "_blank");
  };

  return (
    <div className="border-b border-neutral-900 pb-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl font-semibold"
      >
        About{" "}
        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
          Me
        </span>
      </motion.h2>

      <div className="flex flex-col items-center justify-center mx-auto max-w-6xl px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full">
          {/* Image Section */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0"
          >
            <img
              className="rounded-2xl"
              src={aboutImg}
              alt="about"
              style={{ width: "350px", height: "auto" }}
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 px-4"
          >
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>

            {/* CV Button */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center lg:justify-start mt-4 relative"
            >
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 blur-lg animate-pulse"></div>
              <button
                onClick={handleDownloadCV}
                className="relative px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 opacity-0 transition-opacity duration-300 hover:opacity-100"></span>
                <span className="relative z-10">Voir mon CV</span>
              </button>

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {[...Array(10)].map((_, index) => (
                  <motion.div
                    key={index}
                    className="absolute w-2 h-2 bg-white rounded-full"
                    animate={{
                      x: Math.random() * 200 - 100,
                      y: Math.random() * 200 - 100,
                      opacity: [1, 0],
                    }}
                    transition={{
                      duration: Math.random() * 2 + 1,
                      repeat: Infinity,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
