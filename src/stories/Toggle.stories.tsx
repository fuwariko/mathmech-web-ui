import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toggle } from '../components/toggle/Toggle';
import { useState } from 'react';

const meta:  Meta<typeof Toggle> = {
  title: 'Atoms/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'toggle',
    description: 'Опция',
  },
};

export const GroupToggle = {
  render: () => {
    const options = [
      { id: '1', name: 'speed', description: 'Скорость' },
      { id: '2', name: 'price', description: 'Цена' },
      { id: '3', name: 'quality', description: 'Качество' },
    ];

    return (
      <fieldset role="group" style={{ width: "120px", border: "none"}}>
        {options.map((opt) => (
          <Toggle
            id={opt.id}
            name={opt.name}
            description={opt.description}
          />
        ))}
      </fieldset>
    );
  },
};

export const GroupToggleWithState = {
  render: () => {
    const [selected, setSelected] = useState<String[]>(['1']);

    const handleChange = (id: string) => {
        setSelected((prev) =>
            prev.includes(id)
            ? prev.filter((v) => v !== id)
            : [...prev, id]                
        );
};

    const options = [
      { id: '1', description: 'Скорость' },
      { id: '2',  description: 'Цена' },
      { id: '3', description: 'Качество' },
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
          <Toggle
            id={opt.id}
            name="settings"
            description={opt.description}
            checked={selected.includes(opt.id)}
            onChange={() => handleChange(opt.id)}
          />
        ))}
      </fieldset>
    );
  },
};