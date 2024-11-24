import React from 'react'
import profilePic from "/images/profilepic.png"
import {HERO_CONTENT} from "../config/index"
import {motion} from "framer-motion"


const containerVarients ={
    hidden:{opacity:0,x:-100},
    visible:{
        opacity:1,
        x:0,
        transition:{
            duration:0.5,
            ease:'easeInOut',
            delay:0.5
        }
    }
}

const childVarient ={
    hidden:{opacity:0,x:100},
    visible:{
        opacity:1,
        x:0,
        transition:{
            duration:0.5,
            ease:'easeInOut',
        }
    }
}

const Hero = () => {
  return (
    <div className='pb-4 lg:mb-36'>
        <div className='flex flex-wrap lg:flex-row-reverse'>
            <div className='w-full lg:w-1/2'>
            <div className='flex justify-center lg:p-8'>
                <motion.img
                 src={profilePic} 
                 alt='NirmalKumar M' 
                 width={650}
                height={650}
                initial={{x:100,opacity:0}}
                animate={{x:0,opacity:1}}
                transition={{duration:1,delay:1.5}}
                 className='border border-blue-900 rounded-3xl'/>
            </div>
            </div>
            <div className='w-full lg:w-1/2'>
                <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVarients}
                 className='flex flex-col items-center lg:items-start mt-10'>
                    <motion.h2
                    variants={childVarient}
                     className='pb-2 text-4xl tracking-tighter lg:text-7xl '>
                        Nirmal Kumar M
                    </motion.h2>
                    <motion.span
                    variants={childVarient} className='bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent'>
                        Full Stack Developer
                    </motion.span>
                    <motion.p
                    variants={childVarient} 
                    className=''>
                        {HERO_CONTENT}
                    </motion.p>

                    <motion.a
                    variants={childVarient}
                     href=''
                    target='_blank'
                    rel='noopener noreferrer'
                    download
                    className='bg-white mt-5 rounded-full p-4 text-sm text-stone-800 mb-10'
                    >
                      Download Resume
                    </motion.a>
                </motion.div>
            </div>

        </div>

    </div>
  )
}

export default Hero