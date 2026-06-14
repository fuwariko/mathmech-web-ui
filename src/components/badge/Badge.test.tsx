import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';

import { Badge } from './Badge';
import { allColors } from '../../theme/color-tokens';

describe('Badge', () => {
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
