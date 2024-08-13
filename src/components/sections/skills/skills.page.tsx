'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

import SectionDivider from '@/components/shared/section-divider'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'

import SectionHeading from '@/components/shared/section-heading'

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
}

export default function Skills() {
  const { ref } = useSectionInView('skills')

  return (
    <section
      id="skills"
      ref={ref}
      className="flex w-full flex-col items-center justify-center py-24 pb-[150px] text-center dark:bg-darkBg dark:text-white sm:pb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="my-26 mb-[150px] flex max-w-[53rem] flex-wrap items-center justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="borderBlack flex items-center justify-center rounded-xl bg-gray-200 px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <Image
              src={skill[1]}
              alt={skill[0]}
              width={24}
              height={24}
              className="mr-2 inline h-6 w-6"
            />
            {skill[0]}
          </motion.li>
        ))}
      </ul>
      <div className="flex w-full justify-center dark:bg-darkBg">
        <SectionDivider />
      </div>
    </section>
  )
}
