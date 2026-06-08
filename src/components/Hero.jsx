import { motion } from "framer-motion";
import profile from "../assets/MyPhoto.jpeg";
import { TypeAnimation } from 'react-type-animation';
import resume from "../data/Bylupati_Vijayendra_WebDeveloper_Resume.pdf";

const Hero = () => {
  return (
<section
  id="home"
  className="min-h-screen flex items-center justify-center px-6 pt-28 md:pt-16"
>
  <h1 className="sr-only">
  Vijayendra Bylupati - Full Stack Developer
</h1>
                                                                                                                                                              {/* * Portfolio Website * Developed by Vijayendra Bylupati * © 2026 All Rights Reserved */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <TypeAnimation
            sequence={[
              'FULL STACK DEVELOPER',
              2000,
              'REACT DEVELOPER',
              2000,
              'UI/UX DESIGNER',
              2000,
              'CYBERSECURITY ENTHUSIAST',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-cyan-400 text-xl font-semibold"
          />

          <h1 className="text-6xl font-black leading-tight mb-6 text-black dark:text-white">
            Building Modern
            <span className="text-cyan-400"> Websites</span>
          </h1>

          <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            I build futuristic full stack web applications with modern UI and smooth user experiences.
          </p>

          <div className="flex gap-4">
            {/* GitHub Link Button */}
            <a 
              href="https://github.com/B-Vijayendra" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-cyan-500 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition inline-block text-center"
            >
              Explore Work
            </a>

            {/* Resume Download Button */}
            <a 
              href={resume} 
              download="Vijayendra_Bylupati_Resume.pdf"
              className="glass px-8 py-4 rounded-2xl border-3 !border-slate-200/80 dark:border-0 font-bold hover:scale-105 transition inline-block text-center text-black dark:text-white"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Card Component Wrapper */}
<div className="
  relative
  group
  glass 
  rounded-[32px] 
  p-10 
  text-center 
  transition-all 
  duration-300
  hover:scale-[1.01]

  /* LIGHT MODE (Clean, Pure, Solid Glass) */
  bg-white/80
  backdrop-blur-md
  !border-0
  shadow-[0_4px_20px_rgba(0,0,0,0.03)]
  hover:bg-white/95
  hover:shadow-[0_8px_30px_rgba(34,211,238,0.1)]

  /* DARK MODE (Deep Slate Glass) */
  dark:bg-slate-900/50
  dark:!border dark:!border-cyan-400/20
  dark:hover:!border-cyan-400
  dark:hover:bg-black
">

  {/* ================= LIGHT MODE TOP TRAIN ANIMATION ================ */}
  {/* Top horizontal Line */}
  <div className="
    absolute top-0 h-[2px] bg-cyan-400 pointer-events-none dark:hidden
    transition-all duration-500 ease-in-out
    left-0 w-[20%] rounded-tl-[32px]
    group-hover:left-[80%] group-hover:rounded-tl-none group-hover:rounded-tr-[32px]
  " />
  
  {/* Left Vertical Line */}
  <div className="
    absolute top-0 left-0 w-[2px] bg-cyan-400 rounded-tl-[32px] pointer-events-none dark:hidden
    transition-all duration-300 ease-in-out h-[25%] opacity-100
    
    /* When unhovering, wait 200ms for the horizontal train to return before growing */
    delay-200 group-hover:delay-0
    
    /* When hovering, snap shut instantly */
    group-hover:h-0 group-hover:opacity-0
  " />

  {/* New Right Vertical Line */}
  <div className="
    absolute top-0 right-0 w-[2px] bg-cyan-400 rounded-tr-[32px] pointer-events-none dark:hidden
    transition-all duration-300 ease-in-out h-0 opacity-0
    
    /* When unhovering, snap shut instantly */
    delay-0 group-hover:delay-200
    
    /* When hovering, wait 200ms for the horizontal train to arrive before growing */
    group-hover:h-[25%] group-hover:opacity-100
  " />


  {/* ================= LIGHT MODE BOTTOM TRAIN ANIMATION ================= */}
  {/* Bottom Horizontal Line */}
  <div className="
    absolute bottom-0 h-[2px] bg-cyan-400 pointer-events-none dark:hidden
    transition-all duration-500 ease-in-out
    right-0 w-[20%] rounded-br-[32px]
    group-hover:right-[80%] group-hover:rounded-br-none group-hover:rounded-bl-[32px]
  " />

  {/* Right Vertical line */}
  <div className="
    absolute bottom-0 right-0 w-[2px] bg-cyan-400 rounded-br-[32px] pointer-events-none dark:hidden
    transition-all duration-300 ease-in-out h-[25%] opacity-100
    
    /* When unhovering, wait 200ms for the horizontal train to return before growing */
    delay-200 group-hover:delay-0
    
    /* When hovering, snap shut instantly */
    group-hover:h-0 group-hover:opacity-0
  " />

  {/* New Left Vertical Line */}
  <div className="
    absolute bottom-0 left-0 w-[2px] bg-cyan-400 rounded-bl-[32px] pointer-events-none dark:hidden
    transition-all duration-300 ease-in-out h-0 opacity-0
    
    /* When unhovering, snap shut instantly */
    delay-0 group-hover:delay-200
    
    /* When hovering, wait 200ms for the horizontal train to arrive before growing */
    group-hover:h-[25%] group-hover:opacity-100
  " />

  {/* ================ CONTENT CONTAINER ================= */}
      <div className="relative flex justify-center items-center">

<img
  src={profile}
  alt="profile"
  className="
    w-[280px]
    h-[280px]
    object-cover
    rounded-full
    border-4 border-black/50

    transition-all duration-300 ease-out
    will-change-transform

    dark:shadow-[0_0_25px_rgba(34,211,238,0.25)]
    shadow-[0_4px_20px_rgba(0,0,0,0.15)]

    group-hover:scale-105
    group-hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]
  "
/>
      
      </div>
    {  /*
 * Portfolio Website
 * Developed by Vijayendra Bylupati
 * © 2026 All Rights Reserved
 */}

<h2 className="
  text-3xl font-bold mb-2 mt-6
  text-slate-900 dark:text-white
  tracking-tight

  transition-all duration-500 ease-out
  transform will-change-transform

  dark:group-hover:text-cyan-400
  group-hover:translate-y-[-2px]
">
  
  Vijayendra Bylupati
</h2>

<p className="
  text-slate-500 dark:text-slate-400
  text-sm font-medium tracking-wide

  transition-all duration-300 ease-out
  transform will-change-transform
  dark:group-hover:text-slate-300
  group-hover:tracking-wider
">
  Creative Full Stack Developer
</p>
</div>




      </div>
    </section>
  )
}

export default Hero;
