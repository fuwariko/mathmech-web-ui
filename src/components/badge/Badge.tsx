import { css, cx } from '@emotion/css';
import type { CSSProperties, ReactNode } from 'react';
import { allColors, type TColors } from '../../theme/color-tokens';
import {
  BoardIcon,
  CheckIcon,
  MonitorIcon,
  UsersGroupIcon,
  type IconSize,
} from '../../icons/Icons';

export type BadgeVariant =
  | 'online'
  | 'offline'
  | 'withTest'
  | 'places'
  | 'retake'
  | 'subject';

export type BadgeSize = 'small' | 'medium' | 'large';

type BadgeTone = {
  background: string;
  color: string;
  border: string;
};

type BadgeVariantConfig = {
  label: string;
  tone: BadgeTone;
  icon?: ReactNode;
};

export interface BadgeProps {
  /** Текст внутри бейджа */
  lable?: string;

  /** Текст внутри бейджа */
  label?: string;

  /** Заготовленный вариант */
  variant?: BadgeVariant;

  /** Значение для вариантов вроде "20 мест" */
  value?: string | number;

  /** Цвет фона */
  color?: TColors;

  /** Цвет обводки */
  borderColor?: TColors;

  /** Иконка */
  icon?: boolean | ReactNode;

  /** Размер */
  size?: BadgeSize;

  className?: string;

  style?: CSSProperties;
}

export const Badge = ({
  lable,
  label,
  variant,
  value,
  color,
  borderColor,
  icon,
  size = 'medium',
  className,
  style,
}: BadgeProps) => {
  const variantConfig = variant
    ? getVariantConfig(variant, value, size)
    : undefined;
  const resolvedLabel =
    label ?? lable ?? variantConfig?.label ?? '';
  const resolvedIcon =
    icon === false
      ? undefined
      : typeof icon === 'boolean' || icon === undefined
        ? variantConfig?.icon
        : icon;
  const tone =
    getResolvedTone(variantConfig, color, borderColor);

  return (
    <span
      style={style}
      className={cx(
        badgeStyles(tone, size),
        className,
      )}
    >
      {resolvedIcon && (
        <span className={iconStyles} aria-hidden="true">
          {resolvedIcon}
        </span>
      )}

      <span>{resolvedLabel}</span>
    </span>
  );
};

const getResolvedTone = (
  variantConfig?: BadgeVariantConfig,
  color?: TColors,
  borderColor?: TColors,
): BadgeTone => ({
  background: color
    ? allColors[color]
    : (variantConfig?.tone.background ?? allColors.lightBlue01),
  color: variantConfig?.tone.color ?? '#ffffff',
  border: borderColor
    ? allColors[borderColor]
    : (variantConfig?.tone.border ?? 'transparent'),
});

const getIconSize = (size: BadgeSize): IconSize => {
  if (size === 'large') return 24;
  if (size === 'small') return 16;
  return 16;
};

const getVariantConfig = (
  variant: BadgeVariant,
  value?: string | number,
  size: BadgeSize = 'medium',
): BadgeVariantConfig => {
  const iconSize = getIconSize(size);

  const configs: Record<BadgeVariant, BadgeVariantConfig> = {
    online: {
      label: 'Онлайн',
      tone: {
        background: allColors.mainGreen,
        color: '#ffffff',
        border: 'transparent',
      },
      icon: <MonitorIcon size={iconSize} />,
    },

    offline: {
      label: 'Офлайн',
      tone: {
        background: 'transparent',
        color: allColors.darkGreen01,
        border: allColors.darkGreen01,
      },
      icon: <BoardIcon size={iconSize} />,
    },

    withTest: {
      label: 'С тестовым',
      tone: {
        background: allColors.lightOrange01,
        color: '#ffffff',
        border: 'transparent',
      },
      icon: <CheckIcon size={iconSize} />,
    },

    places: {
      label: `${value ?? 20} мест`,
      tone: {
        background: allColors.lightNavy01,
        color: '#ffffff',
        border: 'transparent',
      },
      icon: <UsersGroupIcon size={iconSize} />,
    },

    retake: {
      label: 'Перезачёт',
      tone: {
        background: allColors.mainGrey,
        color: '#4d4d4d',
        border: 'transparent',
      },
    },

    subject: {
      label: String(value ?? 'Математика'),
      tone: {
        background: 'transparent',
        color: '#4d4d4d',
        border: '#4d4d4d',
      },
    },
  };

  return configs[variant];
};

const badgeStyles = (
  tone: BadgeTone,
  size: BadgeSize,
) => css`
  display: inline-flex;
  box-sizing: border-box;

  align-items: center;
  justify-content: center;
  gap: ${size === 'large' ? '14px' : '6px'};

  font-size: ${size === 'large'
    ? '32px'
    : size === 'small'
      ? '11px'
      : '14px'};
  font-weight: 600;

  padding: ${size === 'large'
    ? '12px 28px'
    : size === 'small'
      ? '2px 10px'
      : '4px 14px'};

  border-radius: 50px;

  margin: 0 6px 0 0;

  text-wrap: nowrap;

  min-width: 0;
  min-height: ${size === 'large'
    ? '64px'
    : size === 'small'
      ? '26px'
      : '36px'};
  line-height: 1;

  background: ${tone.background};
  color: ${tone.color};

  border: 2px solid ${tone.border};
`;

const iconStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
`;
