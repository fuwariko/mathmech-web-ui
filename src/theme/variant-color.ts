export const colors = {
  black: '#000000',

  white: '#FFFFFF',

  /** Status */

  error: '#D41926',

  success: '#00852A',

  accent: '#C25400',

  /** Light theme */

  light: {
    text: {
      primary: '#1B1E22',

      secondary: '#545454',

      tertiary: '#6F6F6F',
    },

    background: {
      primary: '#FFFFFF',

      secondary: '#F3F3F3',
    },
  },

  /** Dark theme */

  dark: {
    text: {
      primary: '#FFFFFF',

      secondary: '#F3F3F3',

      tertiary: '#E8F0FA',
    },

    background: {
      primary: '#1E4391',

      secondary: '#0F2B5E',
    },
  },
} as const;

export const semanticColors = {
  error: colors.error,

  success: colors.success,

  accent: colors.accent,

  black: colors.black,

  white: colors.white,

  textPrimary: colors.light.text.primary,

  textSecondary:
    colors.light.text.secondary,

  textTertiary:
    colors.light.text.tertiary,

  backgroundPrimary:
    colors.light.background.primary,

  backgroundSecondary:
    colors.light.background.secondary,

  darkTextPrimary:
    colors.dark.text.primary,

  darkTextSecondary:
    colors.dark.text.secondary,

  darkTextTertiary:
    colors.dark.text.tertiary,

  darkBackgroundPrimary:
    colors.dark.background.primary,

  darkBackgroundSecondary:
    colors.dark.background.secondary,
} as const;

export type TColors =
  keyof typeof semanticColors;
