import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

const allProjects = [
  {
    title: "Site Corporate Vanilla Pay",
    description:
      "Rebranding complet de la société incluant la refonte du logo, charte graphique et développement du site web vitrine moderne et responsive.",
    tags: ["React", "Design", "Branding"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Application Web E-Commerce",
    description:
      "Plateforme e-commerce complète avec gestion de produits, panier d'achat et système de paiement intégré. Architecture microservices.",
    tags: ["Node.js", "React", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "API REST Springboot",
    description:
      "Développement d'une API REST robuste avec Java Springboot pour la gestion de données client. Intégration avec PostgreSQL et sécurisation JWT.",
    tags: ["Java", "Springboot", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Portfolio Designer",
    description: "Site portfolio moderne pour présenter des projets de design avec animations fluides et interface intuitive.",
    tags: ["React", "Figma", "Design"],
    github: "https://github.com",
    featured: false,
  },
  {
    title: "Dashboard Analytics",
    description: "Tableau de bord analytique temps réel avec graphiques interactifs et visualisations de données.",
    tags: ["React", "Node.js", "Express.js"],
    github: "https://github.com",
    featured: false,
  },
  {
    title: "Application Mobile",
    description: "Application mobile cross-platform pour la gestion de tâches avec synchronisation cloud.",
    tags: ["React", "Node.js", "API REST"],
    github: "https://github.com",
    featured: false,
  },
];

const allTags = Array.from(new Set(allProjects.flatMap((p) => p.tags)));

const Projects = () => {
  const [filter, setFilter] = useState<string | null>(null);

  const filtered = filter
    ? allProjects.filter((p) => p.tags.includes(filter))
    : allProjects;

  return (
    <section id="projects" className="section-padding bg-section-alt">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">03. Projets</p>
          <h2 className="section-title mb-8">Ce que j'ai construit</h2>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center md:justify-start">
          <button
            onClick={() => setFilter(null)}
            className={`px-3 py-1 rounded-full text-xs font-mono border transition-all duration-300 ${
              filter === null
                ? "border-primary text-primary bg-primary/10"
                : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
            }`}
          >
            Tous
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag === filter ? null : tag)}
              className={`px-3 py-1 rounded-full text-xs font-mono border transition-all duration-300 ${
                filter === tag
                  ? "border-primary text-primary bg-primary/10"
                  : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="project-card flex flex-col"
              >
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <Folder size={36} className="text-primary" />
                    <div className="flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`GitHub ${project.title}`}
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Live demo ${project.title}`}
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-highlight mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-foreground leading-relaxed flex-1 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono text-primary/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
