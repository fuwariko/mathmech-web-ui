
import { Button } from '../components/button/Button';
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Dialog } from '../components/dialog/DialogTest';
import { RadioStars } from '../components/radio/RadioStars';
import { InputText } from '../components/inputText/InputText';


const meta: Meta<typeof Dialog> = {
  title: 'Atoms/DialogTest',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

//  Базовая история
export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.open);
    
    return (
      <>
        <button onClick={() => setIsOpen(true)}>
          Открыть модальное окно
        </button>
        <Dialog
          {...args}
          open={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </>
    );
  },
  args: {
  },
};

export const ReviewForm: Story = {
  render: (args) => {
    const [isOpen, setOpen] = useState(false);
    const [rating, setRating] = useState(0)
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '800px', height: '650px'}}>
        <Button 
          lang='ru'
          color='mainNavy' 
          onClick={() => setOpen(true)}
        >
          Оставить отзыв
        </Button>
        <Dialog title='Заголовище' open={isOpen} onClose={() => setOpen(false)}>
            <RadioStars rating={rating} setRating={setRating}></RadioStars>
            <InputText label='Да ты чо'></InputText>
            <label>
            <input
              type="radio"
              name="ra"
              value="1"
            />
            1
          </label>

          <label>
            <input
              type="radio"
              name="ra"
              value="2"
            />
            2
          </label>

          <label>
            <input
              type="radio"
              name="ra"
              value="3"
            />
            3
          </label>
          <InputText label='Да ты чо'></InputText>
        </Dialog>
      </div>
    );
  },
  args: {
  },
};