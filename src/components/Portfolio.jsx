import { AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';

import { PROJECTS } from '../constants/projects';

const Portfolio = () => {
	return (
		<div className='max-w-[1000px] w-full mx-auto p-6 md:my-20 pt-32' id="proyectos">
			<h2 className='text-3xl font-bold text-gray-200 mb-8'>Proyectos</h2>
			{PROJECTS.map((project, index) => (
				<Reveal key={index}>
					<div key={index}
						className={`rounded-lg hover:bg-gradient-to-r ${index % 2 !== 0 ? 'hover:from-black hover:to-main-blue' : 'hover:from-main-blue'} flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12 `}>
						<div className='w-full md:w-1/2 p-4'>
							<img
								src={project.img}
								alt={project.title}
								className='w-full h-full object-cover rounded-lg shadow-lg'
							/>
						</div>
						<div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
							<h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
							<p className='text-gray-300 mb-4'>{project.description}</p>
							<div className='flex space-x-4'>

								<a href={project.links.site}
									className='border-2 hover:bg-black border-main-blue px-4 py-2 text-gray-200 rounded-lg transition duration-300'>
									Ver demo
								</a>
								<a href={project.links.github}
									className=' border-2 hover:bg-black border-main-blue px-4 py-2 text-gray-200 rounded-lg 
                                        transition duration-300'>
									<AiOutlineGithub className="text-2xl" />
								</a>

							</div>
						</div>
					</div>
				</Reveal>
			))}
			<Reveal >
				<div className="grid items-center grid-col-1 gap-5 md:flex md:w-[600px] md:mx-auto">
					<p className="text-white text-center">Puedes ver más de mis proyectos aquí...</p>
					<a href="https://github.com/tlapanco?tab=repositories" target="blank" className="w-fit mx-auto cursor-pointer bg-gradient-to-r from-cyan-500 rounded-full px-4 py-1 text-white border-2 border-cyan-500 hover:bg-gradient-to-r hover:from-black font-bold text-xl hover:to-cyan-500">Ver más...</a>
				</div>
			</Reveal>

		</div>
	)
}

export default Portfolio