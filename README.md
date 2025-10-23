# 🌟 Enillumina - Terapias Integrativas

> Website institucional para Eni Aparecida Severo, terapeuta especializada em práticas integrativas de cura e autoconhecimento.

![Next.js](https://img.shields.io/badge/Next.js-15.5-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?logo=tailwind-css)
![React](https://img.shields.io/badge/React-19.1-61dafb?logo=react)

---

## 📖 Sobre o Projeto

O **Enillumina** é um site institucional moderno e elegante, desenvolvido para apresentar os serviços de terapias integrativas oferecidos pela terapeuta Eni Severo. O projeto foi construído com foco em:

- 🎨 **Design Sofisticado**: Interface elegante com paleta de cores roxo e dourado
- ⚡ **Alta Performance**: Otimizações de carregamento e animações suaves
- 📱 **Responsividade Total**: Experiência perfeita em todos os dispositivos
- ♿ **Acessibilidade**: Seguindo as melhores práticas de UX/UI

---

## 🚀 Tecnologias Utilizadas

### Core

- **[Next.js 15.5](https://nextjs.org/)** - Framework React com App Router e Turbopack
- **[React 19.1](https://react.dev/)** - Biblioteca JavaScript para interfaces
- **[TypeScript 5.0](https://www.typescriptlang.org/)** - Tipagem estática
- **[Tailwind CSS 4.0](https://tailwindcss.com/)** - Framework CSS utility-first

### Bibliotecas & Tools

- **[Framer Motion](https://www.framer.com/motion/)** - Animações fluidas
- **[Radix UI](https://www.radix-ui.com/)** - Componentes acessíveis
- **[Lucide React](https://lucide.dev/)** - Ícones modernos
- **[Class Variance Authority](https://cva.style/)** - Variantes de componentes
- **[clsx](https://github.com/lukeed/clsx)** & **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Gerenciamento de classes

### Fontes

- **Cormorant Garamond** - Títulos elegantes (serif)
- **Montserrat** - Textos corporais (sans-serif)

---

## ⚡ Otimizações de Performance

O projeto implementa várias técnicas avançadas de otimização:

### 🖼️ Imagens

- Formato AVIF/WebP automático
- Lazy loading com Next.js Image
- Responsive images otimizadas

### 🎨 Renderização

- Dynamic imports para code splitting
- GPU acceleration em animações
- Debounce em event listeners
- React memoization (useMemo/useCallback)

### 🔤 Fontes

- Font display swap
- Preload habilitado
- Fallbacks de sistema

### 📦 Bundle

- Componentes de ícones reutilizáveis
- Tree shaking automático
- Compressão Gzip/Brotli

**Métricas Alcançadas:**

- ✅ FCP: ~1.4s
- ✅ LCP: ~2.2s
- ✅ TBT: ~250ms
- ✅ CLS: <0.1

---

## 🎯 Funcionalidades

- ✨ **Hero Section** com animação Aurora Background
- 👤 **Sobre a Terapeuta** com formações e experiência
- 🧬 **DNA da Enillumina** com shader background animado
- 💼 **Cards de Serviços** interativos e responsivos
- 💬 **Carrossel de Depoimentos** com navegação
- 📞 **Seção de Contato** com integração WhatsApp
- 🔝 **Botões Flutuantes** (WhatsApp + Scroll to Top)
- 📱 **Menu Mobile** com animações suaves

---

## 🛠️ Como Executar

### Pré-requisitos

- Node.js 20+
- npm, yarn, pnpm ou bun

### Instalação

```bash
# Clone o repositório
git clone https://github.com/matheusdgc/enillumina-prototipo.git

# Entre na pasta
cd enillumina-prototipo

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Build de Produção

```bash
# Gerar build otimizado
npm run build

# Executar em produção
npm start
```

---

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx          # Layout principal + SEO
│   ├── page.tsx            # Página inicial
│   └── globals.css         # Estilos globais
├── components/
│   ├── Header.tsx          # Cabeçalho com menu
│   ├── Hero.tsx            # Seção hero
│   ├── About.tsx           # Sobre a terapeuta
│   ├── DNA.tsx             # DNA da Enillumina
│   ├── Services.tsx        # Grid de serviços
│   ├── Testimonials.tsx    # Carrossel de depoimentos
│   ├── Contact.tsx         # Formulário de contato
│   ├── Footer.tsx          # Rodapé
│   ├── FloatingButtons.tsx # Botões fixos
│   └── ui/                 # Componentes reutilizáveis
│       ├── Button.tsx
│       ├── Icons.tsx       # Ícones SVG otimizados
│       ├── ServiceCard.tsx
│       └── ...
└── lib/
    └── utils.ts            # Utilitários
```

---

## 🎨 Paleta de Cores

```css
--primary: #4a2767      /* Roxo profundo */
--accent: #c3a681       /* Dourado elegante */
--background: #f8f5ff   /* Lilás muito claro */
--text: #666666         /* Cinza médio */
```

---

## 📄 Licença

Este projeto é propriedade de **Enillumina** e foi desenvolvido por **Matheus D. Gomes Chichura**.

---

## 👤 Contato

**Enillumina - Terapias Integrativas**

- 📧 Email: contato@enillumina.com.br
- 📱 WhatsApp: (11) 94173-3744
- 🌐 Website: [enillumina.com.br](https://enillumina.com.br)

**Desenvolvedor**

- 👨‍💻 GitHub: [@matheusdgc](https://github.com/matheusdgc)

---

<div align="center">

**Desenvolvido com 💜 e ⚡ por Matheus D. Gomes Chichura**

</div>
