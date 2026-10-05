const name = "Cunha & Lobo Advocacia";
const address = "Rua Tavares de Melo, 139, sala 04, Centro, Conselheiro Lafaiete - MG, CEP 36400-059";

export const office = {
  name,
  address,
  city: "Conselheiro Lafaiete",
  phoneDisplay: "(31) 99791-8743",
  telephone: "tel:+5531997918743",
  whatsapp: "https://wa.me/5531997918743?text=" + encodeURIComponent(
    "Olá! Gostaria de conversar com a equipe da Cunha & Lobo Advocacia sobre o meu caso.",
  ),
  instagram: "https://www.instagram.com/cunhalobo_adv/",
  instagramHandle: "@cunhalobo_adv",
  maps: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(`${name}, ${address}`),
  // Dados do material enviado pelo cliente, sem atualização automática.
  rating: "4,9",
  reviewCount: 213,
  clients: "300+",
} as const;
