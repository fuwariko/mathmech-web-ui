import { css, cx } from '@emotion/css';
import type { CSSProperties, ReactNode } from 'react';
import { useTheme, type AppTheme, type TThemeColors } from '../../ThemeContext';
import {
  BoardIcon,
  CheckIcon,
  MonitorIcon,
  UsersGroupIcon,
  type IconSize,
} from '../../Icons/Icons';

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
  iconOffsetY?: string;
};

export interface BadgeProps {
  /** Текст внутри бейджа */
  lable?: string;

  /** Заготовленный вариант */
  variant?: BadgeVariant;

  /** Значение для вариантов вроде "20 мест" */
  value?: string | number;

  /** Цвет фона */
  color?: TThemeColors;

  /** Цвет обводки */
  borderColor?: TThemeColors;

  /** Иконка */
  icon?: boolean | ReactNode;

  /** Размер */
  size?: BadgeSize;

  className?: string;

  style?: CSSProperties;
}

export const Badge = ({
  lable,
  variant,
  value,
  color,
  borderColor,
  icon,
  size = 'medium',
  className,
  style,
}: BadgeProps) => {
  const theme = useTheme();
  const variantConfig = variant
    ? getVariantConfig(theme, variant, value, size)
    : undefined;
  const resolvedLabel =
    lable ?? variantConfig?.label ?? '';
  const resolvedIcon =
    icon === false
      ? undefined
      : typeof icon === 'boolean' || icon === undefined
        ? variantConfig?.icon
        : icon;
  const tone =
    getResolvedTone(theme, variantConfig, color, borderColor);

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
          <span className={iconInnerStyles(variantConfig?.iconOffsetY)}>
            {resolvedIcon}
          </span>
        </span>
      )}

      <span>{resolvedLabel}</span>
    </span>
  );
};

const getResolvedTone = (
  theme: AppTheme,
  variantConfig?: BadgeVariantConfig,
  color?: TThemeColors,
  borderColor?: TThemeColors,
): BadgeTone => ({
  background: color
    ? theme[color]
    : (variantConfig?.tone.background ?? theme.lightBlue01),
  color: variantConfig?.tone.color ?? theme.white,
  border: borderColor
    ? theme[borderColor]
    : (variantConfig?.tone.border ?? 'transparent'),
});

const getIconSize = (size: BadgeSize): IconSize => {
  if (size === 'large') return 24;
  if (size === 'small') return 16;
  return 16;
};

const getPlacesIconSize = (size: BadgeSize): IconSize => {
  if (size === 'large') return 32;
  return 24;
};

const getVariantConfig = (
  theme: AppTheme,
  variant: BadgeVariant,
  value?: string | number,
  size: BadgeSize = 'medium',
): BadgeVariantConfig => {
  const iconSize = getIconSize(size);
  const placesIconSize = getPlacesIconSize(size);

  const configs: Record<BadgeVariant, BadgeVariantConfig> = {
    online: {
      label: 'Онлайн',
      tone: {
        background: theme.mainGreen,
        color: theme.white,
        border: 'transparent',
      },
      icon: <MonitorIcon size={iconSize} />,
    },

    offline: {
      label: 'Офлайн',
      tone: {
        background: 'transparent',
        color: theme.darkGreen01,
        border: theme.darkGreen01,
      },
      icon: <BoardIcon size={iconSize} />,
    },

    withTest: {
      label: 'С тестовым',
      tone: {
        background: theme.lightOrange01,
        color: theme.white,
        border: 'transparent',
      },
      icon: <CheckIcon size={iconSize} />,
    },

    places: {
      label: `${value} мест`,
      tone: {
        background: theme.lightNavy01,
        color: theme.white,
        border: 'transparent',
      },
      icon: <UsersGroupIcon size={placesIconSize} />,
      iconOffsetY: '0.08em',
    },

    retake: {
      label: 'Перезачёт',
      tone: {
        background: theme.mainGrey,
        color: theme.textSecondary,
        border: 'transparent',
      },
    },

    subject: {
      label: String(value),
      tone: {
        background: 'transparent',
        color: theme.textSecondary,
        border: theme.textSecondary,
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
      
  font-weight: 500;

  padding: ${size === 'large'
    ? '12px 28px'
    : size === 'small'
      ? '2px 10px'
      : '4px 14px'};

  border-radius: 50px;

  margin: 0 6px 0 0;

  text-wrap: none;

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

const iconInnerStyles = (offsetY?: string) => css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transform: ${offsetY ? `translateY(${offsetY})` : 'none'};
`;
