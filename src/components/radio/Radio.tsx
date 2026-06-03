import React from 'react';
import * as S from './Radio.styles.ts';
import { type TColors } from '../../theme/tokens.ts';

interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'type'>{
  /** Поле для идентификации и группировки элементов в форме */
  name: string;

  /** Значение радио-кнопки */
  value: string;

  /** Идентификатор для связи с другими элементами */
  id?: string;

  /** Текст радио-кнопки */
  label?: string;

  /** Цвет радио-кнопки */
  color?: TColors;

  /** Положение текста, относительно радио-кнопки*/
  reverse?: boolean;

  /** Состояние "Выбрано"/"Не выбрано" */
  checked?: boolean;

  /** Заблокированное состояние */
  disabled?: boolean;

  /** Отслеживание изменения состояния */
  onChange?: (value: string) => void;

  /** Обязательность заполнения */
  required?: boolean;
};

export const Radio: React.FC<RadioProps> = ({
  id,
  name,
  value,
  label,
  color = 'mainNavy',
  reverse,
  checked,
  disabled,
  onChange,
  required,
  ...rest
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };
  return (
    <S.Label title={value}>
      <S.Input
        id={id}
        type="radio"
        name={name}
        value={value}
        color={color}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        required={required}
        {...rest}
      />
        {!reverse && <S.Span />}
        {label}
        {reverse && <S.Span />}
    </S.Label>
  );
};
