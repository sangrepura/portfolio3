'use client'
import React, { useEffect, useMemo, useState } from 'react'

interface BubbleProps {
  numBubbles: number
  sizeRange: [number, number]
  durationRange: [number, number]
  delayRange: [number, number]
  colors?: {
    bubbleBorder?: string
    dropShadowColor?: string
    innerGradientStart?: string
    innerGradientEnd?: string
    radialGradientStart?: string
    radialGradientEnd?: string
    reflectionBorder?: string
    reflectionBlurColor?: string
  }
  runCount?: number
  leftRange?: [number, number]
  bottomOffset?: number
  initialOpacityRange?: [number, number]
}

const getRandomValue = (min: number, max: number): number =>
  Math.random() * (max - min) + min

export const Bubbles: React.FC<BubbleProps> = ({
  numBubbles,
  sizeRange,
  durationRange,
  delayRange,
  colors = {},
  runCount = Infinity,
  leftRange = [0, 100], // Default full width in vw
  bottomOffset = 0, // Default is 0 (bottom of the container)
  initialOpacityRange = [0.1, 0.25] // Default opacity range
}) => {
  const {
    bubbleBorder = 'rgba(178, 255, 255, 0.125)',
    dropShadowColor = '#fff',
    innerGradientStart = 'rgba(255, 255, 255, 0)',
    innerGradientEnd = 'rgba(255, 255, 255, 0.25)',
    radialGradientStart = 'rgba(255, 255, 255, 0)',
    radialGradientEnd = 'rgba(255, 255, 255, 0.125)',
    reflectionBorder = '#fff',
    reflectionBlurColor = 'rgba(255, 255, 255, 0)'
  } = colors

  const bubbleStyles = useMemo(() => {
    return Array.from({ length: numBubbles }, () => {
      const opacity = getRandomValue(
        initialOpacityRange[0],
        initialOpacityRange[1]
      )
      const size = getRandomValue(sizeRange[0], sizeRange[1])
      const left = getRandomValue(leftRange[0], leftRange[1])
      const duration = getRandomValue(durationRange[0], durationRange[1])
      const delay = getRandomValue(delayRange[0], delayRange[1])

      return {
        opacity,
        size,
        left,
        duration,
        delay
      }
    })
  }, [
    numBubbles,
    sizeRange,
    durationRange,
    delayRange,
    leftRange,
    initialOpacityRange
  ])

  useEffect(() => {
    if (runCount === 0) return // Stop if run count is zero

    const style = document.createElement('style')
    const keyframes = bubbleStyles
      .map(
        (style, i) => `
      @keyframes float-${i + 1} {
        0% {
          transform: translate3d(0, 0, 0) scale(1);
          opacity: ${style.opacity};
        }
        75% {
          opacity: ${style.opacity};
        }
        100% {
          transform: translate3d(0, calc(-100vh - ${style.size}px), 0) scale(1.2);
          opacity: 0;
        }
      }
    `
      )
      .join('\n')

    style.textContent = keyframes
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [bubbleStyles, runCount])

  return (
    <div
      className="absolute left-0 top-0 h-full w-full overflow-hidden"
      style={{
        width: '120vw',
        height: `calc(100vh - ${bottomOffset}vh)`,
        left: '-10vw'
      }}
    >
      {bubbleStyles.map((style, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            bottom: `${bottomOffset}vh`,
            left: `${style.left}vw`,
            opacity: style.opacity,
            width: `${style.size}px`,
            height: `${style.size}px`,
            animation: `float-${index + 1} ${style.duration}s ${style.delay}s ease-out ${runCount > 1 ? 'infinite' : ''} forwards`
          }}
        >
          <span
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: '100%',
              border: `1px solid ${bubbleBorder}`,
              filter: `drop-shadow(0 0 ${getRandomValue(0.5, 1.5)}px ${dropShadowColor})`
            }}
          >
            <div
              style={{
                content: '""',
                position: 'absolute',
                width: '100%',
                height: '100%',
                borderRadius: '100%',
                background: `linear-gradient(80deg, ${innerGradientStart}, ${innerGradientEnd}), 
                             radial-gradient(circle at 100% 0%, ${radialGradientStart}, ${radialGradientEnd})`
              }}
            />
            <div
              style={{
                content: '""',
                position: 'absolute',
                width: '50%',
                height: '50%',
                borderRadius: '100%',
                border: `2px solid ${reflectionBlurColor}`,
                borderBottomColor: reflectionBorder,
                right: '20%',
                bottom: '20%',
                transform: 'rotate(45deg)',
                filter: 'blur(2px)'
              }}
            />
          </span>
        </div>
      ))}
    </div>
  )
}
