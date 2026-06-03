import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '../components/dialog/Dialog';
import { useState } from 'react';
import { Button } from '../components/button/Button';
import { RadioStars } from '../components/radio/RadioStars';
import { InputText } from '../components/inputText/InputText';
import { Textarea } from '../components/textarea/Textarea';

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
    <p lang="ru" style={{ margin: '5px' }}>
      Управлять открытием и закрытием модального окна можно с помощью состояния:
    </p>
    <p style={{ margin: '5px' }}>
      {'const [open, setOpen] = useState(false);'}
      </p>
    <p lang="ru" style={{ margin: '5px' }}>
      В открывающей кнопке:
    </p>
    <p style={{ margin: '5px' }}>
      {'onClick={() => setOpen(true)}'}
    </p>
    <p lang="ru" style={{ margin: '5px' }}>
      В компоненте Dialog:
    </p>
    <p style={{ margin: '5px' }}>
      {'open={open} onClose={() => setOpen(false)}'}
    </p>
    <fieldset style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 0 0 0', margin: '0', border: 'none'}}>
      <Button lang='ru' color='mainNavy'>А еще оно...</Button>
      <Button lang='ru' color='mainNavy'>...удерживает фокус</Button>
    </fieldset>
    
  </div>
);

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '800px', height: '450px'}}>
        <Button 
          lang='ru'
          color='mainNavy' 
          onClick={() => setOpen(true)}
        >
          Открыть модальное окно
        </Button>
        <Modal {...args} open={open} onClose={() => setOpen(false)} />
      </div>
    );
  },
  args: {
    title: 'Инструкция',
    children: <DemoContent />,
  },
};

export const ReviewForm: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    const [rating, setRating] = useState(1)
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '800px', height: '650px'}}>
        <Button 
          lang='ru'
          color='mainNavy' 
          onClick={() => setOpen(true)}
        >
          Оставить отзыв
        </Button>
        <Modal {...args} open={open} onClose={() => setOpen(false)}> 
          <form action="" style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
            <RadioStars rating={rating} setRating={setRating}></RadioStars>
            <InputText id={'1'} name='review' type='text' placeholder={'Аноним'} label={'Имя'} />
            <InputText id={'2'} name='review' type='text' placeholder={'@Student'} label={'Телеграм'} />
            <Textarea id={"3"} name="review" placeholder={"Чем бы вы хотели поделиться?"} style={{height: '125px', resize: 'none'}}/>
            <div style={{display: 'flex', justifyContent: 'flex-end', gap: '15px'}}>
              <Button 
                lang='ru'
                color='lightGrey02' 
                textColor='darkGrey01'
              >
                Отмена
              </Button>
              <Button 
                lang='ru'
                color='mainNavy' 
              >
                Отправить
              </Button>
            </div>
          </form>
        </Modal>
      </div>
    );
  },
  args: {
    title: 'Форма обратной связи',
  },
};