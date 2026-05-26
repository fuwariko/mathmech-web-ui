import { css, cx } from '@emotion/css';
import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from 'react';

import {
  сolors,
  type TColors,
} from '../../theme/tokens';

type TTabsVariant = 'filled' | 'underline';

interface ITabItem {
  /** Id таба */
  id: string;

  /** Заголовок */
  label: string;

  /** Контент */
  content: ReactNode;

  /** Disabled */
  disabled?: boolean;
}

interface ITabsProps {
  /** Список табов */
  tabs: ITabItem[];

  /** Активный таб по умолчанию */
  defaultTabId?: string;

  /** Вертикальные табы */
  vertical?: boolean;

  /** Показать стрелки прокрутки */
  withScrollButtons?: boolean;

  /** Вариант отображения */
  variant?: TTabsVariant;

  /** Цвет активного таба */
  activeColor?: TColors;

  /** Цвет фона */
  backgroundColor?: TColors;

  /** Дополнительный класс */
  className?: string;
}

export const Tabs = ({
  tabs,
  defaultTabId,
  vertical = false,
  withScrollButtons = false,
  variant = 'filled',
  activeColor = 'mainBlue',
  backgroundColor = 'lightGrey01',
  className,
}: ITabsProps) => {
  const [activeTab, setActiveTab] = useState(
    defaultTabId ?? tabs[0]?.id,
  );

  const tabListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!tabs.find((tab) => tab.id === activeTab)) {
      setActiveTab(tabs[0]?.id);
    }
  }, [tabs, activeTab]);

  const scrollTabs = (
    direction: 'prev' | 'next',
  ) => {
    if (!tabListRef.current) {
      return;
    }

    const scrollAmount = 150;

    if (vertical) {
      tabListRef.current.scrollBy({
        top:
          direction === 'next'
            ? scrollAmount
            : -scrollAmount,
        behavior: 'smooth',
      });
    } else {
      tabListRef.current.scrollBy({
        left:
          direction === 'next'
            ? scrollAmount
            : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    const isNext =
      event.key === 'ArrowRight' ||
      event.key === 'ArrowDown';

    const isPrev =
      event.key === 'ArrowLeft' ||
      event.key === 'ArrowUp';

    if (!isNext && !isPrev) {
      return;
    }

    event.preventDefault();

    const nextIndex = isNext
      ? (index + 1) % tabs.length
      : (index - 1 + tabs.length) % tabs.length;

    const nextTab = tabs[nextIndex];

    if (!nextTab.disabled) {
      setActiveTab(nextTab.id);
    }
  };

  return (
    <div
      className={cx(
        containerStyles(vertical),
        className,
      )}
    >
      <div className={tabsWrapperStyles(vertical)}>
        {withScrollButtons && (
          <button
            type="button"
            className={scrollButtonStyles}
            onClick={() => scrollTabs('prev')}
          >
            {vertical ? '↑' : '←'}
          </button>
        )}

        <div
          ref={tabListRef}
          role="tablist"
          aria-orientation={
            vertical ? 'vertical' : 'horizontal'
          }
          className={tabListStyles(
            vertical,
            variant,
          )}
        >
          {tabs.map((tab, index) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                role="tab"
                type="button"
                id={`tab-${tab.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                tabIndex={isActive ? 0 : -1}
                disabled={tab.disabled}
                className={tabStyles(
                  isActive,
                  variant,
                  activeColor,
                  backgroundColor,
                  vertical,
                )}
                onClick={() => setActiveTab(tab.id)}
                onKeyDown={(event) =>
                  handleKeyDown(event, index)
                }
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {withScrollButtons && (
          <button
            type="button"
            className={scrollButtonStyles}
            onClick={() => scrollTabs('next')}
          >
            {vertical ? '↓' : '→'}
          </button>
        )}
      </div>

      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;

        return (
          <div
            key={tab.id}
            role="tabpanel"
            id={`panel-${tab.id}`}
            aria-labelledby={`tab-${tab.id}`}
            hidden={!isActive}
            className={panelStyles}
          >
            {isActive && tab.content}
          </div>
        );
      })}
    </div>
  );
};

const containerStyles = (
  vertical: boolean,
) => css`
  display: flex;
  flex-direction: ${vertical ? 'row' : 'column'};
  gap: 16px;

  width: fit-content;
`;

const tabsWrapperStyles = (
  vertical: boolean,
) => css`
  display: flex;
  flex-direction: ${vertical ? 'column' : 'row'};
  align-items: flex-start;
  gap: 8px;
`;

const tabListStyles = (
  vertical: boolean,
  variant: TTabsVariant,
) => css`
  display: flex;

  flex-direction: ${vertical ? 'column' : 'row'};

  gap: ${variant === 'filled'
    ? '8px'
    : vertical
      ? '4px'
      : '24px'};

  overflow: auto;

  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  ${variant === 'underline' &&
  !vertical &&
  `
    border-bottom: 1px solid rgba(0,0,0,0.08);
  `}
`;

const tabStyles = (
  active: boolean,
  variant: TTabsVariant,
  activeColor: TColors,
  backgroundColor: TColors,
  vertical: boolean,
) => css`
  border: none;
  outline: none;

  cursor: pointer;

  white-space: nowrap;

  transition:
    background 0.2s ease,
    color 0.2s ease,
    opacity 0.2s ease;

  font-size: 14px;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.15);
  }

  ${
    variant === 'filled'
      ? `
        padding: 10px 18px;

        border-radius: 12px;

        background: ${
          active
            ? сolors[activeColor]
            : сolors[backgroundColor]
        };

        color: ${active ? '#fff' : '#111'};

        flex-shrink: 0;
      `
      : `
        background: transparent;

        color: ${
          active
            ? сolors[activeColor]
            : 'rgba(0,0,0,0.6)'
        };

        display: flex;
        align-items: center;
        justify-content: flex-start;

        width: ${vertical ? '220px' : 'auto'};
        min-width: ${
          vertical
            ? '220px'
            : 'max-content'
        };

        text-align: left;

        padding: ${
          vertical
            ? '12px 16px'
            : '12px 0'
        };

        border-bottom: ${
          !vertical && active
            ? `2px solid ${сolors[activeColor]}`
            : '2px solid transparent'
        };

        border-left: ${
          vertical && active
            ? `2px solid ${сolors[activeColor]}`
            : '2px solid transparent'
        };

        border-radius: 0;

        flex-shrink: 0;
      `
  }
`;

const panelStyles = css`
  width: 100%;
  min-width: 320px;
`;

const scrollButtonStyles = css`
  border: none;
  background: transparent;

  cursor: pointer;

  width: 32px;
  height: 32px;

  border-radius: 8px;

  font-size: 18px;

  transition: background 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.06);
  }
`;