import type { Meta, StoryObj } from '@storybook/react-vite';

import { Badge } from '../components/badge/Badge';
import { Card } from '../components/card/Card';
import { BoardIcon } from '../icons/BoardIcon';

const headerOptions = {
  none: undefined,

  badges: (
    <div
      style={{
        display: 'flex',
        gap: 4,
        flexWrap: 'wrap',
      }}
    >
      <Badge
        lable="New"
        color="darkBlue01"
        borderColor="darkGreen01"
      />

      <Badge
        lable="Active"
        color="lightGreen01"
      />
    </div>
  ),

  icon: <BoardIcon />,

  text: (
    <div
      style={{
        fontWeight: 600,
      }}
    >
      Header text
    </div>
  ),
};

const contentOptions = {
  default: (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        maxWidth: 420,
      }}
    >
      <div
        style={{
          fontSize: 18,
          fontWeight: 600,
        }}
      >
        Большой текст контента
      </div>

      <div
        style={{
          fontSize: 14,
          opacity: 0.7,
        }}
      >
        Маленький текст контента
        (описание, пояснение или
        сабтекст)
      </div>
    </div>
  ),

  short: (
    <div
      style={{
        fontSize: 16,
      }}
    >
      Короткий контент
    </div>
  ),

  icon: (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
      }}
    >
      <BoardIcon />

      <span>
        Контент с иконкой
      </span>
    </div>
  ),
};

const footerOptions = {
  none: undefined,

  text: (
    <div
      style={{
        fontSize: 13,
        opacity: 0.8,
      }}
    >
      Нижний текст карточки
      (footer / metadata)
    </div>
  ),

  badge: (
    <Badge
      lable="3зе"
      color="mainPurple"
    />
  ),

  mixed: (
    <div
      style={{
        display: 'flex',
        justifyContent:
          'space-between',
        alignItems: 'center',
        width: '100%',
        gap: 16,
      }}
    >
      <div
        style={{
          fontSize: 13,
          opacity: 0.8,
        }}
      >
        Нижний текст карточки
      </div>

      <Badge
        lable="3зе"
        color="mainPurple"
      />
    </div>
  ),
};

const meta: Meta<typeof Card> = {
  title: 'UI/Card',

  component: Card,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    direction: {
      control: 'radio',

      options: [
        'vertical',
        'horizontal',
      ],
    },

    header: {
      control: 'select',

      options: Object.keys(
        headerOptions,
      ),

      mapping: headerOptions,
    },

    content: {
      control: 'select',

      options: Object.keys(
        contentOptions,
      ),

      mapping: contentOptions,
    },

    footer: {
      control: 'select',

      options: Object.keys(
        footerOptions,
      ),

      mapping: footerOptions,
    },
  },

  args: {
    direction: 'vertical',

    header: headerOptions.badges,

    content:
      contentOptions.default,

    footer: footerOptions.text,
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Playground: Story = {};

export const ComplexCard: Story = {
  args: {
    header: (
      <div
        style={{
          display: 'flex',
          justifyContent:
            'space-between',
          alignItems:
            'flex-start',
          gap: 16,
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: 4,
            flexWrap: 'wrap',
          }}
        >
          <Badge
            lable="New"
            color="darkBlue01"
            borderColor="darkGreen01"
          />

          <Badge
            lable="Active"
            color="lightGreen01"
          />
        </div>

        <BoardIcon />
      </div>
    ),

    footer: (
      <div
        style={{
          display: 'flex',
          justifyContent:
            'space-between',
          alignItems: 'center',
          width: '100%',
          gap: 16,
        }}
      >
        <div
          style={{
            fontSize: 13,
            opacity: 0.8,
          }}
        >
          Нижний текст карточки
        </div>

        <Badge
          lable="3 зе"
          color="mainPurple"
        />
      </div>
    ),
  },
};

export const Horizontal: Story = {
  args: {
    direction: 'horizontal',
  },
};