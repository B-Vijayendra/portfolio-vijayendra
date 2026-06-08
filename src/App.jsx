import Loader from './components/Loading.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Services from './components/Services.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'


const App = () => {
  return (
    <Loader >
    <div
      className="
      min-h-screen
      overflow-hidden
      relative
      bg-white
      text-black
      dark:bg-[#050505]
      dark:text-white
      transition-all
      duration-500
      "
    >

      {/* Top Glow */}
      <div
        className="
        absolute
        top-0
        left-0
        w-96
        h-96
        bg-cyan-500/10
        dark:bg-cyan-500/20
        blur-3xl
        rounded-full
        "
      ></div>

      {/* Bottom Glow */}
      <div
        className="
        absolute
        bottom-0
        right-0
        w-96
        h-96
        bg-purple-500/10
        dark:bg-purple-500/20
        blur-3xl
        rounded-full
        "
      ></div>

      {/* Floating Glow */}
      <div
        className="
        fixed
        w-96
        h-96
        bg-cyan-500/10
        dark:bg-cyan-500/20
        blur-3xl
        rounded-full
        pointer-events-none
        "
      ></div>

      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Services/>
      <Contact />
      <Footer />

    </div>
    </Loader>
  )
}/* * Portfolio Website * Developed by Vijayendra Bylupati * © 2026 All Rights Reserved */

export default App