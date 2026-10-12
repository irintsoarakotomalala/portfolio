import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Briefcase, GraduationCap, Layers } from "lucide-react";
import SectionHeading from "./bits/SectionHeading";
import SpotlightCard from "./bits/SpotlightCard";
import { DISPLAY_FONT, EASE_OUT, GOLD, TEXT_FAINT } from "@/lib/site";

type ExpType = "work" | "education";

const experiences: {
  type: ExpType;
  title: string;
  company: string;
  period: string;
  current?: boolean;
  description: string;
}[] = [
  {
    type: "work",
    title: "Designer & Développeur Fullstack",
    company: "Vanilla Pay International",
    period: "2024 — Présent",
    current: true,
    description:
      "Développement et gestion de sites web clients. Réalisation de sites vitrines modernes et responsives. Participation à des projets en microservices. Gestion de versions avec Git & GitHub/GitLab.",
  },
  {
    type: "work",
    title: "Stagiaire Designer & Développeur Fullstack",
    company: "Vanilla Pay International",
    period: "2024 (3 mois)",
    description:
      "Rebranding de la société (Logo/charte graphique et site web). Création d'interfaces utilisateur pour site vitrine. Développement d'applications mobile et web.",
  },
  {
    type: "education",
    title: "Diplôme DALF A1",
    company: "Alliance Française",
    period: "2024",
    description: "Certification en langue française niveau avancé.",
  },
  {
    type: "education",
    title: "Licence Informatique en Design & Communication Digitale",
    company: "IT University",
    period: "2021 — 2024",
    description:
      "Formation complète en développement web et design. Maîtrise des technologies modernes : HTML, CSS, JavaScript, React, Node.js. Compétences en design UI/UX avec Figma et Adobe Suite.",
  },
  {
    type: "education",
    title: "Baccalauréat Série A2",
    company: "Collège Saint Michel Amparibe",
    period: "2019 — 2021",
    description: "Formation secondaire avec orientation littéraire.",
  },
];

const filters: { key: "all" | ExpType; label: string; icon: typeof Layers }[] = [
  { key: "all", label: "Tout", icon: Layers },
  { key: "work", label: "Expérience", icon: Briefcase },
  { key: "education", label: "Formation", icon: GraduationCap },
];

const Experience = () => {
  const [filter, setFilter] = useState<"all" | ExpType>("all");
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ["start 75%", "end 55%"] });
  const lineProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  const items = experiences.filter((e) => filter === "all" || e.type === filter);

  return (
    <section id="experience" className="section-padding relative overflow-hidden" style={{ background: "#13110d" }}>
      <div className="max-w-5xl mx-auto">
        <SectionHeading index="04" eyebrow="Parcours" title="Expérience" />

        {/* Filtres */}
        <div className="flex mb-12 md:mb-14 md:justify-center">
          <div className="inline-flex p-1 rounded-full border" style={{ borderColor: `${GOLD}20`, background: "#1a1710" }} role="tablist">
            {filters.map(({ key, label, icon: Icon }) => {
              const isActive = filter === key;
              const count = key === "all" ? experiences.length : experiences.filter((e) => e.type === key).length;
              return (
                <button
                  key={key}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setFilter(key)}
                  className="relative flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs font-semibold transition-colors"
                  style={{ color: isActive ? "#0e0c08" : "hsl(40 10% 60%)" }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="exp-filter"
                      className="absolute inset-0 rounded-full"
                      style={{ background: GOLD }}
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <Icon size={13} className="relative" />
                  <span className="relative">{label}</span>
                  <span className="relative font-mono text-[10px] opacity-70">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div ref={timelineRef} className="relative">
          {/* Ligne de fond + remplissage au scroll */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px" style={{ background: `${GOLD}18` }} />
          <motion.div
            className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px origin-top"
            style={{ scaleY: lineProgress, background: `linear-gradient(to bottom, ${GOLD}, ${GOLD}60)`, boxShadow: `0 0 10px ${GOLD}80` }}
          />

          <AnimatePresence mode="popLayout" initial={false}>
            {items.map((exp, i) => {
              const isLeft = i % 2 === 0;
              const Icon = exp.type === "work" ? Briefcase : GraduationCap;
              return (
                <motion.div
                  layout
                  key={exp.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.2 } }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, ease: EASE_OUT, layout: { duration: 0.5, ease: EASE_OUT } }}
                  className={`relative flex items-center mb-8 md:mb-12 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Point */}
                  <div className="absolute left-4 md:left-1/2 top-7 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                      className="relative w-8 h-8 rounded-full flex items-center justify-center border"
                      style={{ background: "#13110d", borderColor: `${GOLD}70`, boxShadow: `0 0 0 4px #13110d, 0 0 16px ${GOLD}40` }}
                    >
                      <Icon size={13} style={{ color: GOLD }} />
                      {exp.current && <span className="absolute inset-0 rounded-full animate-ping" style={{ border: `1px solid ${GOLD}` }} />}
                    </motion.div>
                  </div>

                  {/* Carte */}
                  <div className={`ml-12 md:ml-0 w-full md:w-1/2 ${isLeft ? "md:pr-12" : "md:pl-12"}`}>
                    <SpotlightCard className="p-5 md:p-6">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="text-xs font-mono" style={{ color: `${GOLD}c0` }}>{exp.period}</span>
                        {exp.current ? (
                          <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider border border-emerald-400/30 text-emerald-300 bg-emerald-400/10">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> En poste
                          </span>
                        ) : (
                          <span className="text-[10px] font-mono uppercase tracking-wider" style={{ color: TEXT_FAINT }}>
                            {exp.type === "work" ? "Expérience" : "Formation"}
                          </span>
                        )}
                      </div>
                      <h3 className="font-bold uppercase leading-tight mb-1 text-2xl" style={{ fontFamily: DISPLAY_FONT, color: "hsl(40 20% 90%)" }}>
                        {exp.company}
                      </h3>
                      <p className="text-sm font-medium mb-3" style={{ color: GOLD }}>{exp.title}</p>
                      <p className="text-sm leading-relaxed" style={{ color: "hsl(40 10% 58%)" }}>{exp.description}</p>
                    </SpotlightCard>
                  </div>

                  {/* Période en grand, côté opposé (desktop) */}
                  <div className={`hidden md:flex w-1/2 ${isLeft ? "justify-start pl-12" : "justify-end pr-12"}`}>
                    <span
                      className="font-black uppercase leading-none select-none"
                      style={{ fontFamily: DISPLAY_FONT, fontSize: "clamp(40px, 5vw, 64px)", color: "transparent", WebkitTextStroke: `1px ${GOLD}35` }}
                    >
                      {exp.period.split(" ")[0]}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Experience;
