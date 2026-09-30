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
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Quote,
  Scale,
  Search,
  ShieldCheck,
  X,
} from "lucide-react";

const whatsappNumber = "5535991912107";
const whatsappMessage = encodeURIComponent(
  "Olá, gostaria de informações sobre a atuação do escritório.",
);
const whatsapp = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
const email = "contato@viniciusbengtsonadvocacia.com.br";
const officeAddress =
  "Rua Prefeito Chagas, 305, sala 802A, 8º andar, Centro, Ed. Manhattan, Poços de Caldas, MG, 37701-010";
const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officeAddress)}`;
const googleReviews = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Vinícius Bengtson Advogado, Poços de Caldas, MG")}`;

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
    title: "Delegacia e flagrante",
    icon: Search,
    summary:
      "Orientação jurídica desde os primeiros atos da investigação criminal.",
    details:
      "A assistência na delegacia e o acompanhamento em flagrantes ajudam a compreender os atos realizados, os direitos envolvidos e os próximos passos do procedimento.",
    topics: [
      "Assistência em delegacias",
      "Acompanhamento em flagrantes",
      "Inquérito policial",
    ],
  },
  {
    number: "02",
    title: "Custódia e liberdade",
    icon: Scale,
    summary:
      "Acompanhamento em audiência de custódia e análise de medidas cabíveis.",
    details:
      "Cada situação exige leitura própria dos fatos e dos documentos disponíveis. A atuação inclui acompanhamento em audiência de custódia e análise das medidas previstas para o caso.",
    topics: [
      "Audiência de custódia",
      "Pedidos de liberdade",
      "Habeas corpus",
      "Prisão domiciliar",
    ],
  },
  {
    number: "03",
    title: "Processo criminal",
    icon: ShieldCheck,
    summary:
      "Defesa técnica e acompanhamento claro das etapas processuais.",
    details:
      "Do inquérito à ação penal, o acompanhamento considera os autos, os prazos e as particularidades de cada processo, com explicação objetiva sobre o andamento e as providências possíveis.",
    topics: [
      "Inquérito policial",
      "Resposta à acusação",
      "Audiências e atos processuais",
    ],
  },
  {
    number: "04",
    title: "Execução penal",
    icon: Gavel,
    summary:
      "Acompanhamento jurídico na fase de cumprimento da pena.",
    details:
      "A execução penal tem regras e marcos próprios. A análise dos registros e do histórico processual orienta a avaliação de pedidos e benefícios previstos na legislação.",
    topics: ["Remição de pena", "Saída temporária", "Acompanhamento da execução"],
  },
];

const navigation = [
  ["Início", "#inicio"],
  ["Atuação", "#atuacao"],
  ["O advogado", "#escritorio"],
  ["Atendimento", "#atendimento"],
  ["Avaliações", "#avaliacoes"],
  ["Contato", "#contato"],
];

const reviews = [
  "…muita seriedade, estratégia e comprometimento.",
  "…demonstrou honestidade, competência e um profissionalismo raro nos dias de hoje.",
  "…demonstra um domínio técnico impecável e, acima de tudo, uma transparência rara no mercado.",
  "…seriedade, dedicação e agilidade do trabalho dele.",
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
  const [activeArea, setActiveArea] = useState<(typeof practiceAreas)[number] | null>(
    null,
  );

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
          <div className="mx-auto flex h-[82px] max-w-7xl items-center justify-between gap-5 px-5 sm:h-[96px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label="Vinícius Bengtson Advocacia — início"
              onClick={closeMenu}
              className="shrink-0"
            >
              <Image
                src="/vinicius-bengtson/logo.png"
                width={2006}
                height={784}
                alt="Vinícius Bengtson — Advocacia Especializada"
                className="h-auto w-[176px] sm:w-[210px]"
                sizes="(max-width: 640px) 176px, 210px"
                loading="eager"
              />
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
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-full border border-brand-300/60 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.13em] text-brand-100 transition-colors hover:border-brand-200 hover:bg-brand-300 hover:text-night lg:inline-flex"
            >
              <MessageCircle size={15} /> WhatsApp
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
                    href={whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    onClick={closeMenu}
                  >
                    <MessageCircle size={15} /> WhatsApp do escritório
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
            <div className="pointer-events-none absolute -right-40 top-12 -z-10 size-[35rem] rounded-full bg-brand-800/20 blur-3xl" />
            <div className="pointer-events-none absolute -left-52 bottom-[-17rem] -z-10 size-[36rem] rounded-full bg-brand-700/10 blur-3xl" />
            <div className="mx-auto grid min-h-[690px] max-w-7xl items-center gap-12 px-5 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-20 lg:min-h-[740px] lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:px-12 lg:py-20">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={stagger}
                className="relative z-10 max-w-2xl lg:py-6"
              >
                <motion.p variants={reveal} className="eyebrow-light mb-7">
                  DIREITO PENAL · POÇOS DE CALDAS, MG
                </motion.p>
                <motion.h1
                  variants={reveal}
                  className="max-w-[730px] font-serif text-[3.25rem] leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-[5.05rem]"
                >
                  Defesa criminal com <em className="font-normal text-brand-300">presença</em> em cada etapa.
                </motion.h1>
                <motion.p
                  variants={reveal}
                  className="mt-7 max-w-xl text-[15px] leading-7 text-white/70 sm:text-base sm:leading-8"
                >
                  Atuação em Direito Penal e Processo Penal, da delegacia à execução penal. Sede em Poços de Caldas e atendimento remoto em todo o Brasil.
                </motion.p>
                <motion.div
                  variants={reveal}
                  className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
                >
                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-300 bg-brand-300 px-7 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-night transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-200 hover:bg-brand-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-200"
                  >
                    <MessageCircle size={16} /> WhatsApp do escritório
                  </a>
                  <a
                    href="#atuacao"
                    className="group inline-flex items-center gap-2 px-1 py-3 text-sm font-medium text-white/80 transition-colors hover:text-brand-200"
                  >
                    Áreas de atuação
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
                    Poços de Caldas · MG
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Scale size={15} className="text-brand-300" />
                    OAB/MG 186.580
                  </span>
                </motion.div>
              </motion.div>

              <motion.figure
                initial={{ opacity: 0, scale: 0.97, y: 18 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
                className="relative mx-auto w-full max-w-[490px] lg:ml-auto lg:mr-2"
              >
                <div className="absolute -inset-3 -rotate-2 border border-brand-300/35 sm:-inset-4" />
                <div className="relative aspect-[0.82] overflow-hidden bg-[#24221d]">
                  <Image
                    src="/vinicius-bengtson/vinicius-bengtson-portrait.jpg"
                    alt="Vinícius Bengtson em retrato profissional no escritório"
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 42vw"
                    className="object-cover object-[50%_23%]"
                    loading="eager"
                    fetchPriority="high"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-night/95 to-transparent" />
                  <figcaption className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3 text-white sm:bottom-8 sm:left-8 sm:right-8">
                    <div>
                      <p className="font-serif text-2xl">Vinícius Bengtson</p>
                      <p className="mt-1 text-[10px] uppercase tracking-[0.17em] text-white/70">
                        Advogado · OAB/MG 186.580
                      </p>
                    </div>
                    <span className="grid size-11 shrink-0 place-items-center rounded-full border border-brand-200/70 text-brand-200">
                      <Scale size={18} />
                    </span>
                  </figcaption>
                </div>
                <div className="absolute -left-3 top-[15%] border border-white/10 bg-night px-4 py-2.5 text-[10px] font-medium tracking-[0.1em] text-white shadow-card sm:-left-9 sm:px-5">
                  POÇOS DE CALDAS · ATUAÇÃO NACIONAL
                </div>
              </motion.figure>
            </div>
          </section>

          <section
            aria-label="Informações do escritório"
            className="border-b border-ink/10 bg-white"
          >
            <div className="mx-auto grid max-w-7xl gap-6 px-5 py-7 sm:grid-cols-3 sm:gap-4 sm:px-8 lg:px-12">
              {[
                ["Direito Penal", "atuação criminal"],
                ["Brasil", "atendimento remoto"],
                ["Poços de Caldas", "sede do escritório"],
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
                  description="Informações gerais sobre as frentes de trabalho em Direito Penal. Cada situação depende de análise própria."
                >
                  Orientação jurídica em momentos decisivos.
                </Heading>
                <span className="hidden h-px w-28 bg-brand-500/60 md:mb-3 md:block" />
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.12 }}
                variants={stagger}
                className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4"
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
                      className="group flex min-h-[290px] flex-col border border-ink/10 bg-white p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/55 hover:shadow-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700 sm:p-7"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-lg text-brand-700">
                          {area.number}
                        </span>
                        <span className="grid size-11 place-items-center rounded-full border border-brand-700/20 text-brand-800 transition-colors group-hover:border-brand-700 group-hover:bg-brand-700 group-hover:text-white">
                          <Icon size={19} strokeWidth={1.6} />
                        </span>
                      </div>
                      <h3 className="mt-8 font-serif text-[1.55rem] leading-tight text-ink">
                        {area.title}
                      </h3>
                      <p className="mt-3 flex-1 text-[13px] leading-6 text-ink-soft">
                        {area.summary}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.13em] text-brand-800">
                        Mais informações
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
            id="escritorio"
            className="scroll-mt-24 bg-white py-20 sm:py-28 lg:py-32"
          >
            <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-12">
              <motion.figure
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={reveal}
                className="relative mx-auto w-full max-w-[550px]"
              >
                <div className="relative aspect-[0.93] overflow-hidden bg-[#211e19]">
                  <Image
                    src="/vinicius-bengtson/office-portrait.jpg"
                    alt="Retrato de Vinícius Bengtson em seu escritório"
                    fill
                    sizes="(max-width: 1024px) 90vw, 44vw"
                    className="object-cover object-[50%_27%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night/60 via-transparent to-transparent" />
                  <figcaption className="absolute bottom-6 left-6 right-6 border-l border-brand-300 pl-4 text-white sm:bottom-8 sm:left-8">
                    <p className="font-serif text-2xl">Vinícius Daniel de Toledo Bengtson</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/70">
                      OAB/MG 186.580
                    </p>
                  </figcaption>
                </div>
                <span className="absolute -left-4 -top-4 -z-10 size-24 border-l border-t border-brand-600/45 sm:-left-7 sm:-top-7 sm:size-32" />
              </motion.figure>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={stagger}
              >
                <motion.p variants={reveal} className="eyebrow">
                  O ADVOGADO
                </motion.p>
                <motion.h2
                  variants={reveal}
                  className="mt-4 max-w-2xl font-serif text-4xl leading-[1.07] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[3.55rem]"
                >
                  Uma atuação que começa pela <em className="font-normal text-brand-700">escuta.</em>
                </motion.h2>
                <motion.p
                  variants={reveal}
                  className="mt-6 max-w-xl text-[15px] leading-7 text-ink-soft"
                >
                  Vinícius Bengtson atua em Direito Penal e Processo Penal. O trabalho parte da compreensão do contexto, da leitura cuidadosa dos elementos disponíveis e da orientação sobre os caminhos jurídicos possíveis.
                </motion.p>
                <motion.p
                  variants={reveal}
                  className="mt-4 max-w-xl text-[15px] leading-7 text-ink-soft"
                >
                  Com sede em Poços de Caldas, o escritório atende presencialmente e a distância, em todo o Brasil. A comunicação é direta e conduzida com clareza, respeito e discrição.
                </motion.p>
                <motion.a
                  variants={reveal}
                  href={`mailto:${email}`}
                  className="group mt-8 inline-flex items-center gap-2 border-b border-brand-700/40 pb-2 text-xs font-semibold uppercase tracking-[0.13em] text-brand-800 transition-colors hover:border-brand-700 hover:text-brand-700"
                >
                  Contato profissional
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </motion.a>
              </motion.div>
            </div>
          </section>

          <section
            id="atendimento"
            className="scroll-mt-24 bg-[#f3f3f1] py-20 sm:py-28"
          >
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-12">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={stagger}
              >
                <motion.div variants={reveal}>
                  <Heading
                    eyebrow="FORMA DE ATUAÇÃO"
                    description="Um acompanhamento jurídico construído com atenção ao contexto e comunicação objetiva durante o trabalho."
                  >
                    Cada caso tem seu próprio contexto.
                  </Heading>
                </motion.div>
                <div className="mt-9 divide-y divide-ink/10 border-y border-ink/10">
                  {[
                    ["01", "Escuta e contexto", "Compreensão das circunstâncias e das dúvidas que precisam de orientação."],
                    ["02", "Análise jurídica", "Leitura dos documentos e dos atos processuais relacionados à situação."],
                    ["03", "Comunicação clara", "Explicação das etapas, dos prazos e das possibilidades jurídicas identificadas."],
                  ].map(([number, title, description]) => (
                    <motion.div
                      key={number}
                      variants={reveal}
                      className="grid gap-3 py-5 first:pt-5 sm:grid-cols-[54px_1fr] sm:gap-5 sm:py-6"
                    >
                      <span className="font-serif text-2xl text-brand-700">
                        {number}
                      </span>
                      <div>
                        <h3 className="font-serif text-2xl text-ink">{title}</h3>
                        <p className="mt-2 max-w-lg text-[13px] leading-6 text-ink-soft">
                          {description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.figure
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative mx-auto w-full max-w-[530px]"
              >
                <div className="relative aspect-[0.9] overflow-hidden bg-[#c9c3b8]">
                  <Image
                    src="/vinicius-bengtson/document-review.jpg"
                    alt="Advogado analisando e assinando documentos jurídicos"
                    fill
                    sizes="(max-width: 1024px) 90vw, 42vw"
                    className="object-cover object-[50%_48%]"
                  />
                </div>
                <figcaption className="absolute -bottom-5 left-5 border-l-2 border-brand-600 bg-white px-5 py-4 shadow-card sm:-left-6 sm:px-7">
                  <p className="font-serif text-xl text-ink">
                    Orientação com clareza
                  </p>
                  <p className="mt-1 text-[11px] leading-5 text-ink-soft">
                    Informação compreensível em cada etapa.
                  </p>
                </figcaption>
                <span className="absolute -right-3 -top-3 -z-10 size-20 border-r border-t border-brand-600/45 sm:-right-6 sm:-top-6 sm:size-28" />
              </motion.figure>
            </div>
          </section>

          <section
            id="avaliacoes"
            className="scroll-mt-24 bg-white py-20 sm:py-28"
          >
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
              <div className="flex flex-col gap-7 border-b border-ink/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
                <Heading
                  eyebrow="AVALIAÇÕES PÚBLICAS"
                  description="Trechos de avaliações publicadas no Google, reproduzidos sem identificação dos autores."
                >
                  A experiência no atendimento.
                </Heading>
                <a
                  href={googleReviews}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex shrink-0 items-center gap-2 self-start border-b border-brand-600/60 pb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:border-brand-700 hover:text-brand-700 sm:self-auto"
                >
                  Ver avaliações no Google
                  <ArrowUpRight
                    size={14}
                    className="text-brand-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={stagger}
                className="mt-9 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
              >
                {reviews.map((review) => (
                  <motion.figure
                    key={review}
                    variants={reveal}
                    className="group flex min-h-[230px] flex-col border border-ink/10 bg-[#fafaf9] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/55 hover:bg-white hover:shadow-card sm:p-7"
                  >
                    <Quote
                      aria-hidden="true"
                      size={22}
                      strokeWidth={1.5}
                      className="text-brand-600"
                    />
                    <blockquote className="mt-6 flex-1 font-serif text-[21px] leading-[1.45] text-ink">
                      “{review}”
                    </blockquote>
                    <figcaption className="mt-7 flex items-center gap-3 border-t border-ink/10 pt-4 text-[9px] font-semibold uppercase tracking-[0.15em] text-ink-soft">
                      <span className="h-px w-5 bg-brand-500" />
                      Avaliação pública no Google
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
                  description="Informações para contato com o escritório e localização da sede em Poços de Caldas, Minas Gerais."
                >
                  Informações do escritório.
                </Heading>
                <div className="mt-9 flex flex-col items-start gap-4">
                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 border-b border-brand-300/45 pb-3 text-sm text-brand-100 transition-colors hover:border-brand-200 hover:text-white"
                  >
                    <MessageCircle size={17} /> WhatsApp · (35) 99191-2107
                    <ArrowUpRight size={14} />
                  </a>
                  <a
                    href={`mailto:${email}`}
                    className="inline-flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-brand-200"
                  >
                    <Mail size={17} /> {email}
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
                      Sede
                    </p>
                    <p className="mt-1 font-serif text-2xl text-white">
                      Poços de Caldas · MG
                    </p>
                  </div>
                </div>
                <address className="mt-7 max-w-md not-italic text-[14px] leading-7 text-white/70">
                  Rua Prefeito Chagas, 305, sala 802A, 8º andar<br />
                  Centro · Ed. Manhattan<br />
                  Poços de Caldas · MG · CEP 37701-010
                </address>
                <div className="my-7 h-px bg-white/15" />
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs text-white/60">
                    Atendimento presencial e remoto
                  </p>
                  <a
                    href={maps}
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
                aria-label="Vinícius Bengtson Advocacia — voltar ao início"
                className="inline-flex"
              >
                <Image
                  src="/vinicius-bengtson/logo.png"
                  width={2006}
                  height={784}
                  alt="Vinícius Bengtson — Advocacia Especializada"
                  className="h-auto w-[185px]"
                  sizes="185px"
                />
              </a>
              <p className="mt-4 max-w-xs text-xs leading-6 text-white/55">
                Advocacia criminal com sede em Poços de Caldas e atendimento em todo o Brasil.
              </p>
            </div>
            <div>
              <h2 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-200">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-white/65">
                <a className="footer-link" href="#atuacao">Áreas de atuação</a>
                <a className="footer-link" href="#escritorio">O advogado</a>
                <a className="footer-link" href="#atendimento">Forma de atuação</a>
                <a className="footer-link" href="#avaliacoes">Avaliações</a>
                <a className="footer-link" href="#contato">Contato</a>
              </div>
            </div>
            <div>
              <h2 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-200">
                Informações
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-white/65">
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2"
                >
                  <MessageCircle size={14} /> (35) 99191-2107
                </a>
                <a
                  href={`mailto:${email}`}
                  className="footer-link inline-flex items-center gap-2"
                >
                  <Mail size={14} /> E-mail do escritório
                </a>
                <a
                  href={maps}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-start gap-2"
                >
                  <MapPin size={14} className="mt-0.5 shrink-0" /> Poços de Caldas · MG
                </a>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/15 pt-5 text-[10px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Vinícius Bengtson Advocacia · OAB/MG 186.580.</p>
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
                <p className="eyebrow">DIREITO PENAL</p>
                <h2
                  id="area-dialog-title"
                  className="mt-4 max-w-sm pr-10 font-serif text-4xl leading-tight text-ink"
                >
                  {activeArea.title}
                </h2>
                <p className="mt-5 text-sm leading-7 text-ink-soft">
                  {activeArea.details}
                </p>
                <ul className="mt-6 space-y-3">
                  {activeArea.topics.map((topic) => (
                    <li key={topic} className="flex items-center gap-3 text-sm text-ink">
                      <span className="size-1.5 rounded-full bg-brand-700" />
                      {topic}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-brand-300 bg-brand-300 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-night transition-colors hover:bg-brand-200"
                >
                  <MessageCircle size={15} /> WhatsApp do escritório
                </a>
              </motion.section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </MotionConfig>
  );
}
