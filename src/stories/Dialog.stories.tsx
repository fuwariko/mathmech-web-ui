import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '../components/dialog/Dialog';
import { useState } from 'react';
import { Button } from '../components/button/Button';

const meta = {
  title: 'Atoms/Dialog',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    title: 'Заголовок модального окна',
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

const DemoContent = () => (
  <div style={{ display: 'grid' }}>
    <p style={{ margin: '5px' }}>
      Управлять открытием и закрытием модального окна можно с помощью состояния:
    </p>
    <p style={{ margin: '5px' }}>
      {'const [open, setOpen] = useState(false);'}
      </p>
    <p style={{ margin: '5px' }}>
      В открывающей кнопке:
    </p>
    <p style={{ margin: '5px' }}>
      {'onClick={() => setOpen(true)}'}
    </p>
    <p style={{ margin: '5px' }}>
      В компоненте Dialog:
    </p>
    <p style={{ margin: '5px' }}>
      {'open={open} onClose={() => setOpen(false)}'}
    </p>
    <fieldset style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 0', border: 'none'}}>
      <Button aria-label='А еще оно...' color='mainNavy'>А еще оно...</Button>
      <Button aria-label='...удерживает фокус' color='mainNavy'>...удерживает фокус</Button>
    </fieldset>
    
  </div>
);

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '800px', height: '400px'}}>
        <Button aria-label='Открыть модальное окно' color='mainNavy' onClick={() => setOpen(true)}>Открыть модальное окно</Button>
        <Modal {...args} open={open} onClose={() => setOpen(false)} />
      </div>
    );
  },
  args: {
    title: 'Модальное окно',
    children: <DemoContent />,
  },
};

export const WithOpenButton: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <div style={{ display: 'grid', gap: 16, alignItems: 'center' }}>
        <button type="button" onClick={() => setOpen(true)}>
          Открыть модальное окно
        </button>
        <Modal {...args} open={open} onClose={() => setOpen(false)} />
      </div>
    );
  },
  args: {
    title: 'Модальное окно с кнопкой открытия',
    children: <DemoContent />,
  },
};


export const WithOpenButtonAndConfirm: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    const handleConfirm = () => {
      alert('Действие подтверждено!');
      setOpen(false);
    };

    return (
      <div style={{ display: 'grid', gap: 16, alignItems: 'center' }}>
        <button type="button" onClick={() => setOpen(true)}>
          Удалить элемент
        </button>
        <Modal {...args} open={open} onClose={() => setOpen(false)}>
          <div style={{ display: 'grid', gap: 16 }}>
            <p>Вы уверены, что хотите удалить этот элемент? Это действие нельзя отменить.</p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
              <button type="button" onClick={() => setOpen(false)}>
                Отмена
              </button>
              <button type="button" onClick={handleConfirm}>
                Удалить
              </button>
            </div>
          </div>
        </Modal>
      </div>
    );
  },
  args: {
    title: 'Подтверждение действия',
  },
};


export const WithOpenButtonForm: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      alert('Форма отправлена!');
      setOpen(false);
    };

    return (
      <div style={{ display: 'grid', gap: 16, alignItems: 'center' }}>
        <button type="button" onClick={() => setOpen(true)}>
          Добавить новый элемент
        </button>
        <Modal {...args} open={open} onClose={() => setOpen(false)}>
          <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 16 }}>
            <div style={{ display: 'grid', gap: 8 }}>
              <label htmlFor="name">Имя</label>
              <input type="text" id="name" name="name" placeholder="Введите имя" />
            </div>
            <div style={{ display: 'grid', gap: 8 }}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="example@mail.com" />
            </div>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
              <button type="button" onClick={() => setOpen(false)}>
                Отмена
              </button>
              <button type="submit">
                Сохранить
              </button>
            </div>
          </form>
        </Modal>
      </div>
    );
  },
  args: {
    title: 'Новый элемент',
  },
};