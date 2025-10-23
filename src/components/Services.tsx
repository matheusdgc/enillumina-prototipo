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
      title: "Constelação Familiar",
      description:
        "Descubra a Constelação Familiar para harmonizar suas relações e desbloquear seu potencial.",
      features: [
        "Padrões Familiares",
        "Relacionamentos",
        "Ancestralidade",
        "Vínculos",
      ],
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
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Apometria",
      description:
        "Explore a prática da Apometria para liberar bloqueios energéticos e promover equilíbrio interior.",
      features: [
        "Limpeza Energética",
        "Bloqueios",
        "Equilíbrio",
        "Harmonização",
      ],
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
      title: "Hipnose",
      description:
        "Mergulhe na experiência da Hipnose para acessar seu subconsciente e promover mudanças positivas duradouras.",
      features: ["Subconsciente", "Hábitos", "Fobias", "Autocontrole"],
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
      title: "Regressão",
      description:
        "Reviva a regressão para explorar suas raízes profundas e promover cura emocional e autoconhecimento.",
      features: ["Memórias", "Traumas", "Vidas Passadas", "Cura Emocional"],
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
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Práticas Xamânicas",
      description:
        "Vivencie práticas Xamânicas para conectar-se com sua essência e abrir caminhos para a expansão espiritual.",
      features: ["Conexão Espiritual", "Natureza", "Rituais", "Meditação"],
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
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Mandalas",
      description:
        "Aprecie a magia dos Mandalas para harmonizar sua energia e promover bem-estar.",
      features: ["Harmonização", "Criatividade", "Meditação", "Equilíbrio"],
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
