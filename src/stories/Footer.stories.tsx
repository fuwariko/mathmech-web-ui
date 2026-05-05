import type { Meta, StoryObj } from '@storybook/react-vite';
import { Footer } from '../components/footer/Footer';

const meta = {
  title: 'Layout/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    left: <span>© 2026 MyApp</span>,
    right: <span>Privacy · Terms</span>,
  },
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  args: {
    left: <span>© MyApp</span>,
  },
};