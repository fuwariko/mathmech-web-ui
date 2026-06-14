import { describe, expect, it } from 'vitest';

import {
  FIIT_THEME,
  getThemeCssVariables,
} from '../ThemeContext';
import { allColors } from './color-tokens';

describe('theme color tokens', () => {
  it('resolves legacy allColors tokens through theme css variables', () => {
    expect(allColors.mainNavy).toBe('var(--mm-mainNavy, #1E4391)');
    expect(allColors.mainRed).toBe('var(--mm-mainRed, #D41926)');
    expect(allColors.black).toBe('var(--mm-black, #000000)');
    expect(allColors.white).toBe('var(--mm-white, #FFFFFF)');
  });

  it('maps legacy default palette tokens to fiit palette values', () => {
    const variables = getThemeCssVariables(FIIT_THEME);

    expect(variables['--mm-mainNavy']).toBe(FIIT_THEME.mainNavy);
    expect(variables['--mm-mainNavy']).toBe(FIIT_THEME.mainBlue);
  });
});
