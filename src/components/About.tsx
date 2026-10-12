import { motion } from "framer-motion";
import { User, Heart, Globe, MapPin, GraduationCap, Briefcase, Sparkles, Quote } from "lucide-react";
import RevealOnScroll from "./bits/RevealOnScroll";
import SectionHeading from "./bits/SectionHeading";
import SpotlightCard from "./bits/SpotlightCard";
import { DISPLAY_FONT, EASE_OUT, GOLD, TEXT, TEXT_FAINT, TEXT_MUTED } from "@/lib/site";

const BG = "#13110d";

const facts = [
  { icon: MapPin, label: "Basé à", value: "Madagascar" },
  { icon: Briefcase, label: "Actuellement", value: "Vanilla Pay International" },
  { icon: GraduationCap, label: "Formation", value: "Licence Informatique — IT University" },
  { icon: Sparkles, label: "Spécialité", value: "Sites vitrines & plateformes web" },
];

const languages = [
  { name: "Malgache", level: "Maternelle", score: 10 },
  { name: "Français", level: "Avancé", score: 9 },
  { name: "Anglais", level: "Intermédiaire", score: 7 },
];

const hobbies = [
  { name: "Danse", emoji: "💃" },
  { name: "Basket", emoji: "🏀" },
  { name: "Volley", emoji: "🏐" },
];

const CardTitle = ({ icon: Icon, children }: { icon: typeof User; children: React.ReactNode }) => (
  <div className="flex items-center gap-3 mb-6">
    <div className="w-10 h-10 rounded-xl flex items-center justify-center border" style={{ background: `${GOLD}12`, borderColor: `${GOLD}25` }}>
      <Icon size={17} style={{ color: GOLD }} />
    </div>
    <h3 className="text-sm font-bold uppercase tracking-widest" style={{ color: "hsl(40 20% 85%)" }}>{children}</h3>
  </div>
);

const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className="font-semibold" style={{ color: TEXT }}>{children}</span>
);

const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden" style={{ background: BG, paddingTop: "7rem" }}>
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full"
        style={{ background: `radial-gradient(circle, ${GOLD}10, transparent 65%)` }}
      />
      <div className="relative max-w-6xl mx-auto">
        <SectionHeading
          index="01"
          eyebrow="À propos"
          title="Qui suis-je ?"
          aside="Entre design et développement, je construis des interfaces qui allient esthétique, performance et simplicité d'usage."
        />

        <div className="grid md:grid-cols-12 gap-4">
          {/* Bio */}
          <RevealOnScroll className="md:col-span-7 lg:col-span-8">
            <SpotlightCard className="h-full p-7 md:p-9">
              <CardTitle icon={User}>Mon histoire</CardTitle>
              <p className="text-lg md:text-xl leading-relaxed mb-5" style={{ color: "hsl(40 15% 78%)" }}>
                Développeur <Highlight>full stack</Highlight> passionné par le web, je me spécialise dans la création de
                <Highlight> sites vitrines modernes</Highlight> et de <Highlight>plateformes sur mesure</Highlight>.
              </p>
              <div className="space-y-4 leading-relaxed text-[15px]" style={{ color: TEXT_MUTED }}>
                <p>
                  Diplômé d'une Licence en Informatique — Design & Communication Digitale à l'IT University, j'ai bâti
                  une solide expérience chez <Highlight>Vanilla Pay International</Highlight>, du rebranding complet de
                  l'entreprise jusqu'au développement d'applications web et mobile.
                </p>
                <p>
                  Ma passion pour la technologie me pousse à apprendre en continu et à explorer de nouvelles solutions
                  pour créer des expériences web qui marquent.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t flex items-start gap-3" style={{ borderColor: `${GOLD}15` }}>
                <Quote size={20} className="flex-shrink-0 mt-0.5" style={{ color: GOLD }} />
                <p className="font-bold uppercase leading-tight text-xl md:text-2xl" style={{ fontFamily: DISPLAY_FONT, color: "hsl(40 20% 88%)" }}>
                  Le design et le code, au service de l'utilisateur.
                </p>
              </div>
            </SpotlightCard>
          </RevealOnScroll>

          {/* En bref */}
          <RevealOnScroll delay={0.1} className="md:col-span-5 lg:col-span-4">
            <SpotlightCard className="h-full p-6 md:p-7">
              <CardTitle icon={Sparkles}>En bref</CardTitle>
              <ul className="space-y-1">
                {facts.map(({ icon: Icon, label, value }, i) => (
                  <motion.li
                    key={label}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08, duration: 0.5, ease: EASE_OUT }}
                    className="flex items-start gap-3 p-2.5 -mx-2.5 rounded-xl transition-colors hover:bg-[#C4A050]/[0.06]"
                  >
                    <Icon size={15} className="mt-1 flex-shrink-0" style={{ color: `${GOLD}b0` }} />
                    <div className="min-w-0">
                      <p className="text-[10px] font-mono uppercase tracking-widest" style={{ color: TEXT_FAINT }}>{label}</p>
                      <p className="text-sm font-medium" style={{ color: "hsl(40 15% 82%)" }}>{value}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-5 flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border" style={{ borderColor: `${GOLD}30`, background: `${GOLD}0a` }}>
                <span className="relative flex w-2 h-2">
                  <span className="absolute inset-0 rounded-full animate-ping opacity-60 bg-emerald-400" />
                  <span className="relative w-2 h-2 rounded-full bg-emerald-400" />
                </span>
                <span className="text-xs font-mono" style={{ color: "hsl(40 15% 75%)" }}>Ouvert aux nouvelles opportunités</span>
              </div>
            </SpotlightCard>
          </RevealOnScroll>

          {/* Langues */}
          <RevealOnScroll delay={0.15} className="md:col-span-6">
            <SpotlightCard className="h-full p-6 md:p-7">
              <CardTitle icon={Globe}>Langues</CardTitle>
              <div className="space-y-5">
                {languages.map((lang, li) => (
                  <div key={lang.name}>
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="text-sm font-semibold" style={{ color: "hsl(40 15% 85%)" }}>{lang.name}</span>
                      <span className="text-[11px] font-mono uppercase tracking-wider" style={{ color: TEXT_FAINT }}>{lang.level}</span>
                    </div>
                    <div className="grid grid-cols-10 gap-1">
                      {Array.from({ length: 10 }).map((_, i) => (
                        <motion.span
                          key={i}
                          initial={{ scaleY: 0.3, opacity: 0.2 }}
                          whileInView={{ scaleY: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + li * 0.15 + i * 0.04, duration: 0.4 }}
                          className="h-1.5 rounded-full"
                          style={{ background: i < lang.score ? GOLD : "rgba(255,255,255,0.07)" }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </RevealOnScroll>

          {/* Loisirs */}
          <RevealOnScroll delay={0.2} className="md:col-span-6">
            <SpotlightCard className="h-full p-6 md:p-7">
              <CardTitle icon={Heart}>Loisirs</CardTitle>
              <div className="grid grid-cols-3 gap-3">
                {hobbies.map((hobby, i) => (
                  <motion.div
                    key={hobby.name}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 + i * 0.08, duration: 0.5, ease: EASE_OUT }}
                    whileHover={{ y: -4 }}
                    className="group flex flex-col items-center justify-center gap-2 py-5 rounded-xl border cursor-default transition-colors hover:border-[#C4A050]/40"
                    style={{ borderColor: `${GOLD}18`, background: `${GOLD}06` }}
                  >
                    <span className="text-3xl transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-6">{hobby.emoji}</span>
                    <span className="text-xs font-mono uppercase tracking-wider" style={{ color: "hsl(40 15% 75%)" }}>{hobby.name}</span>
                  </motion.div>
                ))}
              </div>
            </SpotlightCard>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default About;
