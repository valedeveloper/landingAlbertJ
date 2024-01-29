// Función para construir el enlace de WhatsApp
export const buildWhatsAppLink = () => {
  const phoneNumber = "3188331399";
  const message = "Hola, Albert Jota. Quiero más información de tu servicio";
  const whatsAppUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsAppUrl, "_blank");
};
