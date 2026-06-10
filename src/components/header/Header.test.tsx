import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';

import { Header } from './Header';

describe('Header', () => {
  it('renders top slots and bottom content inside the header', () => {
    const html = renderToStaticMarkup(
      <Header
        topLeft={<span>МатМех</span>}
        topRight={<nav>Курсы</nav>}
      >
        <h1>Каталог курсов</h1>
        <a href="/favorites">Избранные</a>
      </Header>,
    );

    expect(html).toContain('МатМех');
    expect(html).toContain('Курсы');
    expect(html).toContain('Каталог курсов');
    expect(html).toContain('Избранные');
  });

  it('can render without a filled background', () => {
    const html = renderToStaticMarkup(
      <Header filled={false} title="Без заливки" />,
    );

    expect(html).toContain('Без заливки');
    expect(html).not.toContain('background:');
  });
});
