import { useState } from 'react'
import { motion } from 'framer-motion'
import { introVideo, personalInfo } from '../data/portfolioData'

const MotionDiv = motion.div

// Helper to extract video ID and detect YouTube Shorts format
function getYouTubeInfo(url) {
  if (!url) return { id: null, isShorts: false }
  const isShorts = url.includes('/shorts/')
  const regExp =
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/
  const match = url.match(regExp)
  return {
    id: match ? match[1] : null,
    isShorts,
  }
}

export default function IntroVideo() {
  const [isPlaying, setIsPlaying] = useState(false)

  if (!introVideo || !introVideo.youtubeUrl) {
    return null
  }

  const { id: videoId, isShorts } = getYouTubeInfo(introVideo.youtubeUrl)

  if (!videoId) {
    return null
  }

  return (
    <section
      id="intro"
      className="bg-white pt-24 pb-28 px-6 md:px-12 relative overflow-hidden"
      style={{
        backgroundImage:
          'linear-gradient(to right, #80808008 1px, transparent 1px), linear-gradient(to bottom, #80808008 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-12">
          {introVideo.badge && (
            <span className="inline-block px-4 py-1.5 rounded-full bg-red-50 text-[#ff2a2a] text-xs font-bold uppercase tracking-wider mb-4 border border-red-100">
              {introVideo.badge}
            </span>
          )}
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tight">
            {introVideo.heading}
          </h2>
          {introVideo.description && (
            <p className="mt-3 max-w-2xl mx-auto text-base md:text-lg text-gray-500">
              {introVideo.description}
            </p>
          )}
        </div>

        {/* Video Player Frame with Scroll Animation */}
        <MotionDiv
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className={`relative rounded-3xl overflow-hidden border-4 border-[#ff2a2a] shadow-[0_30px_80px_rgba(255,42,42,0.25)] bg-black ${isShorts ? 'aspect-[9/16] max-w-sm mx-auto' : 'aspect-video max-w-4xl mx-auto'
            }`}
        >
          {!isPlaying ? (
            <div className="relative w-full h-full flex items-center justify-center group">
              {/* High-Quality YouTube Thumbnail */}
              <img
                src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
                alt={`${personalInfo?.name || 'Self-introduction'} self-introduction video`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/35 transition-colors group-hover:bg-black/25" />

              {/* Big Red Circular Play Button */}
              <button
                type="button"
                onClick={() => setIsPlaying(true)}
                aria-label="Play introduction video"
                className="relative z-10 w-20 h-20 rounded-full bg-[#ff2a2a] flex items-center justify-center text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <svg className="w-8 h-8 fill-current ml-1" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          ) : (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
              title="Self-introduction video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          )}
        </MotionDiv>

        {/* Watch on YouTube Link */}
        <div className="mt-6 text-center">
          <a
            href={introVideo.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-500 hover:text-[#ff2a2a] transition-colors"
          >
            <span>Watch on YouTube</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}

