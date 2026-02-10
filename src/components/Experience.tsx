import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work" as const,
    title: "Designer & Développeur Fullstack",
    company: "Vanilla Pay International",
    period: "2024 — Présent",
    description:
      "Développement et gestion de sites web clients. Réalisation de sites vitrines modernes et responsives. Participation à des projets en microservices. Gestion de versions avec Git & GitHub/GitLab. Collaboration avec les équipes design, tech et business pour la mise en production et suivi technique.",
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
    description:
      "Certification en langue française niveau avancé.",
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
    description:
      "Formation secondaire avec orientation littéraire.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">04. Parcours</p>
          <h2 className="section-title mb-12">Expérience & Formation</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex items-start mb-10 md:mb-12 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                  <div className="timeline-dot" />
                </div>

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-[45%] ${
                    isLeft ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="glass-card">
                    <div className="flex items-center gap-2 mb-2 justify-start">
                      {exp.type === "work" ? (
                        <Briefcase size={16} className="text-primary" />
                      ) : (
                        <GraduationCap size={16} className="text-primary" />
                      )}
                      <span className="text-xs font-mono text-primary">
                        {exp.period}
                      </span>
                    </div>
                    <div className="inline-block px-3 py-1.5 mb-2 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30">
                      <h3 className="text-lg font-bold text-white">
                        {exp.company}
                      </h3>
                    </div>
                    <p className="text-sm text-foreground/80 mb-2">
                      {exp.title}
                    </p>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
