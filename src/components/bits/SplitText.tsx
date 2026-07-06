import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface Props {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
}

const SplitText = ({ text, className = "", delay = 0, duration = 0.7, stagger = 0.04 }: Props) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const chars = ref.current?.querySelectorAll(".sc");
    if (!chars) return;
    gsap.fromTo(
      chars,
      { opacity: 0, y: 50, rotateX: 40 },
      { opacity: 1, y: 0, rotateX: 0, duration, stagger, delay, ease: "power3.out" }
    );
  }, []);

  return (
    <span ref={ref} className={className} style={{ display: "inline-block", perspective: "600px" }}>
      {text.split("").map((char, i) => (
        <span key={i} className="sc" style={{ display: "inline-block" }}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};

export default SplitText;
