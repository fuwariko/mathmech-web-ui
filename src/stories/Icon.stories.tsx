import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  BoardIcon,
  UsersGroupIcon,
  UsersIcon,
  ArrowUpRightIcon,
  FilterIcon,
  ListIcon,
  GridIcon,
  CircleIcon,
  CheckCircleIcon,
  StarIcon,
  StarFilledIcon,
} from '../icons/Icons';

const iconMap = {
  board: BoardIcon,
  usersGroup: UsersGroupIcon,
  usersScale: UsersIcon,
  arrow: ArrowUpRightIcon,
  filter: FilterIcon,
  list: ListIcon,
  grid: GridIcon,
  star: StarIcon,
  circle: CircleIcon,
  circleWithTic: CheckCircleIcon,
  starFilledIcon: StarFilledIcon
};

const meta: Meta = {
  title: 'UI/Icons',
  parameters: {
    layout: 'centered',
  },

  argTypes: {
    icon: {
      control: 'select',
      options: Object.keys(iconMap),
      mapping: iconMap,
    },

    size: {
        control: 'radio',
        options: [16, 24, 32, 48, 64],
    },

    color: {
      control: 'color',
    },

    strokeWidth: {
        control: 'radio',
        options: [1, 2],
    },
  },

  args: {
    icon: iconMap.board,
    size: 24,
    color: 'currentColor',
    strokeWidth: 1.8,
  },
};

export default meta;

type Story = StoryObj<{
  icon: React.ComponentType<any>;
  size: 8 | 16 | 24 | 32;
  color: string;
  strokeWidth: number;
}>;

export const Playground: Story = {
  render: (args) => {
    const Icon = args.icon;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
        <Icon
          size={args.size}
          color={args.color}
          strokeWidth={args.strokeWidth}
        />

        <div style={{ fontSize: 12, opacity: 0.6 }}>
          size: {args.size}px | stroke: {args.strokeWidth}
        </div>
      </div>
    );
  },
};