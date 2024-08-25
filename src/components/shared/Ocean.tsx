// Ocean.tsx
import { motion } from 'framer-motion'
import React from 'react'

const oceanAnimation = {
  animate: {
    background: [
      `
      radial-gradient(ellipse at 20% 30%, hsl(188, 35%, 56%), transparent 50%),
      radial-gradient(ellipse at 70% 20%, hsl(193, 46%, 52%), transparent 40%),
      radial-gradient(ellipse at 50% 70%, hsl(188, 41%, 61%), transparent 30%),
      radial-gradient(ellipse at 60% 40%, hsl(174, 34%, 48%), transparent 40%),
      radial-gradient(ellipse at 30% 80%, hsl(193, 46%, 42%), transparent 50%),
      radial-gradient(ellipse at 80% 60%, hsl(195, 39%, 74%), transparent 50%),
      radial-gradient(ellipse at 40% 50%, hsl(193, 46%, 52%), transparent 40%),
      linear-gradient(135deg, hsl(188, 41%, 61%), hsl(174, 34%, 48%))
      `,
      `
      radial-gradient(ellipse at 40% 20%, hsl(193, 46%, 52%), transparent 50%),
      radial-gradient(ellipse at 30% 50%, hsl(188, 35%, 56%), transparent 40%),
      radial-gradient(ellipse at 80% 30%, hsl(188, 41%, 61%), transparent 30%),
      radial-gradient(ellipse at 70% 80%, hsl(174, 34%, 48%), transparent 40%),
      radial-gradient(ellipse at 20% 60%, hsl(193, 46%, 42%), transparent 50%),
      radial-gradient(ellipse at 50% 90%, hsl(195, 39%, 74%), transparent 50%),
      radial-gradient(ellipse at 60% 40%, hsl(188, 41%, 61%), transparent 40%),
      linear-gradient(135deg, hsl(174, 34%, 48%), hsl(193, 46%, 42%))
      `,
      `
      radial-gradient(ellipse at 60% 70%, hsl(174, 34%, 48%), transparent 50%),
      radial-gradient(ellipse at 20% 40%, hsl(195, 39%, 74%), transparent 40%),
      radial-gradient(ellipse at 50% 20%, hsl(188, 35%, 56%), transparent 30%),
      radial-gradient(ellipse at 80% 50%, hsl(193, 46%, 52%), transparent 40%),
      radial-gradient(ellipse at 40% 80%, hsl(193, 46%, 42%), transparent 50%),
      radial-gradient(ellipse at 30% 60%, hsl(188, 41%, 61%), transparent 50%),
      radial-gradient(ellipse at 70% 30%, hsl(195, 39%, 74%), transparent 40%),
      linear-gradient(135deg, hsl(193, 46%, 42%), hsl(195, 39%, 74%))
      `
    ],
    transition: {
      duration: 10,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'reverse',
      delay: 0.5
    }
  }
}

const Ocean: React.FC = () => (
  <motion.div
    variants={oceanAnimation}
    animate="animate"
    className="absolute inset-0"
  />
)

export default Ocean
