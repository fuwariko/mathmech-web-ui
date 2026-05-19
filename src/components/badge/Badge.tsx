import { css, cx } from '@emotion/css';
import { сolors, type TColors } from '../../theme/tokens';

interface IBadgeProps {
  /** Текст внутри бейджа */
  lable: string;

  /** Цвет фона */
  color?: TColors;

  /** Цвет обводки */
  borderColor?: TColors;

  /** Иконка */
  icon?: boolean;
}

export const Badge = ({
  lable,
  color = 'lightBlue01',
  borderColor,
  icon = false,
}: IBadgeProps) => {
  return (
    <div
      className={cx(
        badgeStyles(color, borderColor),
        icon &&
          css`
            &::before {
              margin-right: 4px;
              position: relative;
              top: 2px;
            }
          `,
      )}
    >
      {lable}
    </div>
  );
};

const badgeStyles = (
  color: TColors,
  borderColor?: TColors,
) => css`
  display: inline-block;

  font-size: 14px;
  font-weight: 500;

  padding: 4px 14px;

  min-width: 0;

  border-radius: 50px;

  margin: 0 6px 0 0;

  text-wrap: nowrap;

  height: 36px;
  line-height: 28px;

  background: ${сolors[color]};
  color: rgb(255, 255, 255);

  border: 1px solid
    ${borderColor
      ? сolors[borderColor]
      : 'transparent'};
`;