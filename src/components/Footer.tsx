import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-6 text-center border-t border-border/30 bg-section-alt/50">
      <p className="text-xs font-mono text-muted-foreground flex items-center justify-center gap-1">
        Conçu & développé avec <Heart size={12} className="text-primary animate-pulse" /> par RAKOTOMALALA Irintsoa
      </p>
      <p className="text-xs font-mono text-muted-foreground/50 mt-1">
        © {new Date().getFullYear()} Tous droits réservés.
      </p>
    </footer>
  );
};

export default Footer;
