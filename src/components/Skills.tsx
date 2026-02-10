import { motion } from "framer-motion";
import { Code2, Palette, Database, Zap } from "lucide-react";

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
              <div className={`absolute inset-0 bg-gradient-to-br ${
                cat.color === 'primary' ? 'from-primary/5 to-primary/0' : 'from-secondary/5 to-secondary/0'
              } rounded-2xl blur-xl group-hover:blur-2xl transition-all`} />
              
              <div className="relative glass-card hover:border-primary/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    cat.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'
                  }`}>
                    <cat.icon size={24} className={cat.color === 'primary' ? 'text-primary' : 'text-secondary'} />
                  </div>
                  <h3 className="text-lg font-semibold text-highlight">{cat.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-background/50 border border-border/30 text-sm font-mono text-foreground/80 hover:border-primary/40 hover:text-primary transition-all"
                    >
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
