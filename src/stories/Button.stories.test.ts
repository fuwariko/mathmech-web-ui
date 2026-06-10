import { describe, expect, it } from 'vitest';

import meta from './Button.stories';

describe('Button stories', () => {
  it('uses semantic theme tokens by default so toolbar theme switching is visible', () => {
    expect(meta.args?.variant).toBe('primary');
    expect(meta.args?.color).toBeUndefined();
    expect(meta.args?.textColor).toBeUndefined();
  });

  it('offers semantic tokens in color controls', () => {
    const colorOptions = meta.argTypes?.color?.options;

    expect(colorOptions).toContain('buttonColorPrimary');
    expect(colorOptions).toContain('backgroundPrimary');
  });
});
