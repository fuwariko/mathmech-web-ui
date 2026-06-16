import{n as e}from"./chunk-BneVvdWh.js";import{a as t}from"./iframe-D3lb2UIJ.js";import{r as n}from"./react-BJiLO_QU.js";import{a as r,o as i}from"./blocks-2hjc2tJL.js";import{t as a}from"./mdx-react-shim-CiNtGoyv.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`Быстрый старт`}),`
`,(0,c.jsx)(t.h1,{id:`как-начать`,children:`Как начать`}),`
`,(0,c.jsx)(t.p,{children:`Установи кит в проект и импортируй нужные компоненты из пакета.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npm install mathmech-ui-kit
`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`import {
  Button,
  ThemeProvider,
  Text,
} from 'mathmech-ui-kit';

export const App = () => (
  <ThemeProvider>
    <Text variant="h1">Каталог курсов</Text>
    <Button color="mainNavy">Открыть</Button>
  </ThemeProvider>
);
`})}),`
`,(0,c.jsx)(t.h2,{id:`использование-компонентов`,children:`Использование компонентов`}),`
`,(0,c.jsxs)(t.p,{children:[`Компоненты импортируются из корня пакета. Цвета лучше передавать токенами темы, например `,(0,c.jsx)(t.code,{children:`mainNavy`}),`, `,(0,c.jsx)(t.code,{children:`mainBlue`}),`, `,(0,c.jsx)(t.code,{children:`lightGrey02`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`import {
  Badge,
  Button,
  Header,
  RatingStars,
} from 'mathmech-ui-kit';

export const CourseCard = () => (
  <section>
    <Header
      topLeft="МатМех"
      topRight="Курсы Преподаватели Профиль"
      backgroundColor="mainNavy"
      textColor="white"
    >
      Каталог курсов
    </Header>

    <Badge variant="places" value={20} />
    <RatingStars rating={4.5} size={32} />

    <Button color="mainNavy" borderColor="mainNavy">
      Записаться
    </Button>
  </section>
);
`})}),`
`,(0,c.jsx)(t.h2,{id:`публикация-новой-версии`,children:`Публикация новой версии`}),`
`,(0,c.jsxs)(t.p,{children:[`Перед публикацией нужно обновить версию, собрать пакет и опубликовать его из корня проекта, где лежит `,(0,c.jsx)(t.code,{children:`package.json`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npm version patch
npm run build
npm publish
`})}),`
`,(0,c.jsx)(t.p,{children:`Если это minor или major версия:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npm version minor
npm version major
`})}),`
`,(0,c.jsx)(t.p,{children:`Storybook можно собрать и опубликовать отдельно:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npm run build-storybook
npm run deploy-storybook
`})}),`
`,(0,c.jsx)(t.h2,{id:`добавление-компонента-в-storybook`,children:`Добавление компонента в Storybook`}),`
`,(0,c.jsxs)(t.p,{children:[`Создай файл story рядом с остальными stories: `,(0,c.jsx)(t.code,{children:`src/stories/ComponentName.stories.tsx`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`import type {
  Meta,
  StoryObj,
} from '@storybook/react-vite';

import { Button } from '../components/Button/Button';

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'small',
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['primary', 'secondary', 'danger'],
    },
    size: {
      control: 'radio',
      options: ['small', 'large'],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Large button',
  },
};
`})}),`
`,(0,c.jsx)(t.p,{children:`После добавления story запусти Storybook:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npm run storybook
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Если компонент должен быть доступен пользователям пакета, добавь экспорт в `,(0,c.jsx)(t.code,{children:`src/index.ts`}),`.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),a(),i()}))();export{s as default};