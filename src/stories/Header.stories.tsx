import type { Meta, StoryObj } from '@storybook/react-vite';
import { Header } from '../components/header/Header';

const meta = {
  title: 'Layout/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    left: <span>Logo</span>,
    center: <span>Навигация</span>,
    right: <span>Профиль</span>,
  },
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  args: {
    left: <span>Logo</span>,
    right: <span>☰</span>,
  },
};