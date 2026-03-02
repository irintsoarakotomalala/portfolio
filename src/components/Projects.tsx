import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, X, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import vpi1 from "../assets/VPI site vitrine/1.png";
import vpi2 from "../assets/VPI site vitrine/2.png";
import vpi3 from "../assets/VPI site vitrine/3.png";
import vpi4 from "../assets/VPI site vitrine/4.png";
import mada1 from "../assets/MADAVISION/1.png";
import mada2 from "../assets/MADAVISION/2.png";
import mada3 from "../assets/MADAVISION/3.png";
import mada4 from "../assets/MADAVISION/4.png";
import mada5 from "../assets/MADAVISION/5.png";
import mada6 from "../assets/MADAVISION/6.png";
import mada7 from "../assets/MADAVISION/7.png";
import mada8 from "../assets/MADAVISION/8.png";
import mada9 from "../assets/MADAVISION/9.png";
import itm1 from "../assets/ITM/1.png";
import itm2 from "../assets/ITM/2.png";
import itm3 from "../assets/ITM/3.png";
import itm4 from "../assets/ITM/4.png";
import itm5 from "../assets/ITM/5.png";
import itm6 from "../assets/ITM/6.png";
import itm7 from "../assets/ITM/7.png";
import itm8 from "../assets/ITM/8.png";
import itm9 from "../assets/ITM/9.png";
import madagascart1 from "../assets/madagascart/1.png";
import madagascart2 from "../assets/madagascart/2.png";
const COLOR = "#5EEAC4";
const DISC_R = 100;
const DISC_SIZE = DISC_R * 2 + 120;
const allProjects = [
  { title: "Vanilla Pay International", shortTitle: "VPI", description: "Rebranding complet de la societe incluant la refonte du logo, charte graphique et developpement du site web vitrine moderne et responsive.", tags: ["HTML", "CSS", "Design", "Branding"], image: vpi1, images: [vpi1, vpi2, vpi3, vpi4], github: "https://github.com", live: "https://vanillapay.mg", year: "2024" },
  { title: "MADAVISION", shortTitle: "MADA", description: "Site front office complet pour l'inscription et reservation de stands d'exposition avec systeme de facturation proforma automatise.", tags: ["React", "Node.js", "PostgreSQL", "PDF"], image: mada1, images: [mada1, mada2, mada3, mada4, mada5, mada6, mada7, mada8, mada9], github: "https://github.com", live: "https://madavision.mg", year: "2024" },
  { title: "ONTM - ITM & IHM", shortTitle: "ONTM", description: "Solution digitale pour l'Office National du Tourisme avec plan interactif des stands et reservation en temps reel.", tags: ["React", "Maps", "Node.js", "API"], image: itm1, images: [itm1, itm2, itm3, itm4, itm5, itm6, itm7, itm8, itm9], github: "https://github.com", live: "https://ontm-salon.mg", year: "2024" },
  { title: "Madagascart", shortTitle: "MGART", description: "Plateforme elegante presentant les marques et produits artisanaux malgaches, specialisee dans les sacs en raphia.", tags: ["Next.js", "E-commerce", "Design"], image: madagascart1, images: [madagascart1, madagascart2], github: "https://github.com", live: "https://madagascart.mg", year: "2024" },
  { title: "Vanilla Pay Mobile", shortTitle: "VPM", description: "Application mobile innovante facilitant les paiements pour les touristes etrangers avec conversion automatique de devises.", tags: ["React Native", "Fintech", "Mobile"], image: vpi2, images: [vpi2, vpi3], github: "https://github.com", live: "https://app.vanillapay.mg", year: "2024" },
  { title: "B2B Networking Salons", shortTitle: "B2B", description: "Plateforme collaborative pour les exposants avec systeme de rendez-vous temps reel et messagerie integree.", tags: ["React", "WebSocket", "B2B"], image: mada9, images: [mada9, mada8], github: "https://github.com", live: "https://networking-salon.mg", year: "2024" },
];
const N = allProjects.length;
const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [galleryProject, setGalleryProject] = useState<typeof allProjects[0] | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const touchStartX = useRef<number>(0);
  const goTo = (index: number) => {
    if (index === activeIndex) return;
    const rawDiff = index - activeIndex;
    let diff = rawDiff;
    if (Math.abs(rawDiff) > N / 2) diff = rawDiff > 0 ? rawDiff - N : rawDiff + N;
    setActiveIndex(index);
    setRotation((prev) => prev - (360 / N) * diff);
  };
  const prev = () => goTo((activeIndex - 1 + N) % N);
  const next = () => goTo((activeIndex + 1) % N);
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (galleryProject) {
        if (e.key === "ArrowLeft") setGalleryIndex((p) => (p - 1 + galleryProject.images.length) % galleryProject.images.length);
        if (e.key === "ArrowRight") setGalleryIndex((p) => (p + 1) % galleryProject.images.length);
        if (e.key === "Escape") setGalleryProject(null);
        return;
      }
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex, galleryProject]); // eslint-disable-line
  const project = allProjects[activeIndex];
  return (
    <section id="projects" className="section-padding overflow-visible" style={{ paddingBottom: `calc(5rem + ${DISC_SIZE / 2}px)` }}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10">
          <p className="section-subtitle">03. Projets</p>
          <h2 className="section-title">Ce que j'ai construit</h2>
        </motion.div>
        {/* Compteur au-dessus du carrousel */}
        <AnimatePresence mode="wait">
          <motion.div key={activeIndex + "-counter"} initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.3 }} className="flex items-center gap-2 mb-4">
            <span className="text-3xl font-bold font-mono leading-none" style={{ color: COLOR }}>{String(activeIndex + 1).padStart(2, "0")}</span>
            <span className="text-base font-mono text-white/30 mt-1">/ {String(N).padStart(2, "0")}</span>
          </motion.div>
        </AnimatePresence>
        <div className="flex items-center gap-4">
          <button onClick={prev} className="flex-shrink-0 w-11 h-11 rounded-full border border-primary/40 bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-background transition-all hover:scale-110 shadow-[0_0_12px_#5EEAC420]">
            <ChevronLeft size={20} />
          </button>
          <div className="relative flex-1 rounded-3xl overflow-hidden" style={{ height: "clamp(320px, 45vw, 500px)" }}
            onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
            onTouchEnd={(e) => { const dx = e.changedTouches[0].clientX - touchStartX.current; if (dx < -50) next(); else if (dx > 50) prev(); }}
          >
            <AnimatePresence mode="wait">
              <motion.div key={activeIndex} initial={{ opacity: 0, scale: 1.06 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.02 }} transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }} className="absolute inset-0">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,12,24,0.98) 0%, rgba(8,12,24,0.7) 30%, rgba(8,12,24,0.15) 65%, transparent 100%)" }} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(8,12,24,0.4) 0%, transparent 20%)" }} />
              </motion.div>
            </AnimatePresence>
            <div className="absolute top-5 left-5 flex flex-wrap gap-2 z-20">
              {project.tags.map((tag) => (
                <motion.span key={tag} initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}
                  className="px-2.5 py-1 text-xs font-mono rounded-full backdrop-blur-md border"
                  style={{ background: "rgba(8,12,24,0.65)", borderColor: `${COLOR}50`, color: COLOR }}
                >{tag}</motion.span>
              ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 z-20 px-8" style={{ paddingBottom: "clamp(60px, 10vw, 100px)" }}>
              <AnimatePresence mode="wait">
                <motion.div key={activeIndex + "-info"} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }} className="max-w-2xl">
                  <h3 className="text-4xl font-bold text-white mb-2 leading-tight">{project.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed mb-5 max-w-lg">{project.description}</p>
                  <div className="flex items-center gap-3 flex-wrap">
                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                      className="group flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all hover:scale-105"
                      style={{ background: COLOR, color: "#080c18" }}
                      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 0 24px ${COLOR}70`)}
                      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
                    >
                      <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform" />
                      Voir le site
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold border border-white/20 text-white/70 hover:border-white/50 hover:text-white transition-all backdrop-blur-sm"
                    >
                      <Github size={13} />
                      GitHub
                    </a>
                    {project.images.length > 1 && (
                      <button onClick={() => { setGalleryProject(project); setGalleryIndex(0); }}
                        className="px-5 py-2.5 rounded-full text-xs font-semibold border border-white/15 text-white/50 hover:border-primary/50 hover:text-primary transition-all backdrop-blur-sm"
                      >
                        +{project.images.length} captures
                      </button>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-30" style={{ width: DISC_SIZE, height: DISC_SIZE }}>
              {/* Fond flouté */}
              <div className="absolute inset-4 rounded-full" style={{ background: "rgba(8,12,24,0.75)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", boxShadow: `0 0 40px rgba(8,12,24,0.8), inset 0 0 30px rgba(8,12,24,0.5)` }} />
              {/* Anneau externe avec glow */}
              <div className="absolute inset-0 rounded-full border" style={{ borderColor: `${COLOR}70`, boxShadow: `0 0 15px ${COLOR}25, inset 0 0 15px ${COLOR}10` }} />
              {/* Anneau milieu */}
              <div className="absolute rounded-full border" style={{ inset: 14, borderColor: `${COLOR}35` }} />
              {/* Anneau interne animé */}
              <motion.div className="absolute rounded-full border" style={{ inset: 28, borderColor: `${COLOR}55` }}
                animate={{ opacity: [0.4, 1, 0.4], scale: [0.98, 1.01, 0.98] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Roue tournante */}
              <motion.div className="absolute inset-0" animate={{ rotate: rotation }} transition={{ type: "spring", stiffness: 55, damping: 18 }}>
                {allProjects.map((p, i) => {
                  const rad = ((360 / N) * i - 90) * (Math.PI / 180);
                  const cx = 50 + (DISC_R / DISC_SIZE) * 100 * Math.cos(rad);
                  const cy = 50 + (DISC_R / DISC_SIZE) * 100 * Math.sin(rad);
                  const isActive = i === activeIndex;
                  return (
                    <button key={p.title} onClick={() => goTo(i)} className="absolute -translate-x-1/2 -translate-y-1/2 group" style={{ left: `${cx}%`, top: `${cy}%` }}>
                      <motion.div animate={{ rotate: -rotation }} transition={{ type: "spring", stiffness: 55, damping: 18 }}>
                        {isActive ? (
                          <div className="relative rounded-xl overflow-hidden" style={{ width: 52, height: 38, boxShadow: `0 0 0 2px ${COLOR}, 0 0 24px ${COLOR}90` }}>
                            <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${COLOR}20 0%, transparent 60%)` }} />
                          </div>
                        ) : (
                          <div className="relative rounded-lg overflow-hidden transition-all duration-300 group-hover:scale-125"
                            style={{ width: 36, height: 26, boxShadow: `0 0 0 1px ${COLOR}40, 0 0 8px ${COLOR}30`, opacity: 0.65 }}
                          >
                            <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 transition-opacity duration-300" style={{ background: `rgba(8,12,24,0.35)` }} />
                          </div>
                        )}
                      </motion.div>
                    </button>
                  );
                })}
              </motion.div>

              {/* Centre : point pulsant + flèche "tap" rotative */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative flex items-center justify-center">
                  {/* Cercle de fond centre */}
                  <motion.div
                    className="absolute rounded-full"
                    style={{ width: 36, height: 36, background: `${COLOR}12`, border: `1px solid ${COLOR}30` }}
                    animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0.15, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                  />
                  {/* Point central */}
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="rounded-full z-10"
                    style={{ width: 8, height: 8, background: COLOR, boxShadow: `0 0 12px ${COLOR}` }}
                  />
                  {/* Petites flèches tout autour — indiquent l'interactivité */}
                  {[0, 60, 120, 180, 240, 300].map((deg, idx) => (
                    <motion.div
                      key={deg}
                      className="absolute"
                      style={{
                        transformOrigin: "center",
                        transform: `rotate(${deg}deg) translateX(22px)`,
                      }}
                      animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.8, 1.1, 0.8] }}
                      transition={{ duration: 1.8, repeat: Infinity, delay: idx * 0.3, ease: "easeInOut" }}
                    >
                      {/* Mini flèche chevron */}
                      <svg width="7" height="7" viewBox="0 0 8 8" fill="none" style={{ transform: `rotate(${deg + 90}deg)` }}>
                        <polyline points="2,6 4,2 6,6" stroke={COLOR} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Label "drag" en bas du disque */}
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
                style={{ bottom: "14%" }}
                animate={{ opacity: [0.4, 0.9, 0.4], y: [0, -2, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-[9px] font-mono tracking-widest uppercase" style={{ color: COLOR }}>◈ tap</span>
              </motion.div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/5 z-20">
              <motion.div className="h-full" style={{ background: COLOR }} animate={{ width: `${((activeIndex + 1) / N) * 100}%` }} transition={{ duration: 0.5 }} />
            </div>
          </div>
          <button onClick={next} className="flex-shrink-0 w-12 h-12 rounded-full border border-primary/50 bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-background transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_#5EEAC450] backdrop-blur-sm">
            <ChevronRight size={22} strokeWidth={2.5} />
          </button>
        </div>
        <div className="flex justify-center items-center gap-3 mt-16 pb-2">
          <kbd className="px-2.5 py-1 text-xs font-mono rounded-lg border border-primary/40 bg-primary/10 text-primary font-bold shadow-[0_0_8px_#5EEAC430]">←</kbd>
          <kbd className="px-2.5 py-1 text-xs font-mono rounded-lg border border-primary/40 bg-primary/10 text-primary font-bold shadow-[0_0_8px_#5EEAC430]">→</kbd>
          <span className="text-xs font-mono text-primary/60">clavier · glisser · cliquer</span>
        </div>
      </div>
      <AnimatePresence>
        {galleryProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.92)" }}
            onClick={() => setGalleryProject(null)}
          >
            <button onClick={() => setGalleryProject(null)} className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white z-10 transition-colors">
              <X size={20} />
            </button>
            <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
              <AnimatePresence mode="wait">
                <motion.img key={galleryIndex} initial={{ opacity: 0, scale: 0.93 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.93 }} transition={{ duration: 0.3 }}
                  src={galleryProject.images[galleryIndex]} alt={`${galleryProject.title} ${galleryIndex + 1}`} className="w-full h-auto max-h-[75vh] object-contain rounded-xl"
                />
              </AnimatePresence>
              {galleryProject.images.length > 1 && (
                <>
                  <button onClick={() => setGalleryIndex((p) => (p - 1 + galleryProject.images.length) % galleryProject.images.length)} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors"><ChevronLeft size={20} /></button>
                  <button onClick={() => setGalleryIndex((p) => (p + 1) % galleryProject.images.length)} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors"><ChevronRight size={20} /></button>
                </>
              )}
              <div className="mt-5 text-center">
                <h3 className="text-white font-semibold text-lg">{galleryProject.title}</h3>
                <div className="flex justify-center gap-2 mt-3">
                  {galleryProject.images.map((_, idx) => (
                    <button key={idx} onClick={() => setGalleryIndex(idx)} className="rounded-full transition-all duration-300 h-2"
                      style={{ width: idx === galleryIndex ? 28 : 8, background: idx === galleryIndex ? COLOR : "rgba(255,255,255,0.3)" }}
                    />
                  ))}
                </div>
                <p className="text-white/30 text-xs font-mono mt-2">{galleryIndex + 1} / {galleryProject.images.length}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
export default Projects;