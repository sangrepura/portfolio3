import React from 'react'

interface ActionButtonProps {
  text: string
  icon: JSX.Element
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  href?: string
  download?: boolean
  className: string
}

const ActionButton: React.FC<ActionButtonProps> = ({
  text,
  icon,
  onClick,
  href,
  download,
  className
}) => (
  <a
    className={`group flex w-64 cursor-pointer items-center justify-center gap-2 rounded-full px-7 py-3 outline-none transition hover:scale-105 focus:scale-105 active:scale-105 sm:w-auto ${className}`}
    onClick={onClick}
    href={href}
    download={download}
  >
    {text} {icon}
  </a>
)

export default ActionButton
