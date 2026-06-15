import { cache, flush } from '@emotion/css';
import { afterEach, describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';

import { DEFAULT_THEME, ThemeProvider } from '../../ThemeContext';
import { Text } from './Text';

const getRenderedStyles = (html: string) => {
  const classNames = html.match(/css-[a-zA-Z0-9-]+/g) ?? [];

  return classNames
    .map((className) => cache.registered[className])
    .join('\n');
};

describe('Text', () => {
  afterEach(() => {
    flush();
  });

  it('uses paragraph text color by default', () => {
    const html = renderToStaticMarkup(
      <ThemeProvider>
        <Text>Текст</Text>
      </ThemeProvider>,
    );

    expect(getRenderedStyles(html)).toContain(`color: ${DEFAULT_THEME.textParagraph}`);
  });

  it('uses main navy and vertical spacing for heading variants by default', () => {
    const html = renderToStaticMarkup(
      <ThemeProvider>
        <Text variant="h2">Заголовок</Text>
      </ThemeProvider>,
    );

    const styles = getRenderedStyles(html);

    expect(styles).toContain('margin: 4px 0');
    expect(styles).toContain(`color: ${DEFAULT_THEME.mainNavy}`);
  });

  it('uses medium font weight for h4-h6 variants', () => {
    const html = renderToStaticMarkup(
      <ThemeProvider>
        <>
          <Text variant="h4">H4</Text>
          <Text variant="h5">H5</Text>
          <Text variant="h6">H6</Text>
        </>
      </ThemeProvider>,
    );

    const styles = getRenderedStyles(html);

    expect(styles.match(/font-weight: 500/g)).toHaveLength(3);
  });
});
