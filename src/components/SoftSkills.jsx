import { softSkillsList } from '../data/portfolioData'

function SoftSkillCard({ skill, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="bg-[#f8f8f8] border border-gray-200 rounded-3xl p-6 min-h-[220px] text-center flex flex-col items-center justify-between group hover:scale-[1.03] hover:shadow-[0_15px_35px_rgba(255,42,42,0.12)] hover:border-red-200 transition-all duration-300"
    >
      <div className="flex flex-col items-center">
        {/* Emoji icon in a rounded square that tints red and scales on group-hover */}
        <div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-2xl group-hover:bg-red-50 group-hover:border-red-200 group-hover:scale-110 transition-all duration-300 mb-4 shadow-xs">
          <span>{skill.icon}</span>
        </div>

        {/* Uppercase Skill Name */}
        <h3 className="text-base font-black uppercase text-gray-900 tracking-wider mb-2 group-hover:text-[#ff2a2a] transition-colors">
          {skill.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed">{skill.desc}</p>
      </div>
    </div>
  )
}

export default function SoftSkills() {
  return (
    <section className="bg-white pt-24 pb-32 px-6 md:px-12 relative overflow-hidden bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:60px_60px]">
      {/* Torn-paper divider at top connecting from previous dark section */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none -translate-y-[1px] rotate-180 z-10">
        <svg
          className="relative block w-full h-12 md:h-20 fill-[#0a0a0a]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,0 L25,30 L50,10 L75,35 L100,15 L130,40 L160,10 L190,30 L220,15 L250,40 L280,10 L310,35 L340,20 L370,45 L400,15 L430,35 L460,10 L490,40 L520,20 L550,45 L580,15 L610,35 L640,10 L670,40 L700,20 L730,45 L760,15 L790,35 L820,10 L850,40 L880,20 L910,45 L940,15 L970,35 L1000,10 L1030,40 L1060,20 L1090,45 L1120,15 L1150,35 L1180,10 L1200,30 L1200,120 L0,120 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Centered Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-50 text-[#ff2a2a] text-xs font-bold uppercase tracking-wider mb-4 border border-red-100">
            Core Competencies
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 uppercase tracking-tight">
            Professional Soft Skills
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-base md:text-lg text-gray-500">
            Key interpersonal strengths and professional attributes that complement my technical
            capabilities.
          </p>
        </div>

        {/* Soft Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {softSkillsList?.map((skill, index) => (
            <SoftSkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

