import { motion } from "framer-motion";

/**
 * Complete timeline section – center-aligned heading & full vertical tree.
 * TailwindCSS + Framer Motion + neon accent.
 */

const NEON = "#D4F436"; // neon-yellow brand accent

const steps = [
  {
    title: "Concept & brief",
    description: "Analisi obiettivi, requisiti tecnici e target.",
  },
  {
    title: "Progettazione CAD",
    description: "Modellazione parametrica e simulazioni.",
  },
  {
    title: "Prototype & test",
    description: "Stampa, test funzionali e iterazione rapida.",
  },
  {
    title: "Produzione & delivery",
    description: "Serie finale, finiture e spedizione.",
  },
];

// animation presets ---------------------------------------------------------
const fadeUpStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, type: "spring", stiffness: 70 },
  }),
};

export default function Workflow() {
  return (
    <section
      id="workflow"
      className="relative z-10 px-8 py-24 bg-neutral-950/50 backdrop-blur overflow-hidden"
    >
      {/* heading */}
      <motion.h3
        className="text-3xl md:text-4xl font-bold text-center"
        variants={fadeUpItem}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
      >
        Il nostro workflow in 4 step
      </motion.h3>

      {/* timeline list */}
      <motion.ol
        variants={fadeUpStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-12 space-y-14 max-w-3xl mx-auto pl-8 relative before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-transparent before:via-neutral-700 before:to-transparent"
      >
        {steps.map((step, index) => (
          <motion.li
            key={step.title}
            variants={fadeUpItem}
            custom={index + 1}
            className="relative grid grid-cols-[auto,1fr] gap-6 items-start"
          >
            {/* dot */}
            <span
              className="w-3.5 h-3.5 rounded-full ring-2 ring-neutral-900"
              style={{ background: NEON }}
            />

            {/* text */}
            <div>
              <h4 className="font-semibold text-lg md:text-xl leading-tight">
                {index + 1}. {step.title}
              </h4>
              <p className="mt-1 text-neutral-400 text-sm md:text-base">
                {step.description}
              </p>
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </section>
  );
}
