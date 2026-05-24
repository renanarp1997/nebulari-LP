"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { WHATSAPP_NUMBER, whatsAppUrl } from "../data/products";

const NAV_ITEMS = [
  { hash: "#inicio", label: "Início" },
  { hash: "#edicoes", label: "Edições" },
  { hash: "#sobre", label: "Sobre" },
  { hash: "#contato", label: "Contato" },
];

const SearchIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [active, setActive] = useState("#inicio");
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) {
      setActive(null);
      return;
    }
    const sectionIds = NAV_ITEMS.map((n) => n.hash.slice(1));
    const handler = () => {
      const y = window.scrollY + 120;
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActive("#" + current);
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, [isHome]);

  useEffect(() => {
    if (!searchOpen) return;
    inputRef.current?.focus();
    const onClickOutside = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setSearchOpen(false);
    };
    const onKey = (e) => { if (e.key === "Escape") setSearchOpen(false); };
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKey);
    };
  }, [searchOpen]);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Nebulari">
          <img className="brand-logo brand-logo-desktop" src="/logo-tight.png" alt="" />
          <img className="brand-logo brand-logo-mobile" src="/logo-tight.png" alt="" />
        </Link>

        <nav className="main-nav">
          {NAV_ITEMS.map((item) => {
            const href = isHome ? item.hash : `/${item.hash}`;
            const isActive = isHome && active === item.hash;
            return (
              <Link
                key={item.hash}
                href={href}
                className={`nav-link${isActive ? " active" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="header-icons">
          <div ref={wrapRef} className={`search-wrap${searchOpen ? " open" : ""}`}>
            <button
              type="button"
              className="icon-btn search-btn"
              aria-label="Buscar"
              aria-expanded={searchOpen}
              onClick={() => setSearchOpen((v) => !v)}
            >
              <SearchIcon />
            </button>
            <input
              ref={inputRef}
              type="search"
              className="search-input"
              placeholder="Buscar uma peça..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              tabIndex={searchOpen ? 0 : -1}
              aria-hidden={!searchOpen}
            />
          </div>

          <a
            href={whatsAppUrl()}
            target="_blank"
            rel="noreferrer"
            className="header-cta"
            aria-label={`Conversar pelo WhatsApp ${WHATSAPP_NUMBER}`}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.522 5.236l-.999 3.648 3.965-1.04z"/>
            </svg>
            <span>Falar com a marca</span>
          </a>
        </div>
      </div>
    </header>
  );
}
