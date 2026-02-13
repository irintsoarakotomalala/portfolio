import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Folder, X, ChevronLeft, ChevronRight } from "lucide-react";

// VPI Images
import vpi1 from "../assets/VPI site vitrine/1.png";
import vpi2 from "../assets/VPI site vitrine/2.png";
import vpi3 from "../assets/VPI site vitrine/3.png";
import vpi4 from "../assets/VPI site vitrine/4.png";

// MADAVISION Images
import mada1 from "../assets/MADAVISION/1.png";
import mada2 from "../assets/MADAVISION/2.png";
import mada3 from "../assets/MADAVISION/3.png";
import mada4 from "../assets/MADAVISION/4.png";
import mada5 from "../assets/MADAVISION/5.png";
import mada6 from "../assets/MADAVISION/6.png";
import mada7 from "../assets/MADAVISION/7.png";
import mada8 from "../assets/MADAVISION/8.png";
import mada9 from "../assets/MADAVISION/9.png";

// ITM Images
import itm1 from "../assets/ITM/1.png";
import itm2 from "../assets/ITM/2.png";
import itm3 from "../assets/ITM/3.png";
import itm4 from "../assets/ITM/4.png";
import itm5 from "../assets/ITM/5.png";
import itm6 from "../assets/ITM/6.png";
import itm7 from "../assets/ITM/7.png";
import itm8 from "../assets/ITM/8.png";
import itm9 from "../assets/ITM/9.png";

// Madagascart Images
import madagascart1 from "../assets/madagascart/1.png";
import madagascart2 from "../assets/madagascart/2.png";

const allProjects = [
  {
    title: "Site vitrine pour Vanilla Pay International",
    description:
      "Rebranding complet de la société incluant la refonte du logo, charte graphique et développement du site web vitrine moderne et responsive avec animations élégantes.",
    tags: ["HTML", "CSS", "Design", "Branding"],
    image: vpi1,
    images: [vpi1, vpi2, vpi3, vpi4],
    github: "https://github.com",
    live: "https://vanillapay.mg",
    featured: true,
  },
  {
    title: "Plateforme de réservation pour MADAVISION",
    description:
      "Site front office complet pour l'inscription et réservation de stands d'exposition avec système de facturation proforma automatisé et interface intuitive.",
    tags: ["React", "Node.js", "PostgreSQL", "PDF"],
    image: mada1,
    images: [mada1, mada2, mada3, mada4, mada5, mada6, mada7, mada8, mada9],
    github: "https://github.com",
    live: "https://madavision.mg",
    featured: true,
  },
  {
    title: "Solution digitale pour ONTM (ITM & IHM)",
    description:
      "Solution digitale pour l'Office National du Tourisme avec plan interactif des stands, réservation en temps réel et génération automatique de factures proforma.",
    tags: ["React", "Interactive Maps", "Node.js", "API"],
    image: itm1,
    images: [itm1, itm2, itm3, itm4, itm5, itm6, itm7, itm8, itm9],
    github: "https://github.com",
    live: "https://ontm-salon.mg",
    featured: true,
  },
  {
    title: "Site vitrine pour Madagasc'art",
    description: "Plateforme élégante présentant les marques et produits artisanaux malgaches, spécialisée dans les sacs en raphia avec galerie interactive et catalogue produits.",
    tags: ["Next.js", "E-commerce", "Design", "Galerie"],
    image: madagascart1,
    images: [madagascart1, madagascart2],
    github: "https://github.com",
    live: "https://madagascart.mg",
    featured: true,
  },
  {
    title: "Application mobile pour Vanilla Pay",
    description: "Application mobile innovante facilitant les paiements en ligne pour les touristes étrangers, conversion automatique Euro vers Ariary avec interface moderne.",
    tags: ["React Native", "Fintech", "API Payment", "Mobile"],
    image: "/projects/vanilla-pay-app.jpg",
    github: "https://github.com",
    live: "https://app.vanillapay.mg",
    featured: true,
  },
  {
    title: "Application B2B pour networking salons",
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
  const [selectedProject, setSelectedProject] = useState<typeof allProjects[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
                <div 
                  className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden cursor-pointer group"
                  onClick={() => {
                    console.log('Image clicked:', project.title, 'Has images:', !!project.images);
                    if (project.images && project.images.length > 0) {
                      setSelectedProject(project);
                      setCurrentImageIndex(0);
                    }
                  }}
                >
                  {project.image ? (
                    <>
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      {project.images && project.images.length > 1 && (
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <p className="text-white font-mono text-sm">Voir {project.images.length} images</p>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center">
                        <Folder size={48} className="text-primary/60 mx-auto mb-2" />
                        <p className="text-xs text-muted-foreground font-mono">Image à venir</p>
                      </div>
                    </div>
                  )}
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

        {/* Image Gallery Modal */}
        <AnimatePresence>
          {selectedProject && selectedProject.images && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-10"
              >
                <X size={32} />
              </button>

              <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
                <motion.img
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  src={selectedProject.images[currentImageIndex]}
                  alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />

                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={() => setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images!.length) % selectedProject.images!.length)}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={() => setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images!.length)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                    >
                      <ChevronRight size={24} />
                    </button>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {selectedProject.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            idx === currentImageIndex ? "bg-primary w-8" : "bg-white/50"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}

                <div className="mt-4 text-center">
                  <h3 className="text-white text-xl font-semibold mb-2">{selectedProject.title}</h3>
                  <p className="text-white/70 text-sm">
                    Image {currentImageIndex + 1} / {selectedProject.images.length}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
