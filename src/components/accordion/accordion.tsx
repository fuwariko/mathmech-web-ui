import { css, cx } from '@emotion/css';
import {
  useState,
  type ReactNode,
} from 'react';

import {
  сolors,
  type TColors,
} from '../../theme/tokens';

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

interface IAccordionProps {
  /** Элементы */
  items: IAccordionItem[];

  /** Цвет активного */
  activeColor?: TColors;

  /** Разрешить несколько */
  multiple?: boolean;

  /** Дополнительный класс */
  className?: string;
}

export const Accordion = ({
  items,
  activeColor = 'mainBlue',
  multiple = false,
  className,
}: IAccordionProps) => {
  const [opened, setOpened] = useState<
    string[]
  >([]);

  const toggleItem = (id: string) => {
    if (multiple) {
      setOpened((prev) =>
        prev.includes(id)
          ? prev.filter(
              (item) => item !== id,
            )
          : [...prev, id],
      );

      return;
    }

    setOpened((prev) =>
      prev.includes(id) ? [] : [id],
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

        return (
          <div
            key={item.id}
            className={itemStyles}
          >
            <button
              type="button"
              disabled={item.disabled}
              className={triggerStyles(
                isOpen,
                activeColor,
              )}
              onClick={() =>
                toggleItem(item.id)
              }
            >
              <span>{item.title}</span>

              <span>
                {isOpen ? '−' : '+'}
              </span>
            </button>

            {isOpen && (
              <div className={contentStyles}>
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
    rgba(0,0,0,0.08);
`;

const triggerStyles = (
  isOpen: boolean,
  activeColor: TColors,
) => css`
  width: 100%;

  border: none;

  background: transparent;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px 0;

  cursor: pointer;

  font-size: 15px;
  font-weight: 600;

  color: ${isOpen
    ? сolors[activeColor]
    : '#111'};

  transition: color 0.2s ease;

  text-align: left;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const contentStyles = css`
  padding: 0 0 16px;

  font-size: 14px;
  line-height: 22px;

  color: rgba(0,0,0,0.7);

  overflow-wrap: break-word;
  word-break: break-word;
`;