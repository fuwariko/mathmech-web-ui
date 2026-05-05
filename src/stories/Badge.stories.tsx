import type { Meta, StoryObj } from '@storybook/react-vite';

import { Badge } from '../components/badge/Badge';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    lable: 'Осень',
    color: 'default',
    size: 'small',
  },
};

export const Success: Story = {
  args: {
    lable: 'Весна',
    color: 'success',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    lable: 'Программирование',
    size: 'large',
    color: 'danger', // если есть в теме, иначе замени на существующий
  },
};

export const Small: Story = {
  args: {
    lable: 'Тег',
    size: 'small',
    color: 'warning',
  },
};