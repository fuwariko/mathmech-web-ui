import { css, cx } from '@emotion/css';
import {
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from 'react';

import { useTheme, type TThemeColors } from '../../ThemeContext';

export type TTextVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'paragraph'
  | 'small'
  | 'xsmall';

export type TFontWeight =
  | 400
  | 500
  | 600
  | 700;

export type TFontSize =
  | 14
  | 16
  | 18
  | 20
  | 21
  | 22
  | 24
  | 28
  | 32
  | 36
  | 40;

interface IVariant {
  size: TFontSize;
  lineHeight: number;
  weight: TFontWeight;
}

const variants: Record<
  TTextVariant,
  IVariant
> = {
  h1: {
    size: 40,
    lineHeight: 1.25,
    weight: 700,
  },

  h2: {
    size: 36,
    lineHeight: 1.35,
    weight: 600,
  },

  h3: {
    size: 24,
    lineHeight: 1.45,
    weight: 600,
  },

  h4: {
    size: 22,
    lineHeight: 1.5,
    weight: 500,
  },

  h5: {
    size: 21,
    lineHeight: 1.5,
    weight: 500,
  },

  h6: {
    size: 20,
    lineHeight: 1.5,
    weight: 500,
  },

  paragraph: {
    size: 18,
    lineHeight: 1.55,
    weight: 400,
  },

  small: {
    size: 16,
    lineHeight: 1.55,
    weight: 400,
  },

  xsmall: {
    size: 14,
    lineHeight: 1.6,
    weight: 400,
  },
};

interface ITextProps {
  /** Контент */
  children: ReactNode;

  /** Готовый вариант */
  variant?: TTextVariant;

  /** HTML тег */
  as?: ElementType;

  /** Размер */
  size?: TFontSize;

  /** Жирность */
  weight?: TFontWeight;

  /** Курсив */
  italic?: boolean;

  /** Цвет */
  color?: TThemeColors;

  /** Выравнивание */
  align?: CSSProperties['textAlign'];

  /** Дополнительный класс */
  className?: string;
}

export const Text = ({
  children,
  variant = 'paragraph',
  as: Component = 'p',
  size,
  weight,
  italic = false,
  color,
  align = 'left',
  className,
}: ITextProps) => {
  const theme = useTheme();
  const preset = variants[variant];
  const isHeading = isHeadingVariant(variant);
  const resolvedColor = color
    ? theme[color]
    : isHeading
      ? theme.mainNavy
      : variant === 'paragraph'
        ? theme.textParagraph
        : theme.textPrimary;

  return (
    <Component
      className={cx(
        textStyles({
          size:
            size ?? preset.size,
          lineHeight:
            preset.lineHeight,
          weight:
          weight ??
            preset.weight,
          italic,
          color: resolvedColor,
          align,
          isHeading,
        }),
        className,
      )}
    >
      {children}
    </Component>
  );
};

interface ITextStyles {
  size: number;
  lineHeight: number;
  weight: number;
  italic: boolean;
  color: string;
  align: CSSProperties['textAlign'];
  isHeading: boolean;
}

const textStyles = ({
  size,
  lineHeight,
  weight,
  italic,
  color,
  align,
  isHeading,
}: ITextStyles) => css`
  margin: ${isHeading ? '4px 0' : '0'};
  padding: 0;

  font-size: ${size}px;
  line-height: ${lineHeight};
  font-weight: ${weight};
  font-style: ${italic
    ? 'italic'
    : 'normal'};

  color: ${color};

  text-align: ${align};

  overflow-wrap: break-word;
  word-break: break-word;
`;

const isHeadingVariant = (variant: TTextVariant) =>
  variant === 'h1' ||
  variant === 'h2' ||
  variant === 'h3' ||
  variant === 'h4' ||
  variant === 'h5' ||
  variant === 'h6';
