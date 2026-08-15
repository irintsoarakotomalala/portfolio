import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

const GOLD = "#C4A050";
const BG = "#0e0c08";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative overflow-x-hidden md:overflow-hidden"
      style={{ background: BG, minHeight: 600 }}
    >
      {/* Grain */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 hidden md:block"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Wrapper desktop/tablet — hauteur fixe 100vh */}
      <div className="hidden md:block relative" style={{ height: "100vh", maxHeight: 1000 }}>

      {/* ── DESKTOP (1024px+) ── */}
      <div
        className="hidden lg:grid absolute inset-0 z-10"
        style={{ gridTemplateColumns: "1fr 480px 1fr" }}
      >
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center pl-16 xl:pl-24 pr-6 pt-20"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex self-start items-center gap-2 px-4 py-1.5 rounded-full border mb-8"
            style={{ borderColor: `${GOLD}50`, color: GOLD, background: `${GOLD}10` }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: GOLD }} />
            <span className="text-xs font-mono tracking-widest uppercase">Disponible</span>
          </motion.div>

          {/* PORT */}
          <div className="overflow-hidden mb-0">
            <motion.h1
              initial={{ y: 140 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="leading-none font-black uppercase"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(80px, 10vw, 150px)",
                color: GOLD,
                letterSpacing: "-0.02em",
              }}
            >
              PORT
            </motion.h1>
          </div>
          {/* FOLIO */}
          <div className="overflow-hidden mb-5">
            <motion.h1
              initial={{ y: 140 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="leading-none font-black uppercase"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(80px, 10vw, 150px)",
                color: "hsl(40 20% 93%)",
                letterSpacing: "-0.02em",
              }}
            >
              FOLIO
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mb-2"
          >
            <p className="text-xs font-mono tracking-[0.18em] uppercase font-semibold leading-relaxed" style={{ color: "hsl(40 15% 65%)" }}>
              Développeur Full-Stack ·<br />Designer
            </p>
            <div className="w-8 h-0.5 mt-2" style={{ background: GOLD }} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85 }}
            className="text-sm leading-relaxed mb-6 max-w-[260px]"
            style={{ color: "hsl(40 10% 50%)" }}
          >
            Je conçois et développe des expériences digitales
            performantes, élégantes et centrées utilisateur.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-3 mb-6"
          >
            <a
              href="#projects"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm tracking-wide transition-all hover:scale-105 hover:brightness-110"
              style={{ background: GOLD, color: "#0e0c08" }}
            >
              Voir mes projets <ArrowRight size={14} />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm tracking-wide border transition-all hover:border-[#C4A050]/50 hover:text-[#C4A050]"
              style={{ borderColor: "rgba(255,255,255,0.15)", color: "hsl(40 15% 70%)" }}
            >
              Me contacter
            </a>
          </motion.div>

          {/* Social icons — bien dans la section hero */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.15 }}
            className="flex gap-3"
          >
            {[
              { icon: Github, href: "https://github.com/irintsoarakotomalala", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/irintsoa-rakotomalala", label: "LinkedIn" },
              { icon: Mail, href: "mailto:rakotomalalairintsoa285@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full border flex items-center justify-center transition-all hover:border-[#C4A050]/60 hover:text-[#C4A050]"
                style={{ borderColor: "rgba(255,255,255,0.12)", color: "hsl(40 10% 50%)" }}
              >
                <Icon size={15} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* CENTER — photo cadrée tête→ceinture, déborde par le bas */}
        <div className="relative overflow-hidden" style={{ isolation: "isolate" }}>
          {/* Halo doré derrière */}
          <div
            className="absolute pointer-events-none z-0"
            style={{
              top: "15%",
              left: "50%",
              transform: "translateX(-50%)",
              width: 460,
              height: 560,
              background: `radial-gradient(ellipse at 50% 40%, ${GOLD}45 0%, ${GOLD}20 38%, transparent 68%)`,
              filter: "blur(55px)",
            }}
          />
          {/* Wrapper 160% de hauteur ancré en haut → overflow:hidden coupe les pieds */}
          <div className="absolute inset-x-0 top-0" style={{ height: "160%" }}>
            <motion.img
              src="/portrait-Photoroom.png"
              alt="Irintsoa RAKOTOMALALA"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="z-10 select-none"
              style={{
                display: "block",
                height: "100%",
                width: "auto",
                maxWidth: "none",
                marginLeft: "-35%",
                marginRight: "auto",
                filter: `drop-shadow(0 20px 60px rgba(0,0,0,0.5))`,
              }}
              draggable={false}
            />
          </div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col justify-center pr-16 xl:pr-24 pl-8 pt-20"
        >
          {/* Stats */}
          <div className="space-y-7 mb-10">
            {[
              { value: "2+", label: "ANS D'EXPÉRIENCE" },
              { value: "6+", label: "PROJETS LIVRÉS" },
              { value: "100%", label: "PASSION" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.12 }}
              >
                <div
                  className="font-black leading-none"
                  style={{
                    color: GOLD,
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "clamp(36px, 4vw, 56px)",
                  }}
                >
                  {s.value}
                </div>
                <div className="text-[10px] font-mono tracking-widest mt-0.5" style={{ color: "hsl(40 10% 45%)" }}>
                  {s.label}
                </div>
                {i < 2 && <div className="w-6 h-px mt-2.5" style={{ background: `${GOLD}40` }} />}
              </motion.div>
            ))}
          </div>

          {/* Stack pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex flex-wrap gap-2"
          >
            {["React", "Node.js", "TypeScript", "Figma"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-full text-xs font-mono border transition-all hover:border-[#C4A050]/40"
                style={{
                  borderColor: "rgba(255,255,255,0.12)",
                  color: "hsl(40 15% 65%)",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ── TABLET 768px–1024px ── */}
      <div className="hidden md:flex lg:hidden absolute inset-0 z-10">
        {/* Left text — 50% avec padding dynamique */}
        <div
          className="flex flex-col justify-center pt-20 pb-12"
          style={{ width: "50%", paddingLeft: "6%", paddingRight: "2%" }}
        >
          <div
            className="inline-flex self-start items-center gap-2 px-4 py-1.5 rounded-full border mb-6"
            style={{ borderColor: `${GOLD}50`, color: GOLD, background: `${GOLD}10` }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: GOLD }} />
            <span className="text-xs font-mono tracking-widest uppercase">Disponible</span>
          </div>
          <h1 className="leading-none font-black uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(64px, 8.5vw, 110px)", color: GOLD, letterSpacing: "-0.02em" }}>PORT</h1>
          <h1 className="leading-none font-black uppercase mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(64px, 8.5vw, 110px)", color: "hsl(40 20% 93%)", letterSpacing: "-0.02em" }}>FOLIO</h1>
          <p className="text-xs font-mono tracking-[0.15em] uppercase font-semibold mb-1" style={{ color: "hsl(40 15% 65%)" }}>Développeur Full-Stack · Designer</p>
          <div className="w-8 h-0.5 mb-3" style={{ background: GOLD }} />
          <p className="text-sm leading-relaxed mb-4" style={{ color: "hsl(40 10% 58%)" }}>Je conçois et développe des expériences digitales performantes, élégantes et centrées utilisateur.</p>
          <div className="flex items-center gap-3 mb-5">
            <a href="#projects" className="flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm" style={{ background: GOLD, color: "#0e0c08" }}>Voir mes projets <ArrowRight size={14} /></a>
            <a href="#contact" className="flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm border" style={{ borderColor: "rgba(255,255,255,0.15)", color: "hsl(40 15% 70%)" }}>Me contacter</a>
          </div>
          <div className="flex gap-3 mb-6">
            {[
              { icon: Github, href: "https://github.com/irintsoarakotomalala", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/irintsoa-rakotomalala", label: "LinkedIn" },
              { icon: Mail, href: "mailto:rakotomalalairintsoa285@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target={label !== "Email" ? "_blank" : undefined} rel="noopener noreferrer" aria-label={label}
                className="w-9 h-9 rounded-full border flex items-center justify-center transition-all hover:border-[#C4A050]/60 hover:text-[#C4A050]"
                style={{ borderColor: "rgba(255,255,255,0.12)", color: "hsl(40 10% 50%)" }}>
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
        {/* Photo — 50%, tête→ceinture, descendue + centrée */}
        <div className="relative overflow-hidden flex-shrink-0" style={{ width: "50%" }}>
          <div className="absolute pointer-events-none z-0" style={{ top: "15%", left: "45%", transform: "translateX(-50%)", width: 260, height: 340, background: `radial-gradient(ellipse at 50% 40%, ${GOLD}40 0%, ${GOLD}18 38%, transparent 68%)`, filter: "blur(45px)" }} />
          <div className="absolute inset-x-0" style={{ top: "6%", height: "130%" }}>
            <img
              src="/portrait-Photoroom.png"
              alt="Irintsoa"
              className="select-none"
              style={{ display: "block", height: "100%", width: "auto", maxWidth: "none", marginLeft: "-8%", marginRight: "auto", filter: `drop-shadow(0 20px 60px rgba(0,0,0,0.5))` }}
              draggable={false}
            />
          </div>
        </div>
      </div>
      </div>{/* fin wrapper desktop/tablet */}

      {/* ── MOBILE (<768px) ── */}
      <div className="md:hidden relative z-10 flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start px-6 pt-24 pb-6"
        >
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-5"
            style={{ borderColor: `${GOLD}50`, color: GOLD, background: `${GOLD}10` }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: GOLD }} />
            <span className="text-xs font-mono tracking-widest uppercase">Disponible</span>
          </div>

          {/* PORT + photo ronde sur la même ligne */}
          <div className="flex items-center justify-between w-full">
            <div>
              <h1 className="leading-none font-black uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(72px, 22vw, 110px)", color: GOLD, letterSpacing: "-0.02em" }}>PORT</h1>
              <h1 className="leading-none font-black uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(72px, 22vw, 110px)", color: "hsl(40 20% 93%)", letterSpacing: "-0.02em" }}>FOLIO</h1>
            </div>
            {/* Photo ronde — taille dynamique 32vw, max 200px */}
            <div className="relative flex-shrink-0" style={{ width: "clamp(100px, 32vw, 200px)", height: "clamp(100px, 32vw, 200px)" }}>
              <div className="absolute inset-0 rounded-full" style={{ background: `radial-gradient(circle, ${GOLD}40 0%, transparent 70%)`, filter: "blur(14px)" }} />
              <div className="relative w-full h-full rounded-full overflow-hidden border-2" style={{ borderColor: `${GOLD}60` }}>
                <img
                  src="/portrait-Photoroom.png"
                  alt="Irintsoa"
                  className="select-none"
                  style={{ position: "absolute", top: "5%", left: "50%", transform: "translateX(-50%)", height: "150%", width: "auto", maxWidth: "none" }}
                  draggable={false}
                />
              </div>
            </div>
          </div>

          <p className="text-xs font-mono tracking-[0.15em] uppercase font-semibold mt-3 mb-1" style={{ color: "hsl(40 15% 65%)" }}>Développeur Full-Stack · Designer</p>
          <div className="w-8 h-0.5 mb-4" style={{ background: GOLD }} />

          <p className="text-sm leading-relaxed mb-6" style={{ color: "hsl(40 10% 58%)" }}>
            Je conçois et développe des expériences digitales performantes, élégantes et centrées utilisateur.
          </p>

          <a href="#projects" className="flex items-center justify-center gap-2 w-full py-3 rounded-full font-bold text-sm mb-3" style={{ background: GOLD, color: "#0e0c08" }}>
            Voir mes projets <ArrowRight size={14} />
          </a>
          <a href="#contact" className="flex items-center justify-center gap-2 w-full py-3 rounded-full font-medium text-sm border mb-6" style={{ borderColor: "rgba(255,255,255,0.15)", color: "hsl(40 15% 70%)" }}>
            Me contacter
          </a>

          <div className="flex gap-3">
            {[
              { icon: Github, href: "https://github.com/irintsoarakotomalala", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/irintsoa-rakotomalala", label: "LinkedIn" },
              { icon: Mail, href: "mailto:rakotomalalairintsoa285@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target={label !== "Email" ? "_blank" : undefined} rel="noopener noreferrer" aria-label={label}
                className="w-10 h-10 rounded-full border flex items-center justify-center"
                style={{ borderColor: "rgba(255,255,255,0.12)", color: "hsl(40 10% 50%)" }}>
                <Icon size={16} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-3 border-t" style={{ borderColor: `${GOLD}15` }}>
          {[
            { icon: "👤", value: "2+", label: "ANS\nD'EXPÉRIENCE" },
            { icon: "📁", value: "6+", label: "PROJETS\nLIVRÉS" },
            { icon: "⚡", value: "100%", label: "PASSION" },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center py-6 gap-1" style={{ borderRight: i < 2 ? `1px solid ${GOLD}15` : undefined }}>
              <span className="text-lg mb-1">{s.icon}</span>
              <span className="text-3xl font-black" style={{ color: GOLD, fontFamily: "'Barlow Condensed', sans-serif" }}>{s.value}</span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-center whitespace-pre-line" style={{ color: "hsl(40 10% 45%)" }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px z-20"
        style={{ background: `linear-gradient(to right, transparent, ${GOLD}25, transparent)` }}
      />
    </section>
  );
};

export default Hero;
