import React from 'react';
import * as S from './Toggle.styles'

type ToggleProps = {
  id?: string;
  name?: string;
  description?: string;
  checked?: boolean;
  onChange?: (value: string) => void;
  reverse?: boolean;
  disabled?: boolean;
  required?: boolean;
};

export const Toggle: React.FC<ToggleProps> = ({
  id,
  name,
  description,
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
    <S.ToggleWrapper title={description !== undefined ? description : "Переключатель"}>
        {reverse && <span id={`label-id-${id}`}>{description}</span>}
        <S.Input type="checkbox" 
                id={id}
                name={name}
                role="switch" 
                checked={checked}
                aria-labelledby={`label-id-${id}`}
                onChange={handleChange}
                disabled={disabled}
                required={required}>
        </S.Input>
        <S.Span></S.Span>
        {!reverse && <span id={`label-id-${id}`}>{description}</span>}
    </S.ToggleWrapper>
  );
};
