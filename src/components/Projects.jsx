import React from 'react'

import portfolio from "../images/portfolio.png"
import umaCabs from "../images/cabs.png"
import candyWheels from "../images/candyWheel.jpg"
import dreamTravel from "../images/dreamtravel.png"
import ecommerce from "../images/Ecommerce.png"
import cafe from "../images/cafe.png"
import {motion} from "framer-motion" 



const PROJECTS = [
    {
      title: "E-Commerce Website",
      image: ecommerce,
      description:
        "Developed an e-commerce website using React and a fake API to simulate real-world functionality, focusing on seamless user experience and efficient state management. Implemented responsive design, interactive features, and mock API integration to enhance development and testing processes",
      technologies: [ "React Js","Tailwind Css", "Moke Api"],
      link:"https://github.com/Nirmalkumar882000/React_Ecommerce"
    },
    {
      title: "Cafe Website",
      image: cafe,
      description:
        "Experience the perfect blend of comfort and flavor with our café website, built using React and Tailwind CSS for a sleek, responsive design. Explore our menu and ambiance seamlessly across all devices!",
      technologies: [ "React Js","Tailwind Css"],
      link:"https://github.com/Nirmalkumar882000/Coffe_Shop_Website"
    },
    {
      title: "3D Portfolio",
      image: portfolio,
      description:
        "Designed and developed a responsive portfolio website using React.js, React Three Fiber, and Tailwind CSS for an interactive and visually appealing user experience.Leveraged 3D graphics and animations with React Three Fiber to create engaging visuals, ensuring responsiveness across all screen sizes.",
      technologies: ["ReactJs","R3F","Framer Motion"],
      link:"https://github.com/Nirmalkumar882000/Portfolio"
    }, 
      {
      title: "UmaCabs",
      image: umaCabs,
      description:
        "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
      technologies: ["Wordpress", "Hosting","SEO","Domin"],
      link:"https://umacabs.in/"

    },  
     {
      title: "2D Casino Game",
      image: candyWheels,
      description:
        "Developed Candywheel, a 2D casino game with responsive design, ensuring compatibility across all devices for seamless gameplay.Implemented smooth animations for spinning wheels, coins, and rewards, enhancing user engagement and experience",
      technologies: ["Phaser js","React js",],
      link:"https://gitlab.com/cmnirmalkumar2000/fruit_wheel/-/tree/dev?ref_type=heads"

    },   
      {
      title: "DreamTravel",
      image: dreamTravel,
      description:
        "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
      technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
      link:"https://github.com/Nirmalkumar882000/Dream_Travels_Page"
    }

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
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className='w-full flex justify-center lg:w-1/4 mr-10'
    >
        <a href={project.link} target="_blank" rel="noopener noreferrer">
            <motion.img
                src={project.image}
                alt={project.title}
                className='mb-6 rounded cursor-pointer'
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
            />
        </a>
    </motion.div>
    <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className='w-full max-w-xl lg:w-3/4'
    >
        <h3 className='mb-2 font-semibold text-2xl'>{project.title}</h3>
        <p className='mb-4 text-stone-400'>{project.description}</p>
        <div className='flex items-center gap-2'>
            {project.technologies.map((technology, index) => (
                <motion.span
                    key={index}
                    className='mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300'
                    whileHover={{ scale: 1.1, backgroundColor: "#ffffff", color: "#000000" }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    {technology}
                </motion.span>
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