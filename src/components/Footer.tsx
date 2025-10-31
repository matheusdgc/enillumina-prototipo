"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#2d1540] via-[#3d1f52] to-[#2d1540] text-white py-16 border-t-4 border-[#c3a681]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12 text-center md:text-left">
          {}
          <div className="space-y-3 flex flex-col items-center md:items-start">
            <div className="mb-2 flex items-center gap-3">
              <Image
                src="/logo-simples-vetor.png"
                alt="Logo Enillumina"
                width={60}
                height={60}
                className="h-13 mb-1 w-auto object-contain drop-shadow-lg"
                quality={90}
              />
              <Image
                src="/logo-txt-vetor.png"
                alt="Enillumina"
                width={200}
                height={50}
                className="h-10 w-auto object-contain brightness-0 invert drop-shadow-lg"
                quality={90}
              />
            </div>
            <p className="text-gray-200 leading-relaxed text-base max-w-xs">
              Atendimento dedicado ao acolhimento, transformação e reconexão com
              a essência através de terapias integrativas.
            </p>
          </div>

          {}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold text-xl mb-5 text-white tracking-wide">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#inicio"
                  className="text-gray-200 hover:text-[#c3a681] md:hover:pl-2 transition-all duration-300 inline-block text-base"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="text-gray-200 hover:text-[#c3a681] md:hover:pl-2 transition-all duration-300 inline-block text-base"
                >
                  Sobre Eni Severo
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="text-gray-200 hover:text-[#c3a681] md:hover:pl-2 transition-all duration-300 inline-block text-base"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#depoimentos"
                  className="text-gray-200 hover:text-[#c3a681] md:hover:pl-2 transition-all duration-300 inline-block text-base"
                >
                  Depoimentos
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-gray-200 hover:text-[#c3a681] md:hover:pl-2 transition-all duration-300 inline-block text-base"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold text-xl mb-5 text-white tracking-wide">
              Terapias Integrativas
            </h4>
            <ul className="space-y-3">
              <li className="text-gray-200 text-base flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#c3a681] rounded-full"></span>
                Constelação Familiar
              </li>
              <li className="text-gray-200 text-base flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#c3a681] rounded-full"></span>
                Apometria
              </li>
              <li className="text-gray-200 text-base flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#c3a681] rounded-full"></span>
                Hipnose
              </li>
              <li className="text-gray-200 text-base flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#c3a681] rounded-full"></span>
                Regressão
              </li>
              <li className="text-gray-200 text-base flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#c3a681] rounded-full"></span>
                Práticas Xamânicas
              </li>
              <li className="text-gray-200 text-base flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#c3a681] rounded-full"></span>
                Mandalas
              </li>
            </ul>
          </div>

          {}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold text-xl mb-5 text-white tracking-wide">
              Contato
            </h4>
            <ul className="space-y-3 mb-6">
              <li className="text-gray-200 text-base">
                <a
                  href="tel:+5515997684325"
                  className="hover:text-[#c3a681] transition-colors flex items-center gap-2 group justify-center md:justify-start"
                >
                  <svg
                    className="w-5 h-5 text-[#c3a681] group-hover:scale-110 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  15 99768-4325
                </a>
              </li>
              <li className="text-gray-200 text-base">
                <a
                  href="mailto:contato@enillumina.com.br"
                  className="hover:text-[#c3a681] transition-colors flex items-center gap-2 group justify-center md:justify-start"
                >
                  <svg
                    className="w-5 h-5 text-[#c3a681] group-hover:scale-110 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  contato@enillumina.com.br
                </a>
              </li>
            </ul>

            {}
            <div className="flex flex-col items-center md:items-start w-full">
              <h5 className="font-bold text-lg mb-4 text-white">
                Redes Sociais
              </h5>
              <div className="flex space-x-4 justify-center md:justify-start">
                <a
                  href="https://www.instagram.com/enillumina/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-[#c3a681] to-[#b39570] rounded-full flex items-center justify-center hover:from-[#d4b896] hover:to-[#c3a681] hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-2xl group"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-6 h-6 text-white group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {}
        <div className="border-t-2 border-[#c3a681]/30 pt-10 mt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-100 text-base font-medium">
              © {currentYear} Enillumina. Todos os direitos reservados.
            </p>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "https://www.sitelock.com/verify.php?site=enillumina.com.br",
                  "SiteLock",
                  "width=600,height=600,left=160,top=170"
                );
              }}
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src="/selo-sitelock.br"
                alt="SiteLock"
                title="SiteLock - Site Seguro"
                width={120}
                height={48}
                className="h-auto w-auto"
                quality={90}
              />
            </a>
          </div>

          {}
          <div className="mt-6 pt-4 text-center">
            <p className="text-gray-400/60 text-xs">
              Desenvolvido por{" "}
              <a
                href="https://github.com/matheusdgc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400/70 hover:text-[#c3a681]/50 transition-colors duration-300 inline-flex items-center gap-1"
              >
                Matheus D. Gomes Chichura
                <svg
                  className="w-3 h-3 opacity-60"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
