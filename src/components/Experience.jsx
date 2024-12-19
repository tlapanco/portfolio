
import { motion } from 'framer-motion'
import Reveal from './Reveal'

const experiences = [
    {
        company: 'UPMP',
        position: 'Desarrollador web',
        period: 'Ene 22 - Dic 22',
        description: 'Parte del proyecto integrador de la UPMP módulo vinculación, donde se llevo a cabo el desarrollo del sitio web de la universidad.',
      },
      {
        company: 'ICO',
        position: 'Docente',
        period: 'Abril 23 - Abril 24',
        description: 'Docente de la carrera de Desarrollador de sistemas y Redes',
      },
      {
        company: 'Freelance',
        position: 'Freelance',
        period: '2024 - Presente',
        description: 'Desarrollador independiente de pequeñas empresas',
      },
]



const Experience = () => {
  return (
    <div className='p-8 max-w-[600px] mx-auto pt-32' id='experiencia'>
        <h1 className='text-4xl text-gray-200 font-bold text-center mb-12'>Experiencia</h1>
        <motion.div
        className='space-y-8'
        initial="hidden"
        animate="visible"
        >
            {experiences.map((experience, index) => (
                <Reveal key={index}>
                <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3}}
                    transition={{ duration: 1}}
                    className=' border border-main-blue p-6 rounded-lg shadow-md
                    hover:shadow-xl transition-shadow duration-300'
                >
                    <h2 className='text-gray-100 text-2xl font-semibold'>{experience.position}</h2>
                    <h3 className='text-main-blue text-xl font-semibold'>{experience.company} </h3>
                    <p className='text-gray-300'>{experience.period}</p>
                    <p className='text-gray-400 mt-4'>{experience.description}</p>


                </motion.div>
                </Reveal>
            ))}

        </motion.div>
        

    </div>
  )
}

export default Experience