import { motion } from "framer-motion";
import { User, Heart, Globe } from "lucide-react";
import RevealOnScroll from "./bits/RevealOnScroll";
import CountUp from "./bits/CountUp";

const GOLD = "#C4A050";
const BG = "#13110d";

const About = () => {
  return (
    <section id="about" className="section-padding" style={{ background: BG, paddingTop: "7rem" }}>
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll className="mb-12">
          <p className="text-xs font-mono tracking-widest uppercase mb-3" style={{ color: GOLD }}>
            01. À propos
          </p>
          <h2
            className="font-black uppercase leading-none"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(48px, 7vw, 96px)",
              color: "hsl(40 20% 92%)",
            }}
          >
            Qui suis-je ?
          </h2>
        </RevealOnScroll>

        {/* Stats */}
        <RevealOnScroll className="grid grid-cols-3 gap-4 mb-12">
          {[
            { value: 2, suffix: "+", label: "ans d'expérience" },
            { value: 6, suffix: "+", label: "projets livrés" },
            { value: 4, suffix: "", label: "technologies" },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center p-5 rounded-2xl border"
              style={{ borderColor: `${GOLD}20`, background: "#1a1710" }}
            >
              <div
                className="text-4xl font-black"
                style={{ color: GOLD, fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                <CountUp to={stat.value} suffix={stat.suffix} duration={2} />
              </div>
              <div className="text-xs font-mono uppercase tracking-widest mt-1" style={{ color: "hsl(40 10% 45%)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </RevealOnScroll>

        <div className="grid md:grid-cols-12 gap-4">
          {/* Bio */}
          <RevealOnScroll className="md:col-span-8">
            <div className="h-full p-8 rounded-2xl border" style={{ borderColor: `${GOLD}15`, background: "#1a1710" }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${GOLD}15` }}>
                  <User size={18} style={{ color: GOLD }} />
                </div>
                <h3 className="text-xl font-bold" style={{ color: "hsl(40 20% 90%)" }}>Mon histoire</h3>
              </div>
              <div className="space-y-4 leading-relaxed" style={{ color: "hsl(40 10% 60%)" }}>
                <p>
                  Développeur full stack passionné par le web depuis plusieurs années, je me spécialise
                  dans la création de sites vitrines modernes et responsives. Mon expertise
                  couvre aussi bien le design que le développement fullstack.
                </p>
                <p>
                  Diplômé d'une Licence en Informatique en Design & Communication Digitale à l'IT University,
                  j'ai développé une solide expérience en travaillant chez Vanilla Pay International.
                </p>
                <p>
                  Ma passion pour la technologie me pousse à continuellement apprendre et à explorer
                  de nouvelles solutions pour créer des expériences web exceptionnelles.
                </p>
              </div>
            </div>
          </RevealOnScroll>

          <div className="md:col-span-4 flex flex-col gap-4">
            {/* Langues */}
            <RevealOnScroll delay={0.1}>
              <div className="p-6 rounded-2xl border" style={{ borderColor: `${GOLD}15`, background: "#1a1710" }}>
                <div className="flex items-center gap-2 mb-4">
                  <Globe size={16} style={{ color: GOLD }} />
                  <h3 className="text-sm font-bold uppercase tracking-widest" style={{ color: "hsl(40 20% 85%)" }}>Langues</h3>
                </div>
                <div className="space-y-3">
                  {[
                    { name: "Malgache", level: "Maternelle", percent: 100 },
                    { name: "Français", level: "Avancée", percent: 90 },
                    { name: "Anglais", level: "Intermédiaire", percent: 70 },
                  ].map((lang) => (
                    <div key={lang.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium" style={{ color: "hsl(40 15% 80%)" }}>{lang.name}</span>
                        <span className="text-xs font-mono" style={{ color: "hsl(40 10% 45%)" }}>{lang.level}</span>
                      </div>
                      <div className="h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${lang.percent}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 }}
                          className="h-full rounded-full"
                          style={{ background: GOLD }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            {/* Loisirs */}
            <RevealOnScroll delay={0.2}>
              <div className="p-6 rounded-2xl border" style={{ borderColor: `${GOLD}15`, background: "#1a1710" }}>
                <div className="flex items-center gap-2 mb-4">
                  <Heart size={16} style={{ color: GOLD }} />
                  <h3 className="text-sm font-bold uppercase tracking-widest" style={{ color: "hsl(40 20% 85%)" }}>Loisirs</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: "Danse", emoji: "💃" },
                    { name: "Basket", emoji: "🏀" },
                    { name: "Volley", emoji: "🏐" },
                  ].map((hobby) => (
                    <div
                      key={hobby.name}
                      className="flex items-center gap-2 px-3 py-2 rounded-xl border transition-all hover:scale-105 cursor-default"
                      style={{ borderColor: `${GOLD}20`, background: `${GOLD}08` }}
                    >
                      <span>{hobby.emoji}</span>
                      <span className="text-sm font-medium" style={{ color: "hsl(40 15% 75%)" }}>{hobby.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
