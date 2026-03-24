const WHATSAPP_PHONE_NUMBER = "554896642401";

export const WHATSAPP_MESSAGES = {
    services: "Olá! Vim pelo site e gostaria de saber mais sobre os serviços da agência.",
    quote: "Olá! Gostaria de fazer um orçamento."
};

export function createWhatsappUrl(message = WHATSAPP_MESSAGES.services) {
    return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function openWhatsapp(message = WHATSAPP_MESSAGES.services) {
    window.open(createWhatsappUrl(message), "_blank");
}