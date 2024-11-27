import React from 'react'

import portfolio from "../images/portfolio.png"
import carColor from "../images/3d_Car_color_change.png"
import monster from "../images/3d_monster.png"
import butterfly from "../images/Butterfly_3d.png"
import umaCabs from "../images/cabs.png"
import camping from "../images/camping.png"
import candyWheel from "../images/candy wheel.png"
import candyWheels from "../images/candyWheel.jpg"
import dreamTravel from "../images/dreamtravel.png"
import ecommerce from "../images/Ecommerce.png"
import landingPage from "../images/landing_page.png"
import {motion} from "framer-motion" 



const PROJECTS = [
    {
      title: "E-Commerce Website",
      image: ecommerce,
      description:
        "Developed an e-commerce website using React and a fake API to simulate real-world functionality, focusing on seamless user experience and efficient state management. Implemented responsive design, interactive features, and mock API integration to enhance development and testing processes",
      technologies: [ "React Js","Tailwind Css", "Moke Api"],
      link:"https://github.com/"
    },
    {
      title: "3D Portfolio",
      image: portfolio,
      description:
        "Designed and developed a responsive portfolio website using React.js, React Three Fiber, and Tailwind CSS for an interactive and visually appealing user experience.Leveraged 3D graphics and animations with React Three Fiber to create engaging visuals, ensuring responsiveness across all screen sizes.",
      technologies: ["ReactJs","R3F","Framer Motion"],
      link:"https://github.com/"

    },
    {
      title: "3D Monster",
      image: monster,
      description:
        "Developed a 3D monster animation using React Three Fiber, incorporating realistic movements and textures for an immersive experience.Optimized performance and responsiveness to ensure smooth functionality across devices.",
        technologies: ["React","R3F"],
      link:"https://github.com/"

    },
    {
      title: "3D Butterfly Scroll",
      image: butterfly,
      description:
        "Created an engaging butterfly scroll effect using React Three Fiber, incorporating smooth animations and 3D graphics for an interactive user experience.Ensured seamless responsiveness and performance optimization across all devices.",
      technologies: ["React", "Vite","R3F","GSAP"],
      link:"https://github.com/"

    }, 
      {
      title: "UmaCabs",
      image: umaCabs,
      description:
        "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
      technologies: ["Wordpress", "Hosting","SEO","Domin"],
      link:"https://github.com/"

    }, 
      {
      title: "3D Camping",
      image: camping,
      description:
        "Designed an interactive 3D camping scene using React Three Fiber, featuring detailed tents, campfires, and natural surroundings for a realistic experience.Ensured smooth animations and responsiveness, providing an engaging user interface across all devices.",
      technologies: ["React", "Vite","R3F"],
      link:"https://github.com/"

    }, 
     {
      title: "2D Casino Game",
      image: candyWheels,
      description:
        "Developed Candywheel, a 2D casino game with responsive design, ensuring compatibility across all devices for seamless gameplay.Implemented smooth animations for spinning wheels, coins, and rewards, enhancing user engagement and experience",
      technologies: ["Phaser js","React js",],
      link:"https://github.com/"

    },   
      {
      title: "DreamTravel",
      image: dreamTravel,
      description:
        "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
      technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
      link:"https://github.com/"

    },  
     {
      title: "Landing Page",
      image: landingPage,
      description:
        "Developed a 3D interactive landing page for Dream Travel using React Three Fiber, featuring immersive visuals and animations.Ensured responsiveness and smooth performance across devices for an engaging user experience.",
      technologies: ["React","RF3","Tailwind Css"],
      link:"https://github.com/"

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
                     className='w-full flex justify-center lg:w-1/4 mr-10'>
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