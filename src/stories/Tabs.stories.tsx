import type { Meta, StoryObj } from '@storybook/react-vite';
import { colorTokenNames } from '../ThemeContext';
import { Tabs } from '../components/Tabs/tabs';


const colors = colorTokenNames;

const tabs = [
  {
    id: 'home',
    label: 'Главная',
    content: (
      <div style={{ padding: 16 }}>
        Контент главной страницы
      </div>
    ),
  },

  {
    id: 'profile',
    label: 'Профиль',
    content: (
      <div style={{ padding: 16 }}>
        Контент профиля
      </div>
    ),
  },

  {
    id: 'settings',
    label: 'Настройки',
    content: (
      <div style={{ padding: 16 }}>
        Контент настроек
      </div>
    ),
  },
];

const meta = {
  title: 'UI/Tabs',

  component: Tabs,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  args: {
    tabs,

    vertical: false,

    withScrollButtons: false,

    variant: 'filled',

    activeColor: 'mainBlue',

    backgroundColor: 'lightGrey01',
  },

  argTypes: {
    vertical: {
      control: 'boolean',
    },

    withScrollButtons: {
      control: 'boolean',
    },

    variant: {
      control: 'radio',

      options: [
        'filled',
        'underline',
      ],
    },

    activeColor: {
      control: 'select',
      options: colors,
    },

    backgroundColor: {
      control: 'select',
      options: colors,
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Filled: Story = {};

export const Underline: Story = {
  args: {
    variant: 'underline',
  },
};

export const Vertical: Story = {
  args: {
    vertical: true,
  },
};

export const VerticalUnderline: Story = {
  args: {
    vertical: true,
    variant: 'underline',
  },
};

export const DisabledTab: Story = {
  args: {
    tabs: [
      tabs[0],

      {
        id: 'disabled',
        label: 'Disabled',
        disabled: true,
        content: (
          <div style={{ padding: 16 }}>
            Disabled tab
          </div>
        ),
      },

      tabs[2],
    ],
  },
};

