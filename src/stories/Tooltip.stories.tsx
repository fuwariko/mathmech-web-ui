import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tooltip } from '../components/tooltip/tooltip';

const colors = [
  'darkBlue01',
  'darkBlue02',
  'mainBlue',
  'darkGrey01',
  'darkCrimson02',
] as const;

const icons = ['info', 'warning', 'question'] as const;

const meta = {
  title: 'UI/Tooltip',
  component: Tooltip,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  args: {
    position: 'top',
    color: 'darkGrey01',
    icon: 'info',

    content: (
      <div>
        Tooltip с описанием и дополнительным контентом.
      </div>
    ),
  },

  argTypes: {
    position: {
      control: 'radio',
      options: ['top', 'bottom', 'left', 'right'],
    },

    color: {
      control: 'select',
      options: colors,
    },

    icon: {
      control: 'radio',
      options: icons,
    },

    children: {
      control: false, // важно: иначе ломает UI в controls
      description: 'Custom trigger вместо иконки',
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

/** дефолт — иконка info */
export const Default: Story = {};

/** warning вариант */
export const Warning: Story = {
  args: {
    icon: 'warning',
  },
};

/** question вариант */
export const Question: Story = {
  args: {
    icon: 'question',
  },
};

/** позиция снизу */
export const Bottom: Story = {
  args: {
    position: 'bottom',
  },
};

/** слева */
export const Left: Story = {
  args: {
    position: 'left',
  },
};

/** справа */
export const Right: Story = {
  args: {
    position: 'right',
  },
};

/** кастомный триггер */
export const CustomTrigger: Story = {
  args: {
    children: (
      <span
        style={{
          padding: '6px 10px',
          borderRadius: '8px',
          background: '#eee',
          cursor: 'pointer',
        }}
      >
        Hover me
      </span>
    ),
  },
};