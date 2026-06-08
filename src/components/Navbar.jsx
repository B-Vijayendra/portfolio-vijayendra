import { useEffect, useState } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
const [darkMode, setDarkMode] = useState(() => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    return savedTheme === "dark";
  }

  return true; // Default dark mode
});

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const navLinks = ["home", "skills", "projects", "contact"];

  return (
    <nav className="fixed top-0 w-full z-50 glass px-8 py-3 flex justify-between items-center">
      
<div
  className="
    w-[56px]
    h-[56px]
    flex
    items-center
    justify-center
    transition-all
    duration-500
    hover:scale-125
    
  "
>
  {/* * Portfolio Website * Developed by Vijayendra Bylupati * © 2026 All Rights Reserved */}
  <svg
    viewBox="0 0 24 24"
    className="
      w-10
      h-10
      fill-cyan-400
      transition-all
      duration-500
    "
  >
    <path d="M12 2.5L14.94 8.46L21.5 9.41L16.75 14.04L17.87 20.57L12 17.48L6.13 20.57L7.25 14.04L2.5 9.41L9.06 8.46L12 2.5Z" />
  </svg>
</div>

      {/* NAV LINKS */}
      <div className="hidden md:flex gap-10">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link}`}
            className={`relative text-lg font-semibold capitalize transition-all duration-300 ${
              activeSection === link
                ? "text-cyan-400"
                : "text-black dark:text-white hover:text-cyan-300"
            }`}
          >
            {link}
            <span
              className={`absolute left-0 -bottom-2 h-[3px] rounded-full bg-cyan-400 dark:shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-all duration-500 ${
                activeSection === link ? "w-full" : "w-0"
              }`}
            ></span>
          </a>
        ))}
      </div>

      {/* THEME TOGGLE BUTTON */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 hover:scale-110 dark:shadow-[0_0_20px_rgba(0,0,0,0.6)] shadow-none"
      >
        {darkMode ? (
          <svg 
            xmlns="http://w3.org" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2} 
            stroke="currentColor" 
            className="w-7 h-7 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] fill-cyan-400"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V23M4.22 4.22l1.59 1.59m12.38 12.38l1.59 1.59M3 12h2.25m13.5 0H23M4.22 19.78l1.59-1.59M18.36 5.64l1.59-1.59M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
          </svg>
        ) : (
          <svg 
            xmlns="http://w3.org" 
            fill="cyan" 
            viewBox="0 0 24 24" 
            strokeWidth={2} 
            stroke="currentColor" 
            className="w-7 h-7 text-cyan-400 fill-cyan-400"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          </svg>
        )}
      </button>

    </nav>
  );
};

export default Navbar;
