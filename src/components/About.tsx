import IconCircle from "./ui/IconCircle";
import FeatureItem from "./ui/FeatureItem";
import Image from "next/image";

export default function About() {
  const features = [
    {
      title: "Formação Multidisciplinar",
      description:
        "Combinação única de administração empresarial, desenvolvimento humano e terapias integrativas.",
    },
    {
      title: "Abordagem Humanizada",
      description:
        "Atendimento que une técnica, sensibilidade e espiritualidade de forma profunda e acolhedora.",
    },
    {
      title: "Experiência Comprovada",
      description:
        "Mais de uma década dedicada ao autoconhecimento e transformação pessoal.",
    },
  ];

  const checkIcon = (
    <svg
      className="w-5 h-5 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );

  return (
    <section
      id="sobre"
      className="py-24 bg-gradient-to-br from-white to-[#f8f5ff] relative overflow-hidden"
    >
      {}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-br from-[#4a2767]/5 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {}
          <div className="flex-1 w-full">
            <div className="relative max-w-md mx-auto lg:max-w-lg">
              <div className="bg-gradient-to-br from-[#f8f5ff] to-[#c3a681]/10 rounded-[2.5rem] p-4 sm:p-6 shadow-2xl border border-[#c3a681]/20">
                <div className="relative w-full aspect-[3/4] overflow-hidden rounded-[2rem]">
                  <Image
                    src="/foto-apresentacao.png"
                    alt="Eni Aparecida Severo - Terapeuta"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 33vw"
                    priority
                    quality={90}
                  />
                </div>
              </div>
              {}
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-[#c3a681]/20 to-transparent rounded-full blur-2xl -z-10"></div>
            </div>
          </div>

          {}
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#4a2767] mb-8">
              Sobre <span className="text-[#c3a681] italic">Eni Severo</span>
            </h2>
            <p className="text-lg text-[#666666] mb-6 leading-relaxed">
              Sou Eni Aparecida Severo, formada em Administração de Empresas
              pela Faculdade de Economia São Luiz, com especializações em
              Negociação e Qualidade Total, e ampla experiência nas áreas de
              Recursos Humanos e Desenvolvimento Organizacional.
            </p>
            <p className="text-lg text-[#666666] mb-6 leading-relaxed">
              Em minha trajetória, aprofundei-me no campo do autoconhecimento e
              das terapias integrativas, com formações em Constelação Familiar
              Sistêmica e Programação Neurolinguística (PNL) pelo Instituto Criz
              Leanza, Pós-graduação em Psicanálise pela FAMART, Análise Corporal
              pelo OCE, e Movimentos de Reconexão da Alma pelo Instituto
              Estevão.
            </p>
            <p className="text-lg text-[#666666] mb-8 leading-relaxed">
              A partir dessa caminhada, nasceu a <b className="text-[#4a2767]">Enillumina</b>, um atendimento dedicado
              ao acolhimento, à transformação e à reconexão com a essência. Meu
              propósito é auxiliar cada pessoa a ressignificar suas dores e
              iluminar seu próprio caminho, unindo técnica, sensibilidade e
              espiritualidade em um processo profundo e humanizado de
              desenvolvimento pessoal.
            </p>

            <div className="space-y-6 mt-10">
              {features.map((feature, index) => (
                <FeatureItem
                  key={index}
                  icon={checkIcon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
