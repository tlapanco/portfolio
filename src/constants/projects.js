import project1 from "../assets/project/Vinculacion.webp"
import project2 from "../assets/project/project-merge2pdf.webp"
import project3 from "../assets/project/yt-downloader.webp"
import project4 from "../assets/project/project-nike-tailwind.svg"
import project5 from "../assets/project/project-react-juego-gato.svg"
import project6 from "../assets/project/project-pockedex.svg"
import project7 from "../assets/project/project-php-api.svg"
import project8 from "../assets/project/project-m-boutique.svg"

export const PROJECTS = [
	{
		img: project1,
		title: "CRUD - UPMP Departamento vinculación",
		description: "Aplicación para la administración de los procesos de estancia/estadía de los alumnos (Laravel, JQuery, Bootstrap, MySQL)",
		links: {
			site: "https://demo-vinculacion.infinityfreeapp.com/proyecto_vinculacion/public/auth/login?i=1",
			github: "https://github.com/tlapanco/crud_laravel",
		},
	},	
	{
		img: project8,
		title: "Meow Boutique",
		description: "Carrito de compras, diseño responsivo y pedidos por mensaje de What's app con el listado de productos (React js, Tailwind CSS)",
		links: {
			site: "https://tlapanco.github.io/m-store",
			github: "https://github.com/tlapanco/react-store",
		},
	},
	{
		img: project3,
		title: "YouTube downloader - GUI",
		description: "Aplicación para la descarga de videos de YouTube (Python, Tkinter)",
		links: {
			site: "https://drive.google.com/file/d/19aeGqWgcFIgu97yKs8-7V4d5ZvBP83DG/view?usp=drivesdk",
			github: "https://github.com/tlapanco/gui-yt-downloader",
		},
	},
	{
		img: project2,
		title: "PDF Merger",
		description: "Aplicación para la unión de archivos PDF (Laravel, Tailwind CSS, Livewire)",
		links: {
			site: "https://tl-developer-site.infinityfreeapp.com/merge2pdf/public/",
			github: "https://github.com/tlapanco/laravel-merge2pdf",
		},
	},		
	{
		img: project4,
		title: "NIKE - Landing page",
		description: "Landing page de nike para la práctica de maquetación con el framework de Tailwind CSS",
		links: {
			site: "https://tlapanco.github.io/tailwind-landingpage",
			github: "https://github.com/tlapanco/tailwind-landingpage",
		},
	},
	{
		img: project5,
		title: "TIC TAC TOE - Game",
		description: "Juego de tres en raya para la práctica de estados (React js)",
		links: {
			site: "https://tlapanco.github.io/juego-gato-react",
			github: "https://github.com/tlapanco/juego-gato-react",
		},
	},
	{
		img: project6,
		title: "Pockedex",
		description: "Pequeña pockedex para la práctica de vanilla js (JavaScript, CSS)",
		links: {
			site: "https://tlapanco.github.io/JS-frontend-mission",
			github: "https://github.com/tlapanco/juego-gato-react",
		},
	},
	{
		img: project7,
		title: "Next marvel film",
		description: "Página web para la práctica de clases y la creación de pequeños motores de plantillas con php consultando una API (PHP)",
		links: {
			site: "https://tl-developer-site.infinityfreeapp.com/next-marvel-film",
			github: "https://github.com/tlapanco/php-simple-api",
		},
	},
]
