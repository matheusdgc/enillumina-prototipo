import SectionTitle from "./ui/SectionTitle";
import ServiceCard from "./ui/ServiceCard";
import Button from "./ui/Button";

export default function Services() {
  const services = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Terapia Individual",
      description:
        "Atendimento personalizado focado em suas necessidades específicas, promovendo autoconhecimento e desenvolvimento pessoal.",
      features: ["Ansiedade", "Depressão", "Autoestima", "Relacionamentos"],
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      title: "Terapia de Casal",
      description:
        "Fortalecimento dos vínculos afetivos, melhoria da comunicação e resolução de conflitos no relacionamento.",
      features: ["Comunicação", "Conflitos", "Intimidade", "Projetos futuros"],
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
      title: "Terapia Familiar",
      description:
        "Harmonização das relações familiares, promovendo diálogo e compreensão entre os membros da família.",
      features: ["Convivência", "Limites", "Educação", "Vínculos"],
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Terapia Infantil",
      description:
        "Acompanhamento especializado para crianças, utilizando técnicas lúdicas e adequadas para cada faixa etária.",
      features: ["Desenvolvimento", "Comportamento", "Emoções", "Aprendizagem"],
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
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
      title: "Orientação Profissional",
      description:
        "Apoio na tomada de decisões relacionadas à carreira, identificação de habilidades e planejamento profissional.",
      features: ["Carreira", "Vocação", "Transição", "Objetivos"],
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Grupos Terapêuticos",
      description:
        "Sessões em grupo que promovem troca de experiências, apoio mútuo e crescimento coletivo.",
      features: ["Compartilhamento", "Empatia", "Apoio", "Conexão"],
    },
  ];

  return (
    <section
      id="servicos"
      className="py-24 bg-gradient-to-br from-[#f8f5ff] via-white to-[#f8f5ff] relative overflow-hidden"
    >
      {}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-[#c3a681]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-gradient-to-br from-[#4a2767]/5 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle
          title="Nossos"
          highlight="Serviços"
          subtitle="Oferecemos uma variedade de modalidades terapêuticas para atender às suas necessidades específicas e promover seu bem-estar integral."
        />

        {}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>

        {}
        <div className="text-center mt-16">
          <Button href="#contato" size="lg">
            Agende sua Primeira Sessão
          </Button>
        </div>
      </div>
    </section>
  );
}
