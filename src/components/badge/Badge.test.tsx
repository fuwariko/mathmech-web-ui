import { cache, flush } from '@emotion/css';
import { afterEach, describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';

import { Badge } from './Badge';
import { allColors } from '../../theme/color-tokens';

const getRenderedStyles = (html: string) => {
  const classNames = html.match(/css-[a-zA-Z0-9-]+/g) ?? [];

  return classNames
    .map((className) => cache.registered[className])
    .join('\n');
};

describe('Badge', () => {
  afterEach(() => {
    flush();
  });

  it('renders prepared online variant with default text and icon', () => {
    const html = renderToStaticMarkup(<Badge variant="online" />);

    expect(html).toContain('Онлайн');
    expect(html).toContain('aria-hidden="true"');
  });

  it('renders prepared places variant with a custom count', () => {
    const html = renderToStaticMarkup(
      <Badge variant="places" value={20} />,
    );

    expect(html).toContain('20 мест');
    expect(html).toContain('width="24"');
    expect(html).toContain('height="24"');
  });

  it('uses fallback values for places and subject variants', () => {
    const html = renderToStaticMarkup(
      <>
        <Badge variant="places" />
        <Badge variant="subject" />
      </>,
    );

    expect(html).toContain('20 мест');
    expect(html).toContain('Предмет');
    expect(html).not.toContain('undefined');
  });

  it('uses larger vertically adjusted icon for offline variant', () => {
    const html = renderToStaticMarkup(<Badge variant="offline" />);
    const styles = getRenderedStyles(html);

    expect(html).toContain('width="24"');
    expect(html).toContain('height="24"');
    expect(styles).toContain('translateY(0.06em)');
  });

  it('renders badge text with semibold weight', () => {
    const html = renderToStaticMarkup(<Badge variant="online" />);

    expect(getRenderedStyles(html)).toContain('font-weight: 600');
  });

  it('uses a theme-aware blue token for prepared places badge background', () => {
    expect(allColors.lightBlue01).toBe('var(--mm-lightBlue01, #691B9F)');
  });

  it('keeps custom label rendering for existing usage', () => {
    const html = renderToStaticMarkup(
      <Badge lable="Осень" color="darkGreen02" />,
    );

    expect(html).toContain('Осень');
  });
});
