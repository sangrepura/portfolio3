'use client'

import { animate, motion, useMotionValue, useTransform } from 'framer-motion'
import { useEffect, useMemo } from 'react'

export interface IRedoTextAnimationProps {
  delay: number
}

export default function RedoTextAnimation({ delay }: IRedoTextAnimationProps) {
  const textIndex = useMotionValue(0)

  const texts = useMemo(
    () => [
      'I am writing to you because I want a job.',
      'I am the best candidate for this job.',
      'In my grand adventure as a seasoned developer...',
      "Knock knock! Who's there? Your new employee!",
      'Walking the tightrope balance of project management...',
      'I find myself compelled to express my interest due to...',
      'My pen (or should I say, keyboard) is at work today because...',
      'Inspired by the alluring challenge in the job posting, I am writing...',
      'Stirred to my keyboard by the tantalizing nature of the role…',
    ],
    [],
  )

  const baseText = useTransform(textIndex, (latest) => texts[latest] || '')
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest),
  )
  const updatedThisRound = useMotionValue(true)

  useEffect(() => {
    void animate(count, 60, {
      type: 'tween',
      delay: delay,
      duration: 3,
      ease: 'easeIn',
      repeat: Infinity,
      repeatType: 'reverse',
      repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false)
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0)
          } else {
            textIndex.set(textIndex.get() + 1)
          }
          updatedThisRound.set(true)
        }
      },
    })
  }, [count, delay, textIndex, texts, updatedThisRound])

  return (
    <motion.span className="max-w-92 h-32 bg-lightBeige text-[1.2rem] font-bold dark:bg-darkBeige md:text-[1.5rem] lg:text-[1.7rem]">
      {displayText}
    </motion.span>
  )
}
