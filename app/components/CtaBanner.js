import Reveal from "./Reveal";
import { whatsAppUrl } from "../data/products";

export default function CtaBanner() {
  return (
    <section id="contato" className="cta-banner" aria-labelledby="cta-title">
      <div className="container cta-inner">
        <Reveal className="cta-text">
          <span className="cta-eyebrow">Tudo começa com uma conversa</span>
          <h2 className="cta-title" id="cta-title">
            Achou a sua?<br/>
            <em>Chama a gente.</em>
          </h2>
        </Reveal>
        <Reveal className="cta-actions" delay={120}>
          <a
            href={whatsAppUrl()}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.522 5.236l-.999 3.648 3.965-1.04z"/>
            </svg>
            Falar com a marca
          </a>
          <a href="#edicoes" className="btn btn-text">Voltar pras edições →</a>
        </Reveal>
      </div>
    </section>
  );
}
