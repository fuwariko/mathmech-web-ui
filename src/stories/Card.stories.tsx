import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import React from 'react';
import { Card } from '../components/card/Card';
import { Badge } from '../components/badge/Badge';
import { Icon } from '../icons/icon';

const meta:  Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onSelect: fn(),
  }
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Node.js курс',
    description: 'Разработка серверов и API',
  },
};

export const WithHeaderFooter: Story = {
  args: {
    header: (
      <>
        <Badge>Frontend</Badge>
        <Badge icon={<Icon name="users" />}>20 мест</Badge>
      </>
    ),
    title: 'HTML Academy',
    description: 'Практика + теория',
    footer: (
      <>
        <span>Онлайн</span>
        <span>Весна</span>
      </>
    ),
  },
};

export const Selectable: Story = {
  render: (args) => {
    const [selected, setSelected] = React.useState(false);

    return (
      <Card
        {...args}
        selected={selected}
        onSelect={() => setSelected(!selected)}
        topRight={<Icon name={selected ? 'check' : 'heart'} />}
      />
    );
  },
};

export const WithCorners: Story = {
  args: {
    title: 'Карточка с углами',
    topRight: <Icon name="heart" />,
    bottomRight: <Badge variant="warning">6 з.е.</Badge>,
  },
};