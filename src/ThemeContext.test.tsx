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
    expect(html).toContain('data-text="#1B1E22"');
    expect(html).toContain('data-button="#1E4391"');
  });

  it('uses fiit as the dark theme', () => {
    const html = renderToStaticMarkup(
      <ThemeProvider mode="fiit">
        <ThemeProbe />
      </ThemeProvider>,
    );

    expect(html).toContain('data-background="#1E4391"');
    expect(html).toContain('data-text="#FFFFFF"');
    expect(html).toContain('data-button="#2B79FF"');
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
    expect(FIIT_THEME.backgroundPrimary).toBe('#1E4391');
  });
});
