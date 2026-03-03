import { motion } from "framer-motion";
import portraitImg from "/portrait.png";

const jsonLines = [
  { type: "brace", content: "{" },
  { type: "entry", key: "name", value: '"RAKOTOMALALA Irintsoa"' },
  { type: "entry", key: "title", value: '"Fullstack Developer & Designer"' },
  { type: "entry", key: "location", value: '"Madagascar 🇲🇬"' },
  { type: "entry", key: "email", value: '"contact@irintsoa.dev"', isEmail: true },
  {
    type: "entry",
    key: "github",
    value: '"github.com/irintsoa"',
    isLink: true,
    href: "https://github.com",
  },
  {
    type: "entry",
    key: "linkedin",
    value: '"linkedin.com/in/irintsoa"',
    isLink: true,
    href: "https://linkedin.com",
  },
  { type: "array-open", key: "stack" },
  { type: "array-item", value: '"React"', comma: true },
  { type: "array-item", value: '"Node.js"', comma: true },
  { type: "array-item", value: '"TypeScript"', comma: true },
  { type: "array-item", value: '"Figma"', comma: false },
  { type: "array-close", comma: false },
  { type: "brace", content: "}" },
];

const MacOSCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.7, type: "spring", stiffness: 80 }}
      whileHover={{ y: -6 }}
      className="relative w-full max-w-lg"
    >
      {/* Subtle glow */}
      <div className="absolute -inset-1 rounded-2xl bg-white/5 blur-xl opacity-50" />

      {/* macOS Window */}
      <div
        className="relative rounded-xl overflow-hidden border border-white/10"
        style={{
          background: "linear-gradient(135deg, #0D1117 0%, #0f1923 100%)",
          boxShadow:
            "0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)",
        }}
      >
        {/* Title Bar */}
        <div
          className="flex items-center px-4 py-3 border-b border-white/5 select-none"
          style={{ background: "rgba(255,255,255,0.03)" }}
        >
          {/* Traffic Lights */}
          <div className="flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="w-3 h-3 rounded-full cursor-pointer"
              style={{ background: "#FF5F57", boxShadow: "0 0 6px #FF5F5780" }}
            />
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="w-3 h-3 rounded-full cursor-pointer"
              style={{ background: "#FEBC2E", boxShadow: "0 0 6px #FEBC2E80" }}
            />
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="w-3 h-3 rounded-full cursor-pointer"
              style={{ background: "#28C840", boxShadow: "0 0 6px #28C84080" }}
            />
          </div>

          {/* File name */}
          <div className="flex-1 flex items-center justify-center gap-2">
            <span className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.5)" }}>
              📄
            </span>
            <span className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.5)" }}>
              Business Card.json
            </span>
          </div>

          {/* Right spacer */}
          <div className="w-16" />
        </div>

        {/* Content area: photo + JSON */}
        <div className="flex min-h-[300px]">
          {/* Left: Photo */}
          <div className="relative w-48 flex-shrink-0 overflow-hidden border-r border-white/5">
            <img
              src={portraitImg}
              alt="Irintsoa"
              className="w-full h-full object-cover"
              style={{ objectPosition: "50% 15%", minHeight: "300px" }}
            />
            {/* Overlay gradient */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, transparent 60%, #0D1117 100%), linear-gradient(to bottom, transparent 70%, #0D111790 100%)",
              }}
            />
            {/* Status dot */}
            <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-mono text-green-400/80">open</span>
            </div>
          </div>

          {/* Right: JSON content */}
          <div className="flex-1 p-4 font-mono text-xs overflow-hidden">
            {/* Line numbers + code */}
            {jsonLines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.06, duration: 0.3 }}
                className="flex gap-3 leading-5"
              >
                {/* Line number */}
                <span
                  className="text-xs select-none w-4 text-right flex-shrink-0 mt-0.5"
                  style={{ color: "rgba(255,255,255,0.18)" }}
                >
                  {index + 1}
                </span>

                {/* Code */}
                <span className="text-xs">
                  {line.type === "brace" && (
                    <span style={{ color: "rgba(255,255,255,0.5)" }}>
                      {line.content}
                    </span>
                  )}

                  {line.type === "entry" && (
                    <>
                      <span style={{ color: "rgba(255,255,255,0.6)" }}>"{line.key}"</span>
                      <span style={{ color: "rgba(255,255,255,0.4)" }}>: </span>
                      {line.isLink ? (
                        <a
                          href={line.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                          style={{ color: "rgba(255,255,255,0.85)" }}
                        >
                          {line.value}
                        </a>
                      ) : (
                        <span style={{ color: "rgba(255,255,255,0.85)" }}>{line.value}</span>
                      )}
                      <span style={{ color: "rgba(255,255,255,0.3)" }}>,</span>
                    </>
                  )}

                  {line.type === "array-open" && (
                    <>
                      <span style={{ color: "rgba(255,255,255,0.6)" }}>"{line.key}"</span>
                      <span style={{ color: "rgba(255,255,255,0.4)" }}>: </span>
                      <span style={{ color: "rgba(255,255,255,0.5)" }}>[</span>
                    </>
                  )}

                  {line.type === "array-item" && (
                    <>
                      <span style={{ color: "rgba(255,255,255,0)" }}>
                        {"  "}
                      </span>
                      <span style={{ color: "rgba(255,255,255,0.85)", paddingLeft: "1rem" }}>
                        {line.value}
                      </span>
                      {line.comma && (
                        <span style={{ color: "rgba(255,255,255,0.3)" }}>,</span>
                      )}
                    </>
                  )}

                  {line.type === "array-close" && (
                    <>
                      <span style={{ color: "rgba(255,255,255,0.5)" }}>]</span>
                      {line.comma && (
                        <span style={{ color: "rgba(255,255,255,0.3)" }}>,</span>
                      )}
                    </>
                  )}
                </span>
              </motion.div>
            ))}

            {/* Cursor blink */}
            <div className="flex gap-3 mt-1">
              <span className="text-xs w-4 text-right" style={{ color: "rgba(255,255,255,0.18)" }}>
                {jsonLines.length + 1}
              </span>
              <span
                className="text-xs inline-block w-2 h-4 typing-cursor"
                style={{ background: "rgba(255,255,255,0.7)", opacity: 0.7 }}
              />
            </div>
          </div>
        </div>

        {/* Status Bar */}
        <div
          className="flex items-center justify-between px-4 py-1.5 border-t border-white/5"
          style={{ background: "rgba(255,255,255,0.02)" }}
        >
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.35)" }}>
              JSON
            </span>
            <span className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.2)" }}>
              UTF-8
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.3)" }}>
              Ln {jsonLines.length}, Col 1
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MacOSCard;

