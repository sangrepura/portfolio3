'use client'

import 'next-cloudinary/dist/cld-video-player.css'

import { motion } from 'framer-motion'
import { CircleUser, Download, Linkedin } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import AnimatedBackground from '@/components/shared/AnimatedBackground'
import { Bubbles } from '@/components/shared/Bubbles'
import SectionDivider from '@/components/shared/section-divider'
import { useSectionInView } from '@/lib/hooks'
import { smoothScrollTo } from '@/lib/utils'
import { useActiveSectionContext } from '@/stores/active-section/active-section-context'

import TextAnimation from './text-animation'

export default function Hero() {
  const { ref } = useSectionInView('home')
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()
  const [fadeOutVideo, setFadeOutVideo] = useState(false)
  const [showOverlay, setShowOverlay] = useState(false)
  const [showBurstBubbles, setShowBurstBubbles] = useState(false)

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setFadeOutVideo(true)
    }, 5500) // Start fading out after 5.5 seconds

    const showOverlayTimer = setTimeout(() => {
      setShowOverlay(true) // Show overlay as video fades out
    }, 7300) // Start showing overlay at 6 seconds

    const showBurstBubbles = setTimeout(() => {
      setShowBurstBubbles(true) // Show overlay as video fades out
    }, 6000) // Start showing overlay at 6 seconds

    const removeBurstBubblesTimer = setTimeout(() => {
      setShowBurstBubbles(false) // Remove burst bubbles after animation
    }, 2000) // Adjust this timing based on burst bubble duration

    return () => {
      clearTimeout(fadeOutTimer)
      clearTimeout(showOverlayTimer)
      clearTimeout(showBurstBubbles)
      clearTimeout(removeBurstBubblesTimer)
    }
  }, [])

  return (
    <>
      <section
        className="relative flex h-screen w-full scroll-mt-36 flex-col items-center justify-center"
        id="home"
        ref={ref}
      >
        {!showOverlay && (
          <video
            width="480"
            height="720"
            preload="none"
            autoPlay
            crossOrigin="anonymous"
            muted
            className={`duration-3000 absolute left-0 top-0 h-full w-full object-cover transition-opacity ${
              fadeOutVideo ? 'opacity-0' : 'opacity-100'
            }`}
            onTransitionEnd={() => {
              if (fadeOutVideo) setShowOverlay(true)
            }}
          >
            <source src="/layout.mp4" />
          </video>
        )}
        <div
          className={`absolute inset-0 ${
            fadeOutVideo ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-1000`}
        >
          <AnimatedBackground />
          {showBurstBubbles && (
            <Bubbles
              numBubbles={100}
              sizeRange={[10, 40]}
              durationRange={[1, 5]}
              delayRange={[0.1, 0.5]}
              colors={{
                bubbleBorder: 'rgba(100, 200, 255, 0.15)', // Custom border color
                dropShadowColor: '#ccc', // Custom drop shadow color
                innerGradientStart: 'rgba(255, 255, 255, 0.05)', // Custom gradient start
                innerGradientEnd: 'rgba(255, 255, 255, 0.3)', // Custom gradient end
                radialGradientStart: 'rgba(255, 255, 255, 0.05)', // Custom radial start
                radialGradientEnd: 'rgba(255, 255, 255, 0.15)', // Custom radial end
                reflectionBorder: '#ff0', // Custom reflection border
                reflectionBlurColor: 'rgba(255, 255, 255, 0.1)' // Custom blur color
              }}
            />
          )}
          <Bubbles
            numBubbles={50}
            sizeRange={[20, 70]}
            durationRange={[10, 15]}
            delayRange={[0.3, 0.7]}
            colors={{
              bubbleBorder: 'rgba(100, 200, 255, 0.15)', // Custom border color
              dropShadowColor: '#ccc', // Custom drop shadow color
              innerGradientStart: 'rgba(255, 255, 255, 0.05)', // Custom gradient start
              innerGradientEnd: 'rgba(255, 255, 255, 0.3)', // Custom gradient end
              radialGradientStart: 'rgba(255, 255, 255, 0.05)', // Custom radial start
              radialGradientEnd: 'rgba(255, 255, 255, 0.15)', // Custom radial end
              reflectionBorder: '#ff0', // Custom reflection border
              reflectionBlurColor: 'rgba(255, 255, 255, 0.1)' // Custom blur color
            }}
          />
        </div>
        <a
          className="absolute bottom-6 right-6 z-[49] flex cursor-pointer items-center justify-center sm:bottom-8 sm:right-8"
          onClick={(e) => {
            smoothScrollTo({ e, id: 'about' })
          }}
        >
          <motion.span
            className="m-2 h-8 w-[5px] rounded-lg bg-black dark:bg-[#ddbea9] md:h-10 md:w-2"
            initial={{ y: 0, rotate: -45 }}
            animate={{ y: [0, 15, 0], rotate: [-45, -45, -45] }}
            transition={{
              duration: 1.1,
              ease: 'easeInOut',
              repeat: Infinity
            }}
          />
          <motion.span
            className="m-2 h-8 w-[5px] rounded-lg bg-black dark:bg-[#ddbea9] md:h-10 md:w-2"
            initial={{ y: 0, rotate: 45 }}
            animate={{ y: [0, 15, 0], rotate: [45, 45, 45] }}
            transition={{
              duration: 1.1,
              ease: 'easeInOut',
              repeat: Infinity
            }}
            data-testid="hero-span-animation-container"
          />
        </a>
        <div className="container flex flex-col items-start justify-center tracking-wide text-black dark:text-white">
          <div className="container relative flex h-full w-full flex-col items-center">
            <div className="h-72 w-[280px] text-center text-[2rem] font-extrabold sm:w-[520px] md:w-[700px] lg:mb-5 lg:w-[920px] lg:text-[3rem]">
              <motion.span
                initial={{ y: -100, x: '-50%', opacity: 0 }}
                animate={{ y: 0, x: '-50%', opacity: 1 }}
                className="mb-10 text-start font-extrabold"
              >
                Hey!👋
              </motion.span>
              <br />
              <TextAnimation delay={1} baseText={`I'm Maksym`} />
            </div>
            <motion.div
              className="w-92 flex flex-col items-center justify-center gap-3 px-4 text-sm font-medium md:mt-12 md:flex-row lg:text-lg"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1
              }}
              data-testid="hero-span-inner-animation-container"
            >
              <a
                className="group flex w-64 cursor-pointer items-center justify-center gap-2 rounded-full bg-darkBg px-7 py-3 text-white outline-none transition hover:scale-105 hover:bg-darkBeige focus:scale-105 active:scale-105 hover:dark:text-black sm:w-auto"
                onClick={(e) => {
                  smoothScrollTo({ e, id: 'contact' })
                  setActiveSection('contact')
                  setTimeOfLastClick(Date.now())
                }}
              >
                Contact me here{' '}
                <CircleUser className="opacity-70 group-hover:opacity-80" />
              </a>

              <a
                className="borderBlack group flex w-64 cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-7 py-3 outline-none transition hover:scale-105 focus:scale-105 active:scale-105 dark:bg-white/10 sm:w-auto"
                href="/CV_Azimov_Maksym.pdf"
                download
              >
                Download CV{' '}
                <Download className="opacity-60 group-hover:opacity-100" />
              </a>

              <div className="flex gap-2">
                <a
                  className="borderBlack flex h-[60px] w-[60px] cursor-pointer items-center justify-center gap-2 rounded-full bg-white p-4 text-gray-700 transition hover:scale-105 hover:text-gray-950 focus:scale-105 active:scale-105 dark:bg-white/10 dark:text-white/60"
                  href="https://www.linkedin.com/in/maksym-azimov/"
                  target="_blank"
                >
                  <Linkedin />
                </a>

                <a
                  className="borderBlack flex h-[60px] w-[60px] cursor-pointer items-center justify-center gap-2 rounded-full bg-white p-4 text-gray-700 transition hover:scale-105 hover:text-gray-950 focus:scale-105 active:scale-105 dark:bg-white/10 dark:text-white/60"
                  href="https://github.com/bbyc4kes"
                  target="_blank"
                >
                  <Image
                    width={25}
                    height={25}
                    src={'/svgs/github.svg'}
                    alt="github icon"
                  />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <div className="flex w-full justify-center dark:bg-darkBg">
        <SectionDivider />
      </div>
    </>
  )
}
