export const getLinkFromPhone = (phone: string) =>
  `tel:${phone.replace(/[^+\d]/g, '')}`;

export const getLinkFromEmail = (email: string) => `mailto:${email}`;
