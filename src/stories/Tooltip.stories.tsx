import type {
  Meta,
  StoryObj,
} from '@storybook/react-vite';
import { Tooltip } from '../components/tooltip/tooltip';


const colors = [
  'darkBlue01',
  'darkBlue02',
  'mainBlue',
  'darkGrey01',
  'darkCrimson02',
] as const;

const meta = {
  title: 'Example/Tooltip',

  component: Tooltip,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  args: {
    position: 'top',

    color: 'darkGrey01',

    children: (
      <button>
        Hover me
      </button>
    ),

    content: (
      <div>
        Tooltip с описанием
        и дополнительным контентом.
      </div>
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
} satisfies Meta<typeof Tooltip>;

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