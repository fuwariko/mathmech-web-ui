import React from 'react';
import * as S from './Toggle.styles'
import { type TColors } from '../../theme/tokens.ts';

interface ToggleProps {
  /** Идентификатор для связи с другими элементами */
  id?: string;

  /** Поле для идентификации и группировки элементов в форме */
  name?: string;

  /** Значение тоггла, уходящее на сервер */
  value?: string;

  /** Текст тоггла */
  label?: string;

  /** Цвет тоггла */
  color?: TColors;

  /** Состояние "Выбрано"/"Не выбрано" */
  checked?: boolean;

  /** Отслеживание изменения состояния */
  onChange?: (value: string) => void;

  /** Положение текста, отосительно тоггла */
  reverse?: boolean;

  /** Заблокированное состояние */
  disabled?: boolean;

  /** Обязательность заполнения */
  required?: boolean;
};

export const Toggle: React.FC<ToggleProps> = ({
  id,
  name,
  value,
  label,
  color = 'mainNavy',
  onChange,
  checked,
  reverse,
  disabled,
  required,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    };
  return (
    <S.ToggleWrapper title={label !== undefined ? label : "Переключатель"}>
        {reverse && <span id={`label-id-${id}`}>{label}</span>}
        <S.Input type="checkbox" 
                id={id}
                color={color}
                name={name}
                role="switch" 
                checked={checked}
                aria-labelledby={`label-id-${id}`}
                value={value}
                onChange={handleChange}
                disabled={disabled}
                required={required}>
        </S.Input>
        <S.Span color={color}></S.Span>
        {!reverse && <span id={`label-id-${id}`}>{label}</span>}
    </S.ToggleWrapper>
  );
};
