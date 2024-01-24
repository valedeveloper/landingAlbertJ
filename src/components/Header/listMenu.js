import { buildWhatsAppLink } from "../../utilities/getLinkWhatsApp";
export const listMenu = [
  {
    href: "#home",
    title: "Inicio",
  },
  {
    href: "#services",
    title: "Servicios",
  },

  {
    href: "#about",
    title: "Sobre Mí",
  },

  {
    href: "#contactUs",
    title: "Contactos",
  },
  {
    href: buildWhatsAppLink(),
    title: "Escríbeme",
    className: "btn btn-primary",
    isWhatsApp: true,
  },
];
