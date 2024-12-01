import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { FaLinkedin } from 'react-icons/fa'

const NavBar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <a href='/' aria-label='Home'>
                <h1 className='text-3xl mx-2 font-bold font-pacifico'>NK</h1>
            </a>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a 
            href ="https://www.linkedin.com/in/nirmalkumar-m-15361b2a3/" 
            rel='noopener noreferrer'
            aria-label='LinkedIn'
            >
                <FaLinkedin/>
            </a>
            <a href='https://github.com/Nirmalkumar882000' 
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'
            >
                <BsGithub/>
            </a>
        </div>

    </nav>
  )
}

export default NavBar