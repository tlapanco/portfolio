import Reveal from "./Reveal"
import { DiGithubBadge} from "react-icons/di"
import { FaTelegram }  from "react-icons/fa6"

const Contact = () => {
  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12 pt-32" id="contacto">
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

                {/* <div className="flex mt-10 items-center gap-7">
                    <div className="bg-gray-800/40 p-4 rounded-lg">
                        <h3 className="md:text-4xl text-2xl font-semibold text-white">3
                            <span>+</span>
                        </h3>
                        <p className="text-xs md:text-base"><span>Proyectos</span></p>
                    </div>

                    <div className="bg-gray-800/40 p-5 rounded-lg">
                        <h3 className="md:text-4xl text-2xl font-semibold text-white">5
                            <span>+</span>
                        </h3>
                        <p className="text-xs md:text-base"><span>years of experience</span></p>
                    </div>

                    <div className="bg-gray-800/40 p-5 rounded-lg">
                        <h3 className="md:text-4xl text-2xl font-semibold text-white">30
                            <span>+</span>
                        </h3>
                        <p className="text-xs md:text-base"><span>happy clients</span></p>
                    </div>

                </div> */}

            </div>

            <div className="h-full m-auto max-w-6xl p-5 md:p-12" >
            <h3 className="text-gray-100 font-bold text-4xl mb-10">
              Contactame
            </h3>
            <p className="text-white font-bold text-xl mb-8"> Correo electrónico:</p>
            <div className="flex items-center gap-4">
              <p className="text-5xl pb-4 text-white">◛</p>
            <a className="cursor-pointer font-bold text-gray-200 md:w-auto py-1 px-4 border border-main-blue rounded-xl"   href="mailto:tlapanco.amado@gmail.com" rel="noreferrer">
              tlapanco.amado@gmail.com
            </a>            
            </div>
            <p className="text-white font-bold text-xl my-8"> Github:</p>
            <div className="flex items-center gap-4">
            <DiGithubBadge className="text-white text-4xl" />
            <a className="cursor-pointer font-bold text-gray-200 md:w-auto px-4 border border-main-blue rounded-xl"   href="https://github.com/tlapanco" rel="noreferrer">
              tlapanco
            </a>          
            </div>
            <p className="text-white font-bold text-xl my-8"> Telegram:</p>
            <div className="flex items-center gap-4">
            <FaTelegram className="text-white text-4xl" />
            <a className="cursor-pointer font-bold text-gray-200 md:w-auto px-4 border border-main-blue rounded-xl"   href="https://t.me/tlapanco" target="_blank" rel="noreferrer">
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