import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Nebulari — Pequenos objetos, presenças enormes",
  description:
    "Edições limitadas de chaveiros desenhados à mão. Pequenos objetos que carregam grandes histórias.",
  icons: { icon: "/logo.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
