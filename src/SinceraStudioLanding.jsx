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
          <Hero3D />
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
      }
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

      {/* Footer */}
      <footer className="relative z-10 px-8 py-10 text-center text-neutral-600 text-sm">
        © {new Date().getFullYear()} Sincera Studio — Tutti i diritti riservati
      </footer>
    </main>
  );
}
