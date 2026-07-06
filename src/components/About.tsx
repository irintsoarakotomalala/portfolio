import { motion } from "framer-motion";
import { User, Heart, Globe } from "lucide-react";
import RevealOnScroll from "./bits/RevealOnScroll";
import TiltCard from "./bits/TiltCard";
import CountUp from "./bits/CountUp";

const About = () => {
  return (
    <section id="about" className="section-padding bg-[#0d0d18]">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll className="text-center mb-10">
          <p className="section-subtitle">01. À propos</p>
          <h2 className="section-title">Qui suis-je ?</h2>
        </RevealOnScroll>

        {/* Stats rapides */}
        <RevealOnScroll className="grid grid-cols-3 gap-4 mb-10">
          {[
            { value: 3, suffix: "+", label: "ans d'expérience" },
            { value: 10, suffix: "+", label: "projets livrés" },
            { value: 4, suffix: "", label: "technologies maîtrisées" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-4 rounded-xl border border-white/10 bg-white/5">
              <div className="text-3xl font-black text-[#C77DFF]">
                <CountUp to={stat.value} suffix={stat.suffix} duration={2} />
              </div>
              <div className="text-xs text-white/50 font-mono mt-1">{stat.label}</div>
            </div>
          ))}
        </RevealOnScroll>

        {/* Main content with bento grid */}
        <div className="grid md:grid-cols-12 gap-4">
          {/* Large bio card */}
          <RevealOnScroll className="md:col-span-8 md:row-span-2 group relative">
          <TiltCard className="h-full">
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
          </TiltCard>
          </RevealOnScroll>

          {/* Languages card */}
          <RevealOnScroll className="md:col-span-4 group relative" delay={0.15}>
          <TiltCard className="h-full">
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
          </TiltCard>
          </RevealOnScroll>

          {/* Hobbies card */}
          <RevealOnScroll className="md:col-span-4 group relative" delay={0.25}>
          <TiltCard className="h-full">
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
          </TiltCard>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default About;
