import { Button } from '../components/button/Button';
import { RadioStars } from '../components/radio/RadioStars';
import { InputText } from '../components/inputText/InputText';
import { Textarea } from '../components/textarea/Textarea';
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Dialog } from '../components/dialog/Dialog';
import { DialogSkeleton, TextSkeleton } from '../components/skeletons/ComponentSkeletons';

const dialogContentOptions = {
  text: <p>Привет, мир!</p>,
  formIntro: <TextSkeleton lines={3} />,
  skeleton: <DialogSkeleton />,
};

const meta: Meta<typeof Dialog> = {
  title: 'UI/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'select',
      options: Object.keys(dialogContentOptions),
      mapping: dialogContentOptions,
    },
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.open);
    
    return (
      <>
        <Button 
          lang='ru'
          color='mainNavy' 
          onClick={() => setIsOpen(true)}
        >
          Открыть модальное окно
        </Button>
        <Dialog
          {...args}
          open={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </>
    );
  },
  args: {
    id: '2',
    open: false,
    title: 'Приветственное окно',
    children: dialogContentOptions.text,
    isMobile: false,
  },
};

export const ReviewForm: Story = {
  render: (args) => {
    const [isOpen, setOpen] = useState(false);
    const [rating, setRating] = useState(0)
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Button 
          lang='ru'
          color='mainNavy' 
          onClick={() => setOpen(true)}
        >
          Оставить отзыв
        </Button>
        <Dialog {...args} id='1' open={isOpen} onClose={() => setOpen(false)}> 
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
        </Dialog>
      </div>
    );
  },
  args: {
    title: 'Форма обратной связи',
  },
};

export const MobileReviewForm: Story = {
  render: (args) => {
    const [isOpen, setOpen] = useState(false);
    const [rating, setRating] = useState(0)
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Button 
          lang='ru'
          color='mainNavy' 
          onClick={() => setOpen(true)}
        >
          Оставить отзыв
        </Button>
        <Dialog {...args} id='1' open={isOpen} onClose={() => setOpen(false)} isMobile> 
          <form action="" style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
            <RadioStars rating={rating} setRating={setRating} isMobile></RadioStars>
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
        </Dialog>
      </div>
    );
  },
  args: {
    title: 'Форма обратной связи',
  },
};

export const Skeleton: Story = {
  render: () => <DialogSkeleton />,
};
