export const layoutTokens = {
  desktop: {
    button: {
      paddingY: 12,
      paddingX: 24,

      paddingYLarge: 16,
      paddingXLarge: 32,

      gap: 8,
      gapLarge: 16,
    },

    iconButton: {
      padding: 12,
      minSize: 44,

      gap: 8,
    },

    card: {
      padding: 16,
      paddingLarge: 24,

      gap: 16,
      gapLarge: 24,
    },

    input: {
      paddingY: 12,
      paddingYLarge: 14,

      paddingX: 16,

      labelGap: 8,
    },

    heading: {
      marginTop: 24,
      marginTopLarge: 32,
    },

    paragraph: {
      marginBottom: 18,
    },

    section: {
      gap: 48,
      gapLarge: 64,
    },
  },

  mobile: {
    button: {
      padding: 16,

      gap: 12,
      gapLarge: 16,
    },

    iconButton: {
      padding: 16,

      minSize: 44,

      gap: 12,
    },

    card: {
      padding: 16,

      gap: 12,
      gapLarge: 16,
    },

    input: {
      paddingY: 12,
      paddingYLarge: 14,

      paddingX: 16,

      labelGap: 12,
    },

    heading: {
      marginTop: 20,
      marginTopLarge: 24,
    },

    paragraph: {
      marginBottom: 12,
      marginBottomLarge: 16,
    },

    section: {
      gap: 32,
      gapLarge: 48,
    },
  },
} as const;