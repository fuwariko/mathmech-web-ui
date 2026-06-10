import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';

import { Link } from './Link';
import { ArrowUpRightIcon } from '../../icons/Icons';

describe('Link', () => {
  it('renders as a text link by default', () => {
    const html = renderToStaticMarkup(<Link href="/courses">Курсы</Link>);

    expect(html).toContain('href="/courses"');
    expect(html).toContain('Курсы');
  });

  it('can render with button appearance and icons', () => {
    const html = renderToStaticMarkup(
      <Link href="/courses" variant="button" rightIcon={<ArrowUpRightIcon />}>
        Курсы
      </Link>,
    );

    expect(html).toContain('Курсы');
    expect(html).toContain('aria-hidden="true"');
  });

  it('adds safe rel for external links', () => {
    const html = renderToStaticMarkup(
      <Link href="https://example.com" external>
        External
      </Link>,
    );

    expect(html).toContain('target="_blank"');
    expect(html).toContain('rel="noreferrer noopener"');
  });
});
