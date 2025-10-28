"use client";

import { useState, useMemo, useCallback } from "react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = useMemo(
    () => [
      {
        name: "Adelvilse",
        role: "Constelação Familiar",
        content:
          "A Constelação Familiar me ajudou a compreender padrões que se repetiam na minha vida. Eni conduziu a sessão com muita sensibilidade e profundidade. Hoje consigo me relacionar melhor com minha família e comigo mesma.",
        rating: 5,
      },
      {
        name: "Daiana Gois",
        role: "Hipnose",
        content:
          "Carregamos culpas e segredos na alma, que nos impossibilitam de ter uma vida mais leve e feliz, na sessão da hipnose pude olhar profundamente para estas questões e  ressignificar meus sentimentos. Uma vivência marcante com muitas liberações.",
        rating: 5,
      },
      {
        name: "Leandra",
        role: "Regressão",
        content:
          "A Hipnose/Regressão foi uma experiência reveladora. Consegui acessar memórias e compreender traumas que carregava sem entender. A cura emocional que vivenciei foi profunda e me trouxe muito autoconhecimento",
        rating: 5,
      },
      {
        name: "Antonio Carlos",
        role: "Mandalas",
        content:
          "O trabalho com Mandalas me surpreendeu. Através da Magia das Mandalas, reencontrei minha autoestima e energia. É um processo criativo e terapêutico ao mesmo tempo!",
        rating: 5,
      },
    ],
    []
  );

  const nextTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, [testimonials.length]);

  return (
    <section
      id="depoimentos"
      className="py-24 bg-gradient-to-br from-white to-[#f8f5ff] relative overflow-hidden"
    >
      {}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-gradient-to-br from-[#c3a681]/10 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#4a2767] mb-6">
            O que dizem{" "}
            <span className="text-[#c3a681] italic">nossos clientes</span>
          </h2>
          <p className="text-lg text-[#555555] max-w-2xl mx-auto leading-relaxed">
            Histórias reais de pessoas que transformaram suas vidas através das
            terapias integrativas.
          </p>
        </div>

        {}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#f8f5ff] to-white rounded-3xl p-8 md:p-12 shadow-2xl relative border border-[#c3a681]/20">
            {}
            <div className="absolute top-6 left-6 text-[#c3a681] opacity-20">
              <svg
                className="w-16 h-16"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            <div className="relative z-10">
              {}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-[#c3a681]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {}
              <p className="text-lg md:text-xl text-[#333333] text-center mb-8 leading-relaxed italic font-serif">
                &ldquo;{testimonials[activeIndex].content}&rdquo;
              </p>

              {}
              <div className="text-center">
                <h4 className="font-semibold text-[#4a2767] text-lg">
                  {testimonials[activeIndex].name}
                </h4>
                <p className="text-[#555555]">
                  {testimonials[activeIndex].role}
                </p>
              </div>
            </div>
          </div>

          {}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-[#c3a681] text-white rounded-full hover:bg-[#b39570] hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-lg"
              aria-label="Depoimento anterior"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-[#c3a681] w-8"
                      : "bg-[#c3a681]/30 w-3 hover:bg-[#c3a681]/60"
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-[#c3a681] text-white rounded-full hover:bg-[#b39570] hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-lg"
              aria-label="Próximo depoimento"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
