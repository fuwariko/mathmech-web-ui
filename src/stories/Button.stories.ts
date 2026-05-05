import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
 
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
/** Базовая кнопка */
export const Primary: Story = {
  args: {
    label: 'Сбросить фильтры',
    variant: 'primary',
    size: 'large',
  },
};

/** Вторичная (серая) */
export const Secondary: Story = {
  args: {
    label: 'Сбросить фильтры',
    variant: 'secondary',
    size: 'large',
  },
};

/** Маленькая */
export const Small: Story = {
  args: {
    label: 'Фильтры',
    size: 'small',
    variant: 'primary',
  },
};

/** Большая */
export const Large: Story = {
  args: {
    label: 'Избранные курсы',
    size: 'large',
    variant: 'primary',
  },
};

/** С иконкой слева */
export const WithIcon: Story = {
  args: {
    label: 'Фильтры',
    size: 'small',
    variant: 'primary',
  },
};

/** С иконкой (как в макете “избранное”) */
export const WithIconLarge: Story = {
  args: {
    label: 'Избранные курсы',
    size: 'large',
    variant: 'primary',
  },
};

/** Только иконка (grid) */
export const IconOnlyGrid: Story = {
  args: {
    size: 'small',
    variant: 'primary',
  },
};

/** Disabled */
export const Disabled: Story = {
  args: {
    label: 'Сбросить фильтры',
    size: 'large',
    variant: 'secondary',
    disabled: true,
  },
};