import { useRef, useState } from 'react'
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion'
import { skillsContent } from '../data/portfolioData'

const MotionPath = motion.path

function TagCard({
  number,
  title,
  text,
  className,
  aosDelay,
  aosType,
  pathLength,
  containerRef,
}) {
  const cardRef = useRef(null)
  const [isActive, setIsActive] = useState(false)

  // Track scroll path progress relative to card position
  useMotionValueEvent(pathLength, 'change', (latest) => {
    if (!cardRef.current || !containerRef.current) return
    const containerRect = containerRef.current.getBoundingClientRect()
    const cardRect = cardRef.current.getBoundingClientRect()
    const cardTopRelativeToContainer = cardRect.top - containerRect.top
    const progressPx = latest * containerRect.height

    if (progressPx >= cardTopRelativeToContainer + 50) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  })

  return (
    <div
      ref={cardRef}
      data-aos={aosType}
      data-aos-delay={aosDelay}
      className={`w-72 sm:w-80 rounded-[2rem] p-2 transition-all duration-700 select-none ${
        isActive
          ? 'bg-[#ff2a2a] shadow-[0_0_35px_rgba(255,42,42,0.4)] text-white'
          : 'bg-white shadow-xl text-neutral-800'
      } ${className}`}
    >
      {/* Punched hole circle at the top */}
      <div className="w-5 h-5 rounded-full mx-auto mt-2 bg-neutral-200 border-2 border-neutral-300 shadow-inner flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-neutral-400" />
      </div>

      {/* Inner rounded panel */}
      <div
        className={`mt-6 p-8 min-h-[220px] rounded-[1.5rem] transition-colors duration-700 flex flex-col justify-between ${
          isActive ? 'bg-red-700/50 text-white' : 'bg-[#f4f4f4] text-neutral-800'
        }`}
      >
        <span
          className={`text-4xl font-serif italic ${
            isActive ? 'text-white/60' : 'text-neutral-400'
          }`}
        >
          {number}
        </span>
        <h3
          className={`text-2xl font-black tracking-tight mt-2 mb-3 ${
            isActive ? 'text-white' : 'text-neutral-900'
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-sm leading-relaxed ${
            isActive ? 'text-white/90' : 'text-neutral-600'
          }`}
        >
          {text}
        </p>
      </div>
    </div>
  )
}

const desktopCardPositions = [
  {
    className: 'md:absolute md:top-[10px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-6',
    aosType: 'fade-left',
    aosDelay: 100,
  },
  {
    className: 'md:absolute md:top-[450px] md:left-[5%] lg:left-[10%] -rotate-2 md:-rotate-6',
    aosType: 'fade-right',
    aosDelay: 200,
  },
  {
    className: 'md:absolute md:top-[700px] md:right-[5%] lg:right-[15%] rotate-1 md:rotate-3',
    aosType: 'fade-left',
    aosDelay: 300,
  },
  {
    className: 'md:absolute md:top-[1050px] md:left-[15%] lg:left-[25%] -rotate-1 md:-rotate-3',
    aosType: 'fade-right',
    aosDelay: 400,
  },
]

export default function Services() {
  const containerRef = useRef(null)

  // Scroll progress for the animated path
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  })

  return (
    <section
      id="process"
      ref={containerRef}
      className="bg-white pt-24 pb-32 px-6 md:px-12 relative overflow-hidden"
      style={{
        backgroundImage:
          'linear-gradient(to right, #8080800a 1px, transparent 1px), linear-gradient(to bottom, #8080800a 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }}
    >
      <div className="max-w-6xl mx-auto relative md:h-[1350px]">
        {/* Header Block */}
        <div
          data-aos="fade-up"
          className="md:absolute top-10 left-0 md:w-[450px] z-20 mb-12 md:mb-0"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-50 text-[#ff2a2a] text-xs font-bold uppercase tracking-wider mb-4 border border-red-100">
            {skillsContent.badge}
          </span>
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-neutral-900 tracking-tight">
              {skillsContent.heading}
            </h2>
            <svg
              className="absolute -bottom-6 right-0 w-8 h-8 text-[#ff2a2a] stroke-current fill-none"
              viewBox="0 0 20 20"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4 Q 10 10 15 15 M 15 15 L 10 15 M 15 15 L 15 10" />
            </svg>
          </div>
          <p className="mt-8 text-base md:text-lg text-neutral-600 leading-relaxed max-w-sm">
            {skillsContent.description}
          </p>
        </div>

        {/* Desktop Animated Curved SVG Path */}
        <svg
          className="hidden md:block absolute top-0 left-0 w-full h-[1350px] pointer-events-none z-0"
          viewBox="0 0 1000 1350"
          preserveAspectRatio="none"
        >
          <defs>
            <mask id="path-mask">
              <MotionPath
                d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200"
                fill="none"
                stroke="white"
                strokeWidth="20"
                style={{ pathLength }}
              />
            </mask>
          </defs>
          {/* 1. Faint guide path */}
          <path
            d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="2"
            strokeDasharray="8 10"
          />
          {/* 3. The real dashed path */}
          <path
            d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200"
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeDasharray="8 10"
            mask="url(#path-mask)"
          />
        </svg>

        {/* Mobile Animated Straight SVG Path */}
        <svg
          className="md:hidden absolute top-0 left-[50%] -translate-x-1/2 w-4 h-full pointer-events-none z-0"
          viewBox="0 0 4 100"
          preserveAspectRatio="none"
        >
          <defs>
            <mask id="path-mask-mobile">
              <MotionPath
                d="M 2,0 L 2,100"
                fill="none"
                stroke="white"
                strokeWidth="10"
                vectorEffect="non-scaling-stroke"
                style={{ pathLength }}
              />
            </mask>
          </defs>
          {/* 1. Faint guide path */}
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
            strokeDasharray="4 6"
          />
          {/* 3. The real dashed path */}
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="black"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
            strokeDasharray="4 6"
            mask="url(#path-mask-mobile)"
          />
        </svg>

        {/* Process Cards Container */}
        <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10">
          {skillsContent.cards?.map((card, index) => {
            const config = desktopCardPositions[index] || {
              className: 'md:relative',
              aosType: 'fade-up',
              aosDelay: index * 100,
            }

            return (
              <TagCard
                key={card.number}
                number={card.number}
                title={card.title}
                text={card.text}
                className={config.className}
                aosDelay={config.aosDelay}
                aosType={config.aosType}
                pathLength={pathLength}
                containerRef={containerRef}
              />
            )
          })}
        </div>

        {/* Hand-written End Note */}
        {skillsContent.endText && (
          <div className="hidden md:block absolute top-[1250px] left-[60%] font-['Caveat',cursive] text-3xl text-gray-600 rotate-6 select-none z-10 pointer-events-none">
            {skillsContent.endText}
          </div>
        )}
      </div>
    </section>
  )
}

