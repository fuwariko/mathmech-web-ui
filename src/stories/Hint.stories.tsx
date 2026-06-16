// hint.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Hint } from '../components/Hint/hint';
import { Button } from '../components/button/Button';
import { FilterIcon } from '../Icons/Icons';
import { InputText } from '../components/InputText/InputText';



const meta: Meta = {
  title: 'UI/Hint',
  parameters: { layout: 'centered' },
};
export default meta;
type Story = StoryObj;

export const OnButton: Story = {
  render: () => (
    <Hint content='ошшмвыогтмшгывтрмгрт' backgroundColor="mainBlue" position="top">
      <Button color='mainNavy' >
        <FilterIcon width={24} height={24} /> Настройки
      </Button>
    </Hint>
  ),
};

export const OnInput: Story = {
  render: () => (
    <Hint content='олалалал' position="right">
      <InputText
            id={"1"}
            name="email"
            type='email'
            placeholder={"example@mail.ru"}
            label={"Почта"}
            isError={true}
            errorMassage="Некорректный домен"
          />
    </Hint>
  ),
};
