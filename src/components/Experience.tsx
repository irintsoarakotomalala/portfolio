import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import RevealOnScroll from "./bits/RevealOnScroll";

const GOLD = "#C4A050";

const experiences = [
  {
    type: "work" as const,
    title: "Designer & Développeur Fullstack",
    company: "Vanilla Pay International",
    period: "2024 — Présent",
    description:
      "Développement et gestion de sites web clients. Réalisation de sites vitrines modernes et responsives. Participation à des projets en microservices. Gestion de versions avec Git & GitHub/GitLab.",
  },
  {
    type: "work" as const,
    title: "Stagiaire Designer & Développeur Fullstack",
    company: "Vanilla Pay International",
    period: "2024 (3 mois)",
    description:
      "Rebranding de la société (Logo/charte graphique et site web). Création d'interfaces utilisateur pour site vitrine. Développement d'applications mobile et web.",
  },
  {
    type: "education" as const,
    title: "Diplôme DALF A1",
    company: "Alliance Française",
    period: "2024",
    description: "Certification en langue française niveau avancé.",
  },
  {
    type: "education" as const,
    title: "Licence Informatique en Design & Communication Digitale",
    company: "IT University",
    period: "2021 — 2024",
    description:
      "Formation complète en développement web et design. Maîtrise des technologies modernes : HTML, CSS, JavaScript, React, Node.js. Compétences en design UI/UX avec Figma et Adobe Suite.",
  },
  {
    type: "education" as const,
    title: "Baccalauréat Série A2",
    company: "Collège Saint Michel Amparibe",
    period: "2019 — 2021",
    description: "Formation secondaire avec orientation littéraire.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding" style={{ background: "#13110d" }}>
      <div className="max-w-4xl mx-auto">
        <RevealOnScroll className="mb-12">
          <p className="text-xs font-mono tracking-widest uppercase mb-3" style={{ color: GOLD }}>
            04. Parcours
          </p>
          <h2
            className="font-black uppercase leading-none"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(48px, 7vw, 96px)",
              color: "hsl(40 20% 92%)",
            }}
          >
            Expérience
          </h2>
        </RevealOnScroll>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px"
            style={{ background: `${GOLD}20` }}
          />

          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0;
            return (
              <RevealOnScroll
                key={i}
                delay={i * 0.07}
                className={`relative flex items-start mb-8 md:mb-10 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 + 0.2, type: "spring", stiffness: 300 }}
                    className="w-3 h-3 rounded-full"
                    style={{ background: GOLD, boxShadow: `0 0 8px ${GOLD}60` }}
                  />
                </div>

                {/* Card */}
                <div className={`ml-12 md:ml-0 md:w-[45%] ${isLeft ? "md:pr-10" : "md:pl-10"}`}>
                  <div
                    className="p-5 rounded-2xl border transition-all duration-300 hover:border-[#C4A050]/30"
                    style={{ borderColor: `${GOLD}15`, background: "#1a1710" }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {exp.type === "work" ? (
                        <Briefcase size={14} style={{ color: GOLD }} />
                      ) : (
                        <GraduationCap size={14} style={{ color: GOLD }} />
                      )}
                      <span className="text-xs font-mono" style={{ color: "hsl(40 10% 45%)" }}>
                        {exp.period}
                      </span>
                    </div>
                    <div
                      className="inline-block px-3 py-1 mb-2 rounded-xl border text-sm font-bold"
                      style={{ borderColor: `${GOLD}25`, color: "hsl(40 20% 88%)", background: `${GOLD}10` }}
                    >
                      {exp.company}
                    </div>
                    <p className="text-sm font-medium mb-2" style={{ color: GOLD }}>
                      {exp.title}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "hsl(40 10% 55%)" }}>
                      {exp.description}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
