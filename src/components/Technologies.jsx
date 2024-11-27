import React from 'react'
import { RiReactjsFill } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { RiNodejsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { DiRedis, DiUbuntu } from 'react-icons/di';
import { BiLogoPostgresql } from 'react-icons/bi';
import { SiMysql } from "react-icons/si";
import {motion} from "framer-motion"
import { SiFastify } from "react-icons/si";
import { SiThreedotjs } from "react-icons/si";
import { RiTailwindCssLine } from "react-icons/ri";    
import { FaHtml5 } from "react-icons/fa"; 
import { IoLogoCss3 } from "react-icons/io";    
import { FaWordpress } from "react-icons/fa";

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
            variants={iconVarient(2.5)} className='p-4'>
                <FaHtml5  className='text-7xl text-orange-700 animate-bounce  '/>
            </motion.div>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVarient(2.5)} className='p-4'>
                <IoLogoCss3   className='text-7xl text-sky-700 animate-bounce  '/>
            </motion.div>
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
               <SiMysql  className='text-7xl text-blue-700 animate-jelly'/>
            </motion.div>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVarient(2.5)} className='p-4'>
                <SiThreedotjs  className='text-7xl text-white animate-spin'/>
            </motion.div>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVarient(2.5)} className='p-4'>
                <SiFastify className='text-7xl text-white animate-pulse'/>
            </motion.div>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVarient(2.5)} className='p-4'>
                <RiTailwindCssLine  className='text-7xl text-sky-700 animate-jelly'/>
            </motion.div>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVarient(2.5)} className='p-4'>
                <FaWordpress  className='text-7xl animate-jelly'/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies