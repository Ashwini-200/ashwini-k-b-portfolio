import { useState } from 'react'
import { motion } from 'framer-motion'
import QRCode from 'react-qr-code'
import profilePic from '../assets/about/profile.png'
import { personalInfo, socialLinks, aboutContent, introVideo } from '../data/portfolioData'

const MotionDiv = motion.div

export default function About() {
  const [flipped, setFlipped] = useState(false)

  const handleFlip = () => {
    setFlipped((prev) => !prev)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleFlip()
    }
  }

  return (
    <section
      id="about"
      className="py-24 px-6 md:px-12 bg-white text-black min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Side: Lanyard, Clip, and Outer Drop-in Motion Div */}
        <MotionDiv
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', damping: 15, stiffness: 100, duration: 1 }}
          className="lg:col-span-5 flex flex-col items-center justify-center relative pt-8"
        >
          {/* Lanyard Ribbon */}
          <div className="w-6 h-14 bg-[#ff2a2a] rounded-t-sm shadow-md" />

          {/* Metal Badge Clip */}
          <div className="w-10 h-6 bg-neutral-800 rounded-sm shadow-md flex items-center justify-center -mt-1 z-20">
            <div className="w-4 h-2 bg-neutral-400 rounded-xs" />
          </div>

          {/* Flip ID Card Button Wrapper */}
          <button
            type="button"
            aria-label="Flip ID card"
            onClick={handleFlip}
            onKeyDown={handleKeyDown}
            className="relative w-full max-w-[280px] -rotate-3 hover:rotate-0 transition-transform duration-500 [perspective:1200px] focus:outline-none cursor-pointer mt-1"
          >
            <div
              className="relative w-full aspect-[3/4] transition-transform duration-700 [transform-style:preserve-3d]"
              style={{ transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
            >
              {/* FRONT FACE: Dark Badge Card */}
              <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl overflow-hidden bg-[#141414] shadow-2xl border border-neutral-800 flex flex-col">
                {/* Badge Cutout Slot */}
                <div className="w-12 h-2.5 bg-neutral-900 border border-neutral-700 rounded-full mx-auto mt-3 mb-2 z-10 shrink-0" />

                {/* Portrait Image */}
                <div className="relative flex-1 w-full overflow-hidden px-3 pb-3">
                  <img
                    src={profilePic}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute bottom-5 left-5 right-5 bg-black/80 backdrop-blur-md rounded-lg p-2.5 text-center border border-white/10">
                    <p className="text-white font-bold text-sm leading-tight">
                      {personalInfo.brandName}
                    </p>
                    <p className="text-red-400 font-mono text-[10px] uppercase tracking-wider">
                      {personalInfo.title}
                    </p>
                  </div>
                </div>
              </div>

              {/* BACK FACE: Visiting Card */}
              <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl overflow-hidden bg-gradient-to-br from-[#141414] to-[#1f1f1f] shadow-2xl border border-neutral-800 text-white text-left flex flex-col justify-between">
                {/* 6px Red Top Bar */}
                <div className="h-[6px] w-full bg-[#ff2a2a] shrink-0" />

                <div className="p-5 flex-1 flex flex-col justify-between">
                  {/* Brand & Title */}
                  <div>
                    <h3 className="text-xl font-black tracking-tight text-white">
                      {personalInfo.brandName}
                      <span className="text-[#ff2a2a]">.</span>
                    </h3>
                    <p className="text-xs uppercase tracking-widest text-red-400 font-mono mt-0.5">
                      {personalInfo.title}
                    </p>

                    {/* Divider */}
                    <div className="border-b border-white/10 my-3" />

                    {/* Contact Rows */}
                    <div className="space-y-2">
                      {personalInfo.emails?.primary && (
                        <div className="flex items-center space-x-2">
                          <svg
                            className="w-4 h-4 text-red-400 shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                          <a
                            href={`mailto:${personalInfo.emails.primary}`}
                            onClick={(e) => e.stopPropagation()}
                            className="text-xs text-white/85 hover:text-white underline truncate transition-colors"
                          >
                            {personalInfo.emails.primary}
                          </a>
                        </div>
                      )}

                      {personalInfo.phone && (
                        <div className="flex items-center space-x-2">
                          <svg
                            className="w-4 h-4 text-red-400 shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                          <a
                            href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                            onClick={(e) => e.stopPropagation()}
                            className="text-xs text-white/85 hover:text-white transition-colors"
                          >
                            {personalInfo.phone}
                          </a>
                        </div>
                      )}

                      {personalInfo.location && (
                        <div className="flex items-center space-x-2">
                          <svg
                            className="w-4 h-4 text-red-400 shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          <span className="text-xs text-white/85">{personalInfo.location}</span>
                        </div>
                      )}

                      {socialLinks.linkedin && (
                        <div className="flex items-center space-x-2">
                          <svg
                            className="w-4 h-4 text-red-400 shrink-0 fill-current"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                          <a
                            href={socialLinks.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-xs text-white/85 hover:text-white underline transition-colors"
                          >
                            LinkedIn
                          </a>
                        </div>
                      )}

                      {socialLinks.github && (
                        <div className="flex items-center space-x-2">
                          <svg
                            className="w-4 h-4 text-red-400 shrink-0 fill-current"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                          </svg>
                          <a
                            href={socialLinks.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-xs text-white/85 hover:text-white underline transition-colors"
                          >
                            GitHub
                          </a>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* QR Code Scan to Connect */}
                  <div className="flex items-center space-x-3 pt-3 border-t border-white/10 mt-2">
                    <div className="bg-white rounded-lg p-2 shrink-0">
                      <QRCode
                        value={
                          socialLinks.linkedin ||
                          `mailto:${personalInfo.emails.primary}`
                        }
                        size={76}
                      />
                    </div>
                    <p className="text-[10px] text-white/60 font-mono tracking-wider leading-relaxed">
                      Scan to connect
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </button>

          {/* Flip Hint */}
          <p className="text-xs font-bold text-black/60 mt-4 text-center select-none">
            Tap the card to flip ↻
          </p>
        </MotionDiv>

        {/* Right Side: About Content Text */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
          <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight">
            {aboutContent.heading}
          </h2>

          <div
            className="text-neutral-700 text-base md:text-lg leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />

          {/* Tech Stack Pills */}
          <div className="pt-2">
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-3">
              Technologies & Frameworks
            </p>
            <div className="flex flex-wrap gap-2">
              {aboutContent.techStack?.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-1.5 rounded-full bg-neutral-100 text-neutral-800 font-semibold text-xs border border-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Optional Intro Video Card */}
          {introVideo && introVideo.youtubeUrl && (
            <div className="pt-4">
              <a
                href={introVideo.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 px-5 py-3 rounded-xl bg-neutral-900 text-white hover:bg-neutral-800 transition-colors shadow-md group"
              >
                <div className="w-8 h-8 rounded-full bg-[#ff2a2a] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-mono tracking-wider text-red-400 font-bold">
                    {introVideo.badge}
                  </p>
                  <p className="text-xs font-bold text-white">{introVideo.heading}</p>
                </div>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
