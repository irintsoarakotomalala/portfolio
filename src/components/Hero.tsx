import { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Briefcase, FolderGit2, Zap } from "lucide-react";
import portrait from "../assets/portrait-Photoroom.png";
import CountUp from "./bits/CountUp";
import MagneticButton from "./bits/MagneticButton";
import { DISPLAY_FONT, EASE_OUT, GOLD, INK, socials } from "@/lib/site";

const BG = INK;
const ROLES = ["Développeur Full-Stack", "Designer UI/UX", "Créateur d'interfaces"];

const stats = [
  { icon: Briefcase, to: 2, suffix: "+", label: "Ans d'expérience" },
  { icon: FolderGit2, to: 6, suffix: "+", label: "Projets livrés" },
  { icon: Zap, to: 100, suffix: "%", label: "Passion" },
];

const titleStyle = (color: string, size: string): React.CSSProperties => ({
  fontFamily: DISPLAY_FONT,
  fontSize: size,
  color,
  letterSpacing: "-0.02em",
});

// Badge "Disponible" avec onde lumineuse
const AvailableBadge = ({ className = "" }: { className?: string }) => (
  <div
    className={`inline-flex self-start items-center gap-2.5 px-4 py-1.5 rounded-full border ${className}`}
    style={{ borderColor: `${GOLD}50`, color: GOLD, background: `${GOLD}10` }}
  >
    <span className="relative flex w-2 h-2">
      <span className="absolute inset-0 rounded-full animate-ping opacity-60" style={{ background: GOLD }} />
      <span className="relative w-2 h-2 rounded-full" style={{ background: GOLD }} />
    </span>
    <span className="text-xs font-mono tracking-widest uppercase">Disponible pour missions</span>
  </div>
);

// Rôle qui défile verticalement
const RotatingRole = ({ className = "" }: { className?: string }) => {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setI((v) => (v + 1) % ROLES.length), 2600);
    return () => clearInterval(id);
  }, [reduce]);
  return (
    <span className={`relative inline-flex overflow-hidden align-bottom h-[1.4em] ${className}`}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={ROLES[i]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: EASE_OUT }}
          className="inline-block whitespace-nowrap"
          style={{ color: GOLD }}
        >
          {ROLES[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

const SocialLinks = ({ size = 36 }: { size?: number }) => (
  <div className="flex gap-3">
    {socials.map(({ icon: Icon, href, label }) => (
      <a
        key={label}
        href={href}
        target={label !== "Email" ? "_blank" : undefined}
        rel="noopener noreferrer"
        aria-label={label}
        className="rounded-full border flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C4A050]/60 hover:text-[#C4A050] hover:bg-[#C4A050]/10"
        style={{ width: size, height: size, borderColor: "rgba(255,255,255,0.12)", color: "hsl(40 10% 55%)" }}
      >
        <Icon size={size > 38 ? 16 : 15} />
      </a>
    ))}
  </div>
);

const ScrollCue = () => (
  <motion.a
    href="#about"
    aria-label="Défiler vers la section À propos"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.6 }}
    className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 hidden md:flex flex-col items-center gap-2"
  >
    <span className="w-6 h-10 rounded-full border flex justify-center pt-2" style={{ borderColor: `${GOLD}50`, background: "rgba(14,12,8,0.5)" }}>
      <motion.span
        className="w-1 h-2 rounded-full"
        style={{ background: GOLD }}
        animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      />
    </span>
    <span className="text-[10px] font-mono tracking-[0.3em] uppercase" style={{ color: `${GOLD}90` }}>Scroll</span>
  </motion.a>
);

const Hero = () => {
  const reduce = useReducedMotion();

  // Parallaxe du portrait et du halo selon la souris (desktop)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const portraitX = useTransform(sx, (v) => v * 18);
  const portraitY = useTransform(sy, (v) => v * 10);
  const haloX = useTransform(sx, (v) => v * -30);
  const haloY = useTransform(sy, (v) => v * -20);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (reduce) return;
    mx.set(e.clientX / window.innerWidth - 0.5);
    my.set(e.clientY / window.innerHeight - 0.5);
  };

  return (
    <section
      id="hero"
      className="relative overflow-x-hidden md:overflow-hidden"
      style={{ background: BG, minHeight: 600 }}
      onMouseMove={handleMouseMove}
    >
      {/* Grain */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 hidden md:block"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
        }}
      />
      {/* Grille discrète */}
      <div
        className="absolute inset-0 pointer-events-none hidden md:block"
        style={{
          backgroundImage: `linear-gradient(${GOLD}08 1px, transparent 1px), linear-gradient(90deg, ${GOLD}08 1px, transparent 1px)`,
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse at 50% 40%, black 20%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 40%, black 20%, transparent 70%)",
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
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <AvailableBadge />
          </motion.div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 140 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: EASE_OUT }}
              className="leading-none font-black uppercase"
              style={titleStyle(GOLD, "clamp(80px, 10vw, 150px)")}
            >
              PORT
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-5">
            <motion.h1
              initial={{ y: 140 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.28, ease: EASE_OUT }}
              className="leading-none font-black uppercase"
              style={titleStyle("hsl(40 20% 93%)", "clamp(80px, 10vw, 150px)")}
            >
              FOLIO
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mb-3"
          >
            <p className="text-xs font-mono tracking-[0.18em] uppercase font-semibold" style={{ color: "hsl(40 15% 65%)" }}>
              <RotatingRole />
            </p>
            <div className="w-8 h-0.5 mt-2" style={{ background: GOLD }} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85 }}
            className="text-sm leading-relaxed mb-7 max-w-[280px]"
            style={{ color: "hsl(40 10% 55%)" }}
          >
            Je conçois et développe des expériences digitales
            performantes, élégantes et centrées utilisateur.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-3 mb-7"
          >
            <MagneticButton strength={0.25}>
              <a
                href="#projects"
                className="group flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm tracking-wide transition-all hover:brightness-110"
                style={{ background: GOLD, color: INK, boxShadow: `0 10px 30px -10px ${GOLD}90` }}
              >
                Voir mes projets <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
            </MagneticButton>
            <MagneticButton strength={0.25}>
              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm tracking-wide border transition-all hover:border-[#C4A050]/50 hover:text-[#C4A050]"
                style={{ borderColor: "rgba(255,255,255,0.15)", color: "hsl(40 15% 70%)" }}
              >
                Me contacter
              </a>
            </MagneticButton>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.15 }}>
            <SocialLinks />
          </motion.div>
        </motion.div>

        {/* CENTER — photo cadrée tête→ceinture, déborde par le bas */}
        <div className="relative overflow-hidden" style={{ isolation: "isolate" }}>
          {/* Halo doré derrière */}
          <motion.div
            className="absolute pointer-events-none z-0"
            style={{
              top: "15%",
              left: "50%",
              marginLeft: -230,
              x: haloX,
              y: haloY,
              width: 460,
              height: 560,
              background: `radial-gradient(ellipse at 50% 40%, ${GOLD}45 0%, ${GOLD}20 38%, transparent 68%)`,
              filter: "blur(55px)",
            }}
          />
          {/* Anneau décoratif */}
          <motion.div
            aria-hidden
            className="absolute z-0 pointer-events-none"
            style={{ top: "18%", left: "50%", marginLeft: -190, width: 380, height: 380, x: haloX }}
          >
            <div className="w-full h-full rounded-full border border-dashed animate-spin-slow" style={{ borderColor: `${GOLD}18` }} />
          </motion.div>
          {/* Wrapper 160% de hauteur ancré en haut → overflow:hidden coupe les pieds */}
          <motion.div className="absolute inset-x-0 top-0" style={{ height: "160%", x: portraitX, y: portraitY }}>
            <motion.img
              src={portrait}
              alt="Irintsoa RAKOTOMALALA"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: EASE_OUT }}
              className="z-10 select-none"
              style={{
                display: "block",
                height: "100%",
                width: "auto",
                maxWidth: "none",
                marginLeft: "-35%",
                marginRight: "auto",
                filter: "drop-shadow(0 20px 60px rgba(0,0,0,0.5))",
              }}
              draggable={false}
            />
          </motion.div>
          {/* Fondu bas pour lier le portrait à la section suivante */}
          <div className="absolute inset-x-0 bottom-0 h-32 z-20 pointer-events-none" style={{ background: `linear-gradient(to top, ${BG}, transparent)` }} />
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col justify-center pr-16 xl:pr-24 pl-8 pt-20"
        >
          <div className="space-y-7 mb-10">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.12 }}
                className="group"
              >
                <div
                  className="font-black leading-none transition-transform duration-300 group-hover:translate-x-1"
                  style={{ color: GOLD, fontFamily: DISPLAY_FONT, fontSize: "clamp(36px, 4vw, 56px)" }}
                >
                  <CountUp to={s.to} suffix={s.suffix} duration={1.6} />
                </div>
                <div className="text-[10px] font-mono tracking-widest uppercase mt-0.5" style={{ color: "hsl(40 10% 45%)" }}>
                  {s.label}
                </div>
                {i < stats.length - 1 && <div className="w-6 h-px mt-2.5" style={{ background: `${GOLD}40` }} />}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex flex-wrap gap-2"
          >
            {["React", "Node.js", "TypeScript", "Figma"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-full text-xs font-mono border transition-all hover:border-[#C4A050]/50 hover:text-[#C4A050] cursor-default"
                style={{ borderColor: "rgba(255,255,255,0.12)", color: "hsl(40 15% 65%)", background: "rgba(255,255,255,0.03)" }}
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ── TABLET 768px–1024px ── */}
      <div className="hidden md:flex lg:hidden absolute inset-0 z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center pt-20 pb-12"
          style={{ width: "50%", paddingLeft: "6%", paddingRight: "2%" }}
        >
          <AvailableBadge className="mb-6" />
          <h1 className="leading-none font-black uppercase" style={titleStyle(GOLD, "clamp(64px, 8.5vw, 110px)")}>PORT</h1>
          <h1 className="leading-none font-black uppercase mb-4" style={titleStyle("hsl(40 20% 93%)", "clamp(64px, 8.5vw, 110px)")}>FOLIO</h1>
          <p className="text-xs font-mono tracking-[0.15em] uppercase font-semibold mb-1">
            <RotatingRole />
          </p>
          <div className="w-8 h-0.5 mb-3" style={{ background: GOLD }} />
          <p className="text-sm leading-relaxed mb-5" style={{ color: "hsl(40 10% 58%)" }}>
            Je conçois et développe des expériences digitales performantes, élégantes et centrées utilisateur.
          </p>
          <div className="flex items-center gap-3 mb-5">
            <a href="#projects" className="group flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm" style={{ background: GOLD, color: INK }}>
              Voir mes projets <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm border transition-colors hover:text-[#C4A050] hover:border-[#C4A050]/50" style={{ borderColor: "rgba(255,255,255,0.15)", color: "hsl(40 15% 70%)" }}>
              Me contacter
            </a>
          </div>
          <SocialLinks />
        </motion.div>
        <div className="relative overflow-hidden flex-shrink-0" style={{ width: "50%" }}>
          <div className="absolute pointer-events-none z-0" style={{ top: "15%", left: "45%", transform: "translateX(-50%)", width: 260, height: 340, background: `radial-gradient(ellipse at 50% 40%, ${GOLD}40 0%, ${GOLD}18 38%, transparent 68%)`, filter: "blur(45px)" }} />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE_OUT }}
            className="absolute inset-x-0"
            style={{ top: "6%", height: "130%" }}
          >
            <img
              src={portrait}
              alt="Irintsoa"
              className="select-none"
              style={{ display: "block", height: "100%", width: "auto", maxWidth: "none", marginLeft: "-8%", marginRight: "auto", filter: "drop-shadow(0 20px 60px rgba(0,0,0,0.5))" }}
              draggable={false}
            />
          </motion.div>
        </div>
      </div>

      <ScrollCue />
      </div>{/* fin wrapper desktop/tablet */}

      {/* ── MOBILE (<768px) ── */}
      <div className="md:hidden relative z-10 flex flex-col">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="flex flex-col items-start px-6 pt-24 pb-6"
        >
          {[
            <AvailableBadge key="badge" className="mb-5" />,
            <div key="title" className="flex items-center justify-between w-full">
              <div>
                <h1 className="leading-none font-black uppercase" style={titleStyle(GOLD, "clamp(72px, 22vw, 110px)")}>PORT</h1>
                <h1 className="leading-none font-black uppercase" style={titleStyle("hsl(40 20% 93%)", "clamp(72px, 22vw, 110px)")}>FOLIO</h1>
              </div>
              {/* Photo ronde — taille dynamique 32vw, max 200px */}
              <div className="relative flex-shrink-0" style={{ width: "clamp(100px, 32vw, 200px)", height: "clamp(100px, 32vw, 200px)" }}>
                <div className="absolute inset-0 rounded-full" style={{ background: `radial-gradient(circle, ${GOLD}40 0%, transparent 70%)`, filter: "blur(14px)" }} />
                <div className="absolute -inset-2 rounded-full border border-dashed animate-spin-slow" style={{ borderColor: `${GOLD}35` }} />
                <div className="relative w-full h-full rounded-full overflow-hidden border-2" style={{ borderColor: `${GOLD}60` }}>
                  <img
                    src={portrait}
                    alt="Irintsoa"
                    className="select-none"
                    style={{ position: "absolute", top: "5%", left: "50%", transform: "translateX(-50%)", height: "150%", width: "auto", maxWidth: "none" }}
                    draggable={false}
                  />
                </div>
              </div>
            </div>,
            <p key="role" className="text-xs font-mono tracking-[0.15em] uppercase font-semibold mt-3 mb-1">
              <RotatingRole />
            </p>,
            <div key="bar" className="w-8 h-0.5 mb-4" style={{ background: GOLD }} />,
            <p key="desc" className="text-sm leading-relaxed mb-6" style={{ color: "hsl(40 10% 58%)" }}>
              Je conçois et développe des expériences digitales performantes, élégantes et centrées utilisateur.
            </p>,
            <a key="cta1" href="#projects" className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full font-bold text-sm mb-3 active:scale-[0.98] transition-transform" style={{ background: GOLD, color: INK, boxShadow: `0 10px 30px -12px ${GOLD}` }}>
              Voir mes projets <ArrowRight size={14} />
            </a>,
            <a key="cta2" href="#contact" className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full font-medium text-sm border mb-6 active:scale-[0.98] transition-transform" style={{ borderColor: "rgba(255,255,255,0.15)", color: "hsl(40 15% 70%)" }}>
              Me contacter
            </a>,
            <SocialLinks key="socials" size={42} />,
          ].map((child, i) => (
            <motion.div
              key={i}
              className="w-full flex flex-col items-start"
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } } }}
            >
              {child}
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-3 border-t" style={{ borderColor: `${GOLD}15` }}>
          {stats.map((s, i) => (
            <div key={s.label} className="flex flex-col items-center py-6 gap-1" style={{ borderRight: i < 2 ? `1px solid ${GOLD}15` : undefined }}>
              <s.icon size={16} className="mb-1" style={{ color: `${GOLD}90` }} />
              <span className="text-3xl font-black" style={{ color: GOLD, fontFamily: DISPLAY_FONT }}>
                <CountUp to={s.to} suffix={s.suffix} duration={1.4} />
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-center px-2" style={{ color: "hsl(40 10% 45%)" }}>{s.label}</span>
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
