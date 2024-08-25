import { motion } from 'framer-motion'
import { CircleUser, Download } from 'lucide-react'
import React from 'react'

import ActionButton from '@/components/sections/Hero/ActionButton'
import SocialLinks from '@/components/sections/Hero/SocialLinks'
import TextAnimation from '@/components/sections/Hero/text-animation'
import { smoothScrollTo } from '@/lib/utils/smoothScrollTo'

type SectionType =
  | 'home'
  | 'about'
  | 'projects'
  | 'experience'
  | 'skills'
  | 'contact'

interface ContentSectionProps {
  setActiveSection: React.Dispatch<React.SetStateAction<SectionType>>
  setTimeOfLastClick: (time: number) => void
}

const ContentSection: React.FC<ContentSectionProps> = ({
  setActiveSection,
  setTimeOfLastClick
}) => (
  <div className="container flex flex-col items-start justify-center tracking-wide text-black dark:text-white">
    <div className="container relative flex h-full w-full flex-col items-center">
      <div className="h-72 w-[280px] text-center text-[2rem] font-extrabold sm:w-[520px] md:w-[700px] lg:mb-5 lg:w-[920px] lg:text-[3rem]">
        <motion.span
          initial={{ y: -100, x: '-50%', opacity: 0 }}
          animate={{ y: 0, x: '-50%', opacity: 1 }}
          className="mb-10 text-start font-extrabold"
        ></motion.span>
        <br />
      </div>
      <motion.div
        className="w-92 flex flex-col items-center justify-center gap-3 px-4 text-sm font-medium md:mt-12 md:flex-row lg:text-lg"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <ActionButton
          text="Contact Us"
          icon={<CircleUser className="opacity-70 group-hover:opacity-80" />}
          onClick={(e) => {
            smoothScrollTo({ e, id: 'contact' })
            setActiveSection('contact')
            setTimeOfLastClick(Date.now())
          }}
          className="bg-darkBg text-white hover:bg-darkBeige hover:dark:text-black"
        />
        <SocialLinks />
      </motion.div>
    </div>
  </div>
)

export default ContentSection
