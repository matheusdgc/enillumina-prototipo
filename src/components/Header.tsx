"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsScrolled(window.scrollY > 20);
      }, 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  const menuItems = [
    { href: "#inicio", label: "Início" },
    { href: "#sobre", label: "Sobre" },
    { href: "#servicos", label: "Serviços" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 backdrop-blur-md border-b z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/98 shadow-lg border-[#f8f5ff]"
          : "bg-white/95 shadow-sm border-[#f8f5ff]/50"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
            <Image
              src="/logo-simples-vetor.png"
              alt="Logo Enillumina"
              width={150}
              height={38}
              className="h-8 sm:h-10 w-auto object-contain drop-shadow-md mb-1 hover:scale-105 transition-transform duration-300"
              quality={90}
            />
            <Image
              src="/logo-txt-vetor-purple.png"
              alt="Enillumina"
              width={150}
              height={38}
              className="h-6 sm:h-8 w-auto object-contain drop-shadow-sm hover:scale-105 transition-transform duration-300 color-black group-hover:brightness-110"
              quality={90}
            />
          </Link>

          <ul className="hidden lg:flex space-x-8 xl:space-x-10">
            {menuItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-gray-700 hover:text-[#c3a681] transition-colors duration-300 font-medium tracking-wide relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#c3a681] after:transition-all after:duration-300 hover:after:w-full py-2"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <a
              href="#contato"
              className="bg-[#c3a681] text-white px-6 xl:px-7 py-2.5 xl:py-3 rounded-full hover:bg-[#b39570] hover:scale-105 transition-all duration-300 shadow-md font-medium tracking-wide text-sm xl:text-base"
            >
              Agende sua Consulta
            </a>
          </div>

          <button
            className="lg:hidden text-[#4a2767] focus:outline-none p-7 -mr-2 touch-manipulation"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
            aria-expanded={isMenuOpen}
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "rotate-45 top-3" : "rotate-0 top-1"
                }`}
              />
              <span
                className={`absolute h-0.5 w-full bg-current top-3 transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "-rotate-45 top-3" : "rotate-0 top-5"
                }`}
              />
            </div>
          </button>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 pb-6 bg-gradient-to-b from-[#f8f5ff]/30 to-transparent rounded-b-2xl">
            <ul className="flex flex-col space-y-1">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block text-gray-700 hover:text-[#c3a681] hover:bg-[#f8f5ff]/50 active:bg-[#f8f5ff] transition-all duration-200 font-medium py-3 px-4 rounded-lg touch-manipulation"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-3 px-2">
                <a
                  href="#contato"
                  className="block bg-[#c3a681] text-white px-6 py-3.5 rounded-full hover:bg-[#b39570] active:scale-95 transition-all duration-200 text-center font-medium shadow-lg touch-manipulation"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Agende sua Consulta
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
