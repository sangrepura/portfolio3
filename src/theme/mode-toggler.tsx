'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import { useHasMounted } from '@/lib/hooks'

export function ModeToggle() {
  const { setTheme, theme } = useTheme()
  const hasMounted = useHasMounted()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  if (!hasMounted) return null

  return (
    <Button
      className="bg-transparent p-0 text-gray-700 opacity-80 dark:text-white"
      size={'sm'}
      onClick={toggleTheme}
    >
      {theme === 'light' ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </Button>
  )
}
