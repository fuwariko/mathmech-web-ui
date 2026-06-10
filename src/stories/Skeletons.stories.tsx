import { css } from '@emotion/css';
import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  AccordionSkeleton,
  BadgeSkeleton,
  ButtonSkeleton,
  CardSkeleton,
  CheckboxSkeleton,
  DialogSkeleton,
  FooterSkeleton,
  HeaderSkeleton,
  InputTextSkeleton,
  LinkSkeleton,
  MultiselectSkeleton,
  RadioSkeleton,
  RadioStarsSkeleton,
  RatingStarsSkeleton,
  SelectSkeleton,
  TabsSkeleton,
  TextareaSkeleton,
  TextSkeleton,
  ToggleSkeleton,
} from '../index';

const meta = {
  title: 'UI/Skeletons',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const All: Story = {
  render: () => (
    <div className={pageStyles}>
      <HeaderSkeleton />

      <main className={gridStyles}>
        <section className={sectionStyles}>
          <h2>Controls</h2>
          <BadgeSkeleton />
          <ButtonSkeleton />
          <LinkSkeleton />
          <InputTextSkeleton />
          <TextareaSkeleton />
          <SelectSkeleton />
          <MultiselectSkeleton />
          <CheckboxSkeleton />
          <RadioSkeleton />
          <ToggleSkeleton />
        </section>

        <section className={sectionStyles}>
          <h2>Content</h2>
          <TextSkeleton />
          <RatingStarsSkeleton />
          <RadioStarsSkeleton />
          <TabsSkeleton />
          <AccordionSkeleton />
        </section>

        <section className={sectionStyles}>
          <h2>Blocks</h2>
          <CardSkeleton />
          <DialogSkeleton />
          <FooterSkeleton />
        </section>
      </main>
    </div>
  ),
};

const pageStyles = css`
  display: flex;
  flex-direction: column;
  gap: 32px;
  min-height: 100vh;
  background: #ffffff;
`;

const gridStyles = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
  width: min(1100px, 100%);
  margin: 0 auto;
  padding: 0 32px 48px;
  box-sizing: border-box;
`;

const sectionStyles = css`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h2 {
    margin: 0;
    font-size: 20px;
    font-weight: 600;
    color: #1e4391;
  }
`;
