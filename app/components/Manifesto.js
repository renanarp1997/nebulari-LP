import Reveal from "./Reveal";

export default function Manifesto() {
  return (
    <section id="sobre" className="manifesto" aria-labelledby="manifesto-title">
      <div className="container">
        <Reveal>
          <span className="manifesto-eyebrow">Nossa filosofia</span>
        </Reveal>
        <Reveal delay={80} as="h2" className="manifesto-title">
          <span id="manifesto-title">Pequenos detalhes <em>carregam grandes histórias.</em></span>
        </Reveal>
        <Reveal delay={160} as="p" className="manifesto-text">
          A Nebulari nasceu da ideia de que objetos do dia a dia podem dizer mais
          do que aparentam. Cada peça é desenhada para acompanhar momentos —
          uma viagem, um presente, um começo. Trabalhamos com materiais
          escolhidos a dedo e acabamentos pensados para durar.
        </Reveal>
        <Reveal delay={240}>
          <a href="#edicoes" className="manifesto-link">Ver as edições →</a>
        </Reveal>
      </div>
    </section>
  );
}
