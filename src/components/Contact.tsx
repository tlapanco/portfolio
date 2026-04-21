import Reveal from "./Reveal";
import { SOCIAL_LINKS } from "../constants/socialMedia";
import type { SocialNetwork } from "../types/socialMedia";

const Contact = () => {
  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12 pt-32" id="contacto">
      <Reveal>
        <div className="grid md:grid-cols-2 place-items-center">
          <div>
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">
                Sobre <span className="text-cyan-500">Mí</span>
              </h3>
              <p className=" leading-7 w-11/12 mx-auto">
                Soy una persona a quien le gustan los retos, con experiencia en
                el desarrollo web, teniendo participación tanto en el Front-end
                y Back-end. Egresado de la Universidad Politécnica Metropolitana
                de Puebla en ingeniería en sistemas computacionales donde
                alcance un nivel de inglés B2 de acuerdo al CERF como requisito
                de titulación.
              </p>
            </div>
          </div>

          <div className="h-full m-auto max-w-6xl p-5 md:p-12">
            <h3 className="text-gray-100 font-bold text-4xl mb-10">
              Contactame
            </h3>
            {SOCIAL_LINKS.map((social: SocialNetwork, index) => (
              <article key={index}>
                <p className="text-white font-bold text-xl mt-8">
                  {social.name}
                </p>
                <div className="flex items-center gap-4">
                  <social.Icon className="text-white text-4xl" />
                  <a
                    className="cursor-pointer font-bold text-gray-200 md:w-auto py-1 px-4 border border-main-blue rounded-xl"
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {social.username}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
