import React from 'react';
import * as S from './Radio.styles.ts';

type RadioProps = {
  id?: string;
  name: string;
  value: string;
  description?: string;
  reverse?: boolean;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (value: string) => void;
  required?: boolean;
};

export const Radio: React.FC<RadioProps> = ({
  id,
  name,
  value,
  description,
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
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        required={required}
      />
        {!reverse && <S.Span />}
        {description}
        {reverse && <S.Span />}
    </S.Label>
  );
};
