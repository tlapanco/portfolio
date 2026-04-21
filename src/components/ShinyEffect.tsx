import type { CSSProperties } from 'react'

interface ShinyEffectProps {
  top: number;
  left?: number;
  right?: number;
  size?: number;
}

const ShinyEffect = ({ left, right, top, size = 500 }: ShinyEffectProps) => {
  const positionStyles: CSSProperties = {
    position: 'absolute', 
    top: `${top}px`,
    width: `${size}px`,
    height: `${size}px`,
    zIndex: -1,
    
    ...(left !== undefined && { left: `${left}px` }),
    ...(right !== undefined && { right: `${right}px` }),
  }

  return (
    <div className='shiny-effect' style={positionStyles}></div>
  )
}

export default ShinyEffect
