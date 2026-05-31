import React, { useEffect, useMemo, useRef, useState } from 'react';
import * as S from './Multiselect.styles.ts';
import openImg from './../../assets/open.svg';
import deleteImg from './../../assets/remove.svg';
import checkImg from './../../assets/checkSelect.svg';


export type MultiselectOption = {
  value: string;
  label: string;
  disabled?: boolean;
};


export type MultiSelectProps = {
  id?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  options: MultiselectOption[];
  value?: string[];
  defaultValue?: string[];
  disabled?: boolean;
  required?: boolean;
  isError?: boolean;
  errorMessage?: string;
  className?: string;
  onChange?: (value: string[], options: MultiselectOption[]) => void;
};


export const MultiSelect: React.FC<MultiSelectProps> = ({
  id,
  name,
  label,
  placeholder = 'Выберите значения',
  options,
  value,
  defaultValue = [],
  disabled,
  required,
  isError,
  errorMessage,
  className,
  onChange,
}) => {
  const listId = `${id ?? name ?? 'multiselect'}-listbox`;
  const labelId = `${id ?? name ?? 'multiselect'}-label`;
  const errorId = `${id ?? name ?? 'multiselect'}-error`;

  const isControlled = value !== undefined;
  const [innerValue, setInnerValue] = useState<string[]>(defaultValue);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const currentValue = isControlled ? value : innerValue;

  const selectedOptions = useMemo(
    () => options.filter((option) => currentValue.includes(option.value)),
    [currentValue, options],
  );

  const selectOption = (option: MultiselectOption) => {
    if (option.disabled) return;

    const isSelected = currentValue.includes(option.value);
    let newValue: string[];

    if (isSelected) {
      newValue = currentValue.filter((v) => v !== option.value);
    } else {
      newValue = [...currentValue, option.value];
    }

    if (!isControlled) {
      setInnerValue(newValue);
    }

    const newSelectedOptions = options.filter((opt) => newValue.includes(opt.value));
    onChange?.(newValue, newSelectedOptions);
    
    // Не закрываем дропдаун при выборе в мультиселекте
    buttonRef.current?.focus();
  };

  const removeOption = (optionValue: string, event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    
    const newValue = currentValue.filter((v) => v !== optionValue);
    
    if (!isControlled) {
      setInnerValue(newValue);
    }
    
    const newSelectedOptions = options.filter((opt) => newValue.includes(opt.value));
    onChange?.(newValue, newSelectedOptions);
    
    buttonRef.current?.focus();
  };

  useEffect(() => {
    if (!open) return;
    const index = selectedOptions.length > 0
      ? options.findIndex((option) => option.value === selectedOptions[selectedOptions.length - 1].value)
      : activeIndex;
     setActiveIndex((prev) => {
    if (prev >= 0 && prev < options.length) return prev;
    return index >= 0 ? index : 0;
  });
}, [open]);

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
      case 'Backspace':
        if (currentValue.length > 0 && !open) {
          event.preventDefault();
          const newValue = currentValue.slice(0, -1);
          if (!isControlled) {
            setInnerValue(newValue);
          }
          const newSelectedOptions = options.filter((opt) => newValue.includes(opt.value));
          onChange?.(newValue, newSelectedOptions);
        }
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

      <S.Control
        isError={isError}
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
        <S.ValueContainer>
          {selectedOptions.length === 0 ? (
            <S.Value $isPlaceholder={true}>
              {placeholder}
            </S.Value>
          ) : (
            selectedOptions.map((option) => (
              <S.Tag 
                key={option.value}
                tabIndex={0}
                role="option"
                aria-selected="true"
                aria-label={option.label}
                onKeyDown={(e) => {
                  if (e.key === 'Backspace' || e.key === 'Delete'|| e.key === ' ') {
                    e.preventDefault();
                    removeOption(option.value, e as any);
                  }
                }}
              >
                {option.label}
                <S.TagClose
                  type="button"
                  onClick={(e) => removeOption(option.value, e)}
                  tabIndex={-1}
                  disabled={disabled}
                  aria-hidden
                >
                  <img src={deleteImg} alt="" aria-hidden/>
                </S.TagClose>
              </S.Tag>
            ))
          )}
        </S.ValueContainer>
        <S.Icon aria-hidden $isOpen={open}><img src={openImg} alt="" /></S.Icon>
      </S.Control>

      <input type="hidden" name={name} value={currentValue.join(',')} />

      {open && (
        <S.Listbox id={listId} role="listbox" aria-labelledby={label ? labelId : undefined} aria-multiselectable="true">
          {options.map((option, index) => {
            const isSelected = currentValue.includes(option.value);
            const isActive = index === activeIndex;

            return (
              <S.Option
                tabIndex={-1}
                key={option.value}
                id={`${listId}-option-${option.value}`}
                role="option"
                aria-selected={isSelected}
                aria-disabled={option.disabled || undefined}
                $active={isActive}
                $selected={isSelected}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => selectOption(option)}
              >
                {option.label}
                {isSelected && <img src={checkImg} alt="" aria-hidden/>}
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