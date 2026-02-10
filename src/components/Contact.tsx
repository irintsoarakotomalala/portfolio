import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';

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
      // Configuration EmailJS
      await emailjs.send(
        'service_cohsebj',      // Service ID
        'template_evq67sr',     // Template ID
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        '5GuFuiFaocGehr_ZA'     // Public Key
      );
      
      toast.success("Message envoyé avec succès !");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('Erreur:', error);
      toast.error("Erreur lors de l'envoi. Réessayez.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-section-alt">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="section-subtitle">05. Contact</p>
          <h2 className="section-title">Travaillons ensemble</h2>
          <p className="text-foreground mt-4 max-w-md mx-auto">
            Vous avez un projet en tête ou souhaitez simplement discuter ?
            N'hésitez pas à me contacter.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-4 sm:space-y-5"
          >
            <div>
              <label htmlFor="name" className="text-sm font-mono text-foreground block mb-1">
                Nom
              </label>
              <input
                id="name"
                type="text"
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-muted border border-border rounded px-3 py-2 sm:px-4 sm:py-3 text-sm text-highlight focus:border-primary focus:outline-none transition-colors"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-mono text-foreground block mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-muted border border-border rounded px-3 py-2 sm:px-4 sm:py-3 text-sm text-highlight focus:border-primary focus:outline-none transition-colors"
                placeholder="votre@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-mono text-foreground block mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                maxLength={1000}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-muted border border-border rounded px-3 py-2 sm:px-4 sm:py-3 text-sm text-highlight focus:border-primary focus:outline-none transition-colors resize-none"
                placeholder="Décrivez votre projet..."
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="cta-button-filled w-full sm:w-auto flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={16} />
              {sending ? "Envoi en cours..." : "Envoyer"}
            </button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8 flex flex-col justify-center"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Mail size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-xs font-mono text-muted-foreground">Email</p>
                <p className="text-sm text-highlight">rakotomalalairintsoa285@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <MapPin size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-xs font-mono text-muted-foreground">Localisation</p>
                <p className="text-sm text-highlight">Madagascar</p>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
                >
                  <Icon size={18} />
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
