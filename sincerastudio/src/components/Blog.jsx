import React from 'react';

const Blog = () => {
  return (
    <section id="blog" className="relative z-10 px-8 py-24 max-w-5xl mx-auto text-center">
      <h3 className="text-3xl font-bold">Blog</h3>
      <p className="mt-4 text-neutral-400">
        Leggi gli ultimi articoli e aggiornamenti dal nostro studio.
      </p>
      <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Placeholder for blog posts */}
        <div className="border border-neutral-800 rounded-2xl p-6 bg-neutral-900/70">
          <h4 className="text-xl font-semibold">Titolo del Post</h4>
          <p className="mt-2 text-neutral-400 text-sm">
            Breve descrizione del post. Scopri di più sul nostro blog!
          </p>
          <a href="#" className="mt-4 inline-block text-[#eaff00] hover:underline">
            Leggi di più
          </a>
        </div>
        {/* Repeat for more posts */}
      </div>
    </section>
  );
};

export default Blog;