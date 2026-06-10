import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toggle } from '../components/toggle/Toggle';
import { useState } from 'react';
import { ToggleSkeleton } from '../components/skeletons/ComponentSkeletons';

const meta:  Meta<typeof Toggle> = {
  title: 'FILTERS/Toggle',
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
    label: 'Опция',
  },
};

export const SimpleToggle = {
  render: () => {
    return (
      <Toggle
        id="1"
        name="name"
      />
    );
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
            label={opt.description}
          />
        ))}
      </fieldset>
    );
  },
};

export const GroupToggleWithState = {
  render: () => {
    const [selected, setSelected] = useState<string[]>([]);

    const handleChange = (value: string) => {
        setSelected((prev) =>
            prev.includes(value)
            ? prev.filter((v) => v !== value)
            : [...prev, value]                
        );
    };

    const options = [
      { id: '1', value: 'Speed', label: 'Скорость' },
      { id: '2', value: 'Price',  label: 'Цена' },
      { id: '3', value: 'Quality', label: 'Качество' },
    ];

    return (
      <fieldset role="group" style={{ width: "120px", border: "none" }}>
        <p 
          style={{ 
            marginBottom: '12px', 
          }}>
          Выбрано:<br/><strong>{selected.map((sel) => `${sel} `)}</strong>
        </p>
        {options.map((opt) => (
          <Toggle
            id={opt.id}
            value={opt.value}
            name="settings"
            label={opt.label}
            checked={selected.includes(opt.value)}
            onChange={() => handleChange(opt.value)}
          />
        ))}
      </fieldset>
    );
  },
};

export const Skeleton: Story = {
  render: () => <ToggleSkeleton />,
};
