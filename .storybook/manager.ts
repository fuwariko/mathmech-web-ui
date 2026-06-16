import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

import './manager.css';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'Mathmech UI',
    colorSecondary: '#1f4391',
    appBg: '#ffffff',
    appContentBg: '#ffffff',
    barSelectedColor: '#1f4391',
  }),
});
