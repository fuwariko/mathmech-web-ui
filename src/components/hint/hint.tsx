import { css, cx } from '@emotion/css';
import React, {
  cloneElement,
  isValidElement,
  useId,
  type CSSProperties,
  type ReactElement,
  type ReactNode,
} from 'react';
import { allColors, type TColors } from '../../theme/color-tokens';

type THintPosition = 'top' | 'bottom' | 'left' | 'right';

interface HintProps {
  children: ReactElement;
  content: ReactNode;
  position?: THintPosition;

  backgroundColor?: TColors;
  textColor?: TColors;
  borderColor?: TColors;

  borderWidth?: number;
  borderRadius?: number;

  className?: string;
  offset?:number
}

export function Hint({
  children,
  content,
  position = 'top',
  backgroundColor = 'darkGrey01',
  textColor = 'lightGrey02',
  borderColor = 'darkGrey01',
  borderWidth = 0,
  borderRadius = 10,
  offset = 8,
  className,
}: HintProps) {
  const id = useId();

  if (!isValidElement(children)) {
    throw new Error('Hint ожидает единственный ReactElement');
  }

  const anchorName = `--hint-anchor-${id}`;

  const getPop = () =>
    document.getElementById(id) as (HTMLElement & {
      showPopover: (opts?: { source?: HTMLElement }) => void;
      hidePopover: () => void;
    }) | null;

  const show = (source: HTMLElement) => {
    const pop = getPop();
    if (!pop) return;

    try {
      pop.showPopover({ source });
    } catch {}
  };

  const hide = () => {
    const pop = getPop();
    if (!pop) return;

    try {
      pop.hidePopover();
    } catch {}
  };

  const compose =
    <E extends React.SyntheticEvent>(
      original?: (e: E) => void,
      next?: (e: E) => void,
    ) =>
    (e: E) => {
      original?.(e);
      next?.(e);
    };

  const trigger = cloneElement(children, {
    'aria-describedby': id,

    onMouseEnter: compose(
      (children.props as any).onMouseEnter,
      (e: React.MouseEvent) => show(e.currentTarget),
    ),

    onMouseLeave: compose(
      (children.props as any).onMouseLeave,
      () => hide(),
    ),

    onFocus: compose(
      (children.props as any).onFocus,
      (e: React.FocusEvent) => show(e.currentTarget),
    ),

    onBlur: compose(
      (children.props as any).onBlur,
      () => hide(),
    ),

    style: {
      ...(children.props as any).style,
      anchorName, // оставляем только anchor
    } as CSSProperties,

    className: cx((children.props as any).className, className),
  });

  return (
    <>
      {trigger}

      <div
        id={id}
        popover="auto"
        role="tooltip"
        style={
          {
            positionAnchor: anchorName,
            background: allColors[backgroundColor],
            color: allColors[textColor],
            border: `${borderWidth}px solid ${allColors[borderColor]}`,
            borderRadius,
          } as CSSProperties
        }
        className={contentClass(position, offset)}
      >
        {content}
      </div>
    </>
  );
}

const contentClass = (position: THintPosition, offset: number) => css`
  position: fixed;
  margin: 4px;
  padding: 8px 12px;

  min-width: max-content;
  max-width: 320px;

  box-sizing: border-box;

  font-size: 12px;
  line-height: 16px;

  z-index: 9999;
  pointer-events: none;

  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.14);

  position-area: ${position};

  opacity: 0;
  transition: opacity 0.18s ease, transform 0.18s ease;

  ${position === 'top' && `
    margin-bottom: ${offset};
  `}

  ${position === 'bottom' && `
    margin-top: ${offset};
  `}

  ${position === 'left' && `
    margin-right: ${offset};
  `}

  ${position === 'right' && `
    margin-left: ${offset};
  `}

  &:popover-open {
    opacity: 1;
  }

  &:focus {
    outline: none;
  }

  &::backdrop {
    background: transparent;
  }
`;