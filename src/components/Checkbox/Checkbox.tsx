import React from 'react';
import * as S from './Checkbox.styles.ts';
import { type TColors } from '../../theme/tokens.ts';

interface CheckboxProps {
  /** Поле для идентификации и группировки элементов в форме */
  name: string;

  /** Значение чекбокса, уходящее на сервер */
  value: string;

  /** Идентификатор для связи с другими элементами */
  id?: string;

  /** Текст чекбокса*/
  label?: string;

  /** Цвет чекбокса */
  color?: TColors;

  /** Положение текста, отосительно чекбокса */
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

export const Checkbox: React.FC<CheckboxProps> = ({
  name,
  value,
  id,
  label,
  color = 'mainNavy',
  reverse,
  checked,
  disabled,
  onChange,
  required,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };
  return (
    <S.Label title={value}>  
        <S.Input 
            type='checkbox'
            id={id}
            name={name}
            value={value}
            checked={checked}
            disabled={disabled}
            onChange={handleChange}
            required={required}
            color={color}
        />
        {!reverse && <S.Span/>}
        {label}
        {reverse && <S.Span/>}
    </S.Label>
    
  );
};
