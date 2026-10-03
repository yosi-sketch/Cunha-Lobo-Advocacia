# Reis e Borges Advogados

Site institucional de Direito Trabalhista e Cível em Araxá e região.

## Desenvolvimento

- Instalar: `npm install`
- Iniciar: `npm run dev`
- Validar: `npm run lint` e `npm run build`

Next.js 16 App Router, React 19, Tailwind CSS 4 e Framer Motion preservados. O Tailwind 4 usa `@theme inline` em `app/globals.css`; não há configuração legada do Tailwind. Fontes otimizadas com next/font, imagens WebP locais com next/image, preload do retrato principal e carregamento tardio das imagens secundárias.

## Conteúdo e contatos

Conteúdo em `app/page.tsx`, destinos dos contatos em `app/site-data.ts`, metadados em `app/layout.tsx`.

- WhatsApp confirmado pelo cliente: +55 (34) 98888-3335 — https://wa.me/5534988883335
- Instagram: https://www.instagram.com/reiseborges.advogados/
- Endereço: Rua Alexandre Gondim, 67, Centro, Araxá - MG, CEP 38183-100.

As três fotografias fornecidas estão em `public`, otimizadas para WebP. O retrato principal tem enquadramento por CSS; a fotografia original não foi alterada. A versão transparente do logo está em `public/reis-borges-logo.png`.

Avaliações: 4,9/5 e 145 avaliações, conforme material fornecido pelo cliente, sem atualização automática. Os seis depoimentos preservam a redação enviada. E-mail, OAB, horários e domínio definitivo não foram fornecidos e não são inventados.

## Acessibilidade

Menu responsivo, link para pular ao conteúdo, foco visível, modais com contenção e restauração de foco, fechamento por Escape e preferências de movimento reduzido respeitadas.
