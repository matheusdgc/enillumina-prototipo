import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const DNA = dynamic(() => import("@/components/DNA"), {
  loading: () => (
    <div className="min-h-screen animate-pulse bg-gradient-to-b from-[#4a2767]/5 to-[#4a2767]/10" />
  ),
});

const Services = dynamic(() => import("@/components/Services"), {
  loading: () => (
    <div className="min-h-[60vh] animate-pulse bg-gradient-to-br from-[#f8f5ff]/50 to-white" />
  ),
});

const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => (
    <div className="min-h-[50vh] animate-pulse bg-gradient-to-br from-white/50 to-[#f8f5ff]/50" />
  ),
});

const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => (
    <div className="min-h-[60vh] animate-pulse bg-gradient-to-br from-[#f8f5ff]/50 to-white" />
  ),
});

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <DNA />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
