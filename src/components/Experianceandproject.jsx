import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experianceandproject = () => {
  return (
    <div className="border-b border-neutral-900 pb-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-3xl font-semibold"
      >
        E D U C A T I O N
      </motion.h2>

      <div className="flex flex-col items-center justify-center mx-auto max-w-6xl px-4">
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="mb-12 flex flex-col items-center lg:flex-row lg:justify-between w-full"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-3xl lg:w-3/4"
            >
              <h6 className="mb-2 text-xl font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-purple-100">{experience.company}</span>
              </h6>
              <div className="flex flex-wrap mt-2">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mt-2 rounded-lg bg-neutral-700 px-3 py-1 text-sm font-medium text-purple-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experianceandproject;
