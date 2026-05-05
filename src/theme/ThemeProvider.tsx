import { ThemeProvider as EmotionProvider } from '@emotion/react';
import React, { createContext, useState, useMemo } from 'react';
import { themes, type ThemeType } from './theme';


type ThemeContextType = {
  mode: ThemeType;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);
/**
 * ThemeProvider с контекстом переключения светлой/тёмной темы.
 */
export const ThemeProvider = ({
  children,
  initialTheme = 'light',
}: {
  children: React.ReactNode;
  initialTheme?: ThemeType;
}) => {
  const [mode, setMode] = useState<ThemeType>(initialTheme);
  // Мемоизируем объект темы для избежания ререндеров
  const theme = useMemo(() => themes[mode], [mode]);

  // Функция переключения темы (наследует тип ThemeType)
  const toggleTheme = () => setMode(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <EmotionProvider theme={theme}>{children}</EmotionProvider>
    </ThemeContext.Provider>
  );
};
