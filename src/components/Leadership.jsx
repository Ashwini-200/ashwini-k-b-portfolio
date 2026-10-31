import { leadershipList } from '../data/portfolioData'

function LeadershipItem({ item, index }) {
  const isEven = index % 2 === 0

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between w-full pl-10 md:pl-0">
      {/* Central Glowing Red Dot */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-[#ff2a2a] shadow-[0_0_12px_rgba(255,42,42,0.9)] border-2 border-[#0a0a0a] z-10" />

      {/* Left Column (Card for even, spacer for odd) */}
      {isEven ? (
        <div data-aos="fade-right" className="w-full md:w-[45%] md:text-right">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-red-500/30 transition-all duration-300 shadow-lg">
            <span className="inline-block px-3 py-1 rounded-full bg-red-500/10 text-[#ff2a2a] text-xs font-bold uppercase tracking-wider mb-2 border border-red-500/20">
              {item.badge}
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-white transition-colors duration-300 hover:text-[#ff2a2a]">
              {item.title}
            </h3>
            <p className="text-xs font-mono uppercase text-red-400 font-semibold tracking-wider mt-1 mb-3">
              {item.role}
            </p>
            <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
          </div>
        </div>
      ) : (
        <div className="hidden md:block md:w-[45%]" />
      )}

      {/* Right Column (Spacer for even, Card for odd) */}
      {!isEven ? (
        <div data-aos="fade-left" className="w-full md:w-[45%] md:text-left">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-red-500/30 transition-all duration-300 shadow-lg">
            <span className="inline-block px-3 py-1 rounded-full bg-red-500/10 text-[#ff2a2a] text-xs font-bold uppercase tracking-wider mb-2 border border-red-500/20">
              {item.badge}
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-white transition-colors duration-300 hover:text-[#ff2a2a]">
              {item.title}
            </h3>
            <p className="text-xs font-mono uppercase text-red-400 font-semibold tracking-wider mt-1 mb-3">
              {item.role}
            </p>
            <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
          </div>
        </div>
      ) : (
        <div className="hidden md:block md:w-[45%]" />
      )}
    </div>
  )
}

export default function Leadership() {
  return (
    <section className="bg-[#0a0a0a] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]">
      {/* Torn-paper divider at top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none -translate-y-[1px] rotate-180 z-10">
        <svg
          className="relative block w-full h-12 md:h-20 fill-[#ff2a2a]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,0 L25,30 L50,10 L75,35 L100,15 L130,40 L160,10 L190,30 L220,15 L250,40 L280,10 L310,35 L340,20 L370,45 L400,15 L430,35 L460,10 L490,40 L520,20 L550,45 L580,15 L610,35 L640,10 L670,40 L700,20 L730,45 L760,15 L790,35 L820,10 L850,40 L880,20 L910,45 L940,15 L970,35 L1000,10 L1030,40 L1060,20 L1090,45 L1120,15 L1150,35 L1180,10 L1200,30 L1200,120 L0,120 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Centered Header */}
        <div className="text-center mb-20" data-aos="fade-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-[#ff2a2a] text-xs font-bold uppercase tracking-wider mb-4">
            Activities
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
            Leadership & Engagement
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-base md:text-lg text-white/50">
            Extracurricular achievements, community leadership, and research publications.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Gradient Line: left-4 on mobile, centre on md+ */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#ff2a2a] via-red-500/50 to-white/10" />

          {/* Timeline Items */}
          <div className="relative max-w-5xl mx-auto space-y-12 md:space-y-16">
            {leadershipList?.map((item, index) => (
              <LeadershipItem
                key={`${item.title}-${index}`}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

