'use client'

import React from 'react'

import SectionDivider from '@/components/shared/section-divider'
import { projectsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'

import SectionHeading from '../../shared/section-heading'
import Project from './project'

export default function Projects() {
  const { ref } = useSectionInView('projects', 0.25)

  return (
    <section
      className="flex min-h-screen w-full scroll-mt-36 flex-col items-center justify-center dark:bg-darkBg dark:text-white"
      id="projects"
      ref={ref}
    >
      <SectionHeading>Work</SectionHeading>
      <div className="my-24">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
      <SectionDivider />
    </section>
  )
}
