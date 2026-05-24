import Reveal from "./Reveal";

const CARDS = [
  {
    n: "01",
    title: "Design próprio",
    text: "Cada peça é desenhada internamente, sem catálogos prontos.",
  },
  {
    n: "02",
    title: "Materiais escolhidos",
    text: "Aço, couro genuíno e acrílico cristal — testados antes de cada lote.",
  },
  {
    n: "03",
    title: "Acabamento à mão",
    text: "Última checagem feita por uma pessoa antes de embalar.",
  },
  {
    n: "04",
    title: "Embalagem cuidada",
    text: "Cada pedido sai com embalagem pronta pra durar e presentear.",
  },
];

export default function WhyUs() {
  return (
    <section className="why">
      <div className="container why-grid">
        <Reveal as="aside" className="why-aside">
          <span className="why-eyebrow">Por que Nebulari</span>
          <h2 className="why-title">
            O cuidado está<br/>
            nos detalhes<br/>
            <em>que ninguém vê.</em>
          </h2>
          <p className="why-intro">
            Quatro coisas que fazemos diferente — e que você sente
            quando o pacote chega.
          </p>
        </Reveal>
        <ol className="why-list">
          {CARDS.map((c, i) => (
            <Reveal as="li" className="why-row" key={c.n} delay={i * 70}>
              <span className="why-n">{c.n}</span>
              <div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
