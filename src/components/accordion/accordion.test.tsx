import { cache, flush } from '@emotion/css';
import { afterEach, describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';

import { Accordion } from './accordion';
import { FIIT_THEME, ThemeProvider } from '../../ThemeContext';

const getRenderedStyles = (html: string) => {
  const classNames = html.match(/css-[a-zA-Z0-9-]+/g) ?? [];

  return classNames
    .map((className) => cache.registered[className])
    .join('\n');
};

describe('Accordion', () => {
  afterEach(() => {
    flush();
  });

  it('uses readable fiit theme colors and larger icon size', () => {
    const html = renderToStaticMarkup(
      <ThemeProvider mode="fiit">
        <Accordion
          items={[
            {
              id: 'first',
              title: 'Раздел',
              content: 'Контент',
            },
          ]}
        />
      </ThemeProvider>,
    );

    const styles = getRenderedStyles(html);

    expect(styles).toContain(`background: ${FIIT_THEME.accordionBackground}`);
    expect(styles).toContain(`border-bottom: 1px solid ${FIIT_THEME.accordionBorder}`);
    expect(styles).toContain(`color: ${FIIT_THEME.accordionText}`);
    expect(styles).toContain(`font-size: ${FIIT_THEME.accordionFontSize}`);
    expect(styles).toContain(`width: ${FIIT_THEME.accordionIconSize}`);
  });
});
