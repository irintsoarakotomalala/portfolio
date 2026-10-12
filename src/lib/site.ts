import { Github, Linkedin, Mail, type LucideIcon } from "lucide-react";

// Palette partagée par toutes les sections
export const GOLD = "#C4A050";
export const INK = "#0e0c08";
export const SURFACE = "#1a1710";
export const TEXT = "hsl(40 20% 92%)";
export const TEXT_MUTED = "hsl(40 10% 60%)";
export const TEXT_FAINT = "hsl(40 10% 45%)";
export const DISPLAY_FONT = "'Barlow Condensed', sans-serif";
export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const EMAIL = "rakotomalalairintsoa285@gmail.com";

export const socials: { icon: LucideIcon; href: string; label: string; handle: string }[] = [
  { icon: Github, href: "https://github.com/irintsoarakotomalala", label: "GitHub", handle: "irintsoarakotomalala" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/irintsoa-rakotomalala", label: "LinkedIn", handle: "irintsoa-rakotomalala" },
  { icon: Mail, href: `mailto:${EMAIL}`, label: "Email", handle: EMAIL },
];

export const navItems = [
  { label: "Accueil", href: "#hero" },
  { label: "À propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Projets", href: "#projects" },
  { label: "Expérience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
