import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { EXPERIENCES } from '../constants/experience'


const Experience = () => {
	return (
		<div className='p-8 max-w-[600px] mx-auto pt-32' id='experiencia'>
			<h1 className='text-4xl text-gray-200 font-bold text-center mb-12'>Experiencia</h1>
			<motion.div
				className='space-y-8'
				initial="hidden"
				animate="visible"
				
			>
				{EXPERIENCES.map((experience, index) => (
					<Reveal key={index} className="hover:shadow-main-blue">
						<motion.div
							key={index}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: false, amount: 0.3 }}
							transition={{ duration: 1 }}
							className='border border-main-blue p-6 rounded-lg w-full select-none'
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