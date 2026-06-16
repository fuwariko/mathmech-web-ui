import {
  Global,
  ThemeProvider as EmotionThemeProvider,
  useTheme as useEmotionTheme,
} from '@emotion/react';
import React, { createContext, useContext, useMemo } from 'react';

import { layoutTokens } from './theme/layout-tokens';

/* eslint-disable react-refresh/only-export-components */

export const defaultThemeColors = {
  black: '#000000',
  white: '#FFFFFF',

  darkNavy01: '#2C416D',
  darkNavy02: '#0A255E',
  mainNavy: '#1E4391',
  lightNavy01: '#6291F3',
  lightNavy02: '#ACC7FF',

  darkOrange01: '#AB4A00',
  darkOrange02: '#994200',
  mainOrange: '#C25400',
  lightOrange01: '#D47C39',
  lightOrange02: '#F2D4BD',

  darkGreen01: '#006620',
  darkGreen02: '#004F19',
  mainGreen: '#00852A',
  lightGreen01: '#00A31B',
  lightGreen02: '#B2E0B9',

  darkRed01: '#9F363D',
  darkRed02: '#890812',
  mainRed: '#D41926',
  lightRed01: '#E3626B',
  lightRed02: '#EFC0C4',
} as const;

export const fiitThemeColors = {
  black: '#000000',
  white: '#FFFFFF',

  darkCrimson01: '#5A1A5B',
  darkCrimson02: '#822183',
  mainCrimson: '#A92CAB',
  lightCrimson01: '#C947CB',
  lightCrimson02: '#DC5ADE',

  darkBlue01: '#0347BB',
  darkBlue02: '#0756DC',
  mainBlue: '#2B79FF',
  lightBlue01: '#691B9F',
  lightBlue02: '#B9D3FF',

  darkPurple01: '#1E1769',
  darkPurple02: '#3C3494',
  mainPurple: '#5146CC',
  lightPurple01: '#948DDE',
  lightPurple02: '#B6B2E6',

  darkGrey01: '#87859A',
  darkGrey02: '#B7B6C3',
  mainGrey: '#C6C1DA',
  lightGrey01: '#E2D9FF',
  lightGrey02: '#F2EFFD',
} as const;

const basePalette = {
  ...defaultThemeColors,
  ...fiitThemeColors,
} as const;

export const canonicalColorTokens = basePalette;

export type CanonicalColorTokenName = keyof typeof canonicalColorTokens;

export const colorTokenNames = Object.keys(
  canonicalColorTokens,
) as CanonicalColorTokenName[];

export interface AppTheme {
  black: string;
  white: string;
  darkNavy01: string;
  darkNavy02: string;
  mainNavy: string;
  lightNavy01: string;
  lightNavy02: string;
  darkOrange01: string;
  darkOrange02: string;
  mainOrange: string;
  lightOrange01: string;
  lightOrange02: string;
  darkGreen01: string;
  darkGreen02: string;
  mainGreen: string;
  lightGreen01: string;
  lightGreen02: string;
  darkRed01: string;
  darkRed02: string;
  mainRed: string;
  lightRed01: string;
  lightRed02: string;
  darkCrimson01: string;
  darkCrimson02: string;
  mainCrimson: string;
  lightCrimson01: string;
  lightCrimson02: string;
  darkBlue01: string;
  darkBlue02: string;
  mainBlue: string;
  lightBlue01: string;
  lightBlue02: string;
  darkPurple01: string;
  darkPurple02: string;
  mainPurple: string;
  lightPurple01: string;
  lightPurple02: string;
  darkGrey01: string;
  darkGrey02: string;
  mainGrey: string;
  lightGrey01: string;
  lightGrey02: string;

  hintBackground: string;

  error: string;
  success: string;
  accent: string;
  textPrimary: string;
  textParagraph: string;
  textSecondary: string;
  textTertiary: string;
  backgroundPrimary: string;
  backgroundSecondary: string;
  colorBg: string;
  surfacePrimary: string;
  surfaceText: string;
  headerBackground: string;
  headerText: string;

  globalBlue: string;
  globalGray: string;
  globalRed: string;
  globalBlack: string;
  globalWhite: string;
  globalSpaceS: string;
  globalSpaceM: string;
  globalSpaceL: string;
  globalFontS: string;
  globalFontM: string;
  globalFontL: string;

  buttonColorPrimary: string;
  buttonColorSecondary: string;
  buttonColorDanger: string;
  buttonColorText: string;
  buttonPaddingSx: string;
  buttonPaddingSy: string;
  buttonPaddingMx: string;
  buttonPaddingMy: string;
  buttonPaddingLx: string;
  buttonPaddingLy: string;
  buttonFontSizeS: string;
  buttonFontSizeM: string;
  buttonFontSizeL: string;
  buttonHeightS: string;
  buttonHeightL: string;
  buttonSizeDefault: 'small' | 'large';

  badgeVariantBackground: string;
  badgeVariantText: string;
  badgeVariantBorder: string;
  badgeSizeDefault: 'small' | 'medium' | 'large';

  accordionBackground: string;
  accordionText: string;
  accordionActiveText: string;
  accordionContentText: string;
  accordionBorder: string;
  accordionFontSize: string;
  accordionContentFontSize: string;
  accordionIconSize: string;
  accordionPaddingY: string;
}

export type TThemeColors = keyof AppTheme;

export const DEFAULT_THEME: AppTheme = {
  ...basePalette,

  error: '#D41926',
  success: '#00852A',
  accent: '#C25400',
  textPrimary: '#1B1E22',
  textParagraph: '#1B1E22',
  textSecondary: '#545454',
  textTertiary: '#6F6F6F',
  backgroundPrimary: '#FFFFFF',
  backgroundSecondary: '#F3F3F3',
  colorBg: '#FFFFFF',
  surfacePrimary: '#FFFFFF',
  surfaceText: '#1B1E22',
  headerBackground: '#2B79FF',
  headerText: '#F2EFFD',

  hintBackground: '#767487',

  globalBlue: '#1E4391',
  globalGray: '#545454',
  globalRed: '#D41926',
  globalBlack: '#000000',
  globalWhite: '#FFFFFF',
  globalSpaceS: '8px',
  globalSpaceM: '16px',
  globalSpaceL: '24px',
  globalFontS: '12px',
  globalFontM: '14px',
  globalFontL: '16px',

  buttonColorPrimary: '#1E4391',
  buttonColorSecondary: '#545454',
  buttonColorDanger: '#D41926',
  buttonColorText: '#FFFFFF',
  buttonPaddingSx: '12px',
  buttonPaddingSy: '8px',
  buttonPaddingMx: '20px',
  buttonPaddingMy: '10px',
  buttonPaddingLx: '24px',
  buttonPaddingLy: '16px',
  buttonFontSizeS: '12px',
  buttonFontSizeM: '14px',
  buttonFontSizeL: '16px',
  buttonHeightS: '44px',
  buttonHeightL: '72px',
  buttonSizeDefault: 'small',

  badgeVariantBackground: '',
  badgeVariantText: '',
  badgeVariantBorder: '',
  badgeSizeDefault: 'medium',

  accordionBackground: '',
  accordionText: '',
  accordionActiveText: '',
  accordionContentText: '',
  accordionBorder: '',
  accordionFontSize: '15px',
  accordionContentFontSize: '14px',
  accordionIconSize: '18px',
  accordionPaddingY: '16px',
};

export const createTheme = (
  overrides: Partial<AppTheme> = {},
  baseTheme: AppTheme = DEFAULT_THEME,
): AppTheme => {
  const theme = {} as AppTheme;

  Object.defineProperties(
    theme,
    Object.getOwnPropertyDescriptors(baseTheme),
  );

  Object.defineProperties(
    theme,
    Object.getOwnPropertyDescriptors(overrides),
  );

  return theme;
};

export const FIIT_THEME = createTheme({
  white: fiitThemeColors.lightGrey02,

  darkNavy01: fiitThemeColors.darkCrimson01,
  darkNavy02: fiitThemeColors.darkCrimson02,
  mainNavy: fiitThemeColors.mainCrimson,
  lightNavy01: fiitThemeColors.lightCrimson01,
  lightNavy02: fiitThemeColors.lightCrimson02,
  darkOrange01: fiitThemeColors.darkCrimson01,
  darkOrange02: fiitThemeColors.darkCrimson02,
  mainOrange: fiitThemeColors.mainCrimson,
  lightOrange01: fiitThemeColors.lightCrimson01,
  lightOrange02: fiitThemeColors.lightCrimson02,
  darkBlue01: fiitThemeColors.darkCrimson01,
  darkBlue02: fiitThemeColors.darkCrimson02,
  mainBlue: fiitThemeColors.mainCrimson,
  lightBlue01: fiitThemeColors.lightCrimson01,
  lightBlue02: fiitThemeColors.lightCrimson02,

  error: fiitThemeColors.darkCrimson02,
  accent: fiitThemeColors.mainCrimson,
  textPrimary: fiitThemeColors.lightGrey02,
  textParagraph: fiitThemeColors.lightGrey02,
  textSecondary: fiitThemeColors.lightGrey01,
  textTertiary: fiitThemeColors.mainGrey,
  backgroundPrimary: fiitThemeColors.darkCrimson01,
  backgroundSecondary: fiitThemeColors.darkCrimson02,
  colorBg: fiitThemeColors.darkCrimson01,
  surfacePrimary: fiitThemeColors.lightGrey02,
  surfaceText: fiitThemeColors.mainCrimson,
  headerBackground: fiitThemeColors.lightGrey02,
  headerText: fiitThemeColors.mainCrimson,

  hintBackground: fiitThemeColors.darkCrimson02,

  globalBlue: fiitThemeColors.mainCrimson,
  globalGray: '#C6C1DA',
  globalRed: fiitThemeColors.darkCrimson02,
  globalBlack: '#000000',
  globalWhite: fiitThemeColors.lightGrey02,
  globalSpaceS: `${layoutTokens.mobile.card.gap}px`,
  globalSpaceM: `${layoutTokens.mobile.card.padding}px`,
  globalSpaceL: `${layoutTokens.mobile.section.gap}px`,
  buttonColorPrimary: fiitThemeColors.mainCrimson,
  buttonColorSecondary: fiitThemeColors.darkCrimson02,
  buttonColorDanger: fiitThemeColors.darkCrimson02,
  buttonColorText: fiitThemeColors.lightGrey02,
  buttonPaddingSx: '12px',
  buttonPaddingSy: '8px',
  buttonPaddingMx: '12px',
  buttonPaddingMy: '8px',
  buttonPaddingLx: '12px',
  buttonPaddingLy: '8px',
  buttonFontSizeS: '16px',
  buttonFontSizeM: '16px',
  buttonFontSizeL: '16px',
  buttonHeightS: '72px',
  buttonHeightL: '72px',
  buttonSizeDefault: 'large',

  badgeVariantBackground: fiitThemeColors.lightGrey02,
  badgeVariantText: fiitThemeColors.mainCrimson,
  badgeVariantBorder: fiitThemeColors.lightCrimson02,
  badgeSizeDefault: 'large',

  accordionBackground: fiitThemeColors.lightGrey02,
  accordionText: fiitThemeColors.mainCrimson,
  accordionActiveText: fiitThemeColors.darkCrimson02,
  accordionContentText: fiitThemeColors.darkCrimson02,
  accordionBorder: fiitThemeColors.lightCrimson02,
  accordionFontSize: '18px',
  accordionContentFontSize: '16px',
  accordionIconSize: '24px',
  accordionPaddingY: '24px',
});

export const LIGHT_THEME = DEFAULT_THEME;
export const DARK_THEME = FIIT_THEME;

export const themes = {
  default: DEFAULT_THEME,
  fiit: FIIT_THEME,
  light: DEFAULT_THEME,
  dark: FIIT_THEME,
} as const;

export type Theme = AppTheme;
export type ThemeName = keyof typeof themes;

export const getThemeCssVariables = (theme: AppTheme) =>
  Object.fromEntries(
    Object.entries(theme).map(([token, value]) => [
      `--mm-${token}`,
      value,
    ]),
  ) as Record<string, string>;

interface ThemeProviderProps {
  mode?: ThemeName;
  theme?: AppTheme;
  overrides?: Partial<AppTheme>;
  children: React.ReactNode;
}

const ThemeContext = createContext<AppTheme>(DEFAULT_THEME);

export const ThemeProvider = ({
  mode = 'default',
  theme,
  overrides,
  children,
}: ThemeProviderProps) => {
  const resolvedTheme = useMemo(
    () =>
      theme ??
      (overrides
        ? createTheme(overrides, themes[mode])
        : themes[mode]),
    [mode, overrides, theme],
  );

  return (
    <ThemeContext.Provider value={resolvedTheme}>
      <EmotionThemeProvider theme={resolvedTheme}>
        <Global
          styles={{
            ':root': getThemeCssVariables(resolvedTheme),
          }}
        />
        {children}
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  );
};

export const MyThemeProvider = ThemeProvider;

export const useTheme = () => {
  const contextTheme = useContext(ThemeContext);
  const emotionTheme = useEmotionTheme() as Partial<AppTheme>;

  return Object.keys(emotionTheme).length
    ? (emotionTheme as AppTheme)
    : contextTheme;
};
