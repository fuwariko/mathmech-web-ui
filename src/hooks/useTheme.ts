import { ThemeContext } from "@emotion/react";
import { useContext } from "react";

// Хук для доступа к контексту темы
export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme должен использоваться внутри ThemeProvider');
  return ctx;
};
