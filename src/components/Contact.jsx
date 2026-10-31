import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { emailjsConfig, personalInfo, socialLinks } from '../data/portfolioData'

const MotionDiv = motion.div

export default function Contact() {
  const ref = useRef(null)
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

  // Parallax scroll effect for giant background "Contact" word
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%'])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return

    setStatus('sending')

    const form = formRef.current
    const firstName = form?.firstName?.value?.trim() || ''
    const lastName = form?.lastName?.value?.trim() || ''
    const email = form?.email?.value?.trim() || ''
    const message = form?.message?.value?.trim() || ''

    // Validation check
    if (!firstName || !email || !message) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    const { serviceId, templateId, publicKey } = emailjsConfig
    const isConfigured =
      Boolean(serviceId) &&
      Boolean(templateId) &&
      Boolean(publicKey) &&
      serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
      templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
      publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY'

    // If EmailJS keys are not configured, fallback cleanly to mailto
    if (!isConfigured) {
      const subject = `Portfolio Contact from ${firstName} ${lastName}`.trim()
      const body = `From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`
      window.open(
        `mailto:${personalInfo.emails.primary}?subject=${encodeURIComponent(
          subject,
        )}&body=${encodeURIComponent(body)}`,
        '_blank',
      )
      setStatus('success')
      form?.reset()
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    // Dynamic EmailJS sendForm invocation
    try {
      const emailjs = await import('@emailjs/browser')
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      setStatus('success')
      form?.reset()
    } catch (err) {
      console.error('EmailJS submission error:', err)
      setStatus('error')
    } finally {
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-gray-900"
    >
      {/* Parallax Giant "Contact" Background Text */}
      <MotionDiv
        style={{ y }}
        className="absolute top-12 left-0 right-0 pointer-events-none z-0 flex justify-center text-white/5"
      >
        <div
          className="text-[25vw] leading-[0.75] font-black uppercase tracking-tighter select-none scale-y-[1.6] origin-top"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </div>
      </MotionDiv>

      {/* Red Card in Front Aligned to the Right */}
      <div className="w-full flex justify-end relative z-10">
        <div
          data-aos="fade-up"
          className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 rounded-tl-3xl shadow-2xl"
        >
          {/* Header Row */}
          <div className="flex items-center justify-between pb-8 border-b border-white/20 mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">
              Reach Me
            </span>
            {socialLinks.instagram ? (
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#ff2a2a] text-xs font-bold uppercase tracking-wider transition-all duration-300"
              >
                DM on Instagram ↗
              </a>
            ) : null}
          </div>

          {/* Contact Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Left Column: Underline-only inputs */}
              <div className="flex flex-col gap-8">
                <div>
                  <input
                    id="firstName"
                    name="first_name"
                    type="text"
                    required
                    placeholder="First Name *"
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg text-white placeholder-white/80 focus:border-white focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    id="lastName"
                    name="last_name"
                    type="text"
                    placeholder="Last Name"
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg text-white placeholder-white/80 focus:border-white focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    id="email"
                    name="user_email"
                    type="email"
                    required
                    placeholder="Email Address *"
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg text-white placeholder-white/80 focus:border-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Right Column: Message Textarea */}
              <div className="flex flex-col">
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Your Message *"
                  className="w-full h-full min-h-[140px] bg-transparent border-b border-white/40 pb-3 text-lg text-white placeholder-white/80 focus:border-white focus:outline-none resize-none transition-colors"
                />
              </div>
            </div>

            {/* Bottom Row: Checkbox, Note, Urgent Email, and Submit Button */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pt-4 border-t border-white/20">
              <div className="flex flex-col gap-3 text-xs text-white/80 max-w-xl">
                <label className="flex items-start gap-2.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    required
                    className="mt-0.5 rounded accent-black cursor-pointer"
                  />
                  <span>
                    I agree to allow my provided contact details to be used to reply to this message.
                  </span>
                </label>
                <p className="text-white/70">
                  Your message will be sent directly to my inbox. I typically respond within 24-48
                  hours.
                </p>
                <p className="text-white/80">
                  Need a quick answer?{' '}
                  <a
                    href={`mailto:${personalInfo.emails.primary}?subject=Urgent Inquiry`}
                    className="underline text-white font-semibold hover:text-black transition-colors"
                  >
                    Send an urgent direct email
                  </a>
                </p>
              </div>

              {/* Action Submit Button with Dynamic Status States */}
              <div className="shrink-0">
                {status === 'sending' && (
                  <button
                    type="button"
                    disabled
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/20 border border-white/30 text-white font-bold cursor-wait select-none"
                  >
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    <span>Sending...</span>
                  </button>
                )}
                {status === 'success' && (
                  <button
                    type="button"
                    disabled
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-emerald-600 border border-emerald-400 text-white font-bold select-none shadow-lg"
                  >
                    <span>Sent Successfully ✓</span>
                  </button>
                )}
                {status === 'error' && (
                  <button
                    type="button"
                    disabled
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-red-900 border border-red-700 text-white font-bold select-none shadow-lg"
                  >
                    <span>Failed — Try Again</span>
                  </button>
                )}
                {status === 'idle' && (
                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white bg-transparent text-white font-bold hover:bg-white hover:text-[#ff2a2a] transition-all duration-300 group cursor-pointer"
                  >
                    <span>Send Message</span>
                    <span className="group-hover:translate-x-1.5 transition-transform duration-300">
                      →
                    </span>
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
