import type { Meta, StoryObj } from '@storybook/react-vite';

import { Badge } from '../components/badge/Badge';
import { Card } from '../components/card/Card';
import {
  BoardIcon,
  UsersScaleIcon,
  UsersGroupIcon,
  ArrowUpRightIcon,
  FilterIcon,
} from '../icons/Icons';
import { CardSkeleton } from '../components/skeletons/CardSkeleton';

const headerOptions = {
  none: undefined,

  badges: (
    <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
      <Badge lable="New" color="darkBlue01" borderColor="darkGreen01" />
      <Badge lable="Active" color="lightGreen01" />
    </div>
  ),

  boardIcon: <BoardIcon size={24} />,
  usersScale: <UsersScaleIcon size={24} />,
  usersGroup: <UsersGroupIcon size={24} />,
  arrow: <ArrowUpRightIcon size={24} />,
  filter: <FilterIcon size={24} />,

  text: <div style={{ fontWeight: 600 }}>Header text</div>,
};

const contentOptions = {
  default: (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 420 }}>
      <div style={{ fontSize: 18, fontWeight: 600 }}>Большой текст контента</div>
      <div style={{ fontSize: 14, opacity: 0.7 }}>
        Маленький текст контента (описание, пояснение или сабтекст)
      </div>
    </div>
  ),

  short: <div style={{ fontSize: 16 }}>Короткий контент</div>,

  icon: (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <BoardIcon size={24} />
      <span>Контент с иконкой</span>
    </div>
  ),

  image: (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
        style={{ width: '100%', borderRadius: 12 }}
      />
      <div style={{ fontSize: 14, opacity: 0.7 }}>Контент с изображением</div>
    </div>
  ),
};

const footerOptions = {
  none: undefined,

  text: (
    <div style={{ fontSize: 13, opacity: 0.8 }}>Нижний текст карточки</div>
  ),

  badge: <Badge lable="3зе" color="mainPurple" />,

  mixed: (
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
      <div style={{ fontSize: 13, opacity: 0.8 }}>Нижний текст карточки</div>
      <Badge lable="3зе" color="mainPurple" />
    </div>
  ),
};

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
    direction: {
      control: 'radio',
      options: ['vertical', 'horizontal'],
    },

    borderRadius: {
      control: { type: 'number' },
    },

    header: {
      control: 'select',
      options: Object.keys(headerOptions),
      mapping: headerOptions,
    },

    content: {
      control: 'select',
      options: Object.keys(contentOptions),
      mapping: contentOptions,
    },

    footer: {
      control: 'select',
      options: Object.keys(footerOptions),
      mapping: footerOptions,
    },
  },

  args: {
    direction: 'vertical',
    borderRadius: 15,
    header: headerOptions.badges,
    content: contentOptions.default,
    footer: footerOptions.text,
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Playground: Story = {};

export const WithImage: Story = {
  args: {
    content: contentOptions.image,
  },
};

export const Horizontal: Story = {
  args: {
    direction: 'horizontal',
  },
};

export const Skeleton: Story = {
  render: (args) => (
    <CardSkeleton direction={args.direction} borderRadius={args.borderRadius} />
  ),
};

export const WithCustomIcon: Story = {
  args: {
    header: (
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <BoardIcon size={32} color="#6C5CE7" strokeWidth={2.2} />
        <div style={{ fontWeight: 600 }}>Card with custom icon</div>
      </div>
    ),

    content: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <UsersGroupIcon size={24} color="#2D3436" strokeWidth={1.5} />
        <div style={{ fontSize: 14, opacity: 0.7 }}>
          Иконка с кастомным размером и цветом прямо в карточке
        </div>
      </div>
    ),

    footer: (
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <ArrowUpRightIcon size={16} color="#0984E3" />
      </div>
    ),
  },
};