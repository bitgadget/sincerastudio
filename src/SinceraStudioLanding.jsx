import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Lightbulb,
  Layers3,
  Printer,
  PackageSearch,
  ChevronDown
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
          Sincera
          <span className="text-base block -mt-2 font-normal tracking-widest text-white/90">
            studio
          </span>
        </h1>
        <nav className="hidden md:flex gap-10 text-sm">
          <a href="#servizi" className="hover:text-white/90 transition">Servizi</a>
          <a href="#workflow" className="hover:text-white/90 transition">Workflow</a>
          <a href="#materiali" className="hover:text-white/90 transition">Materiali</a>
          <a href="#faq" className="hover:text-white/90 transition">FAQ</a>
        </nav>
        <button className="inline-flex items-center gap-2 rounded-full border border-neutral-700 px-6 py-2 text-sm hover:border-white/60 transition">
          Contattaci <ArrowUpRight size={16} />
        </button>
      </header>

      {/* Hero */}
      <section className="relative z-10 px-8 pt-12 pb-28 max-w-5xl mx-auto">
        <motion.h2
          className="text-5xl md:text-7xl font-bold leading-tight"
          variants={stagger}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Progettiamo il <span style={{ color: NEON }}>futuro</span>
          <br /> in <span style={{ color: NEON }}>2D</span> e <span style={{ color: NEON }}>3D</span>
        </motion.h2>
        <motion.p
          className="mt-6 text-lg text-neutral-300 max-w-prose"
          variants={stagger}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          Dal concept alla produzione finale, Sincera Studio fonde creatività, ingegneria e
          tecnologie di stampa avanzate per dare vita a modelli, prototipi e collezioni di
          prodotti con finitura professionale e precisione artigianale.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4"
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
      <section id="servizi" className="relative z-10 px-8 py-24 max-w-7xl mx-auto">
        <motion.h3 className="text-3xl font-bold" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          I nostri servizi
        </motion.h3>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Progettazione 3D", desc: "Modellazione dettagliata per prototipi, architettura e prodotto", icon: <Layers3 /> },
            { title: "Stampa 3D professionale", desc: "PLA, ABS, PETG, resina, metallo con risoluzione fino a 25µm", icon: <Printer /> },
            { title: "Stampa 2D large-format", desc: "Poster, adesivi, packaging e display fino a 1,5m di larghezza", icon: <PackageSearch /> },
            { title: "Reverse engineering", desc: "Scansione 3D ad alta definizione e ricostruzione CAD", icon: <Lightbulb /> },
            { title: "Post-processing & finiture", desc: "Carteggiatura, verniciatura, metallizzazione e assemblaggio", icon: <ArrowUpRight /> },
            { title: "Consulenza & formazione", desc: "Workshop personalizzati e supporto all’implementazione in-house", icon: <Lightbulb /> }
          ].map((card, i) => (
            <motion.div key={card.title} className="group border border-neutral-800 rounded-2xl p-6 hover:border-white/50 transition"
              variants={stagger} initial="hidden" whileInView="visible" custom={i + 1} viewport={{ once: true }}>
              <div className="mb-4" style={{ color: NEON }}>{card.icon}</div>
              <h4 className="text-xl font-semibold">{card.title}</h4>
              <p className="mt-2 text-neutral-400 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Workflow */}
      <section id="workflow" className="relative z-10 px-8 py-24 bg-neutral-950/50 backdrop-blur">
        <motion.h3 className="text-3xl font-bold" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          Il nostro workflow in 4 step
        </motion.h3>
        <ol className="mt-12 space-y-10 max-w-3xl mx-auto relative border-l border-neutral-800 pl-8">
          {[
            { step: "Concept & brief", text: "Analisi obiettivi, requisiti tecnici e target." },
            { step: "Progettazione CAD", text: "Modellazione parametrica e simulazioni." },
            { step: "Prototype & test", text: "Stampa, test funzionali e iterazione rapida." },
            { step: "Produzione & delivery", text: "Serie finale, finiture e spedizione." }
          ].map((item, i) => (
            <motion.li key={item.step} className="relative" variants={stagger} initial="hidden" whileInView="visible" custom={i + 1} viewport={{ once: true }}>
              <span className="absolute -left-[18px] w-3 h-3 rounded-full border border-neutral-800" style={{ background: NEON }} />
              <h4 className="font-semibold text-lg">{i + 1}. {item.step}</h4>
              <p className="text-neutral-400 mt-2 text-sm">{item.text}</p>
            </motion.li>
          ))}
        </ol>
      </section>

      {/* Materiali */}
      <section id="materiali" className="relative z-10 px-8 py-24 max-w-7xl mx-auto">
        <motion.h3 className="text-3xl font-bold" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          Materiali principali
        </motion.h3>
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {["PLA","PETG","TPU","Altri materiali (coming soon)"].map((m, i) => (
            <motion.div key={m} className="rounded-xl border border-neutral-800 p-4 text-sm text-neutral-300 hover:border-white/50 transition text-center"
              variants={stagger} initial="hidden" whileInView="visible" custom={i + 1} viewport={{ once: true }}>
              {m}
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative z-10 px-8 py-24 bg-neutral-950/50 backdrop-blur">
        <motion.h3 className="text-3xl font-bold" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          Domande frequenti
        </motion.h3>
        <div className="mt-12 max-w-4xl mx-auto divide-y divide-neutral-800">
          {[
            { q: "Qual è il tempo medio di consegna?", a: "Prototipi singoli in 2-4 giorni, serie piccole in 7-10 giorni." },
            { q: "Accettate file STEP o STL?", a: "Sì, lavoriamo con STEP, STL, OBJ; offriamo anche conversione da formati proprietari." },
            { q: "È possibile firmare un NDA?", a: "Assolutamente: la protezione della proprietà intellettuale è priorità." }
          ].map((item, i) => (
            <details key={item.q} className="py-5 group open:py-6 cursor-pointer" open={i===0}>
              <summary className="list-none flex items-center justify-between text-neutral-200 hover:text-white transition">
                {item.q}
                <ChevronDown className="transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-neutral-400 text-sm leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Portfolio Placeholder */}
      <section id="portfolio" className="relative z-10 px-8 py-24 max-w-5xl mx-auto text-center">
        <motion.h3 className="text-3xl font-bold" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          Portfolio selezionato
        </motion.h3>
        <motion.p className="mt-4 text-neutral-400" variants={stagger} initial="hidden" whileInView="visible" custom={2} viewport={{ once: true }}>
          In arrivo — stay tuned!
        </motion.p>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-8 py-10 text-center text-neutral-600 text-sm">
        © {new Date().getFullYear()} Sincera Studio — Tutti i diritti riservati
      </footer>
    </main>
  );
}