"use client";

import { FaWhatsapp } from "react-icons/fa";

export const whatsappNumber = "5586995407002";

function WhatsAppButton() {

  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all flex items-center justify-center"
      aria-label="Entrar em contato pelo WhatsApp"
    >
      <FaWhatsapp size={24} />
    </a>
  );
}

export default WhatsAppButton;
