import type { Meta, StoryObj } from '@storybook/react-vite';
import { Link } from '../components/link/Link';
import { LinkSkeleton } from '../components/skeletons/ComponentSkeletons';
import { ArrowUpRightIcon, BoardIcon, FilterIcon } from '../Icons/Icons';


const iconOptions = {
  none: undefined,
  arrow: <ArrowUpRightIcon size={16} />,
  board: <BoardIcon size={16} />,
  filter: <FilterIcon size={16} />,
};

const meta: Meta<typeof Link> = {
  title: 'UI/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    href: '/courses',
    children: 'Каталог курсов',
    variant: 'text',
    underline: 'always',
    size: 'medium',
    color: 'mainNavy',
    external: false,
    disabled: false,
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['text', 'button'],
    },
    underline: {
      control: 'radio',
      options: ['always', 'hover', 'none'],
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
    leftIcon: {
      control: 'select',
      options: Object.keys(iconOptions),
      mapping: iconOptions,
    },
    rightIcon: {
      control: 'select',
      options: Object.keys(iconOptions),
      mapping: iconOptions,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Text: Story = {};

export const HoverUnderline: Story = {
  args: {
    underline: 'hover',
  },
};

export const ButtonLike: Story = {
  args: {
    variant: 'button',
    underline: 'none',
    rightIcon: <ArrowUpRightIcon size={16} />,
  },
};

export const External: Story = {
  args: {
    href: 'https://example.com',
    external: true,
    children: 'Внешняя ссылка',
    rightIcon: <ArrowUpRightIcon size={16} />,
  },
};

export const Skeleton: Story = {
  render: () => <LinkSkeleton />,
};
