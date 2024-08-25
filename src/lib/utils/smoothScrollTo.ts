interface SmoothScrollOptions {
  e: React.MouseEvent<HTMLAnchorElement>
  id: string
}

export const smoothScrollTo = ({ e, id }: SmoothScrollOptions): void => {
  e.preventDefault()
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
