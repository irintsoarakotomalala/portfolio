const GOLD = "#C4A050";

const Footer = () => {
  return (
    <footer
      className="py-8 px-6 text-center border-t"
      style={{ background: "#13110d", borderColor: `${GOLD}15` }}
    >
      <p
        className="text-xs font-mono uppercase tracking-widest"
        style={{ color: "hsl(40 10% 40%)" }}
      >
        RAKOTOMALALA Irintsoa
      </p>
      <p className="text-xs font-mono mt-1" style={{ color: "hsl(40 10% 30%)" }}>
        © {new Date().getFullYear()} Tous droits réservés.
      </p>
    </footer>
  );
};

export default Footer;
