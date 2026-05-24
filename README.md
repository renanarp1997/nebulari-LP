# Nebulari

Landing page de chaveiros — Next.js 14 (App Router) + JavaScript.

## Rodar

```bash
npm install
npm run dev
```

Abrir http://localhost:3000

## Estrutura

```
app/
  layout.js          # Root layout, carrega Inter via next/font
  page.js            # Homepage (server component)
  globals.css        # Estilos globais
  components/
    Header.js        # 'use client' (active link no scroll)
    Hero.js          # server
    TrustBar.js      # server
    Collections.js   # server (SVG fallback embutido)
    WhyUs.js         # server
    Testimonials.js  # 'use client' (carrossel)
    Newsletter.js    # 'use client' (form)
    Footer.js        # server
public/              # Imagens
  logo.png, logo-tight.png
  hero-keychain.png       (opcional — fallback SVG se faltar)
  col-espaciais.png       (opcional)
  col-aventureiros.png    (opcional)
  col-minimalistas.png    (opcional)
  col-geek.png            (opcional)
  avatar-juliana.png      (opcional)
  avatar-lucas.png        (opcional)
  avatar-camila.png       (opcional)
```

## Arquivos antigos (vanilla HTML)

`index.html`, `styles.css` e `script.js` ficam pra histórico — não são usados pelo Next.js.
Pode apagar quando quiser.
