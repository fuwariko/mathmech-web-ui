import { css } from '@emotion/css';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ArrowUpRightIcon, BoardIcon } from '../Icons/Icons';
import { Button } from '../components/button/Button';
import { Badge } from '../components/Badge/Badge';
import { HeaderSkeleton } from '../components/Skeletons/HeaderSkeleton';
import { BadgeSkeleton, TextSkeleton } from '../components/skeletons/ComponentSkeletons';
import { Header } from '../components/Header/Header';



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
  title: 'UI/Header',
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
        'darkNavy01',
        'darkNavy02',
        'mainNavy',
        'lightNavy01',
        'lightBlue01',
        'mainBlue',
      ],
    },

    textColor: {
      control: 'select',
      options: ['lightGrey02', 'darkGrey01', 'mainNavy'],
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

export const CoursePage: Story = {
  render: () => (
    <Header
      topLeft={<span className={brandStyles}>МатМех</span>}
      topRight={<nav className={navStyles}>Курсы Преподаватели Профиль</nav>}
      backgroundColor="mainBlue"
      contentMaxWidth={900}
      contentPaddingX={40}
    >
      <div className={courseHeroStyles}>
        <div className={badgeRowsStyles}>
          <Badge variant="offline" />
          <Badge variant="withTest" />
          <Badge variant="places" value={20} />
          <Badge variant="subject" value="Программирование" />
        </div>

        <div className={courseMainStyles}>
          <div>
            <h1>Теория множеств</h1>
            <p>Хлопин Д. В.  КМА</p>
            <p>Для ФИИТ-3, ФИИТ-4</p>
          </div>

          <button className={favoriteButtonStyles} type="button" aria-label="Добавить в избранное">
            ♡
          </button>
        </div>
      </div>
    </Header>
  ),
};

export const WithoutFill: Story = {
  render: () => (
    <Header
      filled={false}
      textColor="mainNavy"
      contentMaxWidth={900}
      topLeft={<span className={brandDarkStyles}>МатМех</span>}
      topRight={
        <Button color="mainBlue">
          Войти
        </Button>
      }
    >
      <h1 className={plainTitleStyles}>Страница без заливки</h1>
    </Header>
  ),
};

export const Skeleton: Story = {
  render: () => <HeaderSkeleton />,
};

const brandStyles = css`
  font-size: 40px;
  line-height: 1;
`;

const brandDarkStyles = css`
  font-size: 40px;
  line-height: 1;
  color: #1e4391;
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

const courseHeroStyles = css`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
`;

const badgeRowsStyles = css`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const courseMainStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  width: 100%;

  h1 {
    margin: 0 0 8px;
    font-size: 44px;
    font-weight: 400;
  }

  p {
    margin: 0 0 16px;
    font-size: 24px;
  }
`;

const favoriteButtonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  border: 0;
  background: transparent;
  color: #ffffff;
  font-size: 64px;
  line-height: 1;
  cursor: pointer;
`;

const plainTitleStyles = css`
  margin: 0;
  color: #1e4391;
`;
