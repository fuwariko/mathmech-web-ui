import type { Meta, StoryObj } from '@storybook/react-vite';

import { Badge } from '../components/badge/Badge';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'UI/Badge',
  component: Badge,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  args: {
    lable: 'Осень',
    color: 'darkGreen02',
    icon: false,
  },

  argTypes: {
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

    borderColor: {
      control: 'select',
      options: [
        undefined,

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

    icon: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    lable: 'Осень',
    color: 'darkGreen02',
  },
};

export const Success: Story = {
  args: {
    lable: 'Весна',
    color: 'darkCrimson02',
  },
};

export const Small: Story = {
  args: {
    lable: 'Тег',
    color: 'lightGrey01',
  },
};

export const WithBorder: Story = {
  args: {
    lable: 'Outlined',
    color: 'mainBlue',
    borderColor: 'lightGrey02',
  },
};

export const Dark: Story = {
  args: {
    lable: 'Dark badge',
    color: 'darkGrey01',
    borderColor: 'lightGrey02',
  },
};