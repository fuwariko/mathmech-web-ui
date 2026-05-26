import React from 'react';
import * as S from './Checkbox.styles.ts';

type CheckboxProps = {
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

export const Checkbox: React.FC<CheckboxProps> = ({
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
            type='checkbox'
            id={id}
            name={name}
            value={value}
            checked={checked}
            disabled={disabled}
            onChange={handleChange}
            required={required}
        />
        {!reverse && <S.Span/>}
        {description}
        {reverse && <S.Span/>}
    </S.Label>
    
  );
};
