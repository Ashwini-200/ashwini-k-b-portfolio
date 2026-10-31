import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { personalInfo } from '../data/portfolioData'

const MotionDiv = motion.div
const MotionSpan = motion.span

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  // 2200ms display timer before triggering shutter exit
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2200)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <MotionDiv
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 w-full h-screen bg-[#ff2a2a] z-[100000] flex items-center justify-center select-none"
        >
          {/* Inner Brand Title Container */}
          <MotionDiv
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4 }}
            className="relative text-5xl md:text-7xl font-black tracking-tighter"
          >
            {/* Background Base Copy in text-red-900/30 */}
            <span className="text-red-900/30">
              {personalInfo.brandName}
              <span>.</span>
            </span>

            {/* Water Fill Animated Overlay in White with Black Dot */}
            <MotionSpan
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              animate={{ clipPath: 'inset(0% 0 0 0)' }}
              transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.2 }}
              className="absolute inset-0 text-white"
            >
              {personalInfo.brandName}
              <span className="text-black">.</span>
            </MotionSpan>
          </MotionDiv>
        </MotionDiv>
      )}
    </AnimatePresence>
  )
}

