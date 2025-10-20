import Button from "./ui/Button";
import FeatureItem from "./ui/FeatureItem";
import { AuroraBackground } from "./ui/aurora-background";
import Image from "next/image";

export default function Hero() {
  const features = [
    {
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      title: "Acolhimento",
      description: "Atendimento seguro para sua jornada",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Transformação",
      description: "Reconexão com sua essência",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      title: "Autoconhecimento",
      description: "Desperte seu potencial interior",
    },
  ];

  return (
    <AuroraBackground>
      <section
        id="inicio"
        className="relative pt-20 sm:pt-24 md:pt-32 lg:pt-36 pb-16 sm:pb-20 md:pb-24 lg:pb-28 overflow-hidden w-full flex items-center"
      >
        <div className="absolute top-20 right-0 sm:right-10 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-gradient-to-br from-[#c3a681]/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-0 sm:left-10 w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80 bg-gradient-to-br from-[#4a2767]/5 to-transparent rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 sm:gap-12 lg:gap-16">
            <div className="flex-1 text-center lg:text-left w-full">
              <div className="mb-6 sm:mb-8">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-[#4a2767] mb-4 sm:mb-5 leading-relaxed">
                  Bem-vindo à
                </h1>
                <div className="flex justify-center lg:justify-start">
                  <Image
                    src="/logo-txt-vetor-purple.png"
                    alt="Enillumina"
                    width={350}
                    height={88}
                    className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 w-auto object-contain drop-shadow-sm"
                    priority
                    quality={100}
                  />
                </div>
              </div>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#666666] mb-8 sm:mb-10 leading-relaxed font-light max-w-2xl mx-auto lg:mx-0">
                Atendimento dedicado ao acolhimento, transformação e reconexão
                com a essência. Através de terapias integrativas, auxilio você a
                ressignificar suas dores e iluminar seu próprio caminho de
                autoconhecimento e crescimento pessoal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center lg:justify-start max-w-md mx-auto lg:mx-0">
                <Button href="#contato" size="lg">
                  Agende sua Sessão
                </Button>
                <Button href="#servicos" variant="secondary" size="lg">
                  Conheça as Terapias
                </Button>
              </div>
            </div>

            <div className="flex-1 flex justify-center w-full mt-8 lg:mt-0">
              <div className="relative w-full max-w-md lg:max-w-lg">
                <div className="aspect-square bg-gradient-to-br from-[#c3a681]/20 to-[#4a2767]/10 rounded-full opacity-40 absolute inset-0 blur-2xl"></div>
                <div className="relative z-10 bg-white/80 backdrop-blur-md rounded-2xl sm:rounded-[2.5rem] shadow-2xl p-6 sm:p-8 lg:p-10 border border-[#c3a681]/20">
                  <div className="space-y-6 sm:space-y-8">
                    {features.map((feature, index) => (
                      <FeatureItem
                        key={index}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                        iconSize="md"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AuroraBackground>
  );
}
