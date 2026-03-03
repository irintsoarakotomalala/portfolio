import { motion } from "framer-motion";
import { Code2, Palette, Database, Zap } from "lucide-react";

const skillIcons: Record<string, JSX.Element> = {
  "HTML/CSS": (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0"><path fill="#e44d26" d="M5 3l2.1 23.4L16 29l8.9-2.6L27 3z"/><path fill="#f16529" d="M16 27.1l7.2-2L25 6H16z"/><path fill="#ebebeb" d="M16 13.5H11.2l-.3-3.7H16V6.2H7.5l.8 9.1H16zm0 8.3l-.1.1-4.6-1.2-.3-3.4H7.5l.6 6.7 7.9 2.2z"/><path fill="#fff" d="M16 13.5v3.8h4.5l-.4 4.8-4.1 1.1v4l7.9-2.2.1-.6 1.2-13.1.1-1.2H16z"/></svg>
  ),
  "JavaScript": (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0"><rect width="32" height="32" rx="3" fill="#f7df1e"/><path d="M19.5 24.3c.5.8 1.1 1.4 2.3 1.4 1 0 1.6-.5 1.6-1.1 0-.8-.6-1.1-1.7-1.6l-.6-.2c-1.7-.7-2.8-1.6-2.8-3.5 0-1.7 1.3-3 3.4-3 1.5 0 2.5.5 3.3 1.8l-1.8 1.1c-.4-.7-.8-1-1.5-1-.7 0-1.1.4-1.1 1 0 .7.4 1 1.5 1.4l.6.2c2 .9 3.1 1.7 3.1 3.7 0 2.1-1.6 3.2-3.8 3.2-2.1 0-3.5-1-4.2-2.4zm-9.1.2c.3.6.6 1.1 1.4 1.1.7 0 1.1-.3 1.1-1.3v-7h2.3v7c0 2.2-1.3 3.2-3.1 3.2-1.7 0-2.7-.9-3.2-1.9z"/></svg>
  ),
  "TypeScript": (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0"><rect width="32" height="32" rx="3" fill="#3178c6"/><path fill="#fff" d="M18.6 21.4v2.3c.4.2.8.4 1.3.5.5.1 1 .2 1.5.2.5 0 1-.1 1.5-.2.5-.1.9-.3 1.2-.6.3-.3.6-.6.8-1 .2-.4.3-.9.3-1.5 0-.4-.1-.8-.2-1.1-.1-.3-.3-.6-.5-.9-.2-.3-.5-.5-.8-.7-.3-.2-.7-.4-1.1-.6-.3-.1-.6-.3-.8-.4-.2-.1-.4-.3-.5-.4a.7.7 0 01-.2-.5c0-.2 0-.3.1-.4.1-.1.2-.2.3-.3.1-.1.3-.1.4-.1h.5c.2 0 .4 0 .6.1.2.1.4.2.5.3.2.1.3.3.4.5l2-.7c-.2-.4-.4-.8-.7-1.1-.3-.3-.7-.5-1.1-.7-.4-.2-.9-.3-1.5-.3s-1.1.1-1.5.3c-.5.2-.9.5-1.2.9-.3.4-.5.9-.5 1.5 0 .4.1.8.2 1.1.2.3.4.6.6.9.3.3.6.5.9.7.4.2.7.4 1.1.5.3.1.6.3.8.4.2.1.4.3.5.4.1.2.2.4.2.6 0 .3-.1.5-.3.7-.2.2-.5.3-.9.3-.5 0-.9-.1-1.3-.4-.3-.2-.7-.5-.9-.9zM11 17.2H8v-2h8.5v2H13v8.6h-2z"/></svg>
  ),
  "React": (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0"><circle cx="16" cy="16" r="2.5" fill="#61dafb"/><g fill="none" stroke="#61dafb" strokeWidth="1.2"><ellipse cx="16" cy="16" rx="11" ry="4.5"/><ellipse cx="16" cy="16" rx="11" ry="4.5" transform="rotate(60 16 16)"/><ellipse cx="16" cy="16" rx="11" ry="4.5" transform="rotate(120 16 16)"/></g></svg>
  ),
  "Next.js": (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0"><circle cx="16" cy="16" r="14" fill="#000"/><path fill="#fff" d="M10.5 10.5h2v7.8l7.5-9.8H22v11h-2v-7.8l-7.5 9.8H10.5z"/></svg>
  ),
  "Tailwind CSS": (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0"><path fill="#38bdf8" d="M16 7c-2.7 0-4.4 1.35-5.1 4.05 1.02-1.35 2.21-1.856 3.57-1.518.776.194 1.33.757 1.94 1.381C17.44 12.03 18.67 13.3 21.1 13.3c2.7 0 4.44-1.35 5.1-4.05-1.02 1.35-2.21 1.856-3.57 1.518-.776-.194-1.33-.757-1.94-1.381C19.66 8.27 18.43 7 16 7zM10.9 13.3C8.2 13.3 6.46 14.65 5.8 17.35c1.02-1.35 2.21-1.856 3.57-1.518.776.194 1.33.757 1.94 1.381C12.34 18.33 13.57 19.6 16 19.6c2.7 0 4.44-1.35 5.1-4.05-1.02 1.35-2.21 1.856-3.57 1.518-.776-.194-1.33-.757-1.94-1.381C14.56 14.57 13.33 13.3 10.9 13.3z"/></svg>
  ),
  "Node.js": (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0"><path fill="#83cd29" d="M16 3l12 6.9v13.8L16 29 4 23.7V9.9z"/><path fill="#404137" d="M16 3l12 6.9v13.8L16 29V3z" opacity=".15"/><path fill="#fff" d="M16 8.5c.6 0 1 .5 1 1V17c0 .6-.4 1-1 1s-1-.4-1-1V9.5c0-.5.4-1 1-1zm0 11a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z"/></svg>
  ),
  "Express.js": (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0"><path fill="#888" d="M29 16.1c0 1.3-.2 2.5-.7 3.7-1.2 2.9-3.6 4.8-6.6 5.3-1.2.2-2.4.1-3.5-.2-1.6-.5-2.9-1.4-3.9-2.8L3 8.5h2.2l10.4 12c.8 1 1.8 1.7 3 2 .9.2 1.9.3 2.8.1 2.3-.4 4.2-1.9 5.1-4 .3-.8.5-1.7.5-2.6 0-3.6-2.9-6.5-6.5-6.5-.8 0-1.5.1-2.2.4l-1.4-1.6c1.1-.5 2.3-.8 3.6-.8C26.1 7 29 11 29 16.1z"/><circle fill="#888" cx="9.5" cy="22.5" r="1.5"/></svg>
  ),
  "Java": (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0"><path fill="#f89820" d="M12.8 20.4s-1 .6.7.8c2 .2 3.1.2 5.3-.3 0 0 .6.4 1.4.7-5 2.1-11.2-.1-7.4-1.2zm-.5-2.3s-1.1.8.6 1c2.3.2 4.1.2 5.8-.3 0 0 .4.4 1.1.6-5.2 1.5-10.9.1-7.5-1.3z"/><path fill="#ea2d2e" d="M17.5 13.8c1.1 1.2-.3 2.3-.3 2.3s2.6-1.3 1.4-3c-1.1-1.6-2-2.4 2.7-5.1 0 0-7.3 1.8-3.8 5.8z"/><path fill="#f89820" d="M22.7 22.5s.7.6-.8.1c-2.9-.9-7.5-1-10.2.1-2.5 1-1.1-.6-.1-.9 2.5-.8 8.2-.7 11.1.7zm-9.4-4.6s-4.7 1.1-1.7 1.5c1.3.2 3.9.1 6.3-.1 2-.2 4-.5 4-.5s-.7.3-1.2.6c-4.8 1.3-14.1.7-11.4-.6 2.3-1.1 4-1 4-1zm8.7 4.8c4.9-2.5 2.6-5 1-4.7-.4.1-.6.2-.6.2s.2-.3.5-.4c3.6-1.3 6.4 3.8-1 5.8 0 0 .1-.1.1-.3v.1-.7z"/><path fill="#ea2d2e" d="M19 5s2.7 2.7-2.6 6.8c-4.2 3.3-1 5.2 0 7.4-2.5-2.3-4.3-4.3-3.1-6.2 1.8-2.7 6.8-4 5.7-8z"/><path fill="#f89820" d="M13.8 28.1c4.7.3 11.9-.2 12.1-2.4 0 0-.3.9-3.9 1.5-4 .7-9 .6-11.9.2 0 0 .6.5 3.7.7z"/></svg>
  ),
  "Springboot": (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0"><path fill="#6db33f" d="M27 8.5A13 13 0 0116 3a13 13 0 01-11 5.5A13 13 0 0016 29a13 13 0 0011-20.5zm-11 9c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"/><circle cx="16" cy="12.5" r="2.5" fill="#fff"/></svg>
  ),
  "PostgreSQL": (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0"><path fill="#336791" d="M23.5 6.3c-1-.3-2-.4-3-.3-.7-1-1.7-1.7-2.9-2-2.2-.5-4.4.3-5.8 2-1-.1-2 0-3 .3C6.5 7.5 5 10.2 5 13c0 2.4.9 5 2.4 6.8.5.6 1.1 1 1.8 1.2.3 2 1 3.8 2.3 5.1.8.8 1.8 1.3 2.8 1.3s2-.5 2.7-1.4c.8.9 1.8 1.4 2.8 1.4s2-.5 2.8-1.3c1.3-1.3 2-3.1 2.3-5.1.7-.2 1.3-.6 1.8-1.2 1.5-1.8 2.4-4.4 2.4-6.8 0-2.8-1.5-5.5-4.6-6.7z"/><path fill="#fff" d="M16 10a2 2 0 100 4 2 2 0 000-4zm-4 1a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm8 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"/></svg>
  ),
  "API REST": (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0"><rect x="3" y="10" width="26" height="12" rx="3" fill="none" stroke="#a78bfa" strokeWidth="2"/><path stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" d="M8 16h3m4 0h5m3-2v4"/></svg>
  ),
  "Figma": (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0"><rect x="11" y="3" width="10" height="10" rx="5" fill="#f24e1e"/><rect x="11" y="13" width="10" height="10" rx="5" fill="#a259ff"/><rect x="11" y="3" width="5" height="10" fill="#ff7262"/><circle cx="21" cy="18" r="5" fill="#1abcfe"/><rect x="11" y="23" width="5" height="6" rx="2.5" fill="#0acf83"/></svg>
  ),
  "Adobe XD": (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0"><rect width="32" height="32" rx="6" fill="#470137"/><path fill="#ff2bc2" d="M13.5 8l-5 9 5.3 7h-3l-3.8-6.3L11 8zm5 0l5 16h-2.8l-5-16z"/></svg>
  ),
  "Photoshop": (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0"><rect width="32" height="32" rx="6" fill="#001e36"/><path fill="#31a8ff" d="M7 8h5.5c3.3 0 5.5 1.7 5.5 4.8S15.8 18 12.5 18H10v6H7zm3 3v4h2.3c1.4 0 2.2-.7 2.2-2s-.8-2-2.2-2zm9.5 3.5c-.8 0-1.5.1-2 .3l.4 2.3c.4-.2.9-.3 1.5-.3 1.3 0 2 .7 2 2v.3c-.4-.2-1-.3-1.5-.3-2 0-3.4 1-3.4 3 0 1.8 1.2 3 3 3 .8 0 1.5-.3 2-.9V24H25v-7c0-2.5-1.5-3.5-3.5-3.5zm-.5 7c0 .8-.5 1.3-1.3 1.3-.6 0-1-.4-1-1s.5-1 1.3-1c.4 0 .7 0 1 .2z"/></svg>
  ),
  "Illustrator": (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0"><rect width="32" height="32" rx="6" fill="#330000"/><path fill="#ff9a00" d="M13 22h-2.5l-1-3.5H6l-1 3.5H2.5L6.8 10H10zm-3.2-5.5l-1.4-4.8-1.4 4.8zM14.5 10h2.5v12h-2.5zm5.5 0h2.5v12H20z"/></svg>
  ),
  "Rebranding": (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0"><circle cx="16" cy="16" r="10" fill="none" stroke="#5EEAC4" strokeWidth="2"/><path stroke="#5EEAC4" strokeWidth="2" strokeLinecap="round" d="M11 16c0-2.8 2.2-5 5-5m5 5c0 2.8-2.2 5-5 5"/><path fill="#5EEAC4" d="M10 13l1 3-3 1zm12 6l-1-3 3-1z"/></svg>
  ),
  "Prototypage": (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0"><rect x="4" y="6" width="14" height="20" rx="2" fill="none" stroke="#5EEAC4" strokeWidth="2"/><rect x="6" y="8" width="10" height="12" rx="1" fill="#5EEAC450"/><circle cx="11" cy="23" r="1.2" fill="#5EEAC4"/><path stroke="#5EEAC4" strokeWidth="1.5" strokeLinecap="round" d="M20 11h5m0 0l-2-2m2 2l-2 2M20 21h5m0 0l-2-2m2 2l-2 2"/></svg>
  ),
  "Git": (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0"><path fill="#f05133" d="M29.5 14.6L17.4 2.5a1.7 1.7 0 00-2.4 0L12.7 4.8l3 3a2 2 0 012.6 2.6l2.9 2.9a2 2 0 11-1.2 1.2l-2.7-2.7v7a2 2 0 11-2.1.1V11.5a2 2 0 01-1.1-2.7L11 5.9 2.5 14.4a1.7 1.7 0 000 2.4l12.1 12.2a1.7 1.7 0 002.4 0l12.5-12.5a1.7 1.7 0 000-2.4z"/></svg>
  ),
  "GitHub/GitLab": (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0"><path fill="#e2432a" d="M16 3l3.7 11.4H31L21.2 21l3.7 11.4L16 26l-8.9 6.4L10.8 21 1 14.4h11.3z"/></svg>
  ),
  "Microservices": (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0"><circle cx="8" cy="8" r="3" fill="none" stroke="#a78bfa" strokeWidth="1.5"/><circle cx="24" cy="8" r="3" fill="none" stroke="#a78bfa" strokeWidth="1.5"/><circle cx="8" cy="24" r="3" fill="none" stroke="#a78bfa" strokeWidth="1.5"/><circle cx="24" cy="24" r="3" fill="none" stroke="#a78bfa" strokeWidth="1.5"/><circle cx="16" cy="16" r="3.5" fill="none" stroke="#a78bfa" strokeWidth="1.5"/><path stroke="#a78bfa" strokeWidth="1" d="M11 8h10M8 11v10M24 11v10M11 24h10M13 13l-3-3m9 0l3-3m-9 12l-3 3m9 0l3 3"/></svg>
  ),
  "Agile": (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0"><path fill="none" stroke="#5EEAC4" strokeWidth="2" strokeLinecap="round" d="M6 16c0-5.5 4.5-10 10-10 3 0 5.7 1.3 7.5 3.4"/><path fill="none" stroke="#5EEAC4" strokeWidth="2" strokeLinecap="round" d="M26 16c0 5.5-4.5 10-10 10-3 0-5.7-1.3-7.5-3.4"/><path fill="#5EEAC4" d="M22 6l2 4-4 .5zm-12 16l-2-4 4-.5z"/></svg>
  ),
  "CI/CD": (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0"><rect x="3" y="6" width="10" height="7" rx="2" fill="none" stroke="#38bdf8" strokeWidth="1.5"/><rect x="19" y="6" width="10" height="7" rx="2" fill="none" stroke="#38bdf8" strokeWidth="1.5"/><rect x="11" y="19" width="10" height="7" rx="2" fill="none" stroke="#38bdf8" strokeWidth="1.5"/><path stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" d="M8 13v4m16-4v4m-8 0v-4M8 17h16"/></svg>
  ),
  "Docker": (
    <svg viewBox="0 0 32 32" className="w-4 h-4 flex-shrink-0"><path fill="#2396ed" d="M28.8 13.6c-.5-.4-1.6-.5-2.5-.3-.1-.9-.7-1.7-1.5-2.3l-.5-.3-.3.5c-.4.7-.5 1.8-.2 2.6-.3.2-.8.4-1.5.4H3.4c-.3 2.3.4 5.3 2 7.2 1.6 2 4 3 7.3 3 7 0 12.1-3.2 14.6-9h1.2c1.8 0 2.9-1 3.2-2l.2-.9zM7 14.5H5v2h2zm3 0H8v2h2zm3 0h-2v2h2zm3 0h-2v2h2zm-9-3H5v2h2zm3 0H8v2h2zm3 0h-2v2h2zm3-3h-2v2h2zm3 0h-2v2h2z"/></svg>
  ),
};

const categories = [
  {
    title: "Développement Frontend",
    icon: Code2,
    color: "primary",
    skills: ["HTML/CSS", "JavaScript", "React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Développement Backend",
    icon: Database,
    color: "secondary",
    skills: ["Node.js", "Express.js", "Java", "Springboot", "PostgreSQL", "API REST"],
  },
  {
    title: "Design & UI/UX",
    icon: Palette,
    color: "primary",
    skills: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Rebranding", "Prototypage"],
  },
  {
    title: "Outils & Méthodes",
    icon: Zap,
    color: "secondary",
    skills: ["Git", "GitHub/GitLab", "Microservices", "Agile", "CI/CD", "Docker"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-section-alt">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">02. Compétences</p>
          <h2 className="section-title">Ma stack technique</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="group relative"
            >
              <div className="relative glass-card hover:border-white/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/8">
                    <cat.icon size={24} className="text-white/70" />
                  </div>
                  <h3 className="text-lg font-semibold text-highlight">{cat.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-background/50 border border-border/30 text-sm font-mono text-foreground/80 hover:border-white/30 hover:text-white transition-all"
                    >
                      {skillIcons[skill] && skillIcons[skill]}
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
