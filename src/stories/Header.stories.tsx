import { css } from '@emotion/css';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ArrowUpRightIcon, BoardIcon } from '../Icons/Icons';
import { Button } from '../components/button/Button';
import { Badge } from '../components/Badge/Badge';
import { Header } from '../components/Header/Header';
import { colorTokenNames } from '../ThemeContext';
import { BadgeSkeleton, TextSkeleton } from '../components/Skeletons/ComponentSkeletons';



const slotOptions = {
  none: undefined,
  text: 'МатМех',
  nav: <nav style={{ display: 'flex', gap: 24, fontSize: 18 }}>Курсы Преподаватели Профиль</nav>,
  icon: <BoardIcon size={24} />,
  button: <Button color="mainBlue">Войти</Button>,
  badge: <Badge variant="online" />,
  skeleton: <BadgeSkeleton />,
};

const childrenOptions = {
  none: undefined,
  title: <h1 style={{ margin: 0, color: '#1e4391' }}>Каталог курсов</h1>,
  titleWithLink: (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <h1 style={{ margin: 0, fontSize: 40, fontWeight: 400 }}>Каталог курсов</h1>
      <a href="/favorites" style={{ display: 'inline-flex', alignItems: 'center', gap: 4, color: 'inherit', textDecoration: 'none', fontSize: 20 }}>
        Избранные <ArrowUpRightIcon size={16} />
      </a>
    </div>
  ),
  skeleton: <TextSkeleton lines={2} />,
};

const meta: Meta<typeof Header> = {
  title: 'Layout/Header',
  component: Header,

  parameters: {
    layout: 'fullscreen',
  },

  tags: ['autodocs'],

  args: {
    title: 'Каталог курсов',
    backgroundColor: 'mainBlue',
    textColor: 'lightGrey02',
    sticky: false,
    topLeft: 'МатМех',
    topRight: 'Курсы   Преподаватели   Профиль',
  },

  argTypes: {
    topLeft: {
      control: 'select',
      options: Object.keys(slotOptions),
      mapping: slotOptions,
    },

    topRight: {
      control: 'select',
      options: Object.keys(slotOptions),
      mapping: slotOptions,
    },

    children: {
      control: 'select',
      options: Object.keys(childrenOptions),
      mapping: childrenOptions,
    },

    backgroundColor: {
      control: 'select',
      options: [
        undefined,
        ...colorTokenNames,
      ],
    },

    textColor: {
      control: 'select',
      options: [
        undefined,
        ...colorTokenNames,
      ],
    },

    filled: {
      control: 'boolean',
    },

    sticky: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Playground: Story = {
  args: {
    title: undefined,
    topLeft: slotOptions.text,
    topRight: slotOptions.nav,
    children: childrenOptions.titleWithLink,
  },
};

export const Catalog: Story = {
  render: () => (
    <Header
      topLeft={<span className={brandStyles}>МатМех</span>}
      topRight={<nav className={navStyles}>Курсы Преподаватели Профиль</nav>}
      backgroundColor="mainBlue"
      contentMaxWidth={980}
      contentPaddingX={32}
    >
      <div className={catalogTitleStyles}>
        <h1>Каталог курсов</h1>
        <a href="/favorites">
          Избранные <ArrowUpRightIcon size={16} />
        </a>
      </div>
    </Header>
  ),
};

const brandStyles = css`
  font-size: 40px;
  line-height: 1;
`;


const navStyles = css`
  display: flex;
  gap: 24px;
  font-size: 18px;
`;

const catalogTitleStyles = css`
  display: flex;
  flex-direction: column;
  gap: 12px;

  h1 {
    margin: 0;
    font-size: 40px;
    font-weight: 400;
  }

  a {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    color: inherit;
    text-decoration: none;
    font-size: 20px;
  }
`;
