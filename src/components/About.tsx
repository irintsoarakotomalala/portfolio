import { motion } from "framer-motion";
import { User, Heart, Globe } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-section-alt">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">01. À propos</p>
          <h2 className="section-title">Qui suis-je ?</h2>
        </motion.div>

        {/* Main content with bento grid */}
        <div className="grid md:grid-cols-12 gap-4">
          {/* Large bio card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-8 md:row-span-2 group relative"
          >
            <div className="relative h-full glass-card p-6 sm:p-8 hover:border-white/20 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                  <User size={20} className="sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-highlight">Mon histoire</h3>
              </div>
              <div className="space-y-4 text-foreground/80 leading-relaxed text-base sm:text-lg">
                <p>
                  Développeur full stack passionné par le web depuis plusieurs années, je me spécialise 
                  dans la création de sites vitrines modernes et responsives. Mon expertise 
                  couvre aussi bien le design que le développement fullstack.
                </p>
                <p>
                  Diplômé d'une Licence en Informatique en Design & Communication Digitale à l'IT University, 
                  j'ai développé une solide expérience en travaillant chez Vanilla Pay International 
                  où j'ai pu mettre en pratique mes compétences en développement et design.
                </p>
                <p>
                  Ma passion pour la technologie me pousse à continuellement apprendre et à explorer 
                  de nouvelles solutions pour créer des expériences web exceptionnelles.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Languages card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-4 group relative"
          >
            <div className="relative h-full glass-card p-6 hover:border-white/20 transition-all">
              <div className="flex items-center gap-2 mb-4">
                <Globe size={20} className="text-white/60" />
                <h3 className="text-lg font-bold text-highlight">Langues</h3>
              </div>
              <div className="space-y-3">
                {[
                  { name: "Malgache", level: "Maternelle", percent: 100 },
                  { name: "Français", level: "Avancée", percent: 90 },
                  { name: "Anglais", level: "Intermédiaire", percent: 70 },
                ].map((lang) => (
                  <div key={lang.name}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-sm text-highlight">{lang.name}</span>
                      <span className="text-xs text-foreground/60">{lang.level}</span>
                    </div>
                    <div className="h-1.5 bg-background/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-white/70 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Hobbies card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-4 group relative"
          >
            <div className="relative h-full glass-card p-6 hover:border-white/20 transition-all">
              <div className="flex items-center gap-2 mb-4">
                <Heart size={20} className="text-white/60" />
                <h3 className="text-lg font-bold text-highlight">Loisirs</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "Danse", emoji: "💃" },
                  { name: "Basket", emoji: "🏀" },
                  { name: "Volley", emoji: "🏐" },
                ].map((hobby) => (
                  <div
                    key={hobby.name}
                    className="group/hobby flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-white/25 hover:scale-105 transition-all cursor-default"
                  >
                    <span className="text-2xl group-hover/hobby:scale-110 transition-transform">{hobby.emoji}</span>
                    <span className="text-sm font-medium">{hobby.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
