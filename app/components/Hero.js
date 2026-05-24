const SPARKLES = [
  { top: "18%", left: "62%", size: 3, dur: 7.5, delay: 0    },
  { top: "52%", left: "88%", size: 3, dur: 8.2, delay: 2.4  },
  { top: "76%", left: "60%", size: 3, dur: 9.0, delay: 4.0  },
];

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-ambient" aria-hidden="true" />
      <svg className="hero-orbit" viewBox="0 0 800 800" aria-hidden="true">
        <defs>
          <linearGradient id="orbitLine" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%"  stopColor="rgba(167,139,250,0)" />
            <stop offset="35%" stopColor="rgba(167,139,250,.45)" />
            <stop offset="65%" stopColor="rgba(196,181,253,.55)" />
            <stop offset="100%" stopColor="rgba(167,139,250,0)" />
          </linearGradient>
        </defs>
        <ellipse cx="400" cy="400" rx="370" ry="130" fill="none" stroke="url(#orbitLine)" strokeWidth="1" transform="rotate(-22 400 400)" />
        <ellipse cx="400" cy="400" rx="320" ry="100" fill="none" stroke="url(#orbitLine)" strokeWidth=".7" transform="rotate(-22 400 400)" opacity=".5" />
      </svg>
      <img
        className="hero-back-img"
        src="/back.jpg"
        alt=""
        aria-hidden="true"
      />
      {SPARKLES.map((s, i) => (
        <span
          key={i}
          className="hero-sparkle"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            animationDuration: `${s.dur}s`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}

      <div className="container hero-inner">
        <div className="hero-left">
          <h1 className="hero-title">
            Objetos pequenos.<br />
            <em>Presenças</em> enormes.
          </h1>
          <p className="hero-desc">
            O que você carrega diz quem você é. Cada peça Nebulari é desenhada
            pra durar além do momento — e dizer algo sobre quem leva.
          </p>
          <div className="hero-cta">
            <a href="#edicoes" className="btn btn-primary">
              Conhecer edições
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </a>
            <a href="#sobre" className="btn btn-text">A filosofia →</a>
          </div>
        </div>

        <div className="hero-right" aria-hidden="true" />
      </div>
    </section>
  );
}
