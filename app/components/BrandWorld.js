import Reveal from "./Reveal";

export default function BrandWorld() {
  return (
    <section className="brand-world" aria-label="Universo Nebulari">
      <div className="brand-world-bg" aria-hidden="true">
        <img src="/back.jpg" alt="" />
      </div>

      <div className="container brand-world-inner">
        <Reveal className="brand-world-quote">
          <span className="brand-world-eyebrow">Carregue</span>
          <p className="brand-world-text">
            “O que você carrega
            <em> diz quem você é. </em>
            Pequenos objetos,
            grandes histórias
            no caminho.”
          </p>
          <span className="brand-world-sig">— Nebulari</span>
        </Reveal>
      </div>
    </section>
  );
}
