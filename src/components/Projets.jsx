import { Projects } from "../constants";
import { motion } from "framer-motion";

const Projets = () => {
  return (
    <div className="border-b border-neutral-900 pb-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-semibold"
      >
        Projects
      </motion.h2>
      <div className="flex flex-col items-center justify-center mx-auto max-w-6xl px-4">
        {Projects.map((Project, index) => (
          <div
            key={index}
            className="mb-12 flex flex-col items-center lg:flex-row lg:justify-between w-full"
          >

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/4"
            >
              <a
                href={Project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <img
                  src={Project.image}
                  width={200}
                  height={200}
                  alt={Project.title}
                  className="mb-6 rounded transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-purple-500"
                />
              </a>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-3xl lg:w-3/4"
            >
              <a href={Project.link} target="_blank" rel="noopener noreferrer">
                <h6 className="mb-2 text-xl font-semibold hover:underline">
                  {Project.title}
                </h6>
              </a>
              <p className="mb-4 text-neutral-400">{Project.description}</p>
              <div className="flex flex-wrap">
                {Project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mt-2 rounded-lg bg-neutral-900 px-3 py-1 text-sm font-medium text-purple-700"
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

export default Projets;
