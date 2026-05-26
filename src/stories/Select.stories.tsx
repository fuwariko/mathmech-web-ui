import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select } from '../components/select/Select';
import { useState } from 'react';

const meta:  Meta<typeof Select> = {
  title: 'Atoms/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { value: 'ekb', label: 'Екатеринбург' },
  { value: 'msk', label: 'Москва' },
  { value: 'spb', label: 'Санкт-Петербург' },
  { value: 'nnv', label: 'Нижний Новгород' },
];

export const Default: Story = {
  args: {
    id: 'city',
    name: 'city',
    label: 'Город',
    placeholder: 'Выберите город',
    options,
    onChange: (value) => console.log(value),
  },
};

export const UncontrolledWithDefaultValue: Story = {
  args: {
    id: 'city-default',
    name: 'city-default',
    label: 'Город',
    placeholder: 'Выберите город',
    options,
    defaultValue: 'msk',
    onChange: (value) => console.log(value),
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState('spb');
    return (
      <form style={{ width: "400px"}}>
      <Select
        {...args}
        value={value}
        onChange={(nextValue, option) => {
          setValue(nextValue);
          args.onChange?.(nextValue, option);
        }}
      />
      </form>
    );
  },
  args: {
    id: 'city-controlled',
    name: 'city-controlled',
    label: 'Город',
    placeholder: 'Выберите город',
    options,
  },
};

export const ControlledEmpty: Story = {
  render: (args) => {
    const [value, setValue] = useState('');

    return (
      <Select
        {...args}
        value={value}
        onChange={(nextValue, option) => {
          setValue(nextValue);
          args.onChange?.(nextValue, option);
        }}
      />
    );
  },
  args: {
    id: 'city-empty',
    name: 'city-empty',
    label: 'Город',
    placeholder: 'Выберите город',
    options,
  },
};

export const WithError: Story = {
  args: {
    id: 'city-error',
    name: 'city-error',
    label: 'Город',
    placeholder: 'Выберите город',
    options,
    isError: true,
    errorMessage: 'Поле обязательно для заполнения',
    onChange: (value) => console.log(value),
  },
};

export const Disabled: Story = {
  args: {
    id: 'city-disabled',
    name: 'city-disabled',
    label: 'Город',
    placeholder: 'Выберите город',
    options,
    disabled: true,
    defaultValue: 'ekb',
    onChange: (value) => console.log(value),
  },
};

export const Required: Story = {
  args: {
    id: 'city-required',
    name: 'city-required',
    label: 'Город',
    placeholder: 'Выберите город',
    options,
    required: true,
    onChange: (value) => console.log(value),
  },
};