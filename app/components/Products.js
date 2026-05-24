import Link from "next/link";
import { PRODUCTS, formatBRL, whatsAppUrl } from "../data/products";
import Reveal from "./Reveal";

export default function Products() {
  return (
    <section id="edicoes" className="products">
      <div className="container">
        <Reveal>
          <div className="section-head center">
            <h2>Produtos em destaque</h2>
            <p>Selecionamos as peças que mais saem da Nebulari.</p>
          </div>
        </Reveal>

        <div className="products-grid">
          {PRODUCTS.map((p, i) => (
            <Reveal as="article" className="product-card" key={p.id} delay={i * 60}>
              <div className="product-img">
                <Link href={`/produto/${p.id}`} className="product-img-link" aria-label={p.name}>
                  <img src={p.image} alt={p.name} loading="lazy" />
                </Link>
                <a
                  href={whatsAppUrl(p)}
                  target="_blank"
                  rel="noreferrer"
                  className="product-add"
                  aria-label={`Saber mais sobre ${p.name}`}
                >
                  Saber mais
                </a>
              </div>

              <Link href={`/produto/${p.id}`} className="product-body">
                <span className="product-tag">{p.collection}</span>
                <h3>{p.name}</h3>
                <span className="product-rating" aria-label={`${p.rating} de 5, ${p.reviews} avaliações`}>
                  <span className="rating-stars" aria-hidden="true">
                    <span className="rating-stars-bg">★★★★★</span>
                    <span className="rating-stars-fg" style={{ width: `${(p.rating / 5) * 100}%` }}>★★★★★</span>
                  </span>
                  <span className="rating-text">{p.rating.toFixed(1)} <em>({p.reviews})</em></span>
                </span>
                <span className="product-price">{formatBRL(p.price)}</span>
                <span className="product-installments">
                  ou 3× de {formatBRL(p.price / 3)} sem juros
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
