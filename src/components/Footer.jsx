const Footer = () => {
  return (
    <footer
      className="
      relative
      mt-20
      border-t
      border-black/10
      dark:border-white/10
      py-8
      overflow-hidden
      "
    >
      <div
        className="
        absolute
        inset-0
        bg-gradient-to-r
        from-transparent
        via-cyan-500/5
        to-transparent
        "
      />
                                                                                                                  {/* * Portfolio Website * Developed by Vijayendra Bylupati * © 2026 All Rights Reserved */}
      <div className="relative z-10 text-center">
        <p className="text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Vijayendra Bylupati. All rights reserved.
        </p>

        <p className="mt-2 text-sm text-gray-500">
          Full Stack Developer • React • Node.js • Cybersecurity
        </p>

        <p className="mt-2 text-xs text-gray-500">
          Designed & Developed by Vijayendra Bylupati
        </p>
      </div>
    </footer>
  );
};

export default Footer;