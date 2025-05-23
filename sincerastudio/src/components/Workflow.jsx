import React from 'react';

const Workflow = () => {
  return (
    <section id="workflow" className="relative z-10 px-8 py-24 max-w-7xl mx-auto text-center">
      <h3 className="text-3xl font-bold">Il nostro Workflow</h3>
      <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
        Seguiamo un processo ben definito per garantire risultati di alta qualità in ogni progetto.
      </p>
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Consultazione",
            desc: "Iniziamo con una consultazione per comprendere le tue esigenze e obiettivi.",
          },
          {
            title: "Progettazione",
            desc: "Creiamo progetti dettagliati e personalizzati in base alle tue richieste.",
          },
          {
            title: "Produzione",
            desc: "Utilizziamo tecnologie avanzate per la produzione dei tuoi prototipi o prodotti.",
          },
          {
            title: "Controllo Qualità",
            desc: "Effettuiamo un rigoroso controllo qualità per garantire risultati eccellenti.",
          },
          {
            title: "Consegna",
            desc: "Consegniamo il prodotto finale secondo le tempistiche concordate.",
          },
          {
            title: "Supporto Post-Vendita",
            desc: "Offriamo supporto continuo anche dopo la consegna per garantire la tua soddisfazione.",
          },
        ].map((step, i) => (
          <div key={i} className="border border-neutral-800 rounded-2xl p-6 bg-neutral-900/70 hover:shadow-[0_0_24px_#eaff00cc] transition">
            <h4 className="text-xl font-semibold">{step.title}</h4>
            <p className="mt-2 text-neutral-400 text-sm leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Workflow;