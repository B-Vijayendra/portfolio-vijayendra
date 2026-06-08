import { projects } from '../data/data';

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-black text-center mb-16 text-black dark:text-white">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                glass
                rounded-[30px]
                p-8
                dark:bg-zinc-900/40
                border border-cyan-500/20
                backdrop-blur-md
                !border-1 !border-slate-200
                dark:!border-0
                hover:border-cyan-400
                hover:bg-white/95
                hover:!border-cyan-400
                dark:hover:border-cyan-400
                hover:-translate-y-3
                hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]
                transition-all
                duration-500
              "
            >
             { /* * Portfolio Website * Developed by Vijayendra Bylupati * © 2026 All Rights Reserved */}
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-b from-cyan-400 to-white-500 flex items-center justify-center text-3xl font-black mb-6">
                0{index + 1}
              </div>

              <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">
                {project.title}
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {project.desc}
              </p>

              <button
                className="
                  px-6
                  py-3
                  rounded-2xl
                  text-black
                  bg-cyan-400
                  dark:bg-zinc-500/10
                  dark:text-white
                  !border-1 !border-slate-200
                  dark:!border-0
                  hover:bg-gradient-to-l from-cyan-500 to-black-500
                  hover:text-black
                  hover:-translate-y-1
                  transition-all
                  duration-500
                "
              >
                View Project
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;