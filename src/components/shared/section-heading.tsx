import React from 'react'

interface SectionHeadingProps {
  children: React.ReactNode
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="mb-8 text-center text-4xl font-semibold uppercase">
      {children}
    </h2>
  )
}
