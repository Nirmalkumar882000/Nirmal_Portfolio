import React from 'react'



const EXPERIENCES = [
    {
      year: "2024 - Present",
      role: "Full Stack Developer",
      company: "Top Class Entertainment.",
      description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
      technologies: ["React js", "Node js", "Epress js", "mySQL", "MongoDB"],
    },
    {
      year: "2023 - 2024",
      role: "Game Developer",
      company: "Top Class Entertainemnt (Intern)",
      description: `Designed and developed user interfaces for web applications using  React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
      technologies: ["React js", "Phaser js"],
    },
    {
        year: "2023 - 2024",
        role: "Game Developer",
        company: "Top Class Entertainemnt (Intern)",
        description: `Designed and developed user interfaces for web applications using  React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
        technologies: ["React js", "Phaser js"],
      },
  ];

const Experience = () => {
  return (
    <div className='pb-4'>
        <h2 className='my-20 text-center text-4xl'>Experience</h2>
        <div className=''>
            {
                EXPERIENCES.map((exp, index)=>(
                    <div key={index}  className='mb-8 flex flex-wrap lg:justify-center'>
                        <div className='w-full lg:w-1/4'>
                           <p className='mb-2 text-sm text-stone-400'>{exp.year}</p>
                        </div>

                        <div className='w-full max-w-xl lg:w-3/4'>
                        <h3 className='mb-2 font-semibold'>
                            {exp.role}-{""}
                        </h3>
                        <span className='text-sm text-stone-500'>
                            {exp.company}
                        </span>
                        <p className='mb-4 text-stone-400'>
                            {exp.description}
                        </p>
                        {
                            exp.technologies.map((tech, index) => (
                                <span key={index} className='mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300'>
                                    {tech}
                                </span>
                            ))
                        }
                        </div>

                    </div>
                ))
            }

        </div>
    </div>
  )
}

export default Experience