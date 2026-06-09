import type { Meta, StoryObj } from '@storybook/react-vite';

import { Header } from '../components/header/Header';

import { HeaderSkeleton } from '../components/skeletons/HeaderSkeleton';
import { BoardIcon } from '../icons/Icons';
import { Button } from '../components/button/Button';


const meta: Meta<typeof Header> = {
  title: 'UI/Header',
  component: Header,

  tags: ['autodocs'],

  args: {
    title: 'Каталог курсов',
    backgroundColor: 'mainBlue',
    textColor: 'lightGrey02',
    sticky: false,

    leftAccessory: 'МатМех',

    rightAccessory: (
      <Button color="mainGreen">
        Войти
      </Button>
    ),
  },

  argTypes: {
    backgroundColor: {
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

    sticky: {
      control: 'boolean',
    },

    leftAccessory: {
      control: 'select',

      options: [
        'none',
        'text',
        'icon',
        'button',
      ],

      mapping: {
        none: undefined,

        text: 'МатМех',

        icon: <BoardIcon />,

        button: (
          <Button color="mainOrange">
            Назад
          </Button>
        ),
      },
    },

    rightAccessory: {
      control: 'select',

      options: [
        'none',
        'text',
        'icon',
        'button',
        'largeButton',
      ],

      mapping: {
        none: undefined,

        text: 'Курсы Преподаватели Профиль',

        icon: <BoardIcon />,

        button: (
          <Button color="mainGreen">
            Войти
          </Button>
        ),

        largeButton: (
          <Button
            color="mainPurple"
            size="large"
          >
            Записаться
          </Button>
        ),
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {};

export const Sticky: Story = {
  args: {
    sticky: true,
  },
};

export const WithIcons: Story = {
  args: {
    leftAccessory: <BoardIcon />,
    rightAccessory: <BoardIcon />,
  },
};

export const WithoutAccessories: Story = {
  args: {
    leftAccessory: undefined,
    rightAccessory: undefined,
  },
};

export const WithButtons: Story = {
  args: {
    leftAccessory: (
      <Button color="mainOrange">
        Назад
      </Button>
    ),

    rightAccessory: (
      <Button color="mainGreen">
        Войти
      </Button>
    ),
  },
};

export const WithLargeButton: Story = {
  args: {
    leftAccessory: 'Каталог',

    rightAccessory: (
      <Button
        color="mainPurple"
        size="large"
      >
        Записаться
      </Button>
    ),
  },
};

export const CustomColors: Story = {
  args: {
    backgroundColor: 'mainPurple',
    textColor: 'lightGrey02',

    leftAccessory: 'МатМех',

    rightAccessory: (
      <Button color="mainOrange">
        Меню
      </Button>
    ),
  },
};

export const Skeleton: Story = {
  render: (args) => (
    <HeaderSkeleton
      backgroundColor={'darkGrey01'}
      sticky={args.sticky}
    />
  ),
};