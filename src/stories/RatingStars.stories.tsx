import type { Meta, StoryObj } from '@storybook/react-vite';
import { RatingStars } from '../components/ratingStars/RatingStars';
import { RatingStarsSkeleton } from '../components/skeletons/ComponentSkeletons';

const meta:  Meta<typeof RatingStars> = {
  title: 'FORMS/RatingStars',
  component: RatingStars,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    rating: {
      control: { type: 'number', min: 0, max: 5, step: 0.1 },
    },
    size: {
      control: { type: 'number', min: 1, max: 96, step: 1 },
    },
  },
} satisfies Meta<typeof RatingStars>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rating: 3.5,
  }
};

export const Large: Story = {
  args: {
    rating: 4.25,
    size: 48,
  },
};

export const Skeleton: Story = {
  render: () => <RatingStarsSkeleton />,
};
