import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  BoardIcon,
  FilterIcon,
} from '../icons/Icons';

import {
  defaultThemeColors,
  fiitThemeColors,
} from '../ThemeContext';

import { Button } from '../components/button/Button';

const allColors = [
  ...Object.keys(defaultThemeColors),
  ...Object.keys(fiitThemeColors),
];

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  args: {
    children: 'Button',
    color: 'mainNavy',
    textColor: 'lightNavy02',
    size: 'small',
    disabled: false,
  },

  argTypes: {
    icon: {
      control: 'select',
      options: ['none', 'board', 'filter'],
      mapping: {
        none: undefined,
        board: <BoardIcon size={16} />,
        filter: <FilterIcon size={16} />,
      },
    },

    color: {
      control: 'select',
      options: allColors,
    },

    textColor: {
      control: 'select',
      options: allColors,
    },

    size: {
      control: 'radio',
      options: ['small', 'large'],
    },


    disabled: {
      control: 'boolean',
    },

    radius: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Large button',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const CustomRadius: Story = {
  args: {
    radius: '999px',
    children: 'Rounded',
  },
};

export const WithIcon: Story = {
  args: {
    icon: <BoardIcon size={16} />,
    children: 'Add item',
  },
};

export const CustomIcon: Story = {
  args: {
    children: 'Custom icon button',

    icon: (
      <FilterIcon
        size={32}
        color="#ffffff"
        strokeWidth={2.5}
      />
    ),

    color: 'mainNavy',
    textColor: 'lightNavy02',
  },
};