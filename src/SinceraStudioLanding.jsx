import { motion } from "framer-motion";
import Workflow from "./components/Workflow";
import Hero3D from "./components/Hero3D";

import {
  ArrowUpRight,
  Lightbulb,
  Layers3,
  Printer,
  PackageSearch,
  ChevronDown,
} from "lucide-react";

const NEON = "#eaff00";

const stagger = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.55,
      ease: "easeOut",
    },
  }),
};

const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

export default function SinceraStudioLanding() {
  return (
    <main className="min-h-screen scroll-smooth bg-neutral-900 text-white font-sans overflow-x-hidden selection:bg-[#bfff00]/30 selection:text-white">
      {/* Neon Glow */}
      <div className="pointer-events-none fixed inset-0 flex items-center justify-center">
        <div
          className="w-[520px] h-[520px] rounded-full blur-[160px]"
          style={{ background: `${NEON}33` }}
        />
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <h1 className="font-script text-4xl" style={{ color: NEON }}>
          SINCERA
          <span className="text-base block -mt-2 font-normal tracking-widest text-white/90">
              STUDIO
          </span>
        </h1>
        <nav className="hidden md:flex gap-10 text-sm">
          <a href="#servizi" className="hover:text-white/90 transition">
            Servizi
          </a>
          <a href="#workflow" className="hover:text-white/90 transition">
            Workflow
          </a>
          <a href="#materiali" className="hover:text-white/90 transition">
            Materiali
          </a>
          <a href="#faq" className="hover:text-white/90 transition">
            FAQ
          </a>
        </nav>
        <button className="inline-flex items-center gap-2 rounded-full border border-neutral-700 px-6 py-2 text-sm hover:border-white/60 transition">
          Contattaci <ArrowUpRight size={16} />
        </button>
      </header>

      {/* Hero */}
      <section
        className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] px-8 py-16 max-w-5xl mx-auto text-center"
      >
        <motion.h2
          className="text-5xl md:text-7xl font-bold leading-tight"
          variants={stagger}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Progettiamo il{" "}
          <span className="neon-blink">futuro</span>
          <br /> in <span className="neon-blink">2D</span> e{" "}
          <span className="neon-blink">3D</span>
        </motion.h2>

        <div className="my-10 w-full flex justify-center">
          <div style={{ pointerEvents: "none" }}>
            <Hero3D disableControls={isMobile} />
          </div>
        </div>

        <motion.p
          className="mt-6 text-lg text-neutral-300 max-w-prose mx-auto"
          variants={stagger}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          Dal concept alla produzione finale, Sincera Studio fonde creatività,
          ingegneria e tecnologie di stampa avanzate per dare vita a modelli,
          prototipi e collezioni di prodotti con finitura professionale e
          precisione artigianale.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          variants={stagger}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <a
            href="#servizi"
            className="rounded-md font-semibold px-6 py-3 text-neutral-900 text-center"
            style={{ background: NEON }}
          >
            Scopri i Servizi
          </a>
          <a
            href="#portfolio"
            className="rounded-md border border-neutral-700 px-6 py-3 text-center hover:border-white/60 transition"
          >
            Portfolio
          </a>
        </motion.div>
      </section>

      {/* Servizi */}
      <section
        id="servizi"
        className="relative z-10 px-8 py-24 max-w-7xl mx-auto"
      >
        <motion.h3
          className="text-3xl font-bold"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          I nostri servizi
        </motion.h3>
        <motion.p
          className="mt-4 text-neutral-400 max-w-2xl"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          custom={2}
          viewport={{ once: true }}
        >
          Dalla progettazione alla produzione: soluzioni su misura per ogni esigenza, con tecnologie all’avanguardia e attenzione artigianale al dettaglio.
        </motion.p>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Progettazione 3D",
              desc: "Modellazione dettagliata per prototipi, architettura e prodotto",
              icon: <Layers3 size={32} />,
            },
            {
              title: "Stampa 3D professionale",
              desc: "PLA, ABS, PETG, resina, metallo con risoluzione fino a 25µm",
              icon: <Printer size={32} />,
            },
            {
              title: "Stampa 2D large-format",
              desc: "Poster, adesivi, packaging e display fino a 1,5m di larghezza",
              icon: <PackageSearch size={32} />,
            },
            {
              title: "Reverse engineering",
              desc: "Scansione 3D ad alta definizione e ricostruzione CAD",
              icon: <Lightbulb size={32} />,
            },
            {
              title: "Post-processing & finiture",
              desc: "Carteggiatura, verniciatura, metallizzazione e assemblaggio",
              icon: <ArrowUpRight size={32} />,
            },
            {
              title: "Consulenza & formazione",
              desc: "Workshop personalizzati e supporto all’implementazione in-house",
              icon: <Lightbulb size={32} />,
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              className="group border border-neutral-800 rounded-2xl p-6 bg-neutral-900/70 hover:shadow-[0_0_24px_#eaff00cc] hover:border-[#eaff00] transition"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              custom={i + 1}
              viewport={{ once: true }}
            >
              <div className="mb-4 flex justify-center">
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#eaff00]/10 border border-[#eaff00] text-[#eaff00] text-3xl shadow-[0_0_16px_#eaff00cc]">
                  {card.icon}
                </span>
              </div>
              <h4 className="text-xl font-semibold text-center">{card.title}</h4>
              <p className="mt-2 text-neutral-400 text-sm leading-relaxed text-center">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <a
            href="#contatti"
            className="inline-block rounded-md font-semibold px-8 py-3 text-neutral-900"
            style={{ background: NEON }}
          >
            Richiedi una consulenza gratuita
          </a>
        </div>
      </section>

      {/* Workflow neon tech */}
      <Workflow />

      {/* Materiali */}
      <section
        id="materiali"
        className="relative z-10 px-8 py-24 max-w-7xl mx-auto"
      >
        <motion.h3
          className="text-3xl font-bold"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Materiali principali
        </motion.h3>
        <motion.p
          className="mt-4 text-neutral-400 max-w-2xl mx-auto"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          custom={2}
          viewport={{ once: true }}
        >
          Selezioniamo solo materiali di alta qualità per garantire resistenza, precisione e finiture professionali su ogni progetto.
        </motion.p>
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              name: "PLA",
              icon: "🌱",
              desc: "Biodegradabile, ottimo per prototipi e modelli estetici.",
            },
            {
              name: "PETG",
              icon: "🧪",
              desc: "Resistente, flessibile, ideale per parti funzionali.",
            },
            {
              name: "TPU",
              icon: "🦾",
              desc: "Elastico, perfetto per componenti flessibili e antiurto.",
            },
            {
              name: "Altri materiali",
              icon: "🧩",
              desc: "Metallo, nylon, compositi e altro su richiesta.",
              center: true,
            },
          ].map((mat, i, arr) => {
            // Centra la card se è l'ultima e la riga è dispari
            const isLast = i === arr.length - 1;
            const isOdd = arr.length % 3 !== 0;
            const gridClass =
              isLast && isOdd
                ? "sm:col-span-2 md:col-span-1 md:col-start-2"
                : "";
            return (
              <motion.div
                key={mat.name}
                className={`rounded-2xl border border-neutral-800 p-6 bg-neutral-900/70 hover:shadow-[0_0_16px_#eaff00cc] hover:border-[#eaff00] transition text-center flex flex-col items-center ${gridClass}`}
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                custom={i + 1}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-3 mx-auto">{mat.icon}</div>
                <div className="font-semibold text-lg text-[#eaff00]">{mat.name}</div>
                <div className="mt-2 text-neutral-400 text-sm">{mat.desc}</div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Portfolio Placeholder */}
      <section
        id="portfolio"
        className="relative z-10 px-8 py-24 max-w-5xl mx-auto text-center"
      >
        <motion.h3
          className="text-3xl font-bold text-center"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Portfolio selezionato
        </motion.h3>
        <motion.p
          className="mt-4 text-neutral-400"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          custom={2}
          viewport={{ once: true }}
        >
          Alcuni dei nostri ultimi progetti realizzati per clienti di diversi settori.
        </motion.p>
        <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              title: "Lampada Parametrica",
              desc: "Design organico stampato in PLA bianco, finitura satinata.",
              image: "/portfolio/lampada.png",
              tags: ["3D Print", "Design"],
            },
            {
              title: "Prototipo Meccanico",
              desc: "Assemblaggio multicomponente in PETG e acciaio.",
              image: "/portfolio/prototipo.png",
              tags: ["Prototipo", "Engineering"],
            },
            {
              title: "Scultura Generativa",
              desc: "Opera artistica stampata in PLA nero, progettazione algoritmica.",
              image: "/portfolio/scultura.png",
              tags: ["Arte", "3D Print"],
            },
            {
              title: "Portachiavi Personalizzato",
              desc: "Portachiavi con logo aziendale stampato in 3D, colori a scelta.",
              image: "/portfolio/portachiavi.png",
              tags: ["Gadget", "3D Print", "Branding"],
            },
            {
              title: "Scritta 3D Personalizzata",
              desc: "Scritte e loghi 3D per eventi, vetrine o desk, completamente personalizzabili.",
              image: "/portfolio/scritta3d.png",
              tags: ["Gadget", "3D Print", "Branding"],
            },
            {
              title: "Packaging Rigido Personalizzato",
              desc: "Scatole e confezioni rigide stampate in 3D, su misura per il tuo prodotto.",
              image: "/portfolio/packaging.png",
              tags: ["Packaging", "3D Print", "Personalizzato"],
            },
          ].map((proj, i) => (
            <motion.div
              key={proj.title}
              className="group border border-neutral-800 rounded-2xl p-0 bg-neutral-900/70 hover:shadow-[0_0_24px_#eaff00cc] hover:border-[#eaff00] transition overflow-hidden"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              custom={i + 1}
              viewport={{ once: true }}
            >
              <img src={proj.image} alt={proj.title} className="w-full h-40 object-contain bg-neutral-800" />
              <div className="p-5">
                <h4 className="text-lg font-semibold">{proj.title}</h4>
                <p className="mt-2 text-neutral-400 text-sm">{proj.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2 justify-center">
                  {proj.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 rounded bg-[#eaff00]/10 text-[#eaff00] text-xs font-semibold border border-[#eaff00]/30">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <a
            href="#contatti"
            className="inline-block rounded-md font-semibold px-8 py-3 text-neutral-900"
            style={{ background: NEON }}
          >
            Vuoi il tuo progetto qui? Contattaci!
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="relative z-10 px-8 py-24 max-w-4xl mx-auto text-center"
      >
        <motion.h3
          className="text-3xl font-bold mb-8"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Cosa dicono di noi
        </motion.h3>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              name: "Marco Rossi",
              company: "Tech Solutions",
              text: "Servizio impeccabile, prototipi perfetti e consegna rapidissima. Consigliatissimi!",
            },
            {
              name: "Sara Bianchi",
              company: "Design Hub",
              text: "Grande attenzione al dettaglio e supporto tecnico in ogni fase del progetto.",
            },
          ].map((t, i) => (
            <motion.div
              key={t.name}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-6 flex flex-col items-center"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              custom={i + 1}
              viewport={{ once: true }}
            >
              {/* Avatar generico */}
              <div className="w-16 h-16 rounded-full bg-neutral-800 flex items-center justify-center mb-4">
                <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
                  <circle cx="16" cy="12" r="7" fill="#bfff00" />
                  <rect x="6" y="22" width="20" height="8" rx="4" fill="#bfff00" />
                </svg>
              </div>
              <p className="text-neutral-300 italic mb-3">"{t.text}"</p>
              <div className="font-semibold text-[#eaff00]">{t.name}</div>
              <div className="text-neutral-400 text-sm">{t.company}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="relative z-10 px-8 py-24 bg-neutral-950/50 backdrop-blur"
      >
        <motion.h3
          className="text-3xl font-bold text-center"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Domande frequenti
        </motion.h3>
        <div className="mt-12 max-w-4xl mx-auto divide-y divide-neutral-800">
          {[
            {
              q: "Qual è il tempo medio di consegna?",
              a: "Prototipi singoli in 2-4 giorni, serie piccole in 7-10 giorni.",
            },
            {
              q: "Accettate file STEP o STL?",
              a: "Sì, lavoriamo con STEP, STL, OBJ; offriamo anche conversione da formati proprietari.",
            },
            {
              q: "È possibile firmare un NDA?",
              a: "Assolutamente: la protezione della proprietà intellettuale è priorità.",
            },
          ].map((item, i) => (
            <details
              key={item.q}
              className="py-5 group open:py-6 cursor-pointer"
              open={i === 0}
            >
              <summary className="list-none flex items-center justify-between text-neutral-200 hover:text-white transition">
                {item.q}
                <ChevronDown className="transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-neutral-400 text-sm leading-relaxed">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Contatti */}
      <section
        id="contatti"
        className="relative z-10 px-8 py-24 max-w-3xl mx-auto text-center"
      >
        <motion.h3
          className="text-3xl font-bold mb-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Contattaci
        </motion.h3>
        <motion.p
          className="mb-8 text-neutral-300"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          custom={2}
          viewport={{ once: true }}
        >
          Vuoi un preventivo, una consulenza o semplicemente saperne di più?<br />
          Scrivici a <a href="mailto:info@sincerastudio.it" className="underline text-[#eaff00]">info@sincerastudio.it</a>
        </motion.p>
        <form className="flex flex-col gap-4 items-center">
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            className="w-full max-w-md px-4 py-3 rounded bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:border-[#eaff00] transition"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full max-w-md px-4 py-3 rounded bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:border-[#eaff00] transition"
            required
          />
          <textarea
            name="messaggio"
            placeholder="Messaggio"
            rows={5}
            className="w-full max-w-md px-4 py-3 rounded bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:border-[#eaff00] transition"
            required
          />
          <button
            type="submit"
            className="mt-4 rounded-md font-semibold px-8 py-3 text-neutral-900"
            style={{ background: NEON }}
          >
            Invia richiesta
          </button>
        </form>
        {/* Bottoni WhatsApp e Telegram */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://wa.me/391234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md px-6 py-3 bg-[#25D366] text-neutral-900 font-semibold hover:bg-[#1ebe57] transition"
          >
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 32 32"><path d="M16.002 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.46 1.74 6.38L3.2 28.8l6.62-1.71c1.85 1.01 3.94 1.54 6.18 1.54h.01c7.06 0 12.8-5.74 12.8-12.8s-5.74-12.8-12.8-12.8zm0 23.04c-2.01 0-3.98-.53-5.68-1.53l-.41-.24-3.93 1.02 1.05-3.83-.27-.39c-1.09-1.59-1.67-3.45-1.67-5.37 0-5.36 4.36-9.72 9.72-9.72s9.72 4.36 9.72 9.72-4.36 9.72-9.72 9.72zm5.34-7.33c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.14-.19.29-.74.94-.91 1.13-.17.19-.34.21-.63.07-.29-.14-1.23-.45-2.34-1.44-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.44.13-.58.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.14-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.49-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.36-.26.29-1 1-.99 2.43.01 1.43 1.03 2.81 1.18 3.01.14.19 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.62.69.22 1.32.19 1.81.12.55-.08 1.7-.7 1.94-1.37.24-.67.24-1.24.17-1.37-.07-.13-.26-.21-.55-.35z"/></svg>
            WhatsApp
          </a>
          <a
            href="https://t.me/tuonicktelegram"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md px-6 py-3 bg-[#229ED9] text-white font-semibold hover:bg-[#1787b7] transition"
          >
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 32 32"><path d="M27.43 6.62c-.32-.27-.77-.34-1.15-.19L5.13 14.36c-.41.16-.68.56-.68 1.01.01.45.29.84.7.99l5.13 1.83 2.01 6.13c.13.39.48.66.89.66h.01c.41 0 .77-.27.89-.66l2.01-6.13 5.13-1.83c.41-.15.69-.54.7-.99.01-.45-.27-.85-.68-1.01zm-6.47 4.47l-2.96 2.96c-.13.13-.2.3-.2.48v4.13c0 .27.22.49.49.49s.49-.22.49-.49v-3.81l2.7-2.7c.19-.19.19-.5 0-.69-.19-.19-.5-.19-.69 0z"/></svg>
            Telegram
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-8 py-10 text-center text-neutral-600 text-sm">
        © {new Date().getFullYear()} Sincera Studio — Tutti i diritti riservati
      </footer>
    </main>
  );
}
