const phoneNumber = "3188331399";

// Mensaje que se enviará al hacer clic en el botón
const message = "Hola, Albert Jota. Quiero más información de tu servicio";

// Función para construir el enlace de WhatsApp
export const buildWhatsAppLink = () => {
  return `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    message
  )}`;
};
