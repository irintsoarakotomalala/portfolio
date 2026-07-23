import { motion } from "framer-motion";
import { Github, Linkedin, ChevronDown, Mail } from "lucide-react";
import sarikoImg from "../assets/sariko.png";
import SplitText from "./bits/SplitText";
import ParticleField from "./bits/ParticleField";
import MagneticButton from "./bits/MagneticButton";

const floatingIcons = [
  { content: "</>", color: "#C77DFF", dur: 4 },
  { content: ">_",  color: "#5EEAC4", dur: 5 },
  { content: "{}",  color: "#C77DFF", dur: 6 },
];

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-[#0a0a0f]">
      <ParticleField />

      {/* Glow */}
      <div className="absolute right-0 top-0 w-2/3 h-full pointer-events-none">
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 60% 70% at 70% 50%, rgba(139,92,246,0.25) 0%, transparent 70%)"
        }} />
      </div>

      {/* ── DESKTOP layout (lg+) ── */}
      <div className="hidden lg:flex relative z-10 max-w-7xl mx-auto px-16 w-full min-h-screen items-center">
        {/* Left text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 flex flex-col justify-center text-left"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex self-start items-center px-4 py-1 border border-[#C77DFF]/50 rounded text-[#C77DFF] text-xs font-mono tracking-widest uppercase mb-6"
          >
            <motion.span animate={{ opacity: [1, 0.4, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="w-1.5 h-1.5 rounded-full bg-[#C77DFF] mr-2" />
            Portfolio
          </motion.div>

          <h1 className="text-8xl font-black leading-none mb-1 tracking-tight overflow-hidden">
            <SplitText text="PORT" className="text-white" delay={0.3} stagger={0.06} />
            <SplitText text="FOLIO" className="text-[#C77DFF]" delay={0.55} stagger={0.06} />
          </h1>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="text-5xl text-[#C77DFF]/80 mb-6"
            style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 400 }}
          >
            Irintsoa
          </motion.div>

          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.25em" }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="font-mono text-sm tracking-[0.25em] text-white/60 mb-8"
          >
            {'{ DÉVELOPPEUR FULL-STACK }'}
          </motion.p>

          <motion.div initial={{ width: 0 }} animate={{ width: 48 }} transition={{ delay: 1.3, duration: 0.6 }} className="h-px bg-white/20 mb-8" />

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4 }} className="flex gap-3 mb-8">
            <MagneticButton>
              <a href="#projects" className="flex items-center gap-2 px-6 py-2.5 bg-[#C77DFF] hover:bg-[#b56ef0] text-white font-semibold text-sm rounded-full transition-colors">
                Découvrir mes projets →
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href="#contact" className="flex items-center gap-2 px-6 py-2.5 border border-white/20 text-white/70 font-semibold text-sm rounded-full hover:bg-white/5 hover:text-white transition-all">
                Me contacter <Mail size={14} />
              </a>
            </MagneticButton>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }} className="flex gap-3">
            {[
              { icon: Github, href: "https://github.com/irintsoarakotomalala", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/irintsoa-rakotomalala", label: "LinkedIn" },
            ].map(({ icon: Icon, href, label }, i) => (
              <MagneticButton key={label}>
                <motion.a
                  href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.6 + i * 0.1, type: "spring", stiffness: 300 }}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-all"
                >
                  <Icon size={18} />
                </motion.a>
              </MagneticButton>
            ))}
          </motion.div>
        </motion.div>

        {/* Right photo — aligned with text block */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 relative flex justify-end items-end self-stretch"
        >
          {[
            { content: "</>", color: "#C77DFF", style: { top: "18%", left: "8%" }, dur: 4 },
            { content: ">_",  color: "#5EEAC4", style: { bottom: "18%", right: "2%" }, dur: 5 },
            { content: "{}",  color: "#C77DFF", style: { bottom: "32%", left: "2%" }, dur: 6 },
          ].map((icon, i) => (
            <motion.div
              key={i}
              animate={{ y: [i % 2 === 0 ? -8 : 8, i % 2 === 0 ? 8 : -8, i % 2 === 0 ? -8 : 8], rotate: [-3, 3, -3] }}
              transition={{ repeat: Infinity, duration: icon.dur, ease: "easeInOut" }}
              className="absolute w-14 h-14 rounded-2xl bg-[#1a1a2e] border border-white/10 flex items-center justify-center text-xl font-mono shadow-lg"
              style={{ color: icon.color, ...icon.style }}
            >
              {icon.content}
            </motion.div>
          ))}
          <motion.img
            src={sarikoImg}
            alt="Irintsoa"
            className="h-full w-auto object-contain object-bottom max-h-[90vh]"
            style={{ filter: "drop-shadow(0 0 60px rgba(139,92,246,0.4))" }}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>
      </div>

      {/* ── MOBILE / TABLET layout (<lg) ── */}
      <div className="lg:hidden relative z-10 flex flex-col min-h-screen">
        {/* Photo — prend l'espace naturellement, pas de hauteur fixe */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative flex justify-center items-end w-full pt-16"
          style={{ height: "65vw", minHeight: 260, maxHeight: 380 }}
        >
          {[
            { content: "</>", color: "#C77DFF", style: { top: "8%", left: "6%" }, dur: 4 },
            { content: "{}",  color: "#C77DFF", style: { bottom: "10%", left: "4%" }, dur: 6 },
            { content: ">_",  color: "#5EEAC4", style: { bottom: "10%", right: "4%" }, dur: 5 },
          ].map((icon, i) => (
            <motion.div
              key={i}
              animate={{ y: [i % 2 === 0 ? -5 : 5, i % 2 === 0 ? 5 : -5, i % 2 === 0 ? -5 : 5] }}
              transition={{ repeat: Infinity, duration: icon.dur, ease: "easeInOut" }}
              className="absolute w-10 h-10 rounded-xl bg-[#1a1a2e] border border-white/10 flex items-center justify-center text-sm font-mono"
              style={{ color: icon.color, ...icon.style }}
            >
              {icon.content}
            </motion.div>
          ))}
          <motion.img
            src={sarikoImg}
            alt="Irintsoa"
            className="h-full w-auto object-contain object-bottom"
            style={{ filter: "drop-shadow(0 0 40px rgba(139,92,246,0.5))" }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col items-center text-center px-6 pb-16 pt-2 flex-1 justify-start"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
            className="inline-flex items-center px-4 py-1 border border-[#C77DFF]/50 rounded text-[#C77DFF] text-xs font-mono tracking-widest uppercase mb-5"
          >
            <motion.span animate={{ opacity: [1, 0.4, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="w-1.5 h-1.5 rounded-full bg-[#C77DFF] mr-2" />
            Portfolio
          </motion.div>

          <h1 className="text-5xl sm:text-6xl font-black leading-none mb-1 tracking-tight overflow-hidden">
            <SplitText text="PORT" className="text-white" delay={0.7} stagger={0.05} />
            <SplitText text="FOLIO" className="text-[#C77DFF]" delay={0.9} stagger={0.05} />
          </h1>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.7 }}
            className="text-3xl sm:text-4xl text-[#C77DFF]/80 mb-4"
            style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 400 }}
          >
            Irintsoa
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="font-mono text-xs tracking-[0.2em] text-white/60 mb-6"
          >
            {'{ DÉVELOPPEUR FULL-STACK }'}
          </motion.p>

          <motion.div initial={{ width: 0 }} animate={{ width: 40 }} transition={{ delay: 1.3, duration: 0.5 }} className="h-px bg-white/20 mb-6" />

          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4 }} className="flex flex-wrap gap-3 justify-center mb-6">
            <a href="#projects" className="flex items-center gap-2 px-5 py-2.5 bg-[#C77DFF] hover:bg-[#b56ef0] text-white font-semibold text-sm rounded-full transition-colors">
              Découvrir mes projets →
            </a>
            <a href="#contact" className="flex items-center gap-2 px-5 py-2.5 border border-white/20 text-white/70 font-semibold text-sm rounded-full hover:bg-white/5 hover:text-white transition-all">
              Me contacter <Mail size={14} />
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }} className="flex gap-3 justify-center">
            {[
              { icon: Github, href: "https://github.com/irintsoarakotomalala", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/irintsoa-rakotomalala", label: "LinkedIn" },
            ].map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-all">
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30 hover:text-white/60 transition-colors z-20"
      >
        <span className="text-xs font-mono">Scroll</span>
        <ChevronDown size={18} />
      </motion.a>
    </section>
  );
};

export default Hero;
