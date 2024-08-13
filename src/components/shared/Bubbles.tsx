'use client'
import React, { useEffect, useMemo } from 'react'

interface BubbleProps {
  numBubbles: number
  sizeRange: [number, number]
  durationRange: [number, number]
  delayRange: [number, number]
  opacityRange: [number, number]
  borderRadiusRange: [
    [number, number],
    [number, number],
    [number, number],
    [number, number],
  ]
  boxShadowRange: [number, number]
  colors: string[]
}

const getRandomValue = (min: number, max: number) =>
  Math.random() * (max - min) + min

export const Bubbles = ({
  numBubbles,
  sizeRange,
  durationRange,
  delayRange,
  opacityRange,
  borderRadiusRange,
  boxShadowRange,
  colors,
}: BubbleProps) => {
  const bubbleStyles = useMemo(() => {
    return Array.from({ length: numBubbles }, () => ({
      size: getRandomValue(sizeRange[0], sizeRange[1]),
      left: getRandomValue(0, 100),
      bottom: getRandomValue(-10, -15), // Start bubbles below the screen
      bg: colors[Math.floor(Math.random() * colors.length)],
      duration: getRandomValue(durationRange[0], durationRange[1]),
      delay: getRandomValue(delayRange[0], delayRange[1]),
      initialOpacity: getRandomValue(opacityRange[0], opacityRange[1]),
      borderRadius: `${getRandomValue(60, 100)}%`,
      boxShadow: `0 10px 15px rgba(135, 206, 235, 0.25), inset 0px 5px 15px 3px rgba(173, 216, 230, 0.3)`,
    }))
  }, [numBubbles, sizeRange, durationRange, delayRange, opacityRange, colors])

  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      @keyframes bubble-rise {
        0% {
          transform: translateY(0) scaleX(0.8) scaleY(1) rotate(0deg);
          opacity: var(--initial-opacity);
          border-radius: 50%;
        }
        100% {
          transform: translateY(-120vh) scaleX(1.3) scaleY(0.7) rotate(360deg);
          opacity: 0;
          border-radius: 50%;
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
              transform: `scale(${style.size / 50})`,
              width: `${style.size}px`,
              height: `${style.size}px`,
              backgroundColor: style.bg,
              opacity: style.initialOpacity,
              boxShadow: style.boxShadow,
              willChange: 'transform, opacity',
              animation: `bubble-rise ${style.duration}s ${style.delay}s infinite linear`,
              '--initial-opacity': style.initialOpacity,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  )
}
