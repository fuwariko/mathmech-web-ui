import React from 'react';
import * as S from './InputText.styles.ts';
import { type TColors } from '../../theme/color-tokens.ts';

export type InputTypes = 'text' | 'password' | 'email' | 'tel' | 'url' | 'number' | 'date' | 'time' | 'search';

interface InputTextProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'type'> {
  /** Идентификатор для связи с другими элементами */
  id?: string;

  /** Поле для идентификации и группировки элементов в форме */
  name?: string;

  /** Тип поля ввода */
  type?: InputTypes;

  /** Временный текст */
  placeholder?: string;

  /** Текст-описание */
  label?: string;

  /** Цвет фокуса */
  color?: TColors;

  /** Заблокированное состояние */
  disabled?: boolean;

  /** Обязательность заполнения */
  required?: boolean;

  /** Текущее значение (controlled компонент) */
  value?: string;

  /** Отслеживание изменения состояния */
  onChange?: (value: string) => void;

  /** Состояние ошибки */
  isError?: boolean;

  /** Текст ошибки */
  errorMassage?: string;
};

export const InputText: React.FC<InputTextProps> = ({
  id,
  name,
  type = 'text',
  placeholder,
  label,
  color = 'mainNavy',
  disabled,
  required,
  value,
  onChange,
  isError,
  errorMassage,
  ...rest
}) => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };
  return (
    <S.TextLabel title={label !== undefined ? label : "Строка ввода"}>
      {label && 
      <S.DescriptionSpan id={`text-description-${id}`}>
        {label}{required && <span aria-hidden>{"*"}</span>}
      </S.DescriptionSpan>}
      <S.Input
        id={id}
        name={name}
        lang="ru"
        type={type}
        color={color}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required={required}
        disabled={disabled}
        isError={isError}
        aria-labelledby={label ? `text-description-${id}` : undefined}
        aria-required={required}
        aria-invalid={isError}
        aria-describedby={isError ? `error-massage-${id}` : undefined}
        {...rest}
      />
      {isError && (
        <S.ErrorSpan id={`error-massage-${id}`} role="alert">
          {errorMassage}
        </S.ErrorSpan>
      )}
    </S.TextLabel>
  );
};
