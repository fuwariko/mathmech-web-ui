import React from 'react';
import * as S from './InputText.styles.ts';

type InputTextProps = {
  id?: string;
  name: string;
  placeholder?: string;
  description?: string;
  disabled?: boolean;
  required?: boolean;
  isError?: boolean;
  errorMassage?: string;
};

export const InputText: React.FC<InputTextProps> = ({
  id,
  name,
  placeholder,
  description,
  disabled,
  required,
  isError,
  errorMassage,
}) => {
  return (
    <S.TextLabel>
      {description && 
      <S.DescriptionSpan id="text-description">
        {description}{required && <span aria-hidden>{"*"}</span>}
      </S.DescriptionSpan>}
      <S.Input
        id={id}
        name={name}
        type="text"
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        isError={isError}
        aria-labelledby={description ? "text-description": undefined}
        aria-required={required}
        aria-invalid={isError}
        aria-describedby={isError ? "error-massage" : undefined}
      />
      {isError && (
        <S.ErrorSpan id="error-massage" role="alert">
          {errorMassage}
        </S.ErrorSpan>
      )}
    </S.TextLabel>
  );
};
