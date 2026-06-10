// .storybook/preview.tsx
import type { Preview } from '@storybook/react-vite';
import { ThemeProvider, type ThemeName } from '../src/ThemeContext';
import '../src/global.css';


export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Глобальная тема',

    defaultValue: 'default',

    toolbar: {
      icon: 'circlehollow',

      items: [
        {
          value: 'default',
          title: 'Default',
          icon: 'sun',
        },

        {
          value: 'fiit',
          title: 'FIIT',
          icon: 'moon',
        },
      ],

      showName: true,
    },
  },
};

const preview: Preview = {
  initialGlobals: {
    theme: 'default',
  },

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      test: 'todo',
    },
  },

  decorators: [
    (Story, context) => (
      <ThemeProvider mode={context.globals.theme as ThemeName}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
