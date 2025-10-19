import IconCircle from "./ui/IconCircle";
import FeatureItem from "./ui/FeatureItem";

export default function About() {
  const features = [
    {
      title: "Atendimento Personalizado",
      description:
        "Cada pessoa é única, e nosso atendimento respeita essa individualidade.",
    },
    {
      title: "Ambiente Acolhedor",
      description: "Espaço preparado para proporcionar conforto e segurança.",
    },
    {
      title: "Profissionais Qualificados",
      description: "Equipe com formação sólida e em constante atualização.",
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
          <div className="flex-1">
            <div className="relative">
              <div className="bg-gradient-to-br from-[#f8f5ff] to-[#c3a681]/10 rounded-[2.5rem] p-10 shadow-2xl border border-[#c3a681]/20">
                <div className="space-y-8">
                  <IconCircle size="lg" className="mx-auto" variant="gradient">
                    <svg
                      className="w-12 h-12 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </IconCircle>
                  <h3 className="text-3xl font-serif font-semibold text-[#4a2767] text-center">
                    Mais de 10 anos de experiência
                  </h3>
                  <p className="text-[#666666] text-center leading-relaxed text-lg">
                    Dedicados a transformar vidas através da terapia humanizada
                    e acolhedora
                  </p>
                </div>
              </div>
              {}
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-[#c3a681]/20 to-transparent rounded-full blur-2xl -z-10"></div>
            </div>
          </div>

          {}
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#4a2767] mb-8">
              Sobre a <span className="text-[#c3a681] italic">Enillumina</span>
            </h2>
            <p className="text-lg text-[#666666] mb-6 leading-relaxed">
              A Enillumina é uma clínica de terapia comprometida em oferecer um
              espaço seguro e acolhedor para quem busca equilíbrio emocional,
              autoconhecimento e qualidade de vida.
            </p>
            <p className="text-lg text-[#666666] mb-8 leading-relaxed">
              Nossa abordagem integra diferentes técnicas terapêuticas, sempre
              respeitando a individualidade de cada pessoa e seus processos
              únicos de crescimento e transformação.
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
