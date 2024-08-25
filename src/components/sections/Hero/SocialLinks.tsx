import { Linkedin } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const SocialLinks: React.FC = () => (
  <div className="flex gap-2">
    <SocialLink
      href="https://www.linkedin.com/in/maksym-azimov/"
      icon={<Linkedin />}
    />
    <SocialLink
      href="https://github.com/bbyc4kes"
      icon={
        <Image
          width={25}
          height={25}
          src={'/svgs/github.svg'}
          alt="github icon"
        />
      }
    />
  </div>
)

interface SocialLinkProps {
  href: string
  icon: JSX.Element
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon }) => (
  <a
    className="borderBlack flex h-[60px] w-[60px] cursor-pointer items-center justify-center gap-2 rounded-full bg-white p-4 transition hover:scale-105 dark:bg-white/10 dark:text-white/60"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
)

export default SocialLinks
