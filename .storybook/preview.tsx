// .storybook/preview.tsx
import type { Preview } from '@storybook/react-vite';
import { MyThemeProvider } from '../src/ThemeContext';
import '../src/global.css';


export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Глобальная тема',

    defaultValue: 'light',

    toolbar: {
      icon: 'circlehollow',

      items: [
        {
          value: 'light',
          title: 'Light',
          icon: 'sun',
        },

        {
          value: 'dark',
          title: 'Dark',
          icon: 'moon',
        },
      ],

      showName: true,
    },
  },
};

const preview: Preview = {
  initialGlobals: {
    theme: 'light',
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
      <MyThemeProvider mode={context.globals.theme}>
        <Story />
      </MyThemeProvider>
    ),
  ],
};

export default preview;