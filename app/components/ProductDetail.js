"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { whatsAppUrl } from "../data/products";
import Reveal from "./Reveal";

export default function ProductDetail({ product, related }) {
  const gallery = useMemo(() => {
    return Array.isArray(product.images) && product.images.length > 0
      ? product.images
      : [product.image];
  }, [product]);

  const [activeIdx, setActiveIdx] = useState(0);
  useEffect(() => { setActiveIdx(0); }, [product.id]);

  return (
    <>
      <section className="pd-hero">
        <div className="container pd-grid">
          <Reveal className="pd-media">
            <div className="pd-media-main">
              <img
                key={gallery[activeIdx]}
                src={gallery[activeIdx]}
                alt={product.name}
                className="pd-media-fade"
              />
            </div>
            {gallery.length > 1 && (
              <div className="pd-media-thumbs" role="tablist" aria-label="Outras fotos">
                {gallery.map((src, i) => (
                  <button
                    key={`${src}-${i}`}
                    type="button"
                    className={`pd-thumb${i === activeIdx ? " active" : ""}`}
                    aria-label={`Foto ${i + 1}`}
                    aria-selected={i === activeIdx}
                    onClick={() => setActiveIdx(i)}
                  >
                    <img src={src} alt="" loading="lazy" />
                  </button>
                ))}
              </div>
            )}
          </Reveal>

          <Reveal className="pd-info" delay={80}>
            <span className="pd-eyebrow auth-eyebrow auth-eyebrow-dark">{product.collection}</span>
            <h1 className="pd-title">{product.name}</h1>

            <p className="pd-desc">{product.description}</p>

            {product.highlights?.length > 0 && (
              <ul className="pd-highlights">
                {product.highlights.map((h) => (
                  <li key={h}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                    {h}
                  </li>
                ))}
              </ul>
            )}

            <div className="pd-actions">
              <a
                href={whatsAppUrl(product)}
                target="_blank"
                rel="noreferrer"
                className="pd-cta-primary"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.522 5.236l-.999 3.648 3.965-1.04z"/>
                </svg>
                Falar sobre esta peça
              </a>
              <Link href="/#edicoes" className="pd-cta-link">
                Ver outras edições →
              </Link>
            </div>

            <p className="pd-fineprint">
              Edições limitadas. Atendimento pelo WhatsApp ou{" "}
              <a href="mailto:contato@nebulari.com.br">contato@nebulari.com.br</a>.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pd-specs">
        <div className="container pd-specs-grid">
          <Reveal>
            <span className="auth-eyebrow auth-eyebrow-dark">Sobre a peça</span>
            <h2>Detalhes que fazem o objeto.</h2>
            <p>{product.description}</p>
          </Reveal>
          <Reveal as="dl" className="pd-specs-list" delay={80}>
            {product.specs?.map((s) => (
              <div key={s.label} className="pd-spec-row">
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="pd-related">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="auth-eyebrow auth-eyebrow-dark">Continue por aqui</span>
              <h2>Outras peças.</h2>
            </div>
          </Reveal>
          <div className="pd-related-grid">
            {related.map((p, i) => (
              <Reveal as={Link} href={`/produto/${p.id}`} className="pd-related-card" key={p.id} delay={i * 60}>
                <div className="pd-related-img">
                  <img src={p.image} alt={p.name} loading="lazy" />
                </div>
                <div className="pd-related-info">
                  <span className="showcase-tag">{p.collection}</span>
                  <h3>{p.name}</h3>
                  <span className="showcase-link">Conhecer →</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
