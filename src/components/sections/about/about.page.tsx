'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

import { useSectionInView } from '@/lib/hooks'
import { smoothScrollTo } from '@/lib/utils'

import portfolioImg from '/public/images/photo.jpg'
import SectionDivider from '@/components/shared/section-divider'
import SectionHeading from '@/components/shared/section-heading'

export default function About() {
  const { ref } = useSectionInView('about', 0.4)
  const divRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ['0 1', '1.33 1'],
  })
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  return (
    <motion.section
      className="z-50 flex h-[1000px] w-full flex-col items-center justify-center leading-8 dark:bg-darkBg dark:text-white md:scroll-mt-4 lg:h-[1100px] lg:scroll-mt-24 lg:justify-start"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <motion.div
        className="w-full overflow-hidden lg:h-[700px] lg:w-[980px] xl:w-[1150px]"
        ref={divRef}
        style={{
          scale: scaleProgess,
          opacity: opacityProgess,
        }}
      >
        <div className="group relative flex h-full w-full items-center justify-center">
          <div className="text-md relative z-40 flex max-w-96 flex-col items-center justify-center gap-3 text-center font-semibold tracking-wide text-primary lg:absolute lg:right-0 lg:top-[27%] lg:block lg:max-w-[580px] lg:text-start lg:text-lg xl:top-1/3 xl:max-w-[650px]">
            <div className="flex flex-col gap-6">
              <span>
                I&apos;m Full-stack developer with expertise in TypeScript,
                React, Next.js, Node.js, and database technologies
                (MongoDB/PostgreSQL/MySQL) utilizing Prisma for efficient data
                access. Proven ability to deliver user-centered web applications
                with a focus on intuitive experiences and user interaction.
              </span>
              <span>
                Seeking for Web Development opportunities where I can leverage
                my skills to create meaningful connections between products and
                users.
              </span>
              <p className="flex flex-col items-center lg:items-start">
                <span>So if you are interested,</span>
                <Link
                  href={'contact'}
                  onClick={(e) => {
                    smoothScrollTo({ e, id: 'contact' })
                  }}
                  className="w-52 lg:w-40"
                >
                  <span className="bg-[#ffcbb4] text-2xl font-bold uppercase dark:bg-[#ddbea9] lg:normal-case">
                    Contact me!
                  </span>
                </Link>
              </p>
            </div>
          </div>
          <div className="absolute z-30 lg:left-0 lg:top-1/4">
            <div className="relative lg:h-[380px] lg:w-[380px] xl:h-[470px] xl:w-[470px]">
              <div className="absolute inset-0 z-20 rounded-full bg-gradient-to-b from-[#ffcbb4] via-[#e0afa0] to-[#e29578] transition-opacity group-hover:opacity-60"></div>
              <div className="absolute inset-0">
                <Image
                  src={portfolioImg}
                  alt="portfolio image"
                  placeholder="blur"
                  width={470}
                  height={470}
                  className="z-10 rounded-full lg:h-[380px] lg:w-[380px] xl:h-[470px] xl:w-[470px]"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <SectionDivider />
    </motion.section>
  )
}
