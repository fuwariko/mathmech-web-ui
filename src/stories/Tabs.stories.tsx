import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs } from '../components/tabs/tabs';


const colors = [
  'darkNavy01',
  'darkNavy02',
  'mainNavy',
  'lightNavy01',
  'lightNavy02',

  'darkOrange01',
  'darkOrange02',
  'mainOrange',
  'lightOrange01',
  'lightOrange02',

  'darkGreen01',
  'darkGreen02',
  'mainGreen',
  'lightGreen01',
  'lightGreen02',

  'darkRed01',
  'darkRed02',
  'mainRed',
  'lightRed01',
  'lightRed02',

  'darkCrimson01',
  'darkCrimson02',
  'mainCrimson',
  'lightCrimson01',
  'lightCrimson02',

  'darkBlue01',
  'darkBlue02',
  'mainBlue',
  'lightBlue01',
  'lightBlue02',

  'darkPurple01',
  'darkPurple02',
  'mainPurple',
  'lightPurple01',
  'lightPurple02',

  'darkGrey01',
  'darkGrey02',
  'mainGrey',
  'lightGrey01',
  'lightGrey02',
] as const;

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

export const WithScrollButtons: Story = {
  args: {
    withScrollButtons: true,

    variant: 'underline',

    tabs: Array.from(
      { length: 10 },
      (_, index) => ({
        id: `${index}`,
        label: `Tab ${index + 1}`,
        content: (
          <div style={{ padding: 16 }}>
            Контент таба {index + 1}
          </div>
        ),
      }),
    ),
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