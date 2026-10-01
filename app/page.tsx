"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  MapPin,
  Menu,
  Scale,
  UsersRound,
  X,
} from "lucide-react";

const officeName = "Advocacia Elder Martins Advogados Associados";
const instagramUrl = "https://www.instagram.com/eldermartinsadvogados/";
const officeAddress =
  "R. Dr. Marcial Júnior, 150 - Parque das Nações, Alfenas - MG, 37130-000, Brasil";
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${officeName}, ${officeAddress}`)}`;

const reveal: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.03 } },
};

const practiceAreas = [
  {
    number: "01",
    title: "Trabalho & empresas",
    icon: BriefcaseBusiness,
    lead: "Elder Martins",
    areas: ["Direito do Trabalho", "Direito Empresarial"],
    summary:
      "Atuação em questões trabalhistas e empresariais, com atenção ao contexto de cada demanda.",
    details:
      "O escritório informa atuação em Direito do Trabalho e Empresarial. A orientação considera as particularidades apresentadas e os documentos relacionados a cada situação.",
  },
  {
    number: "02",
    title: "Família & sucessões",
    icon: UsersRound,
    lead: "Fernanda Modolo",
    areas: [
      "Direito do Trabalho",
      "Direito de Família",
      "Sucessões",
    ],
    summary:
      "Orientação jurídica em temas familiares, sucessórios e de relações de trabalho.",
    details:
      "A atuação informada abrange Direito do Trabalho, Direito de Família e Sucessões. Cada situação é analisada de acordo com seus fatos e necessidades próprios.",
  },
  {
    number: "03",
    title: "Civil & previdenciário",
    icon: Scale,
    lead: "Everton Landre",
    areas: ["Direito Civil", "Direito Previdenciário"],
    summary:
      "Acompanhamento jurídico em questões civis e previdenciárias.",
    details:
      "O escritório informa atuação em Direito Civil e Previdenciário. A análise jurídica depende do contexto, dos documentos e das normas aplicáveis a cada caso.",
  },
];

const team = [
  {
    name: "Elder Martins",
    role: "Direito do Trabalho e Empresarial",
    image: "/elder-martins/elder-martins.jpg",
    alt: "Elder Martins em seu escritório",
    position: "object-[50%_24%]",
  },
  {
    name: "Fernanda Modolo",
    role: "Direito do Trabalho, Família e Sucessões",
    image: "/elder-martins/fernanda-modolo.jpg",
    alt: "Fernanda Modolo em retrato profissional",
    position: "object-[50%_20%]",
  },
  {
    name: "Everton Landre",
    role: "Direito Civil e Previdenciário",
    image: "/elder-martins/everton-landre.jpg",
    alt: "Everton Landre em retrato profissional",
    position: "object-[50%_18%]",
  },
];

const reviews = [
  {
    author: "Juliana Avila",
    quote:
      "Ótimo atendimento, profissionais capacitados e sempre prontos para esclarecimentos. Super recomendo!",
  },
  {
    author: "Marta Oliveira de Souza",
    quote: "Excelente atendimento! São muito competentes! Super indico.",
  },
  {
    author: "RodJoga",
    quote: "Ótimos profissionais, atendimento excelente.",
  },
  {
    author: "Gilberto Lopes Pereira",
    quote: "Atendimento excelente, muito profissional e atencioso.",
  },
  {
    author: "Neiva Modolo",
    quote: "Ótimos profissionais! Atendimento nota 10!!!",
  },
  {
    author: "Luís Antônio Portes Lima",
    quote: "Atendimento de qualidade com resolutividade. Parabéns a toda a equipe.",
  },
];

const navigation = [
  ["Início", "#inicio"],
  ["Atuação", "#atuacao"],
  ["Equipe", "#equipe"],
  ["Escritório", "#escritorio"],
  ["Contato", "#contato"],
];

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex items-center gap-3">
      <span
        aria-hidden="true"
        className="grid size-11 shrink-0 place-items-center border border-brand-300/75 pr-1 font-serif text-[1.4rem] leading-none tracking-[-0.16em] text-brand-200"
      >
        EM
      </span>
      {!compact && (
        <span className="flex flex-col leading-tight">
          <span className="font-serif text-[1.2rem] tracking-[0.015em] text-white">
            Elder Martins
          </span>
          <span className="mt-1 text-[8px] font-semibold uppercase tracking-[0.19em] text-white/55">
            Advogados Associados
          </span>
        </span>
      )}
    </span>
  );
}

function InstagramMark({ size = 16 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.7" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Heading({
  eyebrow,
  children,
  description,
  light = false,
}: {
  eyebrow: string;
  children: ReactNode;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <p className={light ? "eyebrow-light mb-4" : "eyebrow mb-4"}>
        {eyebrow}
      </p>
      <h2
        className={
          light
            ? "font-serif text-4xl leading-[1.06] tracking-[-0.035em] text-white sm:text-5xl lg:text-[3.55rem]"
            : "font-serif text-4xl leading-[1.06] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[3.55rem]"
        }
      >
        {children}
      </h2>
      {description && (
        <p
          className={
            light
              ? "mt-5 max-w-xl text-[15px] leading-7 text-white/65"
              : "mt-5 max-w-xl text-[15px] leading-7 text-ink-soft"
          }
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeArea, setActiveArea] = useState<
    (typeof practiceAreas)[number] | null
  >(null);

  useEffect(() => {
    if (!activeArea) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveArea(null);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeArea]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <MotionConfig reducedMotion="user">
      <main className="overflow-x-clip bg-ivory text-ink">
        <a className="skip-link" href="#conteudo">
          Ir para o conteúdo
        </a>

        <header className="sticky top-0 z-40 border-b border-white/10 bg-night/95 text-white backdrop-blur-xl">
          <div className="mx-auto flex h-[78px] max-w-7xl items-center justify-between gap-5 px-5 sm:h-[88px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label={`${officeName} — início`}
              onClick={closeMenu}
              className="shrink-0"
            >
              <BrandMark />
            </a>

            <nav
              aria-label="Navegação principal"
              className="hidden items-center gap-7 xl:flex"
            >
              {navigation.map(([label, href]) => (
                <a className="nav-link" href={href} key={href}>
                  {label}
                </a>
              ))}
            </nav>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-full border border-brand-300/60 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.13em] text-brand-100 transition-colors hover:border-brand-200 hover:bg-brand-300 hover:text-night lg:inline-flex"
            >
              <InstagramMark size={15} /> Instagram
              <ArrowUpRight size={13} />
            </a>

            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="grid size-11 place-items-center rounded-full border border-white/20 xl:hidden"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                id="mobile-navigation"
                aria-label="Navegação móvel"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.22 }}
                className="overflow-hidden border-t border-white/10 bg-night px-6 xl:hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1 py-4">
                  {navigation.map(([label, href]) => (
                    <a
                      key={href}
                      href={href}
                      onClick={closeMenu}
                      className="py-3 text-sm text-white/75 transition-colors hover:text-brand-200"
                    >
                      {label}
                    </a>
                  ))}
                  <a
                    className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-brand-300 px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.13em] text-night"
                    href={instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={closeMenu}
                  >
                    <InstagramMark size={15} /> Perfil do escritório
                  </a>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        <div id="conteudo">
          <section
            id="inicio"
            className="relative isolate scroll-mt-24 overflow-hidden bg-night text-white"
          >
            <div className="pointer-events-none absolute -right-40 top-10 -z-10 size-[35rem] rounded-full bg-brand-800/20 blur-3xl" />
            <div className="pointer-events-none absolute -left-52 bottom-[-17rem] -z-10 size-[36rem] rounded-full bg-brand-700/10 blur-3xl" />
            <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:min-h-[740px] lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:px-12 lg:py-20">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={stagger}
                className="relative z-10 max-w-2xl lg:py-6"
              >
                <motion.p variants={reveal} className="eyebrow-light mb-7">
                  ADVOCACIA ELDER MARTINS · ALFENAS, MG
                </motion.p>
                <motion.h1
                  variants={reveal}
                  className="max-w-[730px] font-serif text-[3.25rem] leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-[5.05rem]"
                >
                  Orientação jurídica com{" "}
                  <em className="font-normal text-brand-300">clareza</em> e
                  presença.
                </motion.h1>
                <motion.p
                  variants={reveal}
                  className="mt-7 max-w-xl text-[15px] leading-7 text-white/70 sm:text-base sm:leading-8"
                >
                  Atuação em diferentes áreas do Direito, com atenção às
                  particularidades de cada demanda. Conheça a equipe e o
                  escritório em Alfenas.
                </motion.p>
                <motion.div
                  variants={reveal}
                  className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
                >
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-300 bg-brand-300 px-7 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-night transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-200 hover:bg-brand-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-200"
                  >
                    <InstagramMark size={16} /> Fale com o escritório
                    <ArrowUpRight size={14} />
                  </a>
                  <a
                    href="#atuacao"
                    className="group inline-flex items-center gap-2 px-1 py-3 text-sm font-medium text-white/80 transition-colors hover:text-brand-200"
                  >
                    Conheça a atuação
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>
                </motion.div>
                <motion.div
                  variants={reveal}
                  className="mt-11 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-white/15 pt-6 text-xs text-white/65"
                >
                  <span className="inline-flex items-center gap-2">
                    <MapPin size={15} className="text-brand-300" />
                    Alfenas · Minas Gerais
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Scale size={15} className="text-brand-300" />
                    Atendimento jurídico
                  </span>
                </motion.div>
              </motion.div>

              <motion.figure
                initial={{ opacity: 0, scale: 0.97, y: 18 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.85,
                  delay: 0.14,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative mx-auto w-full max-w-[490px] lg:ml-auto lg:mr-2"
              >
                <div className="absolute -inset-3 -rotate-2 border border-brand-300/35 sm:-inset-4" />
                <div className="relative aspect-[0.84] overflow-hidden bg-[#24221d]">
                  <Image
                    src="/elder-martins/elder-martins.jpg"
                    alt="Elder Martins em seu escritório"
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 42vw"
                    className="object-cover object-[50%_24%]"
                    preload
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-night/90 to-transparent" />
                  <figcaption className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3 text-white sm:bottom-8 sm:left-8 sm:right-8">
                    <div>
                      <p className="font-serif text-2xl">Elder Martins</p>
                      <p className="mt-1 text-[10px] uppercase tracking-[0.17em] text-white/70">
                        Advocacia · Alfenas, MG
                      </p>
                    </div>
                    <span className="grid size-11 shrink-0 place-items-center rounded-full border border-brand-200/70 text-brand-200">
                      <Scale size={18} />
                    </span>
                  </figcaption>
                </div>
                <div className="absolute -left-3 top-[15%] border border-white/10 bg-night px-4 py-2.5 text-[10px] font-medium tracking-[0.1em] text-white shadow-card sm:-left-9 sm:px-5">
                  DIREITO COM ATENÇÃO A CADA HISTÓRIA
                </div>
              </motion.figure>
            </div>
          </section>

          <section
            aria-label="Informações sobre o escritório"
            className="border-b border-ink/10 bg-white"
          >
            <div className="mx-auto grid max-w-7xl gap-6 px-5 py-7 sm:grid-cols-3 sm:gap-4 sm:px-8 lg:px-12">
              {[
                ["Alfenas", "sede do escritório"],
                ["Três profissionais", "equipe apresentada"],
                ["Seis frentes", "áreas informadas"],
              ].map(([value, label], index) => (
                <div
                  key={value}
                  className={
                    index > 0
                      ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-ink/10"
                      : "flex items-center gap-4 sm:justify-center"
                  }
                >
                  <span className="font-serif text-2xl text-brand-700 sm:text-[1.7rem]">
                    {value}
                  </span>
                  <span className="max-w-[145px] text-[11px] leading-5 text-ink-soft">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section
            id="atuacao"
            className="scroll-mt-24 bg-ivory py-20 sm:py-28 lg:py-32"
          >
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.18 }}
                variants={reveal}
                className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
              >
                <Heading
                  eyebrow="ÁREAS DE ATUAÇÃO"
                  description="As áreas abaixo foram informadas pelo escritório. A análise e a orientação dependem das particularidades de cada situação."
                >
                  Atuação jurídica em diferentes momentos da vida.
                </Heading>
                <span className="hidden h-px w-28 bg-brand-500/60 md:mb-3 md:block" />
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.12 }}
                variants={stagger}
                className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3"
              >
                {practiceAreas.map((area) => {
                  const Icon = area.icon;
                  return (
                    <motion.button
                      key={area.number}
                      variants={reveal}
                      type="button"
                      onClick={() => setActiveArea(area)}
                      aria-haspopup="dialog"
                      className="group flex min-h-[300px] flex-col border border-ink/10 bg-white p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/55 hover:shadow-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700 sm:p-8"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-lg text-brand-700">
                          {area.number}
                        </span>
                        <span className="grid size-11 place-items-center rounded-full border border-brand-700/20 text-brand-800 transition-colors group-hover:border-brand-700 group-hover:bg-brand-700 group-hover:text-white">
                          <Icon size={19} strokeWidth={1.6} />
                        </span>
                      </div>
                      <h3 className="mt-8 font-serif text-[1.65rem] leading-tight text-ink">
                        {area.title}
                      </h3>
                      <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-800">
                        {area.lead}
                      </p>
                      <p className="mt-3 flex-1 text-[13px] leading-6 text-ink-soft">
                        {area.summary}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.13em] text-brand-800">
                        Ver áreas relacionadas
                        <ArrowRight
                          size={14}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </span>
                    </motion.button>
                  );
                })}
              </motion.div>
            </div>
          </section>

          <section
            id="equipe"
            className="scroll-mt-24 bg-white py-20 sm:py-28 lg:py-32"
          >
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.18 }}
                variants={reveal}
              >
                <Heading
                  eyebrow="A EQUIPE"
                  description="Profissionais e áreas de atuação apresentados pelo escritório."
                >
                  Pessoas à frente do atendimento.
                </Heading>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.12 }}
                variants={stagger}
                className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
              >
                {team.map((person, index) => (
                  <motion.figure
                    key={person.name}
                    variants={reveal}
                    className="group"
                  >
                    <div className="relative aspect-[0.86] overflow-hidden bg-[#ded8cc]">
                      <Image
                        src={person.image}
                        alt={person.alt}
                        fill
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 44vw, 30vw"
                        className={`object-cover ${person.position} transition-transform duration-700 group-hover:scale-[1.025]`}
                        loading="lazy"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-night/80 to-transparent" />
                      <span className="absolute bottom-5 left-5 font-serif text-4xl text-white/90">
                        0{index + 1}
                      </span>
                    </div>
                    <figcaption className="border-b border-ink/15 py-5">
                      <h3 className="font-serif text-[1.65rem] text-ink">
                        {person.name}
                      </h3>
                      <p className="mt-2 text-[11px] leading-5 text-ink-soft">
                        {person.role}
                      </p>
                    </figcaption>
                  </motion.figure>
                ))}
              </motion.div>
            </div>
          </section>

          <section
            id="escritorio"
            className="scroll-mt-24 bg-[#efede7] py-20 sm:py-28 lg:py-32"
          >
            <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:px-12">
              <motion.figure
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={reveal}
                className="relative mx-auto w-full max-w-[570px]"
              >
                <div className="relative aspect-[1.18] overflow-hidden bg-[#211e19]">
                  <Image
                    src="/elder-martins/equipe-elder-martins.jpg"
                    alt="Integrantes da equipe em frente ao escritório"
                    fill
                    sizes="(max-width: 1024px) 90vw, 46vw"
                    className="object-cover object-[50%_48%]"
                    loading="lazy"
                  />
                </div>
                <figcaption className="absolute -bottom-5 left-5 border-l-2 border-brand-600 bg-white px-5 py-4 shadow-card sm:-left-6 sm:px-7">
                  <p className="font-serif text-xl text-ink">
                    Alfenas, Minas Gerais
                  </p>
                  <p className="mt-1 text-[11px] leading-5 text-ink-soft">
                    Advocacia Elder Martins
                  </p>
                </figcaption>
                <span className="absolute -right-3 -top-3 -z-10 size-20 border-r border-t border-brand-600/45 sm:-right-6 sm:-top-6 sm:size-28" />
              </motion.figure>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={stagger}
              >
                <motion.p variants={reveal} className="eyebrow">
                  O ESCRITÓRIO
                </motion.p>
                <motion.h2
                  variants={reveal}
                  className="mt-4 max-w-2xl font-serif text-4xl leading-[1.07] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[3.55rem]"
                >
                  Uma conversa atenta é o começo.
                </motion.h2>
                <motion.p
                  variants={reveal}
                  className="mt-6 max-w-xl text-[15px] leading-7 text-ink-soft"
                >
                  A equipe Elder Martins reúne profissionais com atuação nas
                  áreas trabalhista, empresarial, familiar, sucessória, civil e
                  previdenciária. O primeiro passo é compreender o contexto e
                  apresentar informações jurídicas de forma clara.
                </motion.p>
                <motion.p
                  variants={reveal}
                  className="mt-4 max-w-xl text-[15px] leading-7 text-ink-soft"
                >
                  O escritório está localizado em Alfenas, Minas Gerais. Para
                  conhecer a equipe e acompanhar as informações publicadas,
                  acesse os canais oficiais.
                </motion.p>
                <motion.a
                  variants={reveal}
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-8 inline-flex items-center gap-2 border-b border-brand-700/40 pb-2 text-xs font-semibold uppercase tracking-[0.13em] text-brand-800 transition-colors hover:border-brand-700 hover:text-brand-700"
                >
                  Instagram do escritório
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </motion.a>
              </motion.div>
            </div>
          </section>

          <section
            id="avaliacoes"
            className="scroll-mt-24 bg-white py-20 sm:py-24"
          >
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
              <div className="flex flex-col gap-7 border-b border-ink/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
                <Heading
                  eyebrow="AVALIAÇÕES PÚBLICAS"
                  description="Alguns comentários de avaliações públicas compartilhadas sobre o atendimento da equipe."
                >
                  A experiência no atendimento.
                </Heading>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex shrink-0 items-center gap-2 self-start border-b border-brand-600/60 pb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:border-brand-700 hover:text-brand-700 sm:self-auto"
                >
                  Ver perfil e avaliações no Google
                  <ArrowUpRight
                    size={14}
                    className="text-brand-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.12 }}
                variants={stagger}
                className="mt-9 grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
              >
                {reviews.map(({ author, quote }) => (
                  <motion.figure
                    key={author}
                    variants={reveal}
                    className="group flex min-h-[220px] flex-col border border-ink/10 bg-[#faf9f6] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/55 hover:bg-white hover:shadow-card sm:p-7"
                  >
                    <span
                      aria-hidden="true"
                      className="font-serif text-5xl leading-none text-brand-600"
                    >
                      “
                    </span>
                    <blockquote className="mt-3 flex-1 font-serif text-[20px] leading-[1.45] text-ink">
                      {quote}
                    </blockquote>
                    <figcaption className="mt-6 border-t border-ink/10 pt-4">
                      <span className="flex items-center gap-3 text-[11px] font-semibold text-ink">
                        <span className="h-px w-5 bg-brand-500" />
                        {author}
                      </span>
                      <span className="mt-1 block pl-8 text-[9px] font-semibold uppercase tracking-[0.15em] text-ink-soft">
                        Avaliação pública no Google
                      </span>
                    </figcaption>
                  </motion.figure>
                ))}
              </motion.div>
            </div>
          </section>

          <section
            id="contato"
            className="scroll-mt-24 bg-night py-20 text-white sm:py-28 lg:py-32"
          >
            <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12">
              <div>
                <Heading
                  eyebrow="CONTATO E LOCALIZAÇÃO"
                  light
                  description="Encontre o endereço do escritório e acesse os canais oficiais de comunicação."
                >
                  Estamos em Alfenas.
                </Heading>
                <div className="mt-9 flex flex-col items-start gap-4">
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 border-b border-brand-300/45 pb-3 text-sm text-brand-100 transition-colors hover:border-brand-200 hover:text-white"
                  >
                    <InstagramMark size={17} /> Instagram do escritório
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              <div className="relative overflow-hidden border border-white/15 bg-white/[0.04] p-7 sm:p-10">
                <div className="absolute right-0 top-0 h-px w-32 bg-brand-300" />
                <div className="flex items-center gap-4">
                  <span className="grid size-12 place-items-center rounded-full border border-brand-300/35 text-brand-200">
                    <MapPin size={21} strokeWidth={1.6} />
                  </span>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-200">
                      Endereço
                    </p>
                    <p className="mt-1 font-serif text-2xl text-white">
                      Alfenas · MG
                    </p>
                  </div>
                </div>
                <address className="mt-7 max-w-md not-italic text-[14px] leading-7 text-white/70">
                  R. Dr. Marcial Júnior, 150
                  <br />
                  Parque das Nações
                  <br />
                  Alfenas · MG · CEP 37130-000
                </address>
                <div className="my-7 h-px bg-white/15" />
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs text-white/60">
                    Advocacia Elder Martins Advogados Associados
                  </p>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.13em] text-white transition-colors hover:border-brand-300 hover:text-brand-200"
                  >
                    Ver localização <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>

        <footer className="bg-[#090a08] px-5 py-12 text-white sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr_1fr]">
            <div>
              <a
                href="#inicio"
                aria-label={`${officeName} — voltar ao início`}
                className="inline-flex"
              >
                <BrandMark />
              </a>
              <p className="mt-4 max-w-xs text-xs leading-6 text-white/55">
                Advocacia em Alfenas, Minas Gerais. Atuação informada nas áreas
                trabalhista, empresarial, familiar, sucessória, civil e
                previdenciária.
              </p>
            </div>
            <div>
              <h2 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-200">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-white/65">
                <a className="footer-link" href="#atuacao">
                  Áreas de atuação
                </a>
                <a className="footer-link" href="#equipe">
                  Equipe
                </a>
                <a className="footer-link" href="#escritorio">
                  O escritório
                </a>
                <a className="footer-link" href="#avaliacoes">
                  Informações públicas
                </a>
                <a className="footer-link" href="#contato">
                  Contato
                </a>
              </div>
            </div>
            <div>
              <h2 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-200">
                Canais oficiais
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-white/65">
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2"
                >
                  <InstagramMark size={14} /> Instagram
                </a>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-start gap-2"
                >
                  <MapPin size={14} className="mt-0.5 shrink-0" /> Alfenas · MG
                </a>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/15 pt-5 text-[10px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} {officeName}.</p>
            <p>
              Conteúdo informativo. Cada situação deve ser analisada
              individualmente.
            </p>
          </div>
        </footer>

        <AnimatePresence>
          {activeArea && (
            <motion.div
              className="fixed inset-0 z-50 flex items-end justify-center bg-night/75 p-0 backdrop-blur-sm sm:items-center sm:p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArea(null)}
            >
              <motion.section
                role="dialog"
                aria-modal="true"
                aria-labelledby="area-dialog-title"
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.99 }}
                transition={{ duration: 0.24 }}
                onClick={(event) => event.stopPropagation()}
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-2xl bg-ivory p-7 shadow-card sm:max-w-xl sm:rounded-sm sm:p-10"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da área"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-full border border-ink/15 text-ink transition-colors hover:text-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
                >
                  <X size={18} />
                </button>
                <p className="eyebrow">ÁREAS DE ATUAÇÃO</p>
                <h2
                  id="area-dialog-title"
                  className="mt-4 max-w-sm pr-10 font-serif text-4xl leading-tight text-ink"
                >
                  {activeArea.title}
                </h2>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-800">
                  {activeArea.lead}
                </p>
                <p className="mt-5 text-sm leading-7 text-ink-soft">
                  {activeArea.details}
                </p>
                <ul className="mt-6 space-y-3">
                  {activeArea.areas.map((area) => (
                    <li
                      key={area}
                      className="flex items-center gap-3 text-sm text-ink"
                    >
                      <span className="size-1.5 rounded-full bg-brand-700" />
                      {area}
                    </li>
                  ))}
                </ul>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-brand-300 bg-brand-300 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-night transition-colors hover:bg-brand-200"
                >
                  <InstagramMark size={15} /> Acessar Instagram do escritório
                  <ArrowUpRight size={14} />
                </a>
              </motion.section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </MotionConfig>
  );
}
