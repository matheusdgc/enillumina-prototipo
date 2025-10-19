"use client";

import ShaderBackground from "./ui/shader-background";

export default function DNA() {
  return (
    <section className="relative py-20 sm:py-24 md:py-32 lg:py-40 xl:py-48 overflow-hidden min-h-screen flex items-center">
      {}
      <ShaderBackground />

      {}
      <div className="absolute inset-0 bg-gradient-to-b from-[#4a2767]/90 via-[#4a2767]/85 to-[#4a2767]/90 z-0"></div>

      {}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto text-center">
          {}
          <div className="mb-10 sm:mb-12 md:mb-16">
            <div className="inline-block">
              <h2 className=" text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-[#c3a681] mb-4 sm:mb-5 leading-tight drop-shadow-2xl">
                <span className="text-[#c3a681]">O DNA da <span className="font-bold">Enillumina</span></span>
              </h2>
              <div className="h-1 sm:h-1.5 bg-gradient-to-r from-transparent via-[#c3a681] to-transparent shadow-lg"></div>
            </div>
          </div>

          {}
          <div className="space-y-8 sm:space-y-10 bg-black/20 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border border-[#c3a681]/30 shadow-2xl">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-relaxed text-white font-serif font-light tracking-wide px-2 drop-shadow-lg">
              O DNA da Enillumina está{" "}
              <span className="text-[#c3a681] font-bold italic drop-shadow-md">
                enraizado no acolhimento
              </span>
              , na{" "}
              <span className="text-[#c3a681] font-bold italic drop-shadow-md">
                transformação
              </span>{" "}
              e na busca pela{" "}
              <span className="text-[#c3a681] font-bold italic drop-shadow-md">
                liberdade interior
              </span>
              .
            </p>

            <div className="w-20 sm:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-[#c3a681]/50 via-[#c3a681] to-[#c3a681]/50 mx-auto my-8 sm:my-10 rounded-full shadow-lg"></div>

            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed text-gray-100 font-light max-w-3xl lg:max-w-4xl mx-auto px-2 drop-shadow-md">
              Nascendo para guiar pessoas em processos profundos de
              transformação e autoconhecimento, unindo técnicas terapêuticas
              integrativas a uma escuta sensível, iluminando caminhos de{" "}
              <span className="text-[#c3a681] font-semibold drop-shadow-sm">
                leveza
              </span>
              ,{" "}
              <span className="text-[#c3a681] font-semibold drop-shadow-sm">
                prosperidade
              </span>{" "}
              e{" "}
              <span className="text-[#c3a681] font-semibold drop-shadow-sm">
                bem-estar
              </span>
              .
            </p>
          </div>

          {}
          <div className="mt-12 sm:mt-16 flex justify-center items-center gap-3 sm:gap-4">
            <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent to-[#c3a681]"></div>
            <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#c3a681] animate-pulse"></div>
            <div className="w-12 sm:w-16 h-px bg-gradient-to-l from-transparent to-[#c3a681]"></div>
          </div>
        </div>
      </div>

      {}
      <div className="absolute bottom-10 left-0 sm:left-10 w-32 sm:w-40 h-32 sm:h-40 bg-[#c3a681]/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute top-10 right-0 sm:right-10 w-48 sm:w-60 h-48 sm:h-60 bg-[#c3a681]/10 rounded-full blur-3xl z-0"></div>
    </section>
  );
}
