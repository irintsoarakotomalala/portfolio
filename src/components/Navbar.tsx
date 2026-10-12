import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring, useMotionValueEvent } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import portrait from "../assets/portrait-Photoroom.png";
import { DISPLAY_FONT, EASE_OUT, GOLD, INK, navItems, socials } from "@/lib/site";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#hero");
  const lastY = useRef(0);

  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  // Masque la barre en descendant, la réaffiche en remontant
  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 50);
    const goingDown = y > lastY.current;
    setHidden(goingDown && y > 400 && !mobileOpen);
    lastY.current = y;
  });

  // Scroll-spy : la section au centre de l'écran devient active
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => !!el);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveHref(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.45, ease: EASE_OUT }}
        className="fixed top-0 left-0 right-0 z-[60] flex justify-center pt-4 px-4"
      >
        <div
          className="relative w-full max-w-5xl flex items-center justify-between pl-2.5 pr-2.5 py-2 rounded-2xl transition-all duration-500 overflow-hidden"
          style={{
            background: scrolled || mobileOpen ? "rgba(14,12,8,0.88)" : "rgba(14,12,8,0.55)",
            backdropFilter: "blur(20px) saturate(140%)",
            WebkitBackdropFilter: "blur(20px) saturate(140%)",
            border: scrolled ? `1px solid ${GOLD}25` : "1px solid rgba(255,255,255,0.06)",
            boxShadow: scrolled ? "0 12px 40px rgba(0,0,0,0.45)" : "none",
          }}
        >
          {/* Logo */}
          <a href="#hero" className="group flex items-center gap-2.5 flex-shrink-0" onClick={() => setMobileOpen(false)}>
            <div
              className="w-9 h-9 rounded-xl overflow-hidden border transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3"
              style={{ borderColor: `${GOLD}40`, background: `${GOLD}12` }}
            >
              <img src={portrait} alt="Irintsoa" className="w-full h-full object-cover" style={{ objectPosition: "50% 8%" }} />
            </div>
            <span className="font-bold text-sm tracking-widest uppercase hidden sm:block" style={{ color: GOLD }}>
              Irintsoa
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => {
              const isActive = activeHref === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    className="relative block px-3 py-1.5 rounded-xl text-xs font-medium tracking-wide transition-colors duration-300 hover:text-[#e8d9b0]"
                    style={{ color: isActive ? GOLD : "hsl(40 10% 58%)" }}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-xl"
                        style={{ background: `${GOLD}14`, border: `1px solid ${GOLD}30` }}
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <a
            href="#contact"
            className="group hidden md:flex items-center gap-1.5 pl-5 pr-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all hover:brightness-110"
            style={{ background: GOLD, color: INK }}
          >
            Me contacter
            <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:rotate-45" />
          </a>

          {/* Burger mobile */}
          <button
            className="md:hidden w-10 h-10 rounded-xl border flex items-center justify-center transition-colors"
            style={{ borderColor: mobileOpen ? `${GOLD}50` : "rgba(255,255,255,0.1)", color: mobileOpen ? GOLD : "hsl(40 10% 65%)" }}
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mobileOpen ? "x" : "menu"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </motion.span>
            </AnimatePresence>
          </button>

          {/* Progression de lecture */}
          <motion.div
            className="absolute left-0 right-0 bottom-0 h-[2px] origin-left"
            style={{ scaleX: progress, background: `linear-gradient(90deg, ${GOLD}00, ${GOLD})` }}
          />
        </div>
      </motion.nav>

      {/* Menu mobile plein écran */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 0.15 } }}
            className="fixed inset-0 z-[55] md:hidden flex flex-col justify-between px-6 pt-28 pb-10"
            style={{ background: "rgba(10,9,6,0.97)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}
          >
            <ul className="flex flex-col">
              {navItems.map((item, i) => {
                const isActive = activeHref === item.href;
                return (
                  <li key={item.href} className="overflow-hidden border-b" style={{ borderColor: `${GOLD}12` }}>
                    <motion.a
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "100%" }}
                      transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.05 + i * 0.05 }}
                      className="flex items-baseline justify-between py-3"
                    >
                      <span
                        className="font-black uppercase leading-none"
                        style={{ fontFamily: DISPLAY_FONT, fontSize: "clamp(36px, 11vw, 56px)", color: isActive ? GOLD : "hsl(40 20% 90%)" }}
                      >
                        {item.label}
                      </span>
                      <span className="text-xs font-mono" style={{ color: `${GOLD}70` }}>
                        {String(i).padStart(2, "0")}
                      </span>
                    </motion.a>
                  </li>
                );
              })}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.4 } }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-between gap-4"
            >
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={label !== "Email" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-11 h-11 rounded-full border flex items-center justify-center"
                    style={{ borderColor: `${GOLD}30`, color: GOLD }}
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 px-5 py-3 rounded-full text-sm font-bold"
                style={{ background: GOLD, color: INK }}
              >
                Me contacter <ArrowUpRight size={15} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
