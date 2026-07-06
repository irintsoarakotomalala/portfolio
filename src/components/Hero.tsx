import { motion } from "framer-motion";
import { Github, Linkedin, ChevronDown, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0f]">
      {/* Radial glow behind photo */}
      <div className="absolute right-0 top-0 w-2/3 h-full pointer-events-none">
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 60% 70% at 70% 50%, rgba(139,92,246,0.25) 0%, transparent 70%)"
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 w-full flex flex-col-reverse lg:flex-row items-center min-h-screen">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 flex flex-col justify-center pb-16 pt-6 lg:py-0 text-center lg:text-left"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex self-center lg:self-start items-center px-4 py-1 border border-[#C77DFF]/50 rounded text-[#C77DFF] text-xs font-mono tracking-widest uppercase mb-6"
          >
            Portfolio
          </motion.div>

          {/* Big title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl sm:text-7xl lg:text-8xl font-black leading-none mb-1 tracking-tight"
          >
            <span className="text-white">PORT</span><span className="text-[#C77DFF]">FOLIO</span>
          </motion.h1>

          {/* Script name */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl sm:text-5xl text-[#C77DFF]/80 mb-6"
            style={{ fontFamily: "'Dancing Script', 'Pacifico', cursive", fontWeight: 400 }}
          >
            Irintsoa
          </motion.div>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-mono text-sm tracking-[0.25em] text-white/60 mb-8"
          >
            {'{ DÉVELOPPEUR FULL-STACK }'}
          </motion.p>

          {/* Divider */}
          <div className="w-12 h-px bg-white/20 mb-8 mx-auto lg:mx-0" />

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
          >
            <a
              href="#projects"
              className="flex items-center gap-2 px-6 py-2.5 bg-[#C77DFF] hover:bg-[#b56ef0] text-white font-semibold text-sm rounded-full transition-all hover:scale-105"
            >
              Découvrir mes projets →
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-2.5 border border-white/20 text-white/70 font-semibold text-sm rounded-full hover:bg-white/5 hover:text-white transition-all"
            >
              Me contacter <Mail size={14} />
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex gap-3 justify-center lg:justify-start"
          >
            {[
              { icon: Github, href: "https://github.com/irintsoarakotomalala", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/irintsoa-rakotomalala", label: "LinkedIn" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-all hover:scale-110"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT — Photo */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 flex justify-center lg:justify-end items-end relative h-[60vw] max-h-[55vh] lg:max-h-none lg:h-screen w-full"
        >
          {/* Floating code icons */}
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-[15%] left-[10%] w-14 h-14 rounded-2xl bg-[#1a1a2e] border border-white/10 flex items-center justify-center text-[#C77DFF] text-xl font-mono shadow-lg"
          >
            &lt;/&gt;
          </motion.div>
          <motion.div
            animate={{ y: [8, -8, 8] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute bottom-[20%] right-[5%] w-14 h-14 rounded-2xl bg-[#1a1a2e] border border-white/10 flex items-center justify-center text-[#5EEAC4] text-xl font-mono shadow-lg"
          >
            &gt;_
          </motion.div>
          <motion.div
            animate={{ y: [-5, 10, -5] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute bottom-[35%] left-[5%] w-14 h-14 rounded-2xl bg-[#1a1a2e] border border-white/10 flex items-center justify-center text-[#C77DFF] text-xl font-mono shadow-lg"
          >
            {'{}'}
          </motion.div>

          {/* Photo */}
          <img
            src="/sariko.png"
            alt="Irintsoa"
            className="relative z-10 h-full max-h-[95vh] w-auto object-contain object-bottom drop-shadow-2xl"
            style={{ filter: "drop-shadow(0 0 60px rgba(139,92,246,0.4))" }}
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30 hover:text-white/60 transition-colors"
      >
        <span className="text-xs font-mono">Scroll</span>
        <ChevronDown size={18} />
      </motion.a>
    </section>
  );
};

export default Hero;
