import React, { useEffect, useMemo, useRef, useState } from 'react';
import * as S from './Select.styles.ts';
import openImg from './../../assets/open.svg'

export type SelectOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

export type SelectProps = {
  id?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  options: SelectOption[];
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  required?: boolean;
  isError?: boolean;
  errorMessage?: string;
  className?: string;
  onChange?: (value: string, option: SelectOption) => void;
};

export const Select: React.FC<SelectProps> = ({
  id,
  name,
  label,
  placeholder = 'Выберите значение',
  options,
  value,
  defaultValue,
  disabled,
  required,
  isError,
  errorMessage,
  className,
  onChange,
}) => {
  const listId = `${id ?? name ?? 'select'}-listbox`;
  const labelId = `${id ?? name ?? 'select'}-label`;
  const errorId = `${id ?? name ?? 'select'}-error`;

  const isControlled = value !== undefined;
  const [innerValue, setInnerValue] = useState(defaultValue ?? '');
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const currentValue = isControlled ? value : innerValue;

  const selectedOption = useMemo(
    () => options.find((option) => option.value === currentValue),
    [currentValue, options],
  );

  const selectOption = (option: SelectOption) => {
    if (option.disabled) return;

    if (!isControlled) {
      setInnerValue(option.value);
    }

    onChange?.(option.value, option);
    setOpen(false);
    buttonRef.current?.focus();
  };

  useEffect(() => {
    if (!open) return;
    const index = selectedOption
      ? options.findIndex((option) => option.value === selectedOption.value)
      : 0;

    setActiveIndex(index >= 0 ? index : 0);
  }, [open, options, selectedOption]);

  const onKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
  if (disabled) return;

  switch (event.key) {
    case 'ArrowDown':
      event.preventDefault();
      setOpen(true);
      setActiveIndex((prev) => (prev + 1 >= options.length ? 0 : prev + 1));
      break;
    case 'ArrowUp':
      event.preventDefault();
      setOpen(true);
      setActiveIndex((prev) => (prev - 1 < 0 ? options.length - 1 : prev - 1));
      break;
    case 'Enter':
    case ' ':
      event.preventDefault();
      if (open) {
        const option = options[activeIndex];
        if (option) selectOption(option);
      } else {
        setOpen(true);
      }
      break;
    case 'Escape':
      event.preventDefault();
      setOpen(false);
      break;
    case 'Tab':
      setOpen(false);
      break;
    default:
      break;
  }
};

  return (
    <S.Root className={className}>
      {label && (
        <S.Label id={labelId} htmlFor={id}>
          {label}
          {required && <span aria-hidden="true">*</span>}
        </S.Label>
      )}

      <S.Control isError={isError}
        ref={buttonRef}
        id={id}
        type="button"
        role="combobox"
        aria-labelledby={label ? labelId : undefined}
        aria-controls={listId}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-invalid={isError || undefined}
        aria-describedby={isError ? errorId : undefined}
        aria-activedescendant={open ? `${listId}-option-${options[activeIndex]?.value}` : undefined}
        disabled={disabled}
        onClick={() => !disabled && setOpen((prev) => !prev)}
        onKeyDown={onKeyDown}
      >
        <S.Value $isPlaceholder={!selectedOption}>
          {selectedOption?.label ?? placeholder}
        </S.Value>
        <S.Icon aria-hidden><img src={openImg} alt="" /></S.Icon>
      </S.Control>

      <input type="hidden" name={name} value={currentValue} />

      {open && (
        <S.Listbox id={listId} role="listbox" aria-labelledby={label ? labelId : undefined}>
          {options.map((option, index) => {
            const isSelected = option.value === currentValue;
            const isActive = index === activeIndex;

            return (
              <S.Option
                tabIndex={-1}
                key={option.value}
                id={`${listId}-option-${option.value}`}
                role="option"
                // aria-selected={isSelected}
                aria-selected={activeIndex === index}
                aria-disabled={option.disabled || undefined}
                $active={isActive}
                $selected={isSelected}
                // disabled={option.disabled}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => selectOption(option)}
                // type="button"
              >
                {option.label}
              </S.Option>
            );
          })}
        </S.Listbox>
      )}

      {isError && errorMessage && (
        <S.Error id={errorId} role="alert">
          {errorMessage}
        </S.Error>
      )}
    </S.Root>
  );
};