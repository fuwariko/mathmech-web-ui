import type {
  Meta,
  StoryObj,
} from '@storybook/react-vite';

import { BoardIcon } from '../icons/BoardIcon';
import { defaultThemeColors, fiitThemeColors } from '../ThemeContext';
import { Button } from '../components/button/button';


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

    role: 'button',
  },

  argTypes: {
    icon: {
      control: 'select',

      options: ['none', 'board'],

      mapping: {
        none: undefined,

        board: <BoardIcon />,
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

      options: [
        'small',
        'large',
      ],
    },

    role: {
      control: 'radio',

      options: [
        'button',
        'link',
      ],
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

type Story = StoryObj<
  typeof Button
>;

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
    icon: <BoardIcon />,

    children: 'Add item',
  },
};