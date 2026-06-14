import { cache, flush } from '@emotion/css';
import { afterEach, describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';

import { Button } from './Button';
import { FIIT_THEME, ThemeProvider } from '../../ThemeContext';

const getRenderedStyles = (html: string) => {
  const classNames = html.match(/css-[a-zA-Z0-9-]+/g) ?? [];

  return classNames
    .map((className) => cache.registered[className])
    .join('\n');
};

describe('Button', () => {
  afterEach(() => {
    flush();
  });

  it('uses themed primary button tokens by default', () => {
    const html = renderToStaticMarkup(
      <ThemeProvider mode="fiit">
        <Button>Сохранить</Button>
      </ThemeProvider>,
    );

    const styles = getRenderedStyles(html);

    expect(styles).toContain(`background: ${FIIT_THEME.buttonColorPrimary}`);
    expect(styles).toContain(`color: ${FIIT_THEME.buttonColorText}`);
  });

  it('uses themed danger tokens by variant', () => {
    const html = renderToStaticMarkup(
      <ThemeProvider mode="fiit">
        <Button variant="danger">Удалить</Button>
      </ThemeProvider>,
    );

    const styles = getRenderedStyles(html);

    expect(styles).toContain(`background: ${FIIT_THEME.buttonColorDanger}`);
  });

  it('uses themed border color token', () => {
    const html = renderToStaticMarkup(
      <ThemeProvider mode="fiit">
        <Button borderColor="white">Сохранить</Button>
      </ThemeProvider>,
    );

    const styles = getRenderedStyles(html);

    expect(styles).toContain(`border-color: ${FIIT_THEME.white}`);
  });

  it('can render icon-only buttons without a visible button background', () => {
    const html = renderToStaticMarkup(
      <ThemeProvider mode="fiit">
        <Button icon={<span>i</span>} bareIcon aria-label="Информация" />
      </ThemeProvider>,
    );

    const styles = getRenderedStyles(html);

    expect(styles).toContain('background: transparent');
    expect(styles).toContain('padding: 0');
    expect(styles).toContain(`color: ${FIIT_THEME.textPrimary}`);
  });
});
