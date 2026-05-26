import type {
  Meta,
  StoryObj,
} from '@storybook/react-vite';
import { Accordion } from '../components/accordion/accordion';

const meta = {
  title: 'Example/Accordion',

  component: Accordion,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  args: {
    activeColor: 'mainBlue',

    multiple: false,

    items: [
      {
        id: '1',
        title: 'Что такое Accordion?',
        content: (
          <div>
            Accordion используется
            для скрытия контента.
          </div>
        ),
      },

      {
        id: '2',
        title: 'Как это работает?',
        content: (
          <div>
            По нажатию открывается
            нужный блок.
          </div>
        ),
      },

      {
        id: '3',
        title: 'Можно ли кастомизировать?',
        content: (
          <div>
            Да, стили полностью
            кастомизируются.
          </div>
        ),
      },
    ],
  },

  argTypes: {
    multiple: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Multiple: Story = {
  args: {
    multiple: true,
  },
};