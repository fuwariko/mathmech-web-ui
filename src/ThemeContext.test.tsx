import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';

import {
  DEFAULT_THEME,
  FIIT_THEME,
  ThemeProvider,
  createTheme,
  useTheme,
} from './ThemeContext';

const ThemeProbe = () => {
  const theme = useTheme();

  return (
    <div
      data-background={theme.backgroundPrimary}
      data-button={theme.buttonColorPrimary}
      data-header-background={theme.headerBackground}
      data-header-text={theme.headerText}
      data-surface={theme.surfacePrimary}
      data-surface-text={theme.surfaceText}
      data-text={theme.textPrimary}
    />
  );
};

describe('ThemeContext', () => {
  it('uses the default light theme when no mode is provided', () => {
    const html = renderToStaticMarkup(
      <ThemeProvider>
        <ThemeProbe />
      </ThemeProvider>,
    );

    expect(html).toContain('data-background="#FFFFFF"');
    expect(html).toContain('data-surface="#FFFFFF"');
    expect(html).toContain('data-text="#1B1E22"');
    expect(html).toContain('data-button="#1E4391"');
  });

  it('uses fiit as the dark theme', () => {
    const html = renderToStaticMarkup(
      <ThemeProvider mode="fiit">
        <ThemeProbe />
      </ThemeProvider>,
    );

    expect(html).toContain('data-background="#5A1A5B"');
    expect(html).toContain('data-surface="#F2EFFD"');
    expect(html).toContain('data-surface-text="#A92CAB"');
    expect(html).toContain('data-header-background="#F2EFFD"');
    expect(html).toContain('data-header-text="#A92CAB"');
    expect(html).toContain('data-text="#F2EFFD"');
    expect(html).toContain('data-button="#A92CAB"');
  });

  it('lets consumers create custom themes from a base theme', () => {
    const customTheme = createTheme(
      {
        buttonColorPrimary: '#FF00FF',
        textPrimary: '#111111',
      },
      FIIT_THEME,
    );

    expect(customTheme.backgroundPrimary).toBe(FIIT_THEME.backgroundPrimary);
    expect(customTheme.buttonColorPrimary).toBe('#FF00FF');
    expect(customTheme.textPrimary).toBe('#111111');
  });

  it('lets consumers pass a complete custom theme to the provider', () => {
    const customTheme = createTheme({
      backgroundPrimary: '#FAFAFA',
      buttonColorPrimary: '#123456',
    });

    const html = renderToStaticMarkup(
      <ThemeProvider theme={customTheme}>
        <ThemeProbe />
      </ThemeProvider>,
    );

    expect(html).toContain('data-background="#FAFAFA"');
    expect(html).toContain('data-button="#123456"');
  });

  it('exports explicit default and fiit theme objects', () => {
    expect(DEFAULT_THEME.backgroundPrimary).toBe('#FFFFFF');
    expect(FIIT_THEME.backgroundPrimary).toBe('#5A1A5B');
    expect(FIIT_THEME.surfacePrimary).toBe('#F2EFFD');
    expect(FIIT_THEME.surfaceText).toBe('#A92CAB');
    expect(FIIT_THEME.headerBackground).toBe('#F2EFFD');
    expect(FIIT_THEME.headerText).toBe('#A92CAB');
    expect(FIIT_THEME.mainBlue).toBe('#A92CAB');
    expect(FIIT_THEME.white).toBe('#F2EFFD');
    expect(FIIT_THEME.globalWhite).toBe('#F2EFFD');
    expect(FIIT_THEME.textPrimary).toBe('#F2EFFD');
    expect(FIIT_THEME.buttonColorText).toBe('#F2EFFD');
    expect(FIIT_THEME.buttonPaddingMx).toBe('12px');
    expect(FIIT_THEME.buttonFontSizeL).toBe('16px');
    expect(FIIT_THEME.buttonHeightL).toBe('72px');
    expect(FIIT_THEME.buttonSizeDefault).toBe('large');
    expect(FIIT_THEME.badgeVariantBackground).toBe('#F2EFFD');
    expect(FIIT_THEME.badgeVariantText).toBe('#A92CAB');
    expect(FIIT_THEME.badgeSizeDefault).toBe('large');
    expect(FIIT_THEME.accordionBackground).toBe('#F2EFFD');
    expect(FIIT_THEME.accordionText).toBe('#A92CAB');
  });
});
