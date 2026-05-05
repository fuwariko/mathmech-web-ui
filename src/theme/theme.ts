// Цветовая палитра
export const lightColors = {
  bg: '#ffffff',
  text: '#111827',
  border: '#e5e7eb',
  primary: '#4f46e5',
};
export const darkColors = {
  bg: '#111827',
  text: '#f9fafb',
  border: '#374151',
  primary: '#6366f1',
};

// Токены Badge (варианты фона/текста)
export const badge = {
  default: { bg: '#e5e7eb', text: '#111827' },
  success: { bg: '#d1fae5', text: '#065f46' },
  warning: { bg: '#fed7aa', text: '#9a3412' },
  danger:  { bg: '#fecaca', text: '#991b1b' },
} as const;

export const BadgeColors = {
  'default': '#e5e7eb',
  'success': '#d1fae5',
  'warning': '#fed7aa',
  'danger': '#fecaca'
} as const;

// Брэйкпоинты для адаптивности (mobile-first)
export const breakpoints = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 1024,
} as const;

// Объект темы (можно добавить другие токены: шрифты, размеры и т.д.)
export const themes = {
  light: {
    colors: lightColors,
    badge,
    breakpoints,
  },
  dark: {
    colors: darkColors,
    badge,
    breakpoints,
  },
} as const;

export type ThemeType = keyof typeof themes; // 'light' | 'dark'
