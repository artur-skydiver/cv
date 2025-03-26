export const getLinkFromPhone = (phone: string) =>
  `tel:${phone.replace(/[^+\d]/g, '')}`;

export const getLinkFromEmail = (email: string) => `mailto:${email}`;

export const getLinkFromTelegram = (telegram: string) =>
  `https://t.me/${telegram.replace(/^@/, '')}`;
