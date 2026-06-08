import { useEffect, useState } from "react";

export default function Loader({ children }) {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
setIsDark(theme !== "light");
    let minDone = false;
    let pageLoaded = document.readyState === "complete";

   {/* Portfolio Website * Developed by Vijayendra Bylupati * © 2026 All Rights Reserved */}
   
  
    const minTimer = setTimeout(() => {
      minDone = true;

      if (pageLoaded) {
        setFade(true);
        setTimeout(() => setLoading(false), 700);
      }
    }, 1300);


    {/*/ 2. Real window load*/}
    
    const handleLoad = () => {
      pageLoaded = true;

      if (minDone) {
        setFade(true);
        setTimeout(() => setLoading(false), 700);
      }
    };

    window.addEventListener("load", handleLoad);

    return () => {
      clearTimeout(minTimer);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (loading) {
    return (
      <div
  className={`fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-700 ${
    fade ? "opacity-0" : "opacity-100"
  } ${
    isDark
      ? "bg-zinc-950"
      : "bg-gradient-to-br from-slate-50 to-cyan-50"
  }`}
>
        {/* Trail */}
        <div className="shooting-trail" />

        {/* Star */}
        <svg
  viewBox="0 0 24 24"
  className={`shooting-star ${
    isDark ? "fill-cyan-400" : "fill-cyan-600"
  }`}
>
          <path d="M12 2.5L14.94 8.46L21.5 9.41L16.75 14.04L17.87 20.57L12 17.48L6.13 20.57L7.25 14.04L2.5 9.41L9.06 8.46L12 2.5Z" />
        </svg>
      </div>
    );
  }

  return children;
}