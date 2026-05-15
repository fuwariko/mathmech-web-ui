import React from 'react';
import * as S from './InputText.styles.ts';

type InputTextProps = {
  id?: string;
  name: string;
  description?: string;
  reverse?: boolean;
  disabled?: boolean;
  onChange?: (value: string) => void;
  required?: boolean;
};

export const InputText: React.FC<InputTextProps> = ({
  id,
  name,
  description,
  reverse,
  disabled,
  onChange,
  required,
}) => {
  return (
    <input 
      type='text'
      id={id}
      disabled={disabled}
      name={name}
      required={required}
    />
  );
};
