import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Github, Linkedin } from "lucide-react";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';
import RevealOnScroll from "./bits/RevealOnScroll";

const GOLD = "#C4A050";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Veuillez remplir tous les champs.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      toast.error("Veuillez entrer une adresse email valide.");
      return;
    }
    setSending(true);
    try {
      await emailjs.send(
        'service_cohsebj',
        'template_evq67sr',
        { from_name: form.name, from_email: form.email, message: form.message },
        '5GuFuiFaocGehr_ZA'
      );
      toast.success("Message envoyé avec succès !");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Erreur lors de l'envoi. Réessayez.");
    } finally {
      setSending(false);
    }
  };

  const inputClass = "w-full rounded-xl border px-4 py-3 text-sm font-mono transition-all outline-none focus:border-[#C4A050]/60";
  const inputStyle = {
    borderColor: `${GOLD}20`,
    background: "#1a1710",
    color: "hsl(40 15% 85%)",
  };

  return (
    <section id="contact" className="section-padding" style={{ background: "#16140f" }}>
      <div className="max-w-4xl mx-auto">
        <RevealOnScroll className="mb-12">
          <p className="text-xs font-mono tracking-widest uppercase mb-3" style={{ color: GOLD }}>
            05. Contact
          </p>
          <h2
            className="font-black uppercase leading-none"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(48px, 7vw, 96px)",
              color: "hsl(40 20% 92%)",
            }}
          >
            Travaillons
            <br />
            ensemble
          </h2>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {[
              { id: "name", label: "Nom", type: "text", placeholder: "Votre nom", maxLength: 100 },
              { id: "email", label: "Email", type: "email", placeholder: "votre@email.com", maxLength: 255 },
            ].map((field) => (
              <div key={field.id}>
                <label htmlFor={field.id} className="text-xs font-mono uppercase tracking-widest block mb-2" style={{ color: "hsl(40 10% 50%)" }}>
                  {field.label}
                </label>
                <input
                  id={field.id}
                  type={field.type}
                  maxLength={field.maxLength}
                  value={form[field.id as "name" | "email"]}
                  onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                  className={inputClass}
                  style={inputStyle}
                  placeholder={field.placeholder}
                />
              </div>
            ))}
            <div>
              <label htmlFor="message" className="text-xs font-mono uppercase tracking-widest block mb-2" style={{ color: "hsl(40 10% 50%)" }}>
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                maxLength={1000}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={inputClass + " resize-none"}
                style={inputStyle}
                placeholder="Décrivez votre projet..."
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm tracking-wide transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ background: GOLD, color: "#16140f" }}
            >
              <Send size={15} />
              {sending ? "Envoi en cours..." : "Envoyer le message"}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-6"
          >
            {[
              { icon: Mail, label: "Email", value: "rakotomalalairintsoa285@gmail.com" },
              { icon: MapPin, label: "Localisation", value: "Madagascar" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${GOLD}12` }}
                >
                  <Icon size={16} style={{ color: GOLD }} />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest" style={{ color: "hsl(40 10% 45%)" }}>{label}</p>
                  <p className="text-sm font-medium" style={{ color: "hsl(40 15% 80%)" }}>{value}</p>
                </div>
              </div>
            ))}

            <div className="flex gap-3 pt-2">
              {[
                { icon: Github, href: "https://github.com/irintsoarakotomalala", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/irintsoa-rakotomalala", label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl border flex items-center justify-center transition-all hover:border-[#C4A050]/50 hover:text-[#C4A050]"
                  style={{ borderColor: `${GOLD}20`, color: "hsl(40 10% 50%)" }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
