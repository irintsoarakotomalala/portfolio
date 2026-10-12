import { motion } from "framer-motion";
import { DISPLAY_FONT, EASE_OUT, GOLD, TEXT, TEXT_MUTED } from "@/lib/site";

interface Props {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  aside?: React.ReactNode;
  className?: string;
}

// En-tête commun : numéro + libellé, grand titre révélé par masque, texte d'accompagnement optionnel
const SectionHeading = ({ index, eyebrow, title, aside, className = "" }: Props) => (
  <div className={`mb-12 md:mb-16 flex flex-wrap items-end justify-between gap-6 ${className}`}>
    <div>
      <motion.p
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: EASE_OUT }}
        className="flex items-center gap-3 text-xs font-mono tracking-widest uppercase mb-3"
        style={{ color: GOLD }}
      >
        <span>{index}.</span>
        <span className="h-px w-8" style={{ background: `${GOLD}60` }} />
        <span>{eyebrow}</span>
      </motion.p>
      <div className="overflow-hidden pb-1">
        <motion.h2
          initial={{ y: "105%" }}
          whileInView={{ y: "0%" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: EASE_OUT, delay: 0.05 }}
          className="font-black uppercase leading-[0.9]"
          style={{ fontFamily: DISPLAY_FONT, fontSize: "clamp(48px, 7vw, 96px)", color: TEXT }}
        >
          {title}
        </motion.h2>
      </div>
    </div>
    {aside && (
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.2 }}
        className="max-w-xs text-sm leading-relaxed"
        style={{ color: TEXT_MUTED }}
      >
        {aside}
      </motion.p>
    )}
  </div>
);

export default SectionHeading;
