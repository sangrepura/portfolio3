import React, { useEffect, useState } from 'react'

import { Bubbles } from '@/components/shared/Bubbles'
import Ocean from '@/components/shared/Ocean'
import { useSectionInView } from '@/lib/hooks'
import { useActiveSectionContext } from '@/stores/active-section/active-section-context'

import { bubbleColors } from './bubbleColors'
import ContentSection from './ContentSection'

const Hero: React.FC = () => {
  const { ref } = useSectionInView('home')
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()
  const [sartFadeOutVideo, setSartFadeOutVideo] = useState<boolean>(false)
  const [startFadeInBackground, setStartFadeInBackground] =
    useState<boolean>(false)
  const [showBurstBubbles, setShowBurstBubbles] = useState<boolean>(false)

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setSartFadeOutVideo(true)
    }, 6000)

    const fadeInTimer = setTimeout(() => {
      setStartFadeInBackground(true)
    }, 5500)

    const showBurstBubblesTimer = setTimeout(() => {
      setShowBurstBubbles(true)
    }, 5000)

    const removeBurstBubblesTimer = setTimeout(() => {
      setShowBurstBubbles(false)
    }, 198000)

    return () => {
      clearTimeout(fadeOutTimer)
      clearTimeout(fadeInTimer)
      clearTimeout(showBurstBubblesTimer)
      clearTimeout(removeBurstBubblesTimer)
    }
  }, [])

  return (
    <section
      className="relative flex h-screen w-full scroll-mt-36 flex-col items-center justify-center overflow-hidden bg-slate-500"
      id="home"
      ref={ref}
    >
      {/* Background Animation */}
      <Ocean />
      <div
        className="fixed inset-0 transition-opacity duration-1000"
        style={{ opacity: startFadeInBackground ? 1 : 0 }}
      >
        {/* Bubble Effects */}
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${
            startFadeInBackground ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {showBurstBubbles && (
            <Bubbles
              numBubbles={300}
              sizeRange={[5, 60]}
              durationRange={[0.5, 1.9]} // Control speed/velocity of float
              delayRange={[0, 2]} // Immediate start
              colors={bubbleColors}
              runCount={1} // Run once
              leftRange={[0, 100]} // Center cluster horizontally
              bottomOffset={-10} // Cluster near the center vertically
              initialOpacityRange={[0.1, 0.4]} // Control initial opacity
            />
          )}
          <Bubbles
            numBubbles={50}
            sizeRange={[10, 70]}
            durationRange={[3, 15]} // Slower float for background bubbles
            delayRange={[0, 15]}
            colors={bubbleColors}
            runCount={Infinity} // Infinite animation for background
            leftRange={[0, 100]} // Full width
            bottomOffset={-10} // Full height
            initialOpacityRange={[0.1, 0.2]} // Less opacity for background bubbles
          />
        </div>
      </div>

      {/* Video Layer */}
      <div className="absolute inset-0 flex items-center justify-center">
        <video
          preload="none"
          autoPlay
          crossOrigin="anonymous"
          muted
          className={`h-full w-full object-cover transition-opacity duration-1000 ${
            sartFadeOutVideo ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <source src="/layout.mp4" />
        </video>
      </div>

      {/* Content Section */}
      <ContentSection
        setActiveSection={setActiveSection}
        setTimeOfLastClick={setTimeOfLastClick}
      />
    </section>
  )
}

export default Hero
