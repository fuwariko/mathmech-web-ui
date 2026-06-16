import type { Meta, StoryObj } from '@storybook/react-vite';
import { Footer } from '../components/footer/Footer';
import { Badge } from '../components/Badge/Badge';
import { LinkSkeleton } from '../components/Skeletons/ComponentSkeletons';

const sideOptions = {
  none: undefined,
  copyright: <span>© 2026 MyApp</span>,
  links: <span>Privacy · Terms</span>,
  badge: <Badge variant="online" size="small" />,
  skeleton: <LinkSkeleton />,
};

const meta = {
  title: 'Layout/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    left: {
      control: 'select',
      options: Object.keys(sideOptions),
      mapping: sideOptions,
    },
    right: {
      control: 'select',
      options: Object.keys(sideOptions),
      mapping: sideOptions,
    },
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    left: sideOptions.copyright,
    right: sideOptions.links,
  },
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  args: {
    left: sideOptions.copyright,
  },
};
