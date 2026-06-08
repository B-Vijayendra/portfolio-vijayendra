import React from "react";
import { freelanceServices } from "../data/data";
import { FaCode, FaLaptopCode, FaMobileAlt } from "react-icons/fa";

const Services = () => {
  const icons = [FaCode, FaLaptopCode, FaMobileAlt];

  return (
    <section id="services" className="py-24 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <h2 className="text-5xl font-black text-center mb-4 text-black dark:text-white">
          Services Offered
        </h2>

        <p className="text-center text-lg text-slate-600 dark:text-cyan-300/80 mb-16 max-w-2xl mx-auto">
          Providing high-performance, robust business solutions designed to solve digital pain points.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8 ">

          {freelanceServices.map((service, index) => {
            const Icon = icons[index];

            return (
              <div
                key={index}
                className="glass rounded-3xl p-8 relative group cursor-pointer transition-all duration-500 hover:-translate-y-3
                bg-cyan-400/10 backdrop-blur-md border border-slate-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]
                dark:bg-cyan-500/5 dark:border-cyan-500/20"
              >

                {/* ICON */}
                <div className="
                  w-16 h-16 rounded-2xl flex items-center justify-center mb-6
                  transition-all duration-500 group-hover:scale-110 
                  bg-gradient-to-b from-cyan-400 to-white-500 text-black-500
                  dark:bg-cyan-500/10 dark:text-white-400
                ">
                  <Icon className="w-8 h-8" />
                </div>

                {/* TITLE */}
                <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-slate-600 dark:text-zinc-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* DELIVERABLES */}
                <div className="border-t border-slate-300/50 dark:border-cyan-500/20 pt-4">
                  <ul className="space-y-2">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-center text-sm text-slate-700 dark:text-zinc-300">
                        <svg
                          className="w-4 h-4 text-cyan-500 mr-2 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            );
          })}
{/* * Portfolio Website * Developed by Vijayendra Bylupati * © 2026 All Rights Reserved */}
        </div>
      </div>
    </section>
  );
};

export default Services;