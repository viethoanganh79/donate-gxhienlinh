export const DONATION_ZONES = [
  'Mông Triệu',
  'An Phong',
  'Thánh Tâm',
  'Giuse',
  'Phêrô',
  'Phaolô',
] as const;

export const DONATION_PRESET_AMOUNTS = [
  200000,
  500000,
  1000000,
  2000000,
  5000000,
  10000000,
] as const;

export const removeVietnameseDiacritics = (value: string): string =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D');

export const sanitizeDonorName = (name: string): string =>
  name.trim()
    ? removeVietnameseDiacritics(name.trim())
        .replace(/[^a-zA-Z0-9 ]/g, '')
        .toUpperCase()
    : 'AN NHAN AN DANH';