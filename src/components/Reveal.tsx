import type { ReactNode } from 'react'
import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

interface Props {
  children: ReactNode;
  width?: "fit-content" | "100%" | string;
  className?: string;
}

const Reveal = ({ children , width  = 'fit-content', className='w-full' } : Props) => {

	const ref = useRef(null)

	const isInView = useInView(ref, { once: true })

	const mainControls = useAnimation()

	useEffect(() => {
		if (isInView) {
			mainControls.start('visible')
		}
	}, [isInView, mainControls])

	return (
		<div ref={ref} style={{ position: 'relative' , width, overflow: 'hidden', }} className={className}>

			<motion.div
				variants={{
					hidden: { opacity: 0, y: 75 },
					visible: { opacity: 1, y: 0 },
				}}
				initial="hidden"
				animate={mainControls}
				transition={{ duration: 0.5, delay: 0.25 }}
			>
				{children}
			</motion.div>

		</div>
	)
}

export default Reveal