import React from 'react';
import * as S from './Toggle.styles'
import { useTheme, type TThemeColors } from '../../ThemeContext';

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
  color?: TThemeColors;

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
  const theme = useTheme();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    };
  return (
    <S.ToggleWrapper title={label !== undefined ? label : "Переключатель"}>
        {reverse && <span id={`label-id-${id}`}>{label}</span>}
        <S.Input type="checkbox" 
                id={id}
                $color={theme[color]}
                $backgroundColor={theme.backgroundPrimary}
                name={name}
                role="switch" 
                checked={checked}
                aria-labelledby={`label-id-${id}`}
                value={value}
                onChange={handleChange}
                disabled={disabled}
                required={required}>
        </S.Input>
        <S.Span $color={theme[color]}></S.Span>
        {!reverse && <span id={`label-id-${id}`}>{label}</span>}
    </S.ToggleWrapper>
  );
};
