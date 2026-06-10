import type { Meta, StoryObj } from '@storybook/react-vite';
import { RadioStars } from '../components/radio/RadioStars';
import { useState } from 'react';
import { RadioStarsSkeleton } from '../components/skeletons/ComponentSkeletons';

const meta:  Meta<typeof RadioStars> = {
  title: 'FORMS/RadioStars',
  component: RadioStars,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RadioStars>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rating: 1,
  }
};

export const ExampleWithState: Story = {
  render: () => {
    const [rating, setRating] = useState(0);
    return (
        <RadioStars rating={rating} setRating={setRating}/>
    )
  }
};

export const ExampleWithError: Story = {
  render: () => {
    const [rating, setRating] = useState(0);
    return (
        <RadioStars rating={rating} setRating={setRating} isError/>
    )
  }
};

export const Skeleton: Story = {
  render: () => <RadioStarsSkeleton />,
};
