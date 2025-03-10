import {
	DiHtml5,
	DiCss3,
	DiBootstrap,
	DiJavascript1,
	DiReact,
	DiGithubBadge,
	DiLaravel,
	DiPython,
	DiPhp,
	DiJqueryLogo,
	DiMysql,
	DiMsqlServer,
	DiGit,
	DiLinux,
	DiNodejs,
} from "react-icons/di"
import { RiTailwindCssFill } from "react-icons/ri";
import { SiArduino } from "react-icons/si";

import Reveal from "./Reveal"

const Skills = () => {
	return (
		<div className="max-w-[650px] mx-auto flex flex-col items-center justify-center px-4 text-gray-200 pb-8 md:py-12" id="skills">
			<Reveal>
				<h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
				<p className="text-center mb-8">
					Tecnologías con las que he trabajado
				</p>
			</Reveal>
			<Reveal>
				<h3 className="text-2xl font-bold mb-4 text-center">Lenguajes</h3>
				<div
					className="grid grid-cols-2 gap-2 md:flex md:flex-row text-7xl px-12 md:px-0 w-full justify-center items-center pb-4"
				>
					<DiJavascript1 className="text-yellow-500 mx-auto" />
					<DiPython className="text-blue-500 mx-auto" />
					<DiPhp className="text-main-purple mx-auto" />
					<DiHtml5 className="text-orange-600 mx-auto" />
					<DiCss3 className="text-blue-600 mx-auto" />
				</div>
			</Reveal>
			<Reveal>
				<h3 className="text-2xl font-bold mb-4 text-center">Frameworks</h3>
				<div
					className="grid grid-cols-2 gap-2 md:flex md:flex-row text-7xl px-12 md:px-0 w-full justify-center items-center pb-4"
				>
					<DiBootstrap className="text-purple-600 mx-auto" />
					<DiLaravel className="text-red-500 mx-auto" />
					<RiTailwindCssFill className="mx-auto text-cyan-400" />
				</div>
			</Reveal>
			<Reveal>
				<h3 className="text-2xl font-bold mb-4 text-center">Librerias</h3>
				<div
					className="grid grid-cols-2 gap-2 md:flex md:flex-row text-7xl px-12 md:px-0 w-full justify-center items-center pb-4"
				>
					<DiReact className="text-cyan-600 mx-auto" />
					<DiJqueryLogo className="text-blue-600 mx-auto" />
				</div>
			</Reveal>
			<Reveal>
				<h3 className="text-2xl font-bold mb-4 text-center">Otros</h3>
				<div
					className="grid grid-cols-2 gap-2 md:flex md:flex-row text-7xl px-12 md:px-0 w-full justify-center items-center pb-24"
				>
					<DiGithubBadge className="text-white mx-auto" />
					<DiMysql className="text-blue-600 mx-auto" />
					<DiMsqlServer className="text-red-500 mx-auto" />
					<DiGit className="text-red-500 mx-auto" />
					<DiLinux className="text-white mx-auto" />
					<DiNodejs className="text-green-500 mx-auto" />
					<SiArduino className="text-[#008184] mx-auto" />
				</div>
			</Reveal>
		</div>
	)
}

export default Skills
