const ITEMS = [
  "Edições limitadas, feitas em pequena escala",
  "Atendimento humano via WhatsApp",
  "Desenhado em São Paulo, enviado pra todo o Brasil",
  "Embalagem-presente em todos os pedidos",
];

export default function AnnouncementBar() {
  return (
    <div className="announcement" aria-label="Avisos da marca">
      <div className="announcement-track" aria-hidden="true">
        {[...ITEMS, ...ITEMS, ...ITEMS].map((t, i) => (
          <span className="announcement-item" key={i}>{t}</span>
        ))}
      </div>
    </div>
  );
}
