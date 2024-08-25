import React from 'react'

interface OceanProps {
  backgroundColor?: string
  color1?: string
  color2?: string
  color3?: string
  color4?: string
  color5?: string
  blurAmount?: string
}

const Ocean: React.FC<OceanProps> = ({
  backgroundColor = '#B2D9E7'
  // Other props omitted for clarity
}) => {
  return (
    <div
      className="relative h-full w-full"
      style={{
        backgroundColor
      }}
    >
      {/* Adjusted Light Rays - Left */}
      <ul className="absolute bottom-0 left-[-150%] right-[-150%] top-[-250%] m-auto flex items-center justify-center opacity-50 blur-[3px]">
        {[...Array(6)].map((_, index) => (
          <li
            key={index}
            className="absolute h-0 w-0"
            style={{
              borderLeft: '200px solid transparent',
              borderRight: '200px solid transparent',
              borderTop: '200px solid rgba(255, 255, 255, 0.2)',
              transform: `rotate(${index * 60}deg)`
            }}
          ></li>
        ))}
      </ul>

      {/* Adjusted Light Rays - Right */}
      <ul className="absolute bottom-0 left-[-150%] right-[-150%] top-[-250%] m-auto flex items-center justify-center opacity-50 blur-[3px]">
        {[...Array(6)].map((_, index) => (
          <li
            key={index}
            className="absolute h-0 w-0"
            style={{
              borderLeft: '200px solid transparent',
              borderRight: '200px solid transparent',
              borderTop: '200px solid rgba(255, 255, 255, 0.2)',
              transform: `rotate(${index * 60}deg)`
            }}
          ></li>
        ))}
      </ul>
    </div>
  )
}

export default Ocean
