import { skills } from '../data/data'

const Skills = () => {

  return (

    <section id="skills" className="py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-black text-center mb-16 text-black dark:text-white">
          My Skills
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

{skills.map((skill, index) => (
  <div
    key={index}
    className="
    glass
    rounded-3xl
    p-8
    relative
    animate-[float_4s_ease-in-out_infinite]
    overflow-hidden
    group
    cursor-pointer
    transition-all
    duration-500
    hover:-translate-y-3

    /* LIGHT MODE: Premium Thick Border Glass with Strong Ambient Shadow */
    /*bg-white/85*/
    /*bg-gradient-to-r
    from-cyan-400
    to-purple-500*/
    bg-cyan-400/20
    backdrop-blur-md
    !border-1 !border-slate-300
    shadow-[0_8px_20px_rgba(0,0,0,0.04)]
    hover:bg-white/95
    hover:!border-cyan-400
    hover:shadow-[0_16px_35px_rgba(34,211,238,0.2)]

    /* DARK MODE: Restored and Untouched Layout Setting */
    dark:bg-cyan-500/10
    dark:border-cyan-500/20
    dark:!border-0 !border-slate-0
    dark:hover:bg-black
    dark:hover:border-cyan-400
    dark:hover:shadow-[0_0_40px_rgba(34,211,238,0.5)]
    "
  >

   {/* * Portfolio Website * Developed by Vijayendra Bylupati * © 2026 All Rights Reserved */ }
{/* Moving Shine Effect */}
<div className="
  absolute
  top-0
  left-[-100%]
  w-full
  h-full
  transition-all
  duration-1000
  group-hover:left-[100%]
  pointer-events-none

  /* LIGHT MODE (E-commerce Frosted Glass Shimmer) */
  bg-gradient-to-r
  from-transparent
  via-cyan-400/20
  to-transparent

  /* DARK MODE (Your Original Cyberpunk Cyan Streak) */
  dark:from-transparent
  dark:via-cyan-400/20
  dark:to-transparent
" >
</div>

    {/* Icon Container Layout */}
    <div 
      style={typeof document !== 'undefined' && !document.documentElement.classList.contains('dark') ? { color: 'initial' } : {}}
      className="
      relative
      z-10
      w-20
      h-20
      rounded-3xl
      flex
      items-center
      justify-center
      text-4xl
      mb-6
      group-hover:scale-110
      transition-all
      duration-500

      /* LIGHT MODE: Thicker Border Frame & Icon Drop Shadow */
      /*bg-transparent*/
       bg-cyan-400/20
       bg-gradient-to-b
       from-cyan-400
       to-white-200
      /*!border-2 !border-slate-200/80*/
      group-hover:!border-cyan-400
      drop-shadow-[0_4px_12px_rgba(0,0,0,0.08)]

      /* DARK MODE: Restores your original sharp gradient and neon framing */
      dark:bg-gradient-b
      dark:from-cyan-400
      dark:to-white-500
      /*dark:shadow-[0_0_30px_rgba(34,211,238,0.5)]*/
      dark:border-0
      "
    >
      <skill.icon />
    </div>

    {/* Main Title */}
    <h3 className="
    text-2xl
    font-bold
    mb-4
    relative
    z-10
    text-black-500 dark:text-cyan-400
    ">
      {skill.title}
    </h3>

    {/* Hidden Skills */}
    <div className="
    relative
    z-10
    flex
    flex-wrap
    gap-3
    opacity-0
    max-h-0
    overflow-hidden
    group-hover:opacity-100
    group-hover:max-h-96
    transition-all
    duration-700
    ">
      {skill.items.map((item, i) => (
        <span
          key={i}
          className="
          px-4
          py-2
          rounded-full
          text-sm
          transition-all
          duration-300

          /* LIGHT MODE BADGES */
          bg-slate-50
          border border-slate-200
          text-slate-600
          hover:bg-cyan-400
          hover:border-cyan-400
          hover:text-black

          /* DARK MODE BADGES */
          dark:bg-cyan-400/10
          dark:border-cyan-400/20
          dark:text-cyan-300
          dark:hover:bg-cyan-400
          dark:hover:text-black
          "
        >
          {item}
        </span>
      ))}
    </div>

  </div>
))}

        </div>

      </div>

    </section>
  )
}

export default Skills
