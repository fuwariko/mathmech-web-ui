export const lightColors = {
  bg: '#ffffff',
  text: '#111827',
  border: '#e5e7eb',
  primary: '#4f46e5',
} as const;

export const darkColors = {
  bg: '#111827',
  text: '#f9fafb',
  border: '#374151',
  primary: '#6366f1',
} as const;

export const badge = {
  default: { bg: '#e5e7eb', text: '#111827' },
  success: { bg: '#d1fae5', text: '#065f46' },
  warning: { bg: '#fed7aa', text: '#9a3412' },
  danger: { bg: '#fecaca', text: '#991b1b' },
} as const;