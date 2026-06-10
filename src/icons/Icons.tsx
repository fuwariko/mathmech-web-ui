import type {
  CSSProperties,
  ReactNode,
  SVGProps,
} from 'react';

export type IconSize =
  | 16
  | 24
  | 32
  | 48
  | 64;

export interface IconProps
  extends Omit<
    SVGProps<SVGSVGElement>,
    'color' | 'children'
  > {
  size?: IconSize;

  color?: string;

  strokeWidth?: 1 | 2;

  className?: string;

  style?: CSSProperties;
}

interface IconBaseProps
  extends IconProps {
  children: ReactNode;
}

export const IconBase = ({
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  children,
  ...props
}: IconBaseProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
};
/**
 * Несколько юзеров от большого к меньшему
 */
export const UsersIcon = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <circle cx="5" cy="6" r="2.1" />
      <path d="M2.7 16.8V10.7L5 8.9L7.3 10.7V16.8H2.7Z" />

      <circle cx="11.8" cy="8" r="1.6" />
      <path d="M10 16.8V11.4L11.8 10L13.6 11.4V16.8H10Z" />

      <circle cx="17" cy="10" r="1.15" />
      <path d="M15.75 16.8V12.7L17 11.7L18.25 12.7V16.8H15.75Z" />

      <circle cx="21" cy="11.7" r="0.8" />
      <path d="M20.1 16.8V13.8L21 13.1L21.9 13.8V16.8H20.1Z" />
    </IconBase>
  );
};

/**
 * Группа пользователей
 * 
 */
export const UsersGroupIcon = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="5" r="2.4" />
      <path d="M9.4 16.7V9.7L12 7.8L14.6 9.7V16.7H9.4Z" />

      <circle cx="5.2" cy="6.8" r="1.65" />
      <path d="M3.35 14.7V10L5.2 8.6L7.05 10V14.7H3.35Z" />

      <circle cx="18.8" cy="6.8" r="1.65" />
      <path d="M16.95 14.7V10L18.8 8.6L20.65 10V14.7H16.95Z" />
    </IconBase>
  );
};

/**
 * Стрелка вверх вправо
 */
export const ArrowUpRightIcon = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M7 17L17 7" />
      <path d="M9 7H17V15" />
    </IconBase>
  );
};

/**
 * Фильтр
 */
export const FilterIcon = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M4.5 5H19.5L14 11.3V18.5L10 16.1V11.3L4.5 5Z" />
    </IconBase>
  );
};

/**
 * Монитор
 */
export const MonitorIcon = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <rect x="4" y="5" width="16" height="11" rx="1.8" />
      <path d="M12 16V20" />
      <path d="M8 20H16" />
    </IconBase>
  );
};

/**
 * Доска / презентация
 */
export const BoardIcon = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M5 5.5C5 4.67 5.67 4 6.5 4H17.5C18.33 4 19 4.67 19 5.5V13C19 13.83 18.33 14.5 17.5 14.5H6.5C5.67 14.5 5 13.83 5 13V5.5Z" />
      <path d="M12 4V2.5" />
      <path d="M12 14.5V18.5" />
      <path d="M9.4 14.5L7.1 19" />
      <path d="M14.6 14.5L16.9 19" />
      <path d="M9 11.5H15" />
    </IconBase>
  );
};

/**
 * Три горизонтальные полоски друг под другом
 */
export const ListIcon = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M4 7H20" />
      <path d="M4 12H20" />
      <path d="M4 17H20" />
    </IconBase>
  );
};

/**
 * Плитка
 */
export const GridIcon = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <rect x="4" y="5" width="6" height="5" rx="1.4" />
      <rect x="14" y="5" width="6" height="5" rx="1.4" />
      <rect x="4" y="14" width="6" height="5" rx="1.4" />
      <rect x="14" y="14" width="6" height="5" rx="1.4" />
    </IconBase>
  );
};

/**
 * Звезда
 */
export const StarIcon = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M12 3.5L14.7 8.9L20.5 9.7L16.2 13.8L17.3 19.5L12 16.6L6.7 19.5L7.8 13.8L3.5 9.7L9.3 8.9L12 3.5Z" />
    </IconBase>
  );
};

/**
 * Круг с галочкой
 */
export const CheckCircleIcon = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <circle
        cx="12"
        cy="12"
        r="9"
      />

      <path d="M8 12.5L11 15.5L16.5 8.8" />
    </IconBase>
  );
};

/**
 * Галочка
 */
export const CheckIcon = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M5 12.5L9.2 16.7L19 6.8" />
    </IconBase>
  );
};

/**
 * Круг пустой
 */
export const CircleIcon = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <circle
        cx="12"
        cy="12"
        r="9"
      />
    </IconBase>
  );
};

/**
 * Заполненная звезда
 */
export const StarFilledIcon = (props: IconProps) => {
  const {
    color = 'currentColor',
    ...rest
  } = props;

  return (
    <IconBase
      {...rest}
      color={color}
    >
      <path
        d="M12 3.5L14.7 8.9L20.5 9.7L16.2 13.8L17.3 19.5L12 16.6L6.7 19.5L7.8 13.8L3.5 9.7L9.3 8.9L12 3.5Z"
        fill={color}
        stroke={color}
      />
    </IconBase>
  );
};
