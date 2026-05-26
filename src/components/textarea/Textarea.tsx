import React from 'react';
import * as S from './Textarea.styles.ts';

type TextareaProps = {
  id?: string;
  name?: string;
  placeholder?: string;
  description?: string;
  disabled?: boolean;
  required?: boolean;
  isError?: boolean;
  errorMassage?: string;
  className?: string;
};

export const Textarea: React.FC<TextareaProps> = ({
  id,
  name,
  placeholder,
  description,
  disabled,
  required,
  isError,
  errorMassage,
  className,
}) => {
  return (
    <S.TextLabel title={description !== undefined ? description : "Поле ввода"} className={className}>
      {description && 
      <S.DescriptionSpan id={`text-description-${id}`}>
        {description}{required && <span aria-hidden>{"*"}</span>}
      </S.DescriptionSpan>}
      <S.Textarea
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        isError={isError}
        aria-labelledby={description ? `text-description-${id}` : undefined}
        aria-required={required}
        aria-invalid={isError}
        aria-describedby={isError ? `error-massage-${id}` : undefined}
      />
      {isError && (
        <S.ErrorSpan id={`error-massage-${id}`} role="alert">
          {errorMassage}
        </S.ErrorSpan>
      )}
    </S.TextLabel>
  );
};
