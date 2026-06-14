import { css, cx } from '@emotion/css';
import {
  isValidElement,
  useState,
  type ReactNode,
} from 'react';

import { useTheme, type TThemeColors } from '../../ThemeContext';

interface IAccordionItem {
  /** Id */
  id: string;

  /** Заголовок */
  title: string;

  /** Контент */
  content: ReactNode;

  /** Disabled */
  disabled?: boolean;
}

export type TAccordionIcon =
  | 'plusMinus'
  | 'chevron'
  | 'arrow'
  | 'chevronUpDown'
  | 'dots'
  | 'dash'
  | 'none';

interface IAccordionProps {
  /** Элементы */
  items: IAccordionItem[];

  /** Цвет активного */
  activeColor?: TThemeColors;

  /** Разрешить несколько открытых */
  multiple?: boolean;

  /**
   * Встроенная иконка или собственная
   *
   * icon="chevron"
   * icon={<ChevronIcon />}
   */
  icon?: TAccordionIcon | ReactNode;

  /** Расположение иконки */
  iconPosition?: 'left' | 'right';

  /** Дополнительный класс */
  className?: string;
}

export const Accordion = ({
  items,
  activeColor = 'mainBlue',
  multiple = false,
  icon = 'plusMinus',
  iconPosition = 'right',
  className,
}: IAccordionProps) => {
  const theme = useTheme();
  const [opened, setOpened] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    if (multiple) {
      setOpened((prev) =>
        prev.includes(id)
          ? prev.filter((item) => item !== id)
          : [...prev, id],
      );

      return;
    }

    setOpened((prev) =>
      prev.includes(id) ? [] : [id],
    );
  };

  const getBuiltInIcon = (
    type: TAccordionIcon,
    isOpen: boolean,
  ) => {
    switch (type) {
      case 'plusMinus':
        return isOpen ? '−' : '+';

      case 'chevron':
        return isOpen ? '⌄' : '›';

      case 'arrow':
        return isOpen ? '↓' : '→';

      case 'chevronUpDown':
        return isOpen ? '▲' : '▼';

      case 'dots':
        return '•••';

      case 'dash':
        return '—';

      case 'none':
        return null;

      default:
        return null;
    }
  };

  const getIcon = (isOpen: boolean) => {
    if (
      isValidElement(icon) ||
      (icon !== null &&
        typeof icon === 'object')
    ) {
      return icon;
    }

    return getBuiltInIcon(
      icon as TAccordionIcon,
      isOpen,
    );
  };

  return (
    <div
      className={cx(
        wrapperStyles,
        className,
      )}
    >
      {items.map((item) => {
        const isOpen = opened.includes(
          item.id,
        );

        const triggerId = `accordion-trigger-${item.id}`;
        const panelId = `accordion-panel-${item.id}`;
        const iconNode = (
          <span className={iconStyles} aria-hidden="true">
            {getIcon(isOpen)}
          </span>
        );

        return (
          <div
            key={item.id}
            className={itemStyles}
          >
            <button
              type="button"
              id={triggerId}
              disabled={item.disabled}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className={triggerStyles(
                isOpen,
                theme[activeColor],
                theme.textPrimary,
              )}
              onClick={() =>
                toggleItem(item.id)
              }
            >
              {iconPosition === 'left' &&
                iconNode}

              <span className={titleStyles}>
                {item.title}
              </span>

              {iconPosition ===
                'right' && iconNode}
            </button>

            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={triggerId}
                className={contentStyles(theme.textSecondary)}
              >
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

const wrapperStyles = css`
  width: 520px;
  min-width: 520px;

  display: flex;
  flex-direction: column;
`;

const itemStyles = css`
  border-bottom: 1px solid
    rgba(0, 0, 0, 0.08);
`;

const triggerStyles = (
  isOpen: boolean,
  activeColor: string,
  textColor: string,
) => css`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 12px;

  border: none;
  background: transparent;

  padding: 16px 0;

  cursor: pointer;

  text-align: left;

  font-size: 15px;
  font-weight: 600;

  color: ${isOpen
    ? activeColor
    : textColor};

  transition: color 0.2s ease;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const titleStyles = css`
  flex: 1;

  overflow-wrap: break-word;
  word-break: break-word;
`;

const iconStyles = css`
  width: 20px;
  min-width: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  font-size: 18px;
  line-height: 1;
`;

const contentStyles = (textColor: string) => css`
  padding: 0 0 16px;

  font-size: 14px;
  line-height: 22px;

  color: ${textColor};

  overflow-wrap: break-word;
  word-break: break-word;
`;
