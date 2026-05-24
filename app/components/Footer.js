import Link from "next/link";
import { WHATSAPP_NUMBER, whatsAppUrl } from "../data/products";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-col footer-brand">
          <Link href="/" className="brand" aria-label="Nebulari">
            <img className="brand-logo brand-logo-desktop" src="/logo-tight.png" alt="" />
            <img className="brand-logo brand-logo-mobile" src="/logo-tight.png" alt="" />
          </Link>
          <p>Pequenos objetos. Presenças enormes.</p>
          <div className="socials">
            <a href="https://instagram.com/nebulari" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://tiktok.com/@nebulari" target="_blank" rel="noreferrer" aria-label="TikTok">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.55a8.16 8.16 0 0 0 4.77 1.52V6.69h-1.84Z"/></svg>
            </a>
            <a href={whatsAppUrl()} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.522 5.236l-.999 3.648 3.965-1.04z"/></svg>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h5>Navegação</h5>
          <Link href="/">Início</Link>
          <Link href="/#edicoes">Edições</Link>
          <Link href="/#sobre">Sobre</Link>
          <Link href="/#contato">Contato</Link>
        </div>

        <div className="footer-col">
          <h5>Marca</h5>
          <Link href="/#manifesto">Filosofia</Link>
          <Link href="/termos">Termos de uso</Link>
          <Link href="/privacidade">Privacidade</Link>
        </div>

        <div className="footer-col">
          <h5>Atendimento</h5>
          <a href="mailto:contato@nebulari.com.br" className="footer-link-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
            contato@nebulari.com.br
          </a>
          <a href={whatsAppUrl()} target="_blank" rel="noreferrer" className="footer-link-icon">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.522 5.236l-.999 3.648 3.965-1.04z"/></svg>
            WhatsApp
          </a>
          <span className="footer-quiet">
            Resposta em até 1 dia útil.
          </span>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span className="footer-legal">
            © 2024 Nebulari. Edições limitadas, feitas no Brasil.
          </span>
          <span className="footer-origin">
            <span className="footer-flag" aria-hidden="true">
              <svg viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="16" rx="1.5" fill="#009C3B" />
                <path d="M12 2.5 21 8l-9 5.5L3 8l9-5.5Z" fill="#FFDF00" />
                <circle cx="12" cy="8" r="3" fill="#002776" />
                <path d="M9.2 8.2c1.6-.5 3.4-.5 5.6.4" stroke="#fff" strokeWidth=".5" fill="none" />
              </svg>
            </span>
            Desenhado e enviado do Brasil
          </span>
        </div>
      </div>
    </footer>
  );
}
