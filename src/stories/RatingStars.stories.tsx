import type { Meta, StoryObj } from '@storybook/react-vite';
import { RatingStars } from '../components/ratingStars/RatingStars';

const meta:  Meta<typeof RatingStars> = {
  title: 'FORMS/RatingStars',
  component: RatingStars,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RatingStars>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rating: 1,
  }
};
