'use client'
import { animate, motion, useMotionValue, useTransform } from 'framer-motion'
import React, { useEffect, useState } from 'react'

import CursorBlinker from './cursor-blinker'
import RedoAnimText from './redo-text-animation'

export interface ITextAnimationProps {
  delay: number
  baseText: string
}

export default function TextAnimation({
  delay,
  baseText,
}: ITextAnimationProps) {
  const [done, setDone] = useState(false)
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest),
  )

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: 'tween',
      delay: delay,
      duration: 1,
      ease: 'easeInOut',
      onComplete: () => {
        setDone(true)
      },
    })
    return controls.stop
  }, [count, baseText.length, delay])

  return (
    <motion.span
      initial={{ y: -100, x: '-50%', opacity: 0 }}
      animate={{ y: 0, x: '-50%', opacity: 1 }}
      className="max-w-92 mb-10 h-32 text-start text-[2rem] font-extrabold lg:text-[3rem]"
    >
      <motion.span>{displayText}</motion.span>
      {done && (
        <>
          <br />
        </>
      )}
      <RedoAnimText delay={delay + 1} />
      <CursorBlinker />
    </motion.span>
  )
}
