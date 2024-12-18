import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import loading from "../assets/loading.webp"

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [cursorImage , setCursorImage] = useState()

  // pointer move
  useEffect(() => {
      const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    // cleanup:
    // -> cuando el componente se desmonta
    // -> cuando cambian las dependencias, antes de ejecutar
    //    el efecto de nuevo
    return () => { // cleanup method
      
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  // [] -> solo se ejecuta una vez cuando se monta el componente
  // [enabled] -> se ejecuta cuando cambia enabled y cuando se monta el componente
  // undefined -> se ejecuta cada vez que se renderiza el componente

  // change body className
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)     
    document.getElementById('custom-cursor').classList.toggle('hidden', !enabled)

    
    
    return () => {
      setCursorImage(loading)
      document.body.classList.remove('no-cursor')      
      document.getElementById('custom-cursor').classList.remove('hidden')
      if(!enabled){        
        fetch('https://api.waifu.pics/sfw/smile').then(res => res.json()).then(data => {
            setCursorImage(data.url)
        })
      }     
    }
  }, [enabled])

  return (
    <>
      <div id='custom-cursor' style={{
        position: 'absolute',
        backgroundImage: `url(${cursorImage})` ,
        backgroundSize: 'cover', 
        backgroundPosition: 'center',        
        backgroundRepeat: 'no-repeat',        
        borderRadius: '100%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,     
        top: -25,           
        width: 50,
        height: 50,
        transform: `translate(${position.x + 35}px, ${position.y + 35}px)`        
      }}
      />
      <motion.button whileHover={{ scale: 1.2 }} onClick={() => setEnabled(!enabled)} className='text-white'>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </motion.button>
    </>
  )
}


export default FollowMouse