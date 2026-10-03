const name = "Reis e Borges Advogados";
const address = "Rua Alexandre Gondim, 67 - Centro, Araxá - MG, 38183-100";

export const office = {
  name,
  address,
  telephone: "tel:+5534988883335",
  whatsapp: "https://wa.me/5534988883335?text=" + encodeURIComponent(
    "Olá! Gostaria de agendar um atendimento com a Reis e Borges Advogados.",
  ),
  instagram: "https://www.instagram.com/reiseborges.advogados/",
  maps: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(`${name}, ${address}`),
} as const;
