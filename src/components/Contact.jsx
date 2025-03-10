import Reveal from "./Reveal"
import { DiGithubBadge } from "react-icons/di"
import { FaTelegram } from "react-icons/fa6"
import { IoIosMail } from "react-icons/io";
import { SOCIAL_MEDIA } from "../constants/socialMedia"

const Contact = () => {
	return (
		<div className="px-6 max-w-[1000px] mx-auto md:my-12 pt-32" id="contacto" >
			<Reveal>
				<div className="grid md:grid-cols-2 place-items-center">
					<div>
						<div className="text-gray-300 my-3">
							<h3 className="text-4xl font-semibold mb-5">Sobre <span className="text-cyan-500">Mí</span></h3>
							<p className=" leading-7 w-11/12 mx-auto">
								Soy una persona a quien le gustan los retos, con experiencia en el desarrollo web,
								teniendo participación tanto en el Front-end y Back-end.
								Egresado de la Universidad Politécnica Metropolitana de Puebla en ingeniería
								en sistemas computacionales donde alcance un nivel de inglés B2 de
								acuerdo al CERF como requisito de titulación.
							</p>
						</div>
					</div>

					<div className="h-full m-auto max-w-6xl p-5 md:p-12" >
						<h3 className="text-gray-100 font-bold text-4xl mb-10">
							Contactame
						</h3>
						<p className="text-white font-bold text-xl mb-8"> Correo electrónico:</p>
						<div className="flex items-center gap-4">
							<IoIosMail className="text-white text-4xl" />
							<a className="cursor-pointer font-bold text-gray-200 md:w-auto py-1 px-4 border border-main-blue rounded-xl" href={SOCIAL_MEDIA.gmail.url} rel="noreferrer">
								{SOCIAL_MEDIA.gmail.address}
							</a>
						</div>
						<p className="text-white font-bold text-xl my-8"> Github:</p>
						<div className="flex items-center gap-4">
							<DiGithubBadge className="text-white text-4xl" />
							<a className="cursor-pointer font-bold text-gray-200 md:w-auto px-4 border border-main-blue rounded-xl" href={SOCIAL_MEDIA.github} target="_blank" rel="noreferrer">
								tlapanco
							</a>
						</div>
						<p className="text-white font-bold text-xl my-8"> Telegram:</p>
						<div className="flex items-center gap-4">
							<FaTelegram className="text-white text-4xl" />
							<a className="cursor-pointer font-bold text-gray-200 md:w-auto px-4 border border-main-blue rounded-xl" href={SOCIAL_MEDIA.telegram} target="_blank" rel="noreferrer">
								tlapanco
							</a>
						</div>
					</div>

				</div>

			</Reveal>
		</div>
	)
}

export default Contact
