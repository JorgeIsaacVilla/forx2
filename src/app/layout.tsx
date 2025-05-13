import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header/header";


// Cargar fuentes
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata de la página
export const metadata: Metadata = {
  title: "Prueba técnica Fox",
  description: "Desarrollado por Jorge Isaac Villa López",
};

// Estructura global
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Navbar */}
        <Header />

        {/* Contenido de las páginas */}
        
        <main>{children}</main>
      </body>
    </html>
  );
}
