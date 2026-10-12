import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { DISPLAY_FONT, EASE_OUT, EMAIL, GOLD, INK, TEXT_FAINT, navItems, socials } from "@/lib/site";

// Heure locale à Madagascar, mise à jour chaque minute
const useMadagascarTime = () => {
  const format = () =>
    new Intl.DateTimeFormat("fr-FR", { hour: "2-digit", minute: "2-digit", timeZone: "Indian/Antananarivo" }).format(new Date());
  const [time, setTime] = useState(format);
  useEffect(() => {
    const id = setInterval(() => setTime(format()), 30_000);
    return () => clearInterval(id);
  }, []);
  return time;
};

const Footer = () => {
  const time = useMadagascarTime();

  return (
    <footer className="relative overflow-hidden border-t" style={{ background: "#0e0c08", borderColor: `${GOLD}15` }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 pt-16 md:pt-20">
        {/* CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b" style={{ borderColor: `${GOLD}12` }}>
          <div>
            <p className="text-xs font-mono tracking-widest uppercase mb-3" style={{ color: GOLD }}>Un projet en tête ?</p>
            <p className="font-black uppercase leading-[0.9]" style={{ fontFamily: DISPLAY_FONT, fontSize: "clamp(40px, 6vw, 72px)", color: "hsl(40 20% 92%)" }}>
              Parlons-en <span style={{ color: GOLD }}>.</span>
            </p>
          </div>
          <a
            href={`mailto:${EMAIL}`}
            className="group self-start md:self-auto flex items-center gap-3 pl-6 pr-2 py-2 rounded-full font-bold text-sm transition-all hover:-translate-y-0.5"
            style={{ background: GOLD, color: INK, boxShadow: `0 14px 40px -14px ${GOLD}` }}
          >
            Écrivez-moi
            <span className="w-9 h-9 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-45" style={{ background: INK, color: GOLD }}>
              <ArrowUpRight size={16} />
            </span>
          </a>
        </div>

        {/* Liens */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
          <div className="col-span-2">
            <p className="font-bold text-sm tracking-widest uppercase mb-3" style={{ color: GOLD }}>Irintsoa</p>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: TEXT_FAINT }}>
              Développeur Full-Stack & Designer. Je conçois des expériences web élégantes, performantes et centrées utilisateur.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono" style={{ borderColor: `${GOLD}25`, color: "hsl(40 15% 70%)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Madagascar · {time}
            </div>
          </div>

          <nav aria-label="Pied de page">
            <p className="text-[10px] font-mono uppercase tracking-widest mb-4" style={{ color: TEXT_FAINT }}>Navigation</p>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="group inline-flex items-center gap-2 text-sm transition-colors hover:text-[#C4A050]" style={{ color: "hsl(40 10% 65%)" }}>
                    <span className="h-px w-0 transition-all duration-300 group-hover:w-3" style={{ background: GOLD }} />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-[10px] font-mono uppercase tracking-widest mb-4" style={{ color: TEXT_FAINT }}>Réseaux</p>
            <ul className="space-y-2">
              {socials.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={label !== "Email" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 text-sm transition-colors hover:text-[#C4A050]"
                    style={{ color: "hsl(40 10% 65%)" }}
                  >
                    {label}
                    <ArrowUpRight size={13} className="opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Logotype géant */}
      <div className="relative select-none pointer-events-none overflow-hidden" aria-hidden>
        <motion.p
          initial={{ y: "40%", opacity: 0 }}
          whileInView={{ y: "0%", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: EASE_OUT }}
          className="text-center font-black uppercase leading-[0.78] whitespace-nowrap"
          style={{
            fontFamily: DISPLAY_FONT,
            fontSize: "clamp(80px, 22vw, 340px)",
            color: "transparent",
            WebkitTextStroke: `1px ${GOLD}30`,
            backgroundImage: `linear-gradient(to bottom, ${GOLD}22, transparent 85%)`,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}
        >
          Irintsoa
        </motion.p>
      </div>

      {/* Bas de page */}
      <div className="border-t" style={{ borderColor: `${GOLD}12` }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-5 flex flex-col-reverse sm:flex-row items-center justify-between gap-3">
          <p className="text-xs font-mono" style={{ color: "hsl(40 10% 38%)" }}>
            © {new Date().getFullYear()} RAKOTOMALALA Irintsoa · Tous droits réservés.
          </p>
          <a
            href="#hero"
            className="group flex items-center gap-2 text-xs font-mono uppercase tracking-widest transition-colors hover:text-[#C4A050]"
            style={{ color: "hsl(40 10% 50%)" }}
          >
            Haut de page
            <span className="w-7 h-7 rounded-full border flex items-center justify-center transition-transform group-hover:-translate-y-0.5" style={{ borderColor: `${GOLD}35`, color: GOLD }}>
              <ArrowUp size={13} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
