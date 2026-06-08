import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmit = async (event) => {
  event.preventDefault();
  setLoading(true);
{/*import.meta.env.VITE_WEB3FORMS_ACCESS_KEY*/}
  try {
    const formData = new FormData(event.target);

formData.append(
  "access_key",
  
  "5684da97-be51-4c17-aabd-992030ce36ad"
);

    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    if (data.success) {
      setSuccess(true);
      event.target.reset();

      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } else {
      alert(data.message || "Failed to send message.");
    }
  } catch (error) {
    alert("Network error. Please try again.");
    console.error(error);
  } finally {
    setLoading(false);
  }
};
/* * Portfolio Website * Developed by Vijayendra Bylupati * © 2026 All Rights Reserved */
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto glass rounded-[40px]     backdrop-blur-md
    !border-1 !border-slate-200
    dark:!border-0 !border-slate-0 p-12 text-center dark:text-white hover:!border-cyan-500/60">
        
        {/* Your Original Headers */}
        <h2 className="text-5xl font-black mb-6 text-black dark:text-white">
          Let’s Build Something Amazing
        </h2>

        <p className="text-2xl font-black mb-6 text-black dark:text-white">
          {/*Ready to collaborate on futuristic projects.*/}
          Have an idea, project, or opportunity? Let's turn it into reality.
        </p>

        {/* Clean Contact Form Container */}
        <form onSubmit={onSubmit} className="max-w-md mx-auto space-y-4 mb-8 text-left">
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
            <input
    type="hidden"
    name="subject"
    value="New Portfolio Contact Message"
  />

  <input
    type="hidden"
    name="from_name"
    value="Vijay Portfolio"
  />
          <div>
            <input 
              type="text" 
              name="name" 
              required 
className="
w-full
bg-black/5
dark:bg-white/5
border
border-black/10
dark:border-white/10
rounded-2xl
px-4
py-3
text-black
dark:text-white
placeholder-gray-500
focus:outline-none
focus:border-cyan-500
transition
"              placeholder="Your Name"
            />
          </div>

          <div>
            <input 
              type="email" 
              name="email" 
              required 
              className="
w-full
bg-black/5
dark:bg-white/5
border
border-black/10
dark:border-white/10
rounded-2xl
px-4
py-3
text-black
dark:text-white
placeholder-gray-500
focus:outline-none
focus:border-cyan-500
transition
"
              placeholder="Your Email"
            />
          </div>

          <div>
            <textarea 
              name="message" 
              rows="4" 
              required 
              className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition text-black dark:text-white resize-none placeholder-gray-500"
              placeholder="Your Message..."
            />
          </div>

          {/*Submit Button */}
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-cyan-400  dark:bg-cyan-500/50 dark:text-white px-8 py-4 rounded-2xl font-bold dark:hover:bg-gradient-to-l from-cyan-500 to-white-400 hover:scale-105 transition text-slate-900 disabled:opacity-50"
          >
            {loading ? 'Sending...' : 'Contact Me'}
          </button>

          {success && (
            <p className="text-green-400 dark:text-cyan-400 text-sm text-center font-medium mt-2">
              ✓ Message sent straight to my inbox!
            </p>
          )}
        </form>

        {/* Integrated Find Me Platform Links */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          <a href="https://github.com/B-Vijayendra" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition

    text-2xl
    text-gray-500
    hover:text-cyan-400
    hover:scale-125
    transition-all
    duration-300
    ">
  
    <FaGithub />
   
          </a>
          <a href="https://www.linkedin.com/in/vijayendra-bylupati-1383312bb" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition 
    text-2xl
    text-gray-500
    hover:text-cyan-400
    hover:scale-125
    transition-all
    duration-300
    ">
  
    <FaLinkedin />
 

          </a>
          <a href="mailto:coder369369@gmail.com" className="hover:text-cyan-400 transition     text-2xl
    text-gray-500
    hover:text-cyan-400
    hover:scale-125
    transition-all
    duration-300">
            <FaEnvelope/>
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;
