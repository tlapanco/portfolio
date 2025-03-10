import profilepic from "../assets/dev-profile.webp";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import { AiOutlineGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { SOCIAL_MEDIA } from '../constants/socialMedia'


const Hero = () => {
	return (
		<div className="pt-24 max-w-[1200px] mx-auto relative mb-24" id="hero">
			<div className="grid md:grid-cols-2 place-items-center gap-8">
				<motion.div
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 1 }}
				>
					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 1, delay: 0.5 }}
						className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
					>
						¡Hola!, soy <br />
						<TypeAnimation
							sequence={[
								"Fabian At",
								1000,
								"Programador",
								1000,
								"Tutor",
								1000
							]}
							speed={50}
							repeat={Infinity}
							className="font-bold text-main-blue text-xl md:text-5xl italic- mb-4"
						/>

					</motion.p>

					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 1, delay: 1 }}
						className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
					>
						Apasionado por la creación de aplicaciones web y el aprendizaje de nuevas tecnologías.
					</motion.p>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 1, delay: 1 }}
						className="w-fit bg-main-blue h-fit rounded-full p-1">
						<p className="text-sm text-white font-bold bg-black w-full h-full py-1 px-3 rounded-full">
							Estado:
							<TypeAnimation
								sequence={[
									" Disponible para trabajar",
									1000,
									" Buscando oportunidades",
									1000
								]}
								speed={50}
								repeat={Infinity}
								className="m-0 p-0 text-main-blue text-sm"
							/>
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 1, delay: 1.5 }}
						className="flex flex-row items-center gap-6 my-4 md:mb-0"
					>
						<motion.a href="https://github.com/user-attachments/files/18189494/cv.pdf" whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
							className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border
                                     border-purple-200 rounded-full"
						>
							Descargar CV
						</motion.a>

						<div className="flex gap-6 flex-row text-4xl md:text-6xl text-main-blue z-20">
							<motion.a whileHover={{ scale: 1.2 }} href={SOCIAL_MEDIA.github} target="blank">
								<AiOutlineGithub />
							</motion.a>

						</div>
					</motion.div>
				</motion.div>


				<motion.img
					src={profilepic}
					alt="profile-image"
					className="w-[300px] md:w-[450px]"
					initial={{ opacity: 0, scale: 0.8 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1 }}
				/>
			</div>

			<div className="absolute inset-0 hidden md:block">
				<ShinyEffect left={0} top={0} size={1400} />
			</div>
			

		</div>
	)
}

export default Hero