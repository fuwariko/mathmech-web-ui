import type { Meta, StoryObj } from '@storybook/react-vite';
import { Radio } from '../components/radio/Radio';
import { useState } from 'react';

const meta:  Meta<typeof Radio> = {
  title: 'Atoms/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: '1',
    name: 'option',
    value: '1',
    label: 'Вариант 1',
  },
};

export const SimpleRadio = {
  render: () => {
    return (
    <Radio
      name="color"
      value="Синий"
    />
    );
  },
};

export const GroupRadio = {
  render: () => {
    const options = [
      { id: '1', value: 'blue', description: 'Синий' },
      { id: '2', value: 'green', description: 'Зелёный' },
      { id: '3', value: 'red', description: 'Красный' },
    ];

    return (
      <fieldset role="radiogroup" style={{ width: "120px", border: "none"}}>
        {options.map((opt) => (
          <Radio
            id={opt.id}
            name="color"
            value={opt.value}
            label={opt.description}
          />
        ))}
      </fieldset>
    );
  },
};

export const GroupRadioWithState = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState<string>('blue');

    const options = [
      { id: '1', value: 'blue', description: 'Синий' },
      { id: '2', value: 'green', description: 'Зелёный' },
      { id: '3', value: 'red', description: 'Красный' },
    ];

    return (
      <fieldset role="radiogroup" style={{ width: "120px", border: "none" }}>
        <p 
          style={{ 
            marginBottom: '12px', 
            fontFamily: "'Montserrat', sans-serif",
          }}>
          Выбрано: <strong>{selectedValue}</strong>
        </p>
        {options.map((opt) => (
          <Radio
            id={opt.id}
            name="colors"
            value={opt.value}
            label={opt.description}
            checked={opt.value === selectedValue}
            onChange={() => setSelectedValue(opt.value)}
          />
        ))}
      </fieldset>
    );
  },
};