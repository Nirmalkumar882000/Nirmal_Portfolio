import React from 'react'
import project1 from "/images/project-1.webp"
import project2 from "/images/project-2.webp"
import project3 from "/images/project-3.webp"
import project4 from "/images/project-4.webp"
import {motion} from "framer-motion" 


const PROJECTS = [
    {
      title: "E-Commerce Website",
      image: project1,
      description:
        "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
      technologies: [ "React","Tailwind Css", "Node.js","Express js", "MongoDB"],
    },
    {
      title: "Task Management App",
      image: project2,
      description:
        "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
      technologies: ["HTML", "CSS", "Angular", "Firebase"],
    },
    {
      title: "Portfolio Website",
      image: project3,
      description:
        "A personal portfolio website showcasing projects, skills, and contact information.",
      technologies: ["React js", "Tailwind css","Framer Motion"],
    },
    {
      title: "Blogging Platform",
      image: project4,
      description:
        "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
      technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
    },
  ]



const Projects = () => {
  return (
    <div className='pb-4'>
        <motion.h2
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}
         className='my-20 text-center text-4xl'>Projects</motion.h2>
    <div>

        {
            PROJECTS.map((project, index) => (
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:-100}}
                    transition={{duration:1}}
                     className='w-full flex justify-center lg:w-1/4 mr-4'>
                        <img src={project.image} alt={project.title} className='mb-6 rounded'/>
                    </motion.div>
                    <motion.div
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:100}}
                    transition={{duration:1}} className='w-full max-w-xl lg:w-3/4'>
                        <h3 className='mb-2 font-semibold text-2xl'>{project.title}</h3>
                        <p className='mb-4 text-stone-400'>{project.description}</p>
                        <div className='flex items-center gap-2'>
                            {project.technologies.map((technology, index) => (  
                                <span key={index} className='mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300'>{technology}</span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            ))
        }
        

    </div>
        
    </div>
  )
}

export default Projects