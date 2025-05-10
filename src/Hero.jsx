import { motion } from "framer-motion";

/**
 * Hero section – centered layout with subtle yet engaging animations.
 * TailwindCSS + Framer Motion (no external assets/libraries required).
 *
 * 1. Heading fades/slides in on mount.
 * 2. The "in 2D e 3D" text has an infinite animated gradient.
 * 3. A wireframe cube SVG floats behind the text, slowly rotating.
 */

export default function Hero() {
  const neon = "#D4F436";

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center text-center px-8 py-32 overflow-hidden"
    >
      {/* rotating decorative cube (background element) */}
      <motion.svg
        width="480"
        height="480"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 m-auto pointer-events-none opacity-15"
        initial={{ rotate: 0, scale: 0.8 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <path
          d="M100 10L190 55V145L100 190L10 145V55L100 10Z"
          stroke={neon}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M10 55L100 100L190 55"
          stroke={neon}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M190 145L100 100L10 145"
          stroke={neon}
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </motion.svg>

      {/* headline */}
      <motion.h1
        className="relative z-10 font-extrabold leading-tight text-4xl md:text-6xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Progettiamo il futuro
        <motion.span
          className="block bg-gradient-to-r from-lime-400 via-emerald-400 to-cyan-400 bg-[length:200%_200%] bg-clip-text text-transparent"
          initial={{ backgroundPosition: "0% 50%" }}
          animate={{ backgroundPosition: "100% 50%" }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          in 2D e 3D
        </motion.span>
      </motion.h1>

      {/* optional sub-copy */}
      <motion.p
        className="relative z-10 mt-6 max-w-xl text-neutral-400 text-sm md:text-base"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        Dal concept alla produzione, diamo forma alle tue idee con modellazione
        parametrica, rendering fotorealistici e prototipazione rapida.
      </motion.p>
    </section>
  );
}
