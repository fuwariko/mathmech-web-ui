import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '../components/dialog/Dialog';

const meta = {
  title: 'Atoms/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    title: 'Заголовок модального окна',
    children: undefined,
    onClose: () => {},
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

const DemoContent = () => (
  <div style={{ display: 'grid', gap: 16 }}>
    <p>
      Это содержимое модального окна. Фокус должен оставаться внутри, пока окно открыто.
    </p>
    <button type="button">Первичная кнопка</button>
    <button type="button">Вторичная кнопка</button>
  </div>
);

export const Default: Story = {
  args: {
    open: true,
    title: 'option',
    onClose: () => {},
  },
};

export const Open: Story = {
  args: {
    open: true,
    title: 'option',
    onClose: () => {},
    children: <DemoContent />,
  },
};

export const Open2: Story = {
  args: {
    open: true,
    title: 'option',
    onClose: () => {},
  },
  render: (args) => (
    <Modal {...args}>
      <DemoContent />
    </Modal>
  ),
};