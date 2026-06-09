import type {
  Meta,
  StoryObj,
} from '@storybook/react-vite';

import { Text } from '../components/text/Text';

const meta = {
  title: 'ATOMS/Text',

  component: Text,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',

    variant: 'paragraph',

    as: 'p',

    italic: false,

    size: undefined,

    weight: undefined,

    color: 'darkBlue01',

    align: 'left',
  },

  argTypes: {
    children: {
      control: 'text',
    },

    variant: {
      control: 'select',

      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'paragraph',
        'small',
        'xsmall',
      ],
    },

    as: {
      control: 'select',

      options: [
        'p',
        'span',
        'div',
        'label',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
      ],
    },

    size: {
      control: 'select',

      options: [
        undefined,
        14,
        16,
        18,
        20,
        21,
        22,
        24,
        28,
        32,
        36,
        40,
      ],
    },

    weight: {
      control: 'select',

      options: [
        undefined,
        400,
        500,
        600,
        700,
      ],
    },

    italic: {
      control: 'boolean',
    },

    align: {
      control: 'select',

      options: [
        'left',
        'center',
        'right',
        'justify',
      ],
    },

    color: {
      control: 'select',
    },

    className: {
      control: false,
    },
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Headings: Story = {
  render: (args) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        width: 700,
      }}
    >
      <Text
        {...args}
        variant="h1"
      >
        Heading 1
      </Text>

      <Text
        {...args}
        variant="h2"
      >
        Heading 2
      </Text>

      <Text
        {...args}
        variant="h3"
      >
        Heading 3
      </Text>

      <Text
        {...args}
        variant="h4"
      >
        Heading 4
      </Text>

      <Text
        {...args}
        variant="h5"
      >
        Heading 5
      </Text>

      <Text
        {...args}
        variant="h6"
      >
        Heading 6
      </Text>
    </div>
  ),
};

export const BodyText: Story = {
  render: (args) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        width: 700,
      }}
    >
      <Text
        {...args}
        variant="paragraph"
      >
        Paragraph
      </Text>

      <Text
        {...args}
        variant="small"
      >
        Small
      </Text>

      <Text
        {...args}
        variant="xsmall"
      >
        Extra Small
      </Text>
    </div>
  ),
};

export const Italic: Story = {
  args: {
    italic: true,
  },
};

export const CustomSizeWeight: Story = {
  args: {
    size: 32,
    weight: 700,
    children:
      'Custom size and weight',
  },
};

export const DifferentTags: Story = {
  render: (args) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        width: 700,
      }}
    >
      <Text
        {...args}
        as="p"
      >
        p
      </Text>

      <Text
        {...args}
        as="span"
      >
        span
      </Text>

      <Text
        {...args}
        as="div"
      >
        div
      </Text>

      <Text
        {...args}
        as="label"
      >
        label
      </Text>

      <Text
        {...args}
        as="strong"
      >
        strong
      </Text>

      <Text
        {...args}
        as="em"
      >
        em
      </Text>

      <Text
        {...args}
        as="small"
      >
        small
      </Text>
    </div>
  ),
};

export const Alignments: Story = {
  render: (args) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        width: 700,
      }}
    >
      <Text
        {...args}
        align="left"
      >
        Left
      </Text>

      <Text
        {...args}
        align="center"
      >
        Center
      </Text>

      <Text
        {...args}
        align="right"
      >
        Right
      </Text>

      <Text
        {...args}
        align="justify"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
    </div>
  ),
};