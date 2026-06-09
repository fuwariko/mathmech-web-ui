import type { Meta, StoryObj } from '@storybook/react-vite';
import { InputText } from '../components/inputText/InputText';
import { type InputTypes } from '../components/inputText/InputText';
import { useState } from 'react';

const meta:  Meta<typeof InputText> = {
  title: 'UI/InputText',
  component: InputText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'name',
  }
};

export const EmailInputText = {
  render: () => {
    return (
      <fieldset role="group" style={{ width: "240px", border: "none"}}>
          <InputText
            id={"1"}
            name="email"
            type='email'
            placeholder={"example@mail.ru"}
            label={"Почта"}
            errorMassage='Некорректный домен'
          />
      </fieldset>
    );
  },
};

export const ErrorInputText = {
  render: () => {
    return (
      <fieldset role="group" style={{ width: "240px", border: "none"}}>
          <InputText
            id={"1"}
            name="email"
            type='email'
            placeholder={"example@mail.ru"}
            label={"Почта"}
            isError={true}
            errorMassage="Некорректный домен"
          />
      </fieldset>
    );
  },
};


export const GroupInputText = {
  render: () => {
    const options: {
      id: string;
      type: InputTypes;
      placeholder: string | undefined;
      description: string;
    }[] = [
      { id: '1', type: 'text', placeholder: 'Иванов Иван', description: 'Имя Фамилия' },
      { id: '2', type: 'number', placeholder: undefined, description: 'Возраст' },
      { id: '3', type: 'date', placeholder: undefined, description: 'Дата рождения' },
      { id: '4', type: 'password', placeholder: 'Введите пароль', description: 'Пароль' },
    ];

    return (
      <fieldset role="group" style={{ width: "240px", border: "none", display: "flex", flexDirection: "column", gap: "15px"}}>
        {options.map((opt) => (
          <InputText
            id={opt.id}
            name="user"
            type={opt.type}
            placeholder={opt.placeholder}
            label={opt.description}
            required={opt.id == "4" ? true : false}
          />
        ))}
      </fieldset>
    );
  },
};

export const ControlledInputText = {
  render: () => {
    const [value, setValue] = useState<string>("example@mail.cim");

    return (
      <fieldset role="group" style={{ width: "240px", border: "none"}}>
        <p>Введенная почта: {value}</p>
          <InputText
            value={value}
            onChange={(e) => setValue(e)}
          />
      </fieldset>
    );
  },
  args: {
    id: '1',
    name: 'email',
    type: 'email',
    placeholder: 'example@mail.ru',
    label: 'Почта',
    isError: true,
    errorMassage: 'Некорректный домен',
  }
};
