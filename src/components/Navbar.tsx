import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const GOLD = "#C4A050";

const navItems = [
  { label: "Accueil", href: "#hero" },
  { label: "À propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Projets", href: "#projects" },
  { label: "Expérience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4"
    >
      <div
        className="w-full max-w-5xl flex items-center justify-between px-4 py-2.5 rounded-2xl transition-all duration-300"
        style={{
          background: scrolled ? "rgba(14,12,8,0.92)" : "rgba(14,12,8,0.75)",
          backdropFilter: "blur(20px)",
          border: scrolled ? `1px solid ${GOLD}25` : "1px solid rgba(255,255,255,0.06)",
          boxShadow: scrolled ? `0 8px 32px rgba(0,0,0,0.4)` : "none",
        }}
      >
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5 flex-shrink-0">
          <div className="w-9 h-9 rounded-xl overflow-hidden border" style={{ borderColor: `${GOLD}30` }}>
            <img
              src="/portrait-Photoroom.png"
              alt="Irintsoa"
              className="w-full h-full object-cover object-top"
              style={{ objectPosition: "50% 8%" }}
            />
          </div>
          <span className="font-bold text-sm tracking-widest uppercase hidden sm:block" style={{ color: GOLD }}>
            Irintsoa
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setActiveHref(item.href)}
                className="relative px-3 py-1.5 rounded-xl text-xs font-medium tracking-wide transition-all"
                style={{ color: activeHref === item.href ? GOLD : "hsl(40 10% 55%)" }}
              >
                {item.label}
                {activeHref === item.href && (
                  <motion.span
                    layoutId="nav-dot"
                    className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{ background: GOLD }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-bold tracking-wide transition-all hover:brightness-110"
          style={{ background: GOLD, color: "#0e0c08" }}
        >
          Me contacter →
        </a>

        {/* Mobile burger */}
        <button
          className="md:hidden w-9 h-9 rounded-xl border flex items-center justify-center transition-colors"
          style={{ borderColor: "rgba(255,255,255,0.1)", color: "hsl(40 10% 55%)" }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full mt-2 left-4 right-4 rounded-2xl p-4 shadow-2xl"
          style={{ background: "rgba(14,12,8,0.98)", backdropFilter: "blur(20px)", border: `1px solid ${GOLD}15` }}
        >
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block px-4 py-3 rounded-xl text-sm font-medium transition-all"
                  style={{ color: "hsl(40 10% 60%)" }}
                  onClick={() => { setActiveHref(item.href); setMobileOpen(false); }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
