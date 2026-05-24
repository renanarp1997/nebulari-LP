import Reveal from "./Reveal";

const LEAD = {
  quote: "Comprei pra presentear e a pessoa amou. É daquelas coisas que parecem pequenas, mas chegam grandes — o acabamento, a embalagem, o cuidado.",
  name: "Camila T.",
  city: "Belo Horizonte, MG",
};

const SIDE = [
  {
    quote: "Qualidade impecável. O chaveiro é ainda mais bonito pessoalmente.",
    name: "Juliana R.",
    city: "São Paulo",
  },
  {
    quote: "Chegou rápido e muito bem embalado. Já é o meu segundo pedido.",
    name: "Lucas M.",
    city: "Curitiba",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="t-eyebrow">Quem leva, conta</span>
            <h2>Histórias que viajam no bolso.</h2>
          </div>
        </Reveal>

        <div className="testimonials-grid">
          <Reveal as="article" className="t-card t-card-lead">
            <p>{LEAD.quote}</p>
            <footer>
              <strong>{LEAD.name}</strong>
              <span>{LEAD.city}</span>
            </footer>
          </Reveal>

          <div className="t-side">
            {SIDE.map((t, i) => (
              <Reveal as="article" className="t-card t-card-side" key={t.name} delay={120 + i * 80}>
                <p>{t.quote}</p>
                <footer>
                  <strong>{t.name}</strong>
                  <span>{t.city}</span>
                </footer>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
