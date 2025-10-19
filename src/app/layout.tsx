import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://enillumina.com.br"),
  title: "Enillumina - Terapia Holística e Bem-Estar",
  description:
    "Centro de terapia holística especializado em equilíbrio emocional, espiritual e energético. Descubra o caminho para seu bem-estar.",
  keywords: [
    "terapia holística",
    "terapia individual",
    "terapia de casal",
    "terapia familiar",
    "psicoterapia",
    "bem-estar emocional",
    "saúde mental",
    "autoconhecimento",
    "São Paulo",
  ],
  authors: [{ name: "Enillumina", url: "https://enillumina.com.br" }],
  creator: "Enillumina",
  publisher: "Enillumina",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/logo-simples-vetor.png",
    shortcut: "/logo-simples-vetor.png",
    apple: "/logo-simples-vetor.png",
  },
  openGraph: {
    title: "Enillumina - Terapia Holística e Bem-Estar",
    description:
      "Centro de terapia holística especializado em equilíbrio emocional, espiritual e energético. Agende sua consulta.",
    url: "https://enillumina.com.br",
    siteName: "Enillumina",
    images: [
      {
        url: "/logo-completa-vetor.png",
        width: 800,
        height: 600,
        alt: "Enillumina - Centro de Terapia Holística",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enillumina - Terapia Holística e Bem-Estar",
    description:
      "Centro de terapia holística especializado em equilíbrio emocional, espiritual e energético.",
    images: ["/logo-completa-vetor.png"],
    creator: "@enillumina",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Enillumina",
  description:
    "Centro de terapia holística especializado em equilíbrio emocional, espiritual e energético.",
  url: "https://enillumina.com.br",
  logo: "https://enillumina.com.br/logo-completa-vetor.png",
  image: "https://enillumina.com.br/logo-completa-vetor.png",
  telephone: "+55-11-99999-9999",
  email: "contato@enillumina.com.br",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Example, 123",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    postalCode: "00000-000",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "-23.5505",
    longitude: "-46.6333",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "20:00",
    },
  ],
  priceRange: "$$",
  currenciesAccepted: "BRL",
  paymentAccepted: "Cash, Credit Card, Debit Card, PIX",
  sameAs: [
    "https://instagram.com/enillumina",
    "https://facebook.com/enillumina",
    "https://linkedin.com/company/enillumina",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${cormorantGaramond.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
