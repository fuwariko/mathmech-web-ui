import type {
  Meta,
  StoryObj,
} from '@storybook/react-vite';

import { Accordion } from '../components/accordion/accordion';
import { AccordionSkeleton } from '../components/skeletons/ComponentSkeletons';
import { UsersIcon } from '../icons/Icons';


type TStoryIcon =
  | 'plusMinus'
  | 'chevron'
  | 'arrow'
  | 'chevronUpDown'
  | 'dots'
  | 'dash'
  | 'none'
  | 'custom';

const meta: Meta<typeof Accordion> = {
  title: 'UI/Accordion',

  component: Accordion,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  render: (args) => {
    const { icon, ...rest } = args;

    return (
      <Accordion
        {...rest}
        icon={
          icon === 'custom'
            ? <UsersIcon />
            : icon
        }
      />
    );
  },

  args: {
    activeColor: 'mainBlue',

    multiple: false,

    icon: 'plusMinus',

    iconPosition: 'right',

    items: [
      {
        id: '1',
        title: 'Что такое Accordion?',
        content: (
          <div>
            Accordion используется
            для скрытия контента.
          </div>
        ),
      },
      {
        id: '2',
        title: 'Как это работает?',
        content: (
          <div>
            По нажатию открывается
            нужный блок.
          </div>
        ),
      },
      {
        id: '3',
        title:
          'Можно ли кастомизировать?',
        content: (
          <div>
            Да, стили полностью
            кастомизируются.
          </div>
        ),
      },
    ],
  },

  argTypes: {
    multiple: {
      control: 'boolean',
    },

    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
    },

    icon: {
      control: 'select',
      options: [
        'plusMinus',
        'chevron',
        'arrow',
        'chevronUpDown',
        'dots',
        'dash',
        'none',
        'custom',
      ] satisfies TStoryIcon[],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Multiple: Story = {
  args: {
    multiple: true,
  },
};

export const Skeleton: Story = {
  render: () => <AccordionSkeleton />,
};
