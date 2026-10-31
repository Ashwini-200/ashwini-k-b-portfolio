import { internshipsList } from '../data/portfolioData'

function InternshipCard({ intern, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 150}
      className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Top Row: Duration & Mini Badge */}
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-white/50 text-xs uppercase tracking-wider">
            {intern.duration}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[10px] uppercase font-bold tracking-wider">
            Internship
          </span>
        </div>

        {/* Role & Organization */}
        <h3 className="text-2xl font-black text-white mt-4 tracking-tight leading-tight">
          {intern.role}
        </h3>
        <p className="text-sm uppercase font-bold text-red-200 tracking-wider mt-1 mb-6">
          {intern.organization}
        </p>

        {/* Skills Gained Bulleted List */}
        <div className="mb-6">
          <p className="text-xs uppercase font-mono text-white/70 font-semibold mb-3 tracking-wider">
            Skills Gained:
          </p>
          <ul className="space-y-2">
            {intern.skills?.map((skill, sIdx) => (
              <li key={sIdx} className="text-sm text-white/90 flex items-start gap-2">
                <span className="text-white/40 mt-1">▪</span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom: Technologies Row */}
      <div className="border-t border-white/10 pt-4 mt-auto">
        <p className="text-[11px] uppercase font-mono text-white/60 font-semibold mb-2 tracking-wider">
          Technologies:
        </p>
        <div className="flex flex-wrap gap-2">
          {intern.tech?.map((techItem, tIdx) => (
            <span
              key={tIdx}
              className="px-3 py-1 rounded-full bg-black/30 border border-white/10 text-white/90 text-xs font-mono font-medium"
            >
              {techItem}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Internships() {
  return (
    <section className="bg-[#ff2a2a] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden">
      {/* Torn Paper SVG Divider at Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none -translate-y-[1px] rotate-180 z-10">
        <svg
          className="relative block w-full h-12 md:h-20 fill-[#0a0a0a]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,0 L25,30 L50,10 L75,35 L100,15 L130,40 L160,10 L190,30 L220,15 L250,40 L280,10 L310,35 L340,20 L370,45 L400,15 L430,35 L460,10 L490,40 L520,20 L550,45 L580,15 L610,35 L640,10 L670,40 L700,20 L730,45 L760,15 L790,35 L820,10 L850,40 L880,20 L910,45 L940,15 L970,35 L1000,10 L1030,40 L1060,20 L1090,45 L1120,15 L1150,35 L1180,10 L1200,30 L1200,120 L0,120 Z" />
        </svg>
      </div>

      {/* Decorative Pulsing Black Star Bottom-Left */}
      <div className="absolute bottom-6 left-6 text-black/20 pointer-events-none animate-pulse">
        <svg className="w-16 h-16 md:w-24 md:h-24 fill-current" viewBox="0 0 24 24">
          <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Centered Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black uppercase tracking-tight">
            Work Experience
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-base md:text-lg text-red-100 font-medium">
            Hands-on internships and practical industry exposure building and validating software
            solutions.
          </p>
        </div>

        {/* Internships Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {internshipsList?.map((intern, index) => (
            <InternshipCard
              key={`${intern.organization}-${index}`}
              intern={intern}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

