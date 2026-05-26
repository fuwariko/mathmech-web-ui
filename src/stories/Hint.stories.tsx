import type {
  Meta,
  StoryObj,
} from '@storybook/react-vite';
import { Hint } from '../components/hint/hint';


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

const meta = {
  title: 'Example/Hint',

  component: Hint,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  args: {
    text: 'Подсказка',

    position: 'top',

    color: 'darkGrey01',

    children: (
      <button>
        Hover me
      </button>
    ),
  },

  argTypes: {
    position: {
      control: 'radio',

      options: [
        'top',
        'bottom',
        'left',
        'right',
      ],
    },

    color: {
      control: 'select',
      options: colors,
    },
  },
} satisfies Meta<typeof Hint>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Bottom: Story = {
  args: {
    position: 'bottom',
  },
};

export const Left: Story = {
  args: {
    position: 'left',
  },
};

export const Right: Story = {
  args: {
    position: 'right',
  },
};