import type { Meta, StoryObj } from '@storybook/react-vite';
import { InputText } from '../components/inputText/InputText';
import { useState } from 'react';

const meta:  Meta<typeof InputText> = {
  title: 'Atoms/InputText',
  component: InputText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'review',
  }
};
