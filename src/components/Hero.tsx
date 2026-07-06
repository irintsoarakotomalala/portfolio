import { motion } from "framer-motion";
import { Github, Linkedin, ChevronDown, Mail } from "lucide-react";
import sarikoImg from "../assets/sariko.png";
import SplitText from "./bits/SplitText";
import ParticleField from "./bits/ParticleField";
import MagneticButton from "./bits/MagneticButton";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0f]">
      {/* Particles */}
      <ParticleField />

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
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex self-center lg:self-start items-center px-4 py-1 border border-[#C77DFF]/50 rounded text-[#C77DFF] text-xs font-mono tracking-widest uppercase mb-6"
          >
            <motion.span
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1.5 h-1.5 rounded-full bg-[#C77DFF] mr-2"
            />
            Portfolio
          </motion.div>

          {/* Big title — SplitText */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-none mb-1 tracking-tight overflow-hidden">
            <SplitText text="PORT" className="text-white" delay={0.3} stagger={0.06} />
            <SplitText text="FOLIO" className="text-[#C77DFF]" delay={0.55} stagger={0.06} />
          </h1>

          {/* Script name */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.7, ease: "easeOut" }}
            className="text-4xl sm:text-5xl text-[#C77DFF]/80 mb-6"
            style={{ fontFamily: "'Dancing Script', 'Pacifico', cursive", fontWeight: 400 }}
          >
            Irintsoa
          </motion.div>

          {/* Role — typewriter feel */}
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.25em" }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="font-mono text-sm tracking-[0.25em] text-white/60 mb-8"
          >
            {'{ DÉVELOPPEUR FULL-STACK }'}
          </motion.p>

          {/* Divider animé */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="h-px bg-white/20 mb-8 mx-auto lg:mx-0"
          />

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
          >
            <MagneticButton>
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-2.5 bg-[#C77DFF] hover:bg-[#b56ef0] text-white font-semibold text-sm rounded-full transition-colors"
              >
                Découvrir mes projets →
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-2.5 border border-white/20 text-white/70 font-semibold text-sm rounded-full hover:bg-white/5 hover:text-white transition-all"
              >
                Me contacter <Mail size={14} />
              </a>
            </MagneticButton>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="flex gap-3 justify-center lg:justify-start"
          >
            {[
              { icon: Github, href: "https://github.com/irintsoarakotomalala", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/irintsoa-rakotomalala", label: "LinkedIn" },
            ].map(({ icon: Icon, href, label }, i) => (
              <MagneticButton key={label}>
                <motion.a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.6 + i * 0.1, type: "spring", stiffness: 300 }}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-all"
                >
                  <Icon size={18} />
                </motion.a>
              </MagneticButton>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT — Photo */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 flex justify-center lg:justify-end items-end relative h-[60vw] max-h-[55vh] lg:max-h-none lg:h-screen w-full"
        >
          {/* Floating code icons */}
          {[
            { content: "</>" , color: "#C77DFF", top: "15%", left: "10%", dur: 4 },
            { content: ">_",   color: "#5EEAC4", bottom: "20%", right: "5%", dur: 5 },
            { content: "{}",   color: "#C77DFF", bottom: "35%", left: "5%", dur: 6 },
          ].map((icon, i) => (
            <motion.div
              key={i}
              animate={{ y: [i % 2 === 0 ? -8 : 8, i % 2 === 0 ? 8 : -8, i % 2 === 0 ? -8 : 8], rotate: [-3, 3, -3] }}
              transition={{ repeat: Infinity, duration: icon.dur, ease: "easeInOut" }}
              className="absolute w-14 h-14 rounded-2xl bg-[#1a1a2e] border border-white/10 flex items-center justify-center text-xl font-mono shadow-lg"
              style={{ color: icon.color, top: icon.top, left: icon.left, bottom: (icon as any).bottom, right: (icon as any).right }}
            >
              {icon.content}
            </motion.div>
          ))}

          {/* Photo */}
          <motion.img
            src={sarikoImg}
            alt="Irintsoa"
            className="relative z-10 h-full max-h-[95vh] w-auto object-contain object-bottom"
            style={{ filter: "drop-shadow(0 0 60px rgba(139,92,246,0.4))" }}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
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
