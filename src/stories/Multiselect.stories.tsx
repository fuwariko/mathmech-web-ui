import type { Meta, StoryObj } from '@storybook/react-vite';
import { MultiSelect } from '../components/select/Multiselect';
import { useState } from 'react';
import { MultiselectSkeleton } from '../components/skeletons/ComponentSkeletons';

const options = [
  { value: 'react', label: 'React' },
  { value: 'ts', label: 'TypeScript' },
  { value: 'storybook', label: 'Storybook' },
  { value: 'a11y', label: 'Accessibility' },
  { value: 'css', label: 'CSS' },
];

const meta = {
  title: 'FILTERS/MultiSelect',
  component: MultiSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    id: 'skills',
    name: 'skills',
    label: 'Навыки',
    options,
  },
  argTypes: {
    onChange: { action: 'change' },
  },
} satisfies Meta<typeof MultiSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
};

export const Preselected: Story = {
  args: {
    defaultValue: ['react', 'storybook'],
    name: 'skills2',
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: ['react', 'ts'],
    disabled: true,
    name: 'skills3',
  },
};

export const ErrorState: Story = {
  args: {
    defaultValue: ['react'],
    isError: true,
    errorMessage: 'Нужно выбрать минимум два навыка',
    name: 'skills4',
  },
};

export const Interactive: Story = {
  render: (args) => {
    const [value, setValue] = useState<string[]>(['react', 'storybook']);

    return (
      <MultiSelect
        {...args}
        value={value}
        onChange={(nextValue, selectedOptions) => {
          setValue(nextValue);
          args.onChange?.(nextValue, selectedOptions);
        }}
      />
    );
  },
  args: {
    label: 'Интерактивный мультиселект',
    placeholder: 'Выбери один или более навыков',
    name: 'skills5',
  },
};

export const AddAndRemoveDemo: Story = {
  render: (args) => {
    const [value, setValue] = useState<string[]>(['react', 'ts']);

    return (
      <div style={{ display: 'grid', gap: 16, width: 240 }}>
        <MultiSelect
          {...args}
          value={value}
          onChange={(nextValue, selectedOptions) => {
            setValue(nextValue);
            args.onChange?.(nextValue, selectedOptions);
          }}
        />

        <div style={{ fontFamily: 'sans-serif', fontSize: 14, lineHeight: 1.5 }}>
          <div><strong>Selected values:</strong> {value.length ? value.join(', ') : 'none'}</div>
          <div>
            <strong>How to test:</strong> open the dropdown, click an option to add it,
            click it again to remove it, or remove tags directly in the control.
          </div>
        </div>
      </div>
    );
  },
  args: {
    label: 'Add and remove demo',
    placeholder: 'Choose technologies',
    name: 'skills6',
  },
};

export const Skeleton: Story = {
  render: () => (
    <div style={{ width: 256 }}>
      <MultiselectSkeleton />
    </div>
  ),
};
