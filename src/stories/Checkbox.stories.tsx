import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from '../components/Checkbox/Checkbox';
import { useState } from 'react';

const meta:  Meta<typeof Checkbox> = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: '1',
    name: 'option',
    value: '1',
    description: 'Вариант 1',
  },
};

export const GroupCheckbox = {
  render: () => {
    const options = [
      { id: '1', value: 'blue', description: 'Синий' },
      { id: '2', value: 'green', description: 'Зелёный' },
      { id: '3', value: 'red', description: 'Красный' },
    ];

    return (
      <fieldset role="group" style={{ width: "120px", border: "none" }}>
        {options.map((opt) => (
          <Checkbox
            id={opt.id}
            name="color"
            value={opt.value}
            description={opt.description}
          />
        ))}
      </fieldset>
    );
  },
};

export const GroupCheckboxWithState = {
  render: () => {
    const [selected, setSelected] = useState<String[]>(['blue']);

    const handleChange = (value: string) => {
        setSelected((prev) =>
            prev.includes(value)
            ? prev.filter((v) => v !== value)
            : [...prev, value]                
        );
};

    const options = [
      { id: '1', value: 'blue', description: 'Синий' },
      { id: '2', value: 'green', description: 'Зелёный' },
      { id: '3', value: 'red', description: 'Красный' },
    ];

    return (
      <fieldset role="group" style={{ width: "120px", border: "none" }}>
        <p 
          style={{ 
            marginBottom: '12px', 
            fontFamily: "'Montserrat', sans-serif",
          }}>
          Выбрано:<br/><strong>{selected.map((sel) => `${sel} `)}</strong>
        </p>
        {options.map((opt) => (
          <Checkbox
            id={opt.id}
            name="color"
            value={opt.value}
            description={opt.description}
            checked={selected.includes(opt.value)}
            onChange={() => handleChange(opt.value)}
          />
        ))}
      </fieldset>
    );
  },
};