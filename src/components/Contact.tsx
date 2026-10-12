import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, MapPin, Copy, Check, Loader2, ArrowUpRight, Clock } from "lucide-react";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';
import SectionHeading from "./bits/SectionHeading";
import SpotlightCard from "./bits/SpotlightCard";
import { DISPLAY_FONT, EASE_OUT, EMAIL, GOLD, INK, SURFACE, TEXT_FAINT, socials } from "@/lib/site";

type Field = "name" | "email" | "message";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MESSAGE_MAX = 1000;

const validate = (form: Record<Field, string>) => {
  const errors: Partial<Record<Field, string>> = {};
  if (!form.name.trim()) errors.name = "Indiquez votre nom.";
  if (!form.email.trim()) errors.email = "Indiquez votre email.";
  else if (!emailRegex.test(form.email)) errors.email = "Adresse email invalide.";
  if (!form.message.trim()) errors.message = "Décrivez votre projet en quelques mots.";
  return errors;
};

// Label qui remonte au focus / dès qu'un texte est saisi (doit suivre l'input en tant que "peer")
const FloatingLabel = ({ htmlFor, children }: { htmlFor: Field; children: React.ReactNode }) => (
  <label
    htmlFor={htmlFor}
    className="pointer-events-none absolute left-4 top-2 text-[10px] font-mono uppercase tracking-widest transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:font-sans peer-focus:top-2 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-widest peer-focus:font-mono peer-focus:text-[#C4A050]"
    style={{ color: TEXT_FAINT }}
  >
    {children}
  </label>
);

const ErrorText = ({ id, error }: { id: Field; error?: string }) => (
  <AnimatePresence>
    {error && (
      <motion.p
        id={`${id}-error`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        className="text-xs text-red-400 mt-1.5 pl-1"
      >
        {error}
      </motion.p>
    )}
  </AnimatePresence>
);

const Contact = () => {
  const [form, setForm] = useState<Record<Field, string>>({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [copied, setCopied] = useState(false);

  const errors = validate(form);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (Object.keys(errors).length > 0) {
      toast.error("Veuillez corriger les champs indiqués.");
      return;
    }
    setStatus("sending");
    try {
      await emailjs.send(
        'service_cohsebj',
        'template_evq67sr',
        { from_name: form.name, from_email: form.email, message: form.message },
        '5GuFuiFaocGehr_ZA'
      );
      toast.success("Message envoyé avec succès !");
      setForm({ name: "", email: "", message: "" });
      setTouched({});
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 3500);
    } catch (error) {
      toast.error("Erreur lors de l'envoi. Réessayez.");
      setStatus("idle");
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      toast.success("Email copié dans le presse-papier");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  const fieldProps = (id: Field) => ({
    id,
    value: form[id],
    placeholder: " ",
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm({ ...form, [id]: e.target.value }),
    onBlur: () => setTouched((t) => ({ ...t, [id]: true })),
    "aria-invalid": !!(touched[id] && errors[id]),
    "aria-describedby": `${id}-error`,
    className:
      "peer w-full rounded-xl border px-4 pt-6 pb-2.5 text-sm outline-none transition-all duration-300 bg-transparent focus:border-[#C4A050]/70 focus:bg-[#C4A050]/[0.04] focus:shadow-[0_0_0_4px_rgba(196,160,80,0.08)]",
    style: {
      borderColor: touched[id] && errors[id] ? "rgba(248,113,113,0.6)" : `${GOLD}22`,
      color: "hsl(40 15% 88%)",
      background: "#14120d",
    },
  });

  const errorFor = (id: Field) => (touched[id] ? errors[id] : undefined);

  return (
    <section id="contact" className="section-padding relative overflow-hidden" style={{ background: "#16140f" }}>
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-60 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full"
        style={{ background: `radial-gradient(ellipse, ${GOLD}14, transparent 65%)` }}
      />
      <div className="relative max-w-6xl mx-auto">
        <SectionHeading
          index="05"
          eyebrow="Contact"
          title={<>Travaillons<br />ensemble</>}
          aside="Un projet, une idée ou simplement une question ? Écrivez-moi, je vous réponds rapidement."
        />

        <div className="grid lg:grid-cols-12 gap-5">
          {/* Coordonnées */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE_OUT }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {/* Email */}
            <SpotlightCard className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center border" style={{ background: `${GOLD}12`, borderColor: `${GOLD}25` }}>
                  <Mail size={16} style={{ color: GOLD }} />
                </div>
                <p className="text-[10px] font-mono uppercase tracking-widest" style={{ color: TEXT_FAINT }}>Email direct</p>
              </div>
              <a
                href={`mailto:${EMAIL}`}
                className="block font-bold break-all leading-tight mb-4 transition-colors hover:text-[#C4A050]"
                style={{ fontFamily: DISPLAY_FONT, fontSize: "clamp(20px, 2.4vw, 26px)", color: "hsl(40 20% 90%)" }}
              >
                {EMAIL}
              </a>
              <div className="flex gap-2">
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border transition-all hover:-translate-y-0.5"
                  style={{ borderColor: `${GOLD}40`, color: GOLD, background: `${GOLD}0d` }}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={copied ? "ok" : "copy"}
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      {copied ? <Check size={14} /> : <Copy size={14} />}
                    </motion.span>
                  </AnimatePresence>
                  {copied ? "Copié !" : "Copier"}
                </button>
                <a
                  href={`mailto:${EMAIL}`}
                  className="group flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border transition-all hover:-translate-y-0.5"
                  style={{ borderColor: "rgba(255,255,255,0.12)", color: "hsl(40 15% 75%)" }}
                >
                  Ouvrir <ArrowUpRight size={13} className="transition-transform group-hover:rotate-45" />
                </a>
              </div>
            </SpotlightCard>

            <div className="grid grid-cols-2 gap-4">
              <SpotlightCard className="p-5">
                <MapPin size={16} className="mb-3" style={{ color: GOLD }} />
                <p className="text-[10px] font-mono uppercase tracking-widest mb-1" style={{ color: TEXT_FAINT }}>Localisation</p>
                <p className="text-sm font-medium" style={{ color: "hsl(40 15% 82%)" }}>Madagascar</p>
              </SpotlightCard>
              <SpotlightCard className="p-5">
                <Clock size={16} className="mb-3" style={{ color: GOLD }} />
                <p className="text-[10px] font-mono uppercase tracking-widest mb-1" style={{ color: TEXT_FAINT }}>Fuseau</p>
                <p className="text-sm font-medium" style={{ color: "hsl(40 15% 82%)" }}>GMT+3</p>
              </SpotlightCard>
            </div>

            {/* Réseaux */}
            <SpotlightCard className="p-2">
              {socials.filter((s) => s.label !== "Email").map(({ icon: Icon, href, label, handle }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-3 px-4 py-3.5 rounded-xl transition-colors hover:bg-[#C4A050]/[0.07]"
                >
                  <span className="flex items-center gap-3 min-w-0">
                    <Icon size={17} style={{ color: GOLD }} />
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold" style={{ color: "hsl(40 15% 85%)" }}>{label}</span>
                      <span className="block text-xs font-mono truncate" style={{ color: TEXT_FAINT }}>{handle}</span>
                    </span>
                  </span>
                  <ArrowUpRight size={16} className="flex-shrink-0 transition-all duration-300 group-hover:rotate-45 group-hover:text-[#C4A050]" style={{ color: TEXT_FAINT }} />
                </a>
              ))}
            </SpotlightCard>
          </motion.div>

          {/* Formulaire */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <SpotlightCard className="h-full p-6 md:p-8" style={{ background: SURFACE }}>
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4 h-full">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <div className="relative">
                      <input type="text" maxLength={100} autoComplete="name" {...fieldProps("name")} />
                      <FloatingLabel htmlFor="name">Nom</FloatingLabel>
                    </div>
                    <ErrorText id="name" error={errorFor("name")} />
                  </div>
                  <div>
                    <div className="relative">
                      <input type="email" maxLength={255} autoComplete="email" {...fieldProps("email")} />
                      <FloatingLabel htmlFor="email">Email</FloatingLabel>
                    </div>
                    <ErrorText id="email" error={errorFor("email")} />
                  </div>
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="relative flex-1 flex">
                    <textarea rows={7} maxLength={MESSAGE_MAX} {...fieldProps("message")} className={fieldProps("message").className + " resize-none flex-1 min-h-[180px]"} />
                    <FloatingLabel htmlFor="message">Votre message</FloatingLabel>
                    <span className="absolute right-4 bottom-3 text-[10px] font-mono pointer-events-none" style={{ color: form.message.length > MESSAGE_MAX * 0.9 ? GOLD : TEXT_FAINT }}>
                      {form.message.length}/{MESSAGE_MAX}
                    </span>
                  </div>
                  <ErrorText id="message" error={errorFor("message")} />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <p className="text-xs" style={{ color: TEXT_FAINT }}>Tous les champs sont requis.</p>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group relative flex items-center justify-center gap-2 min-w-[210px] px-7 py-3.5 rounded-full font-bold text-sm tracking-wide overflow-hidden transition-all hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-wait"
                    style={{
                      background: status === "sent" ? "#34d399" : GOLD,
                      color: INK,
                      boxShadow: `0 12px 30px -12px ${status === "sent" ? "#34d399" : GOLD}`,
                    }}
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.span
                        key={status}
                        initial={{ y: 16, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -16, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-2"
                      >
                        {status === "sending" && <><Loader2 size={15} className="animate-spin" /> Envoi en cours…</>}
                        {status === "sent" && <><Check size={15} /> Message envoyé</>}
                        {status === "idle" && <><Send size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /> Envoyer le message</>}
                      </motion.span>
                    </AnimatePresence>
                  </button>
                </div>
              </form>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
