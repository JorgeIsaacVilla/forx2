'use client';

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full p-6 flex justify-between items-center gap-4 bg-gradient-to-b from-black to-transparent fixed top-0 left-0 z-10">
      {/* Logo */}
      <img
        src="https://media.licdn.com/dms/image/v2/D4E0BAQGNjcjXZHQfGw/company-logo_200_200/company-logo_200_200/0/1705970335864/fox_ordering_logo?e=1752710400&v=beta&t=GQ5T6BKvO5Vq-8a756dZGCsxb2vPMR9dsjQK1o0bLIY"
        alt="logo fox"
        className="rounded-full w-[60px] h-[60px] border-2 border-white"
      />

      {/* Botón hamburguesa*/}
      <button
        className="md:hidden text-3xl"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir menú"
      >
        ☰
      </button>

      {/* Navegación */}
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-20 right-0 bg-black px-6 py-4 space-y-4 md:space-y-0 md:static md:flex md:gap-6 md:bg-transparent md:p-0 md:items-center transition-all duration-300 `}
      >
        <Link
          className="block md:inline transition-transform duration-300 hover:scale-110"
          href="/"
        >
          Inicio
        </Link>
        <Link
          className="block md:inline transition-transform duration-300 hover:scale-110"
          href="/components/page1"
        >
          Saludos a Fox
        </Link>
        <Link
          className="block md:inline transition-transform duration-300 hover:scale-110"
          href="/components/page2"
        >
          Presentación de proyecto
        </Link>
      </nav>

      {/* Botones y avatar */}
      <div className="hidden md:flex gap-4 items-center">
        <button className="p-4 border-2 border-[#d35400] bg-transparent text-white rounded-[16px] transition-all duration-300 hover:shadow-[0_0_6px_2px_#d35400]">
          Prueba premium
        </button>
        <img
          src="https://png.pngtree.com/png-clipart/20231210/original/pngtree-business-girl-avatar-cartoon-png-image_13810300.png"
          alt="Avatar logueo"
          className="w-[60px] h-[60px] border-2 rounded-full"
        />
      </div>
    </header>
  );
}
