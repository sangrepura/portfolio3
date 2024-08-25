'use client'
import React, { useEffect, useMemo } from 'react'

interface BubbleProps {
  infinite: boolean
  numBubbles: number
  sizeRange: [number, number]
  durationRange: [number, number]
  delayRange: [number, number]
  colors: string[]
}

const getRandomValue = (min: number, max: number) =>
  Math.random() * (max - min) + min

export const Bubbles = ({
  infinite,
  numBubbles,
  sizeRange,
  durationRange,
  delayRange,
  colors
}: BubbleProps) => {
  const bubbleStyles = useMemo(() => {
    return Array.from({ length: numBubbles }, () => ({
      size: getRandomValue(sizeRange[0], sizeRange[1]),
      left: getRandomValue(0, 100),
      bottom: getRandomValue(-10, -15), // Start bubbles below the screen
      bg: colors[Math.floor(Math.random() * colors.length)],
      duration: getRandomValue(durationRange[0], durationRange[1]),
      delay: getRandomValue(delayRange[0], delayRange[1]),
      //borderImage: `linear-gradient(45deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.7)) 1`, // Adjust gradient
      //boxShadow: `0 0 8px 2px rgba(255, 255, 255, 0.5), inset 0 0 8px 2px rgba(255, 255, 255, 0.5)`, // Adjust shadow
      //transform: `rotate(${getRandomValue(-360, 360)}deg) scale(${getRandomValue(0.8, 1.2)})`,
      initialOpacity: getRandomValue(0.3, 0.7),

      //boxShadow: `0 10px 15px rgba(135, 206, 235, 0.25), inset 0px 5px 15px 3px rgba(173, 216, 230, 0.3)`
      //borderRadius: `${getRandomValue(60, 100)}%`,

      //boxShadow: `0 0 15px 5px rgba(255, 255, 255, 0.5), inset 0 0 15px 5px rgba(255, 255, 255, 0.5)`,
      borderRadius: `${getRandomValue(50, 100)}% ${getRandomValue(50, 100)}% ${getRandomValue(50, 100)}% ${getRandomValue(50, 100)}%`,
      borderImage: `linear-gradient(45deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.5)) 1`,
      boxShadow: `0 0 8px 2px rgba(255, 255, 255, 0.3), inset 0 0 8px 2px rgba(255, 255, 255, 0.3)`,
      transform: `rotate(${getRandomValue(-360, 360)}deg) scale(${getRandomValue(0.8, 1.2)})`
    }))
  }, [numBubbles, sizeRange, durationRange, delayRange, colors])

  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      @keyframes bubble-rise {
        0% {
          transform: translateY(0) scaleX(1) scaleY(1) rotate(0deg);
          opacity: 1;
          filter: blur(1px)
        }
        50%: {
          transform: translateY(-50vh) scale(-.8) rotate(180deg);
          opacity: 0.8;
        }
        100% {
          transform: translateY(-120vh) scaleX(1.3) scaleY(0.7) rotate(360deg);
          opacity: 0;
        }
      }
    `
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
      {bubbleStyles.map((style, index) => (
        <div
          key={index}
          style={
            {
              position: 'absolute',
              left: `${style.left}%`,
              bottom: `${style.bottom}vh`,
              width: `${style.size}px`,
              height: `${style.size}px`,
              backgroundColor: 'transparent',
              borderRadius: style.borderRadius,
              borderImage: style.borderImage,
              boxShadow: style.boxShadow,
              willChange: 'transform, opacity',
              animation: `bubble-rise ${style.duration}ms ${style.delay}ms linear ${infinite ? 'infinite' : '1'}`,
              '--initial-opacity': style.initialOpacity
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  )
}
