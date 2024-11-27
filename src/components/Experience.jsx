import React from "react";
import { motion } from "framer-motion";

const EXPERIENCES = [
  {
        year: "2023 - Present",
        role: "Full Stack Developer",
        company: "Top Class Entertainment.",
        description: `
                Built a live streaming application with React.js, Bootstrap, and API
                integration, emphasizing responsiveness and seamless
                performance.
                Developed a secure payment gateway project using React.js,
                Tailwind CSS, Daisy UI, and API integration for efficient transaction
                handling.
                Created and maintained backend APIs for a flight booking CMS
                and a live streaming application, ensuring efficient migrations and
                robust functionality.
                Performed code optimization, bug fixing, and debugging to
                enhance system reliability and efficiency.
                Delivered projects focused on responsiveness, user satisfaction,
                and performance optimization`,
    technologies: ["React", "Node", "Epress", "MySQL", "MongoDB",],
  },
  {
    year: "2023 - 2024",
    role: "Game Developer",
    company: "Top Class Entertainemnt",
    description: `Designed and developed user interfaces for web applications using  React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["React js", "Phaser js","Socket Io",],
  },
];

const Experience = () => {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h2>
      <div className="">
        {EXPERIENCES.map((exp, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-stone-400">{exp.year}</p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h3 className="mb-2 font-semibold">
                {exp.role} {""}
              </h3>
              <span className="text-sm text-stone-500">{exp.company}</span>
              <p className="mb-4 text-stone-400">{exp.description}</p>
              {exp.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
