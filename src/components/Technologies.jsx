import React from 'react'
import { RiReactjsFill } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { RiNodejsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { DiRedis, DiUbuntu } from 'react-icons/di';
import { BiLogoPostgresql } from 'react-icons/bi';
import {motion} from "framer-motion"

const iconVarient =(duration) =>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:"Infinity",
            repeatType:"reverse"
        }
    }
})

const Technologies = () => {
  return (
    <div className='pb-20'>
        <motion.h2
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
         className='my-20 text-center justify-center gap-4'>
            Technologies
        </motion.h2>
        <motion.div
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
         className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVarient(2.5)}
            >
                <RiReactjsFill className='text-7xl text-cyan-400 animate-spin '/>
            </motion.div>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVarient(2.5)} className='p-4'>
                <RiNodejsLine  className='text-7xl text-green-500 animate-bounce'/>
            </motion.div>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVarient(2.5)}
             className='p-4'>
                <SiExpress  className='text-7xl text-green-500 animate-pulse'/>
            </motion.div>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVarient(2.5)}
             className='p-4'>
                <SiMongodb className='text-7xl text-green-500 animate-jelly'/>
            </motion.div>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVarient(2.5)} className='p-4'>
               <DiRedis className='text-7xl text-red-700 animate-shake'/>
            </motion.div>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVarient(2.5)} className='p-4'>
                <BiLogoPostgresql className='text-7xl text-sky-700 animate-slowShake'/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies