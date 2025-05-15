import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Papa from "papaparse";

export default function BlogDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch("/blog.csv")
      .then((res) => res.text())
      .then((text) => {
        Papa.parse(text, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            const found = results.data.find((p) => p.SLUG === slug);
            setPost(found);
          },
        });
      });
  }, [slug]);

  if (!post) return <div className="text-center py-24">Caricamento...</div>;

  return (
    <section className="relative z-10 px-8 py-24 max-w-3xl mx-auto">
      <Link to="/blog" className="mb-6 inline-block text-[#eaff00] hover:underline">
        ← Torna al blog
      </Link>
      <h2 className="text-3xl font-bold mb-2">{post.TITOLO}</h2>
      <div className="mb-2 text-neutral-400 text-sm">
        {post.CATEGORIE}
        {post.TAGS && <> · {post.TAGS}</>}
      </div>
      {post.IMMAGINI && (
        <img
          src={post.IMMAGINI.split(",")[0]}
          alt={post.TITOLO}
          className="mb-6 rounded-lg max-h-72 object-cover w-full"
        />
      )}
      <div
        className="prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.CONTENUTO }}
      />
      <div className="mt-8 text-xs text-neutral-500">
        SEO: {post["SEO TITLE"]} —{" "}
        <span
          dangerouslySetInnerHTML={{
            __html: post["META DESCRIPTION"] || "",
          }}
        />
      </div>
    </section>
  );
}