import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-scroll'
import profile from '../assets/dev-profile.webp'
import { motion } from 'framer-motion'
import FollowMouse from './FollowMouse'

const Navbar = () => {
    
    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(false)
    }

    const menuVariants = {
        open: {
            x: 0,
            transition: {
            stiffness: 20,
            damping: 15
            }
        },
        closed: {
            x: '-100%',
            transition: {
            stiffness: 20,
            damping: 15
            }
        }
    }

  return (
    <div className='fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50'>        
        <div className='max-w-[1300px] mx-auto  flex justify-between text-gray-200
        text-xl items-center px-12 h-20'>

            
            <motion.div whileHover={{ scale: 1.2 }} className='cursor-pointer'>
                <Link to="hero" smooth={true} offset={50} duration={500}>
                    <div className='w-full flex items-center justify-center'> <img src={profile} className='w-12 h-auto' alt='Profile'/> Tlapanco</div>
                </Link>
            </motion.div>
            
            <ul className='hidden md:flex gap-12 z-10 cursor-pointer'>   
                <li ><FollowMouse/> </li>
                
                <motion.li whileHover={{ scale: 1.2 }}><Link to="experiencia" smooth={true} offset={50} duration={500}>Experiencia</Link></motion.li>
                <motion.li whileHover={{ scale: 1.2 }}><Link to="proyectos" smooth={true} offset={50} duration={500}>Proyectos</Link></motion.li>
                <motion.li whileHover={{ scale: 1.2 }}><Link to="contacto" smooth={true} offset={50} duration={500}>Contacto</Link></motion.li>
            </ul>

            <div onClick={toggleNav} className='md:hidden z-50 text-gray-200'>
                {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>

            <motion.div
            initial={false}
            animate={nav ? 'open' : 'closed'}
            variants={menuVariants}
            className='fixed left-0 top-0 w-full min-h-screen z-40 bg-gradient-to-b from-main-blue to-black pt-24'
            >
                
                <ul className='font-semibold text-4xl space-y-8 mt-24 text-center grid grid-cols-1 gap-10'>
                    <li><Link to="experiencia" onClick={closeNav} smooth={true} offset={50} duration={500}>Experiencia</Link></li>
                    <li><Link to="proyectos" onClick={closeNav} smooth={true} offset={50} duration={500}>Proyectos</Link></li>
                    <li><Link to="contacto" onClick={closeNav} smooth={true} offset={50} duration={500}>Contacto</Link></li>
                </ul>


            </motion.div>



        </div>
    </div>
  )
}

export default Navbar