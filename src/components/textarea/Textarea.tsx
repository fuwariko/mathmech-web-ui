import React from 'react';
import * as S from './Textarea.styles.ts';
import { useTheme, type TThemeColors } from '../../ThemeContext';

interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange' | 'type'> {
  /** Идентификатор для связи с другими элементами */
  id?: string;

  /** Поле для идентификации и группировки элементов в форме */
  name?: string;

  /** Временный текст */
  placeholder?: string;

  /** Текст-описание */
  label?: string;

  /** Цвет фокуса */
  color?: TThemeColors;

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

  /** Дополнительные стили */
  className?: string;
};

export const Textarea: React.FC<TextareaProps> = ({
  id,
  name,
  placeholder,
  label,
  color = 'mainNavy',
  disabled,
  required,
  value,
  onChange,
  isError,
  errorMassage,
  className,
  ...rest
}) => {
  const theme = useTheme();

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
      if (onChange) {
        onChange(e.target.value);
      }
    }
  return (
    <S.TextLabel title={label !== undefined ? label : "Поле ввода"} className={className}>
      {label && 
      <S.DescriptionSpan id={`text-description-${id}`} $errorColor={theme.error}>
        {label}{required && <span aria-hidden>{"*"}</span>}
      </S.DescriptionSpan>}
      <S.Textarea
        id={id}
        name={name}
        $focusColor={theme[color]}
        $errorColor={theme.error}
        $textColor={theme.textPrimary}
        $backgroundColor={theme.backgroundPrimary}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        isError={isError}
        aria-labelledby={label ? `text-description-${id}` : undefined}
        aria-required={required}
        aria-invalid={isError}
        aria-describedby={isError ? `error-massage-${id}` : undefined}
        {...rest}
      />
      {isError && (
        <S.ErrorSpan id={`error-massage-${id}`} role="alert" $errorColor={theme.error}>
          {errorMassage}
        </S.ErrorSpan>
      )}
    </S.TextLabel>
  );
};
