import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

const allProjects = [
  {
    title: "Site Vitrine Vanilla Pay",
    description:
      "Rebranding complet de la société incluant la refonte du logo, charte graphique et développement du site web vitrine moderne et responsive avec animations élégantes.",
    tags: ["HTML", "CSS", "Design", "Branding"],
    image: "/projects/vanilla-pay-site.jpg",
    github: "https://github.com",
    live: "https://vanillapay.mg",
    featured: true,
  },
  {
    title: "Plateforme MADAVISION",
    description:
      "Site front office complet pour l'inscription et réservation de stands d'exposition avec système de facturation proforma automatisé et interface intuitive.",
    tags: ["React", "Node.js", "PostgreSQL", "PDF"],
    image: "/projects/madavision-platform.jpg",
    github: "https://github.com",
    live: "https://madavision.mg",
    featured: true,
  },
  {
    title: "Plateforme ONTM (ITM & IHM)",
    description:
      "Solution digitale pour l'Office National du Tourisme avec plan interactif des stands, réservation en temps réel et génération automatique de factures proforma.",
    tags: ["React", "Interactive Maps", "Node.js", "API"],
    image: "/projects/ontm-platform.jpg",
    github: "https://github.com",
    live: "https://ontm-salon.mg",
    featured: true,
  },
  {
    title: "Site Vitrine Madagasc'art",
    description: "Plateforme élégante présentant les marques et produits artisanaux malgaches, spécialisée dans les sacs en raphia avec galerie interactive et catalogue produits.",
    tags: ["Next.js", "E-commerce", "Design", "Galerie"],
    image: "/projects/madagascart-site.jpg",
    github: "https://github.com",
    live: "https://madagascart.mg",
    featured: true,
  },
  {
    title: "App Mobile Vanilla Pay",
    description: "Application mobile innovante facilitant les paiements en ligne pour les touristes étrangers, conversion automatique Euro vers Ariary avec interface moderne.",
    tags: ["React Native", "Fintech", "API Payment", "Mobile"],
    image: "/projects/vanilla-pay-app.jpg",
    github: "https://github.com",
    live: "https://app.vanillapay.mg",
    featured: true,
  },
  {
    title: "App B2B Networking Salons",
    description: "Plateforme collaborative permettant aux exposants de se connecter lors des salons avec système de rendez-vous temps réel, notifications push et messagerie intégrée.",
    tags: ["React", "Node.js", "WebSocket", "B2B"],
    image: "/projects/b2b-networking.jpg",
    github: "https://github.com",
    live: "https://networking-salon.mg",
    featured: true,
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
                className="project-card flex flex-col overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center">
                    <Folder size={48} className="text-primary/60 mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground font-mono">Image à venir</p>
                  </div>
                  {project.featured && (
                    <div className="absolute top-3 right-3 px-2 py-1 bg-primary/20 backdrop-blur-sm rounded-full">
                      <span className="text-xs font-mono text-primary">Featured</span>
                    </div>
                  )}
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-highlight">
                      {project.title}
                    </h3>
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
                  <p className="text-sm text-foreground leading-relaxed flex-1 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono text-primary/80 px-2 py-1 bg-primary/10 rounded"
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
