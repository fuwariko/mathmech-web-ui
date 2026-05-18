import type { Meta, StoryObj } from '@storybook/react-vite';
import { InputText } from '../components/inputText/InputText';

const meta:  Meta<typeof InputText> = {
  title: 'Atoms/InputText',
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

export const SimpleInputText = {
  render: () => {
    return (
      <fieldset role="group" style={{ width: "240px", border: "none"}}>
          <InputText
            id={"1"}
            name="email"
            placeholder={"example@mail.ru"}
            description={"Почта"}
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
            placeholder={"example@mail.ru"}
            description={"Почта"}
            isError={true}
            errorMassage="Некорректный домен"
          />
      </fieldset>
    );
  },
};


export const GroupInputText = {
  render: () => {
    const options = [
      { id: '1', placeholder: 'Введите имя', description: 'Имя' },
      { id: '2', placeholder: 'Введите фамилию', description: 'Фамилия' },
      { id: '3', placeholder: 'Введите отчество', description: 'Отчество' },
    ];

    return (
      <fieldset role="group" style={{ width: "240px", border: "none", display: "flex", flexDirection: "column", gap: "15px"}}>
        {options.map((opt) => (
          <InputText
            id={opt.id}
            name="user-name"
            placeholder={opt.placeholder}
            description={opt.description}
            required={opt.id == "3" ? false : true}
          />
        ))}
      </fieldset>
    );
  },
};
