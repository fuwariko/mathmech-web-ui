import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from '../components/textarea/Textarea';
import { useState } from 'react';
import { TextareaSkeleton } from '../components/skeletons/ComponentSkeletons';

const meta:  Meta<typeof Textarea> = {
  title: 'FORMS/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'name',
  }
};

export const SimpleTextarea = {
  render: () => {
    return (
      <fieldset role="group" style={{ width: "360px", border: "none"}}>
          <Textarea
            id={"1"}
            name="review"
            placeholder={"Чем бы вы хотели поделиться?"}
            label={"Отзыв"}
          />
      </fieldset>
    );
  },
};

export const ErrorTextarea = {
  render: () => {
    return (
      <fieldset role="group" style={{ width: "360px", border: "none"}}>
          <Textarea
            id={"1"}
            name="review"
            placeholder={"Чем бы вы хотели поделиться?"}
            label={"Отзыв"}
            isError={true}
            errorMassage="Минимум 50 символов"
          />
      </fieldset>
    );
  },
};

export const TextareaWithClass = {
  render: () => {
    return (
      <>
        <style>{`
          .castom textarea {
            min-height: 140px;
            resize: none;
          }
        `}</style>
      <fieldset role="group" style={{ width: "360px", border: "none"}}>
          <Textarea
            id={"1"}
            name="review"
            placeholder={"Чем бы вы хотели поделиться?"}
            label={"Отзыв"}
            className="castom"
          />
      </fieldset>
      </>
    );
  },
};

export const GroupTextarea = {
  render: () => {
    const options = [
      { id: '1', placeholder: 'Ответьте на вопрос 1', label: 'Вопрос 1' },
      { id: '2', placeholder: 'Ответьте на вопрос 2', label: 'Вопрос 2' },
      { id: '3', placeholder: 'Ответьте на вопрос 3', label: 'Вопрос 3' },
    ];

    return (
      <fieldset role="group" style={{ width: "360px", border: "none", display: "flex", flexDirection: "column", gap: "15px"}}>
        {options.map((opt) => (
          <Textarea
            id={opt.id}
            name="user-name"
            placeholder={opt.placeholder}
            label={opt.label}
            required={opt.id == "3" ? false : true}
          />
        ))}
      </fieldset>
    );
  },
};

export const ControlledInputText = {
  render: () => {
    const [value, setValue] = useState<string>("Потому");

    return (
      <fieldset role="group" style={{ width: "240px", border: "none"}}>
        <p>Введенный ответ: {value}</p>
          <Textarea
            id={"5"}
            name="user"
            placeholder={"Ответьте на вопрос"}
            label={"Почему?"}
            value={value}
            onChange={(e) => setValue(e)}
          />
      </fieldset>
    );
  },
};

export const Skeleton: Story = {
  render: () => (
    <div style={{ width: 360 }}>
      <TextareaSkeleton />
    </div>
  ),
};
