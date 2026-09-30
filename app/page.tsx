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
  Gavel,
  MapPin,
  Menu,
  MessageCircle,
  Quote,
  Scale,
  Search,
  ShieldCheck,
  X,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const instagram = "https://www.instagram.com/victorcampos.adv/";
const officeAddress =
  "R. Gen. Antônio Carlos de Andrada Serpa, 307 - sala 802, Urias Barbosa de Castro, Barbacena - MG, 36200-008, Brasil";
const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `Victor Campos Advocacia e Assessoria Jurídica, ${officeAddress}`,
)}`;

function InstagramMark({
  size = 16,
  strokeWidth = 1.8,
}: {
  size?: number;
  strokeWidth?: number;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.8" cy="6.4" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.04 } },
};

const areas = [
  {
    title: "Investigações e inquéritos",
    icon: Search,
    summary:
      "Acompanhamento jurídico desde a fase de investigação, com atenção aos direitos e às particularidades de cada situação.",
    details:
      "A fase de investigação pode envolver dúvidas e decisões importantes. A atuação considera os elementos disponíveis, os direitos envolvidos e os próximos atos previstos, com orientação clara sobre cada etapa.",
    topics: ["Inquéritos policiais", "Acompanhamento de diligências", "Orientação sobre direitos"],
  },
  {
    title: "Processos criminais",
    icon: ShieldCheck,
    summary:
      "Defesa técnica e acompanhamento processual, com análise individual dos fatos e dos documentos.",
    details:
      "Em um processo criminal, compreender o andamento e as medidas possíveis é parte essencial do acompanhamento. A defesa é conduzida com análise cuidadosa dos autos e comunicação direta sobre os atos processuais.",
    topics: ["Ações penais", "Análise dos autos", "Acompanhamento do processo"],
  },
  {
    title: "Audiências e atos processuais",
    icon: Gavel,
    summary:
      "Preparação e acompanhamento em audiências e demais atos relacionados à defesa criminal.",
    details:
      "Cada audiência e ato processual tem objetivos e procedimentos próprios. O acompanhamento busca esclarecer o que será tratado, orientar sobre a participação e manter o cliente informado sobre os encaminhamentos.",
    topics: ["Audiências criminais", "Atos processuais", "Orientação durante o acompanhamento"],
  },
];

const reviews = [
  {
    quote: "Excelente trabalho, com respeito, competência e humanismo. Só tenho a agradecer.",
    author: "Leila G.",
  },
  {
    quote: "Tratam cada cliente com respeito, atenção e muita humanidade. O trabalho é sério e feito com o coração.",
    author: "Antonio H.",
  },
  {
    quote: "Profissional competente, dedicado e experiente, com excelente conduta ética e respeito pelos clientes.",
    author: "Livia H.",
  },
  {
    quote: "Dedicado, competente e conhecedor impecável da vida jurídica. Tenho total confiança no seu trabalho.",
    author: "Rafael M.",
  },
  {
    quote: "Muito atencioso, competente e confiável. Recomendo!",
    author: "Jenifer M.",
  },
  {
    quote: "Ético, ágil e muito competente. Recomendo com total confiança!",
    author: "Gaby G.",
  },
];

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
      <p className={light ? "eyebrow-light mb-4" : "eyebrow mb-4"}>{eyebrow}</p>
      <h2
        className={
          light
            ? "font-serif text-4xl leading-[1.07] tracking-[-0.035em] text-white sm:text-5xl lg:text-[3.55rem]"
            : "font-serif text-4xl leading-[1.07] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[3.55rem]"
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
  const [activeArea, setActiveArea] = useState<(typeof areas)[number] | null>(null);

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
        <header className="sticky top-0 z-40 border-b border-white/10 bg-night/95 text-white backdrop-blur-xl">
        <div className="mx-auto flex h-[96px] max-w-7xl items-center justify-between gap-5 px-5 sm:h-[112px] sm:px-8 lg:px-12">
            <a href="#inicio" aria-label="Victor Campos Advocacia — início" onClick={closeMenu}>
              <Image
                src="/victor-campos/logo.webp"
                width={800}
                height={477}
                alt="Victor Campos — Assessoria Jurídica"
                className="h-auto w-[142px] sm:w-[165px]"
                sizes="(max-width: 640px) 142px, 165px"
                loading="eager"
              />
            </a>

            <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex">
              <a className="nav-link" href="#inicio">Início</a>
              <a className="nav-link" href="#escritorio">O advogado</a>
              <a className="nav-link" href="#atuacao">Atuação</a>
              <a className="nav-link" href="#avaliacoes">Avaliações</a>
              <a className="nav-link" href="#contato">Contato</a>
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <a
                href={instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram de Victor Campos"
                className="grid size-10 place-items-center rounded-full border border-white/20 text-white/85 transition-colors hover:border-brand-300 hover:text-brand-200"
              >
                <InstagramMark size={17} strokeWidth={1.7} />
              </a>
              <GlowingButton href={instagram} target="_blank" size="sm" className="rounded-full">
                Acesse o Instagram <ArrowUpRight size={14} />
              </GlowingButton>
            </div>

            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="grid size-11 place-items-center rounded-full border border-white/20 lg:hidden"
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
                className="overflow-hidden border-t border-white/10 bg-night px-6 lg:hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1 py-4">
                  {[
                    ["Início", "#inicio"],
                    ["O advogado", "#escritorio"],
                    ["Atuação", "#atuacao"],
                    ["Avaliações", "#avaliacoes"],
                    ["Contato", "#contato"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={closeMenu}
                      className="py-3 text-sm text-white/70 transition-colors hover:text-brand-200"
                    >
                      {label}
                    </a>
                  ))}
                  <a
                    className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-brand-700 px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.13em] text-white"
                    href={instagram}
                    target="_blank"
                    rel="noreferrer"
                    onClick={closeMenu}
                  >
                    <InstagramMark size={15} /> Perfil profissional
                  </a>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        <section id="inicio" className="relative isolate scroll-mt-24 bg-night text-white">
          <div className="pointer-events-none absolute -right-40 top-10 -z-10 size-[34rem] rounded-full bg-brand-800/25 blur-3xl" />
      <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-14 px-5 pt-24 pb-16 sm:px-8 sm:pt-28 sm:pb-20 lg:min-h-[710px] lg:grid-cols-[1.03fr_0.97fr] lg:gap-10 lg:px-12 lg:pt-28 lg:pb-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:py-6"
            >
              <motion.p variants={reveal} className="eyebrow-light mb-7">
                Victor Campos · Barbacena, MG
              </motion.p>
              <motion.h1
                variants={reveal}
                className="max-w-[760px] font-serif text-[3.2rem] leading-[0.99] tracking-[-0.045em] text-white sm:text-6xl lg:text-[5rem]"
              >
                Defesa criminal com <span className="italic text-brand-300">presença</span> e clareza.
              </motion.h1>
              <motion.p variants={reveal} className="mt-7 max-w-xl text-[15px] leading-7 text-white/70 sm:text-base sm:leading-8">
                Acompanhamento em investigações, processos e audiências, com atenção às particularidades de cada caso e comunicação clara em cada etapa.
              </motion.p>
              <motion.div variants={reveal} className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <GlowingButton href={instagram} target="_blank" size="lg" className="rounded-full">
                  <InstagramMark size={16} /> Fale pelo Instagram
                </GlowingButton>
                <a href="#atuacao" className="group inline-flex items-center gap-2 px-1 py-3 text-sm font-medium text-white/85 transition-colors hover:text-brand-200">
                  Conheça a atuação <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
              <motion.div variants={reveal} className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-white/15 pt-6 text-xs text-white/65">
                <span className="inline-flex items-center gap-2"><MapPin size={15} className="text-brand-300" /> Barbacena · Minas Gerais</span>
                <span className="inline-flex items-center gap-2"><MessageCircle size={15} className="text-brand-300" /> Presencial e on-line</span>
              </motion.div>
            </motion.div>

            <motion.figure
              initial={{ opacity: 0, scale: 0.97, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto w-full max-w-[475px] lg:ml-auto lg:mr-3"
            >
              <div className="absolute -inset-3 -rotate-2 border border-brand-300/35 sm:-inset-4" />
              <div className="relative aspect-[0.82] overflow-hidden bg-[#1a1a17]">
                <Image
                  src="/victor-campos/victor-campos-retrato.jpg"
                  alt="Victor Campos em retrato profissional no escritório"
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 42vw"
                  className="object-cover object-[50%_25%]"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-night/90 to-transparent" />
                <figcaption className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3 text-white sm:bottom-8 sm:left-8 sm:right-8">
                  <div>
                    <p className="font-serif text-2xl">Victor Campos</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/70">Advocacia e Assessoria Jurídica</p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-brand-200/70 text-brand-200"><Scale size={18} /></span>
                </figcaption>
              </div>
              <div className="absolute -left-4 top-[17%] border border-white/10 bg-night px-4 py-2.5 text-[10px] font-medium tracking-[0.1em] text-white shadow-card sm:-left-10 sm:px-5">
                ATUAÇÃO RESPONSÁVEL
              </div>
            </motion.figure>
          </div>
        </section>

        <section aria-label="Informações do escritório" className="border-b border-ink/10 bg-white">
          <div className="mx-auto grid max-w-7xl gap-7 px-5 py-7 sm:grid-cols-3 sm:gap-4 sm:px-8 lg:px-12">
            {[
              ["Barbacena", "escritório em Minas Gerais"],
              ["Direito Penal", "atuação em matéria criminal"],
              ["Presencial e on-line", "formas de atendimento"],
            ].map(([value, label], index) => (
              <div
                key={value}
                className={index > 0 ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-ink/10" : "flex items-center gap-4 sm:justify-center"}
              >
                <span className="font-serif text-2xl text-brand-700 sm:text-3xl">{value}</span>
                <span className="max-w-[145px] text-[11px] leading-5 text-ink-soft">{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="escritorio" className="scroll-mt-24 bg-ivory py-20 sm:py-28 lg:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:px-12">
            <motion.figure
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[570px]"
            >
              <div className="relative aspect-[1.12] overflow-hidden bg-[#d9d5ca]">
                <Image
                  src="/victor-campos/portrait.webp"
                  alt="Retrato de Victor Campos diante da biblioteca do escritório"
                  fill
                  sizes="(max-width: 1024px) 90vw, 46vw"
                  className="object-cover object-[50%_28%]"
                />
              </div>
              <div className="absolute -bottom-6 right-4 max-w-[250px] border-l-2 border-brand-600 bg-white px-5 py-4 shadow-card sm:-right-7 sm:px-6">
                <p className="font-serif text-xl text-ink">Atendimento individual</p>
                <p className="mt-1 text-[11px] leading-5 text-ink-soft">Escuta e atenção ao contexto de cada pessoa.</p>
              </div>
              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l border-t border-brand-600/45 sm:-left-7 sm:-top-7 sm:size-32" />
            </motion.figure>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              <motion.p variants={reveal} className="eyebrow">O ADVOGADO</motion.p>
              <motion.h2 variants={reveal} className="mt-4 max-w-2xl font-serif text-4xl leading-[1.09] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[3.55rem]">
                Uma atuação pautada por <span className="italic text-brand-700">escuta e preparo.</span>
              </motion.h2>
              <motion.p variants={reveal} className="mt-6 max-w-xl text-[15px] leading-7 text-ink-soft">
                Victor Campos Advocacia e Assessoria Jurídica atua em Barbacena e região, com foco na área criminal. O trabalho busca compreender cada situação, analisar os elementos disponíveis e explicar com clareza os caminhos jurídicos possíveis.
              </motion.p>
              <motion.p variants={reveal} className="mt-4 max-w-xl text-[15px] leading-7 text-ink-soft">
                O atendimento é realizado presencialmente no escritório ou on-line, com discrição, responsabilidade e respeito às particularidades de cada caso.
              </motion.p>
              <motion.a variants={reveal} href={instagram} target="_blank" rel="noreferrer" className="group mt-8 inline-flex items-center gap-2 border-b border-brand-700/40 pb-2 text-xs font-semibold uppercase tracking-[0.13em] text-brand-800 transition-colors hover:border-brand-700 hover:text-brand-700">
                Perfil profissional no Instagram <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
            </motion.div>
          </div>
        </section>

        <section id="atuacao" className="scroll-mt-24 bg-white py-20 sm:py-28 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
            >
              <Heading eyebrow="ÁREAS DE ATUAÇÃO" description="Informação sobre frentes de trabalho na área criminal. A atuação adequada depende da análise de cada situação.">
                Direito Penal e <span className="italic text-brand-700">Processo Penal.</span>
              </Heading>
              <p className="max-w-[250px] pb-1 text-xs leading-6 text-ink-soft">Selecione uma área para ver mais informações.</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={stagger}
              className="mt-12 grid gap-4 md:grid-cols-3"
            >
              {areas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <motion.article
                    key={area.title}
                    variants={reveal}
                    className="group flex min-h-[310px] flex-col border border-ink/10 bg-ivory p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-600/40 hover:shadow-card sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-full bg-brand-50 text-brand-800"><Icon size={22} strokeWidth={1.5} /></span>
                      <span className="font-serif text-2xl text-brand-700/55">0{index + 1}</span>
                    </div>
                    <h3 className="mt-8 font-serif text-[1.7rem] leading-tight text-ink">{area.title}</h3>
                    <p className="mt-3 text-[13px] leading-6 text-ink-soft">{area.summary}</p>
                    <button
                      type="button"
                      onClick={() => setActiveArea(area)}
                      className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-7 text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-800 hover:text-brand-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-700"
                    >
                      Ver detalhes <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
                    </button>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section className="bg-[#eeece5] py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-12">
            <motion.figure
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[520px]"
            >
              <div className="relative aspect-[0.88] overflow-hidden bg-night">
                <Image
                  src="/victor-campos/consultation.webp"
                  alt="Victor Campos em conversa durante um atendimento jurídico"
                  fill
                  sizes="(max-width: 1024px) 88vw, 42vw"
                  className="object-cover object-[50%_42%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night/55 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-5 -right-3 w-[35%] border-4 border-[#eeece5] bg-night sm:-right-6">
                <div className="relative aspect-[0.75] overflow-hidden">
                  <Image
                    src="/victor-campos/courthouse.webp"
                    alt="Victor Campos em ambiente de tribunal"
                    fill
                    sizes="(max-width: 640px) 30vw, 150px"
                    className="object-cover object-[50%_25%]"
                  />
                </div>
              </div>
              <figcaption className="absolute bottom-5 left-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/90 sm:bottom-7 sm:left-7">
                Atendimento com discrição e respeito
              </figcaption>
            </motion.figure>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              <motion.div variants={reveal}>
                <Heading eyebrow="FORMA DE ATUAÇÃO" description="Um acompanhamento atento ajuda a tornar cada etapa mais compreensível.">
                  Clareza para entender. <span className="italic text-brand-700">Presença para acompanhar.</span>
                </Heading>
              </motion.div>
              <div className="mt-9 divide-y divide-ink/10">
                {[
                  ["01", "Escuta cuidadosa", "Compreender os fatos e as dúvidas é o primeiro passo do atendimento."],
                  ["02", "Análise individual", "Cada caso é examinado conforme seus próprios elementos e circunstâncias."],
                  ["03", "Comunicação clara", "Informações diretas sobre os atos, os prazos e as possibilidades jurídicas."],
                ].map(([number, title, description]) => (
                  <motion.div key={number} variants={reveal} className="grid gap-3 py-5 first:pt-0 sm:grid-cols-[58px_1fr] sm:gap-5 sm:py-6">
                    <span className="font-serif text-2xl text-brand-700">{number}</span>
                    <div>
                      <h3 className="font-serif text-2xl text-ink">{title}</h3>
                      <p className="mt-2 max-w-lg text-[13px] leading-6 text-ink-soft">{description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="avaliacoes" className="scroll-mt-24 bg-ivory py-20 sm:py-28 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
            >
              <Heading eyebrow="AVALIAÇÕES PÚBLICAS" description="Trechos de comentários publicados no perfil profissional do Google. Os relatos refletem experiências individuais.">
                Respeito, atenção e <span className="italic text-brand-700">confiança.</span>
              </Heading>
              <a href={maps} target="_blank" rel="noreferrer" className="group inline-flex w-fit items-center gap-2 border-b border-brand-700/40 pb-2 text-xs font-semibold uppercase tracking-[0.13em] text-brand-800 transition-colors hover:border-brand-700 hover:text-brand-700">
                Ver perfil no Google <ArrowUpRight size={15} />
              </a>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={stagger}
              className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {reviews.map((review) => (
                <motion.figure key={review.author + review.quote} variants={reveal} className="flex min-h-[230px] flex-col border border-ink/10 bg-white p-6 sm:p-7">
                  <Quote size={21} strokeWidth={1.5} className="text-brand-600" aria-hidden="true" />
                  <blockquote className="mt-5 flex-1 font-serif text-[1.3rem] leading-snug text-ink">“{review.quote}”</blockquote>
                  <figcaption className="mt-6 border-t border-ink/10 pt-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-ink-soft">
                    {review.author} · avaliação pública no Google
                  </figcaption>
                </motion.figure>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="contato" className="scroll-mt-24 bg-night py-20 text-white sm:py-28 lg:py-32">
          <div className="pointer-events-none absolute" />
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12">
            <div>
              <Heading eyebrow="CONTATO E LOCALIZAÇÃO" light description="Para informações sobre o atendimento, acesse o perfil profissional ou consulte a localização do escritório em Barbacena.">
                Um primeiro contato com <span className="italic text-brand-300">clareza.</span>
              </Heading>
              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton href={instagram} target="_blank" size="lg" className="rounded-full">
                  <InstagramMark size={16} /> Falar pelo Instagram
                </GlowingButton>
                <p className="text-[11px] leading-5 text-white/55">Perfil profissional: @victorcampos.adv</p>
              </div>
            </div>

            <div className="relative overflow-hidden border border-white/15 bg-white/[0.04] p-7 sm:p-10">
              <div className="absolute right-0 top-0 h-px w-32 bg-brand-300" />
              <div className="flex items-center gap-4">
                <span className="grid size-12 place-items-center rounded-full border border-brand-300/35 text-brand-200"><MapPin size={21} strokeWidth={1.6} /></span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-200">Escritório</p>
                  <p className="mt-1 font-serif text-2xl text-white">Barbacena · MG</p>
                </div>
              </div>
              <address className="mt-7 max-w-md not-italic text-[14px] leading-7 text-white/70">
                R. Gen. Antônio Carlos de Andrada Serpa, 307 · sala 802<br />
                Urias Barbosa de Castro, Barbacena · MG<br />
                CEP 36200-008, Brasil
              </address>
              <div className="my-7 h-px bg-white/15" />
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-white/60">Atendimento presencial e on-line</p>
                <a href={maps} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.13em] text-white transition-colors hover:border-brand-300 hover:text-brand-200">
                  Abrir no mapa <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-[#090a08] px-5 py-12 text-white sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr_1fr]">
            <div>
              <a href="#inicio" aria-label="Victor Campos Advocacia — voltar ao início" className="inline-flex">
                <Image
                  src="/victor-campos/logo.webp"
                  width={800}
                  height={477}
                  alt="Victor Campos — Assessoria Jurídica"
                  className="h-auto w-[160px]"
                  sizes="160px"
                />
              </a>
              <p className="mt-4 max-w-xs text-xs leading-6 text-white/55">Advocacia e assessoria jurídica em Barbacena e região.</p>
            </div>
            <div>
              <h2 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-200">Navegação</h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-white/65">
                <a className="footer-link" href="#escritorio">O advogado</a>
                <a className="footer-link" href="#atuacao">Áreas de atuação</a>
                <a className="footer-link" href="#avaliacoes">Avaliações</a>
                <a className="footer-link" href="#contato">Contato</a>
              </div>
            </div>
            <div>
              <h2 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-200">Informações</h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-white/65">
                <a href={instagram} target="_blank" rel="noreferrer" className="footer-link inline-flex items-center gap-2"><InstagramMark size={14} /> @victorcampos.adv</a>
                <a href={maps} target="_blank" rel="noreferrer" className="footer-link inline-flex items-start gap-2"><MapPin size={14} className="mt-0.5 shrink-0" /> Barbacena · MG</a>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/15 pt-5 text-[10px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Victor Campos Advocacia e Assessoria Jurídica.</p>
            <p>Conteúdo informativo. Cada situação deve ser analisada individualmente.</p>
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
                <p className="eyebrow">ÁREA DE ATUAÇÃO</p>
                <h2 id="area-dialog-title" className="mt-4 max-w-sm pr-10 font-serif text-4xl leading-tight text-ink">{activeArea.title}</h2>
                <p className="mt-5 text-sm leading-7 text-ink-soft">{activeArea.details}</p>
                <ul className="mt-6 space-y-3">
                  {activeArea.topics.map((topic) => (
                    <li key={topic} className="flex items-center gap-3 text-sm text-ink">
                      <span className="size-1.5 rounded-full bg-brand-700" />{topic}
                    </li>
                  ))}
                </ul>
                <GlowingButton href={instagram} target="_blank" size="md" className="mt-8 rounded-full">
                  Perfil profissional <ArrowUpRight size={15} />
                </GlowingButton>
              </motion.section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </MotionConfig>
  );
}
