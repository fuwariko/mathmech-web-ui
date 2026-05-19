
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../components/button/Button';
import { BoardIcon } from '../icons/BoardIcon';
const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  args: {
    children: 'Button',
    color: 'mainBlue',
    textColor: 'lightGrey02',
    size: 'small',
    disabled: false,
    role: 'button',
    onClick: () => alert('Clicked'),
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
      options: [
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
      ],
    },

    textColor: {
      control: 'select',
      options: [
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
      ],
    },

    size: {
      control: 'radio',
      options: ['small', 'large'],
    },

    role: {
      control: 'radio',
      options: ['button', 'link'],
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
    icon: <BoardIcon />,
    children: 'Add item',
  },
};