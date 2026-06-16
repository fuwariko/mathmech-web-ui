import { css } from '@emotion/css';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from '../components/Badge/Badge';
import { BadgeSkeleton } from '../components/Skeletons/ComponentSkeletons';


const meta = {
  title: 'UI/Badge',
  component: Badge,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  args: {
    variant: 'online',
    size: 'medium',
    value: 20,
  },

  argTypes: {
    variant: {
      control: 'select',
      options: [
        'online',
        'offline',
        'withTest',
        'places',
        'retake',
        'subject',
      ],
    },

    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },

    value: {
      control: 'text',
    },

    color: {
      control: 'select',
      options: [
        undefined,
        'mainGreen',
        'darkGreen01',
        'lightOrange01',
        'lightNavy01',
        'mainGrey',
        'lightGrey02',
      ],
    },

    borderColor: {
      control: 'select',
      options: [
        undefined,
        'darkGreen01',
        'mainNavy',
        'darkGrey01',
        'mainGrey',
      ],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Presets: Story = {
  render: () => (
    <div className={presetStackStyles}>
      <Badge variant="online" size="large" />
      <Badge variant="offline" size="large" />
      <Badge variant="withTest" size="large" />
      <Badge variant="places" value={20} size="large" />
      <Badge variant="retake" size="large" />
      <Badge variant="subject" value="Математика" size="large" />
    </div>
  ),
};

export const CourseCardSet: Story = {
  render: () => (
    <div className={rowStyles}>
      <Badge variant="online" size="small" />
      <Badge variant="withTest" size="small" />
      <Badge variant="places" value={20} size="small" />
      <Badge variant="subject" value="Математика" size="small" />
    </div>
  ),
};

export const Custom: Story = {
  args: {
    lable: 'Осень',
    color: 'darkGreen02',
    borderColor: undefined,
  },
};

export const Skeleton: Story = {
  render: () => <BadgeSkeleton />,
};

const presetStackStyles = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 36px;
  padding: 32px;
`;

const rowStyles = css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
`;
