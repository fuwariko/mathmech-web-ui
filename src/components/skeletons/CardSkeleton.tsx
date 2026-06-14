import { css, cx, keyframes } from '@emotion/css';
import type { TCardDirection } from '../Card/Card';

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`;

const skeletonBase = css`
  background: linear-gradient(
    90deg,
    #eeeeee 25%,
    #f5f5f5 37%,
    #eeeeee 63%
  );

  background-size: 400% 100%;
  animation: ${shimmer} 1.2s ease-in-out infinite;
  border-radius: 8px;
`;

interface ICardSkeletonProps {
  direction?: TCardDirection;
  borderRadius?: number;
  hasHeader?: boolean;
  hasFooter?: boolean;
  className?: string;
}

export const CardSkeleton = ({
  direction = 'vertical',
  borderRadius = 15,
  hasHeader = true,
  hasFooter = true,
  className,
}: ICardSkeletonProps) => {
  return (
    <div
      className={cx(
        cardSkeletonStyles(direction, borderRadius),
        className,
      )}
    >
      {hasHeader && <div className={headerSkeleton} />}

      <div className={contentSkeleton()}>
        <div className={lineLg} />
        <div className={lineSm} />
        <div className={lineMd} />
      </div>

      {hasFooter && (
        <div className={footerSkeleton}>
          <div className={lineSm} />
          <div className={badgeSkeleton} />
        </div>
      )}
    </div>
  );
};

const cardSkeletonStyles = (
  direction: TCardDirection,
  borderRadius: number,
) => css`
  display: flex;

  flex-direction: ${direction === 'horizontal' ? 'row' : 'column'};

  justify-content: space-between;

  gap: 16px;

  padding: 24px 20px 20px;

  border: 1px solid #e6e6e6;

  border-radius: ${borderRadius}px;

  background: #ffffff;

  min-width: 300px;
  width: fit-content;
  max-width: 100%;
`;

const headerSkeleton = css`
  width: 55%;
  height: 18px;
  ${skeletonBase};
`;

const contentSkeleton = () => css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const lineLg = css`
  width: 100%;
  height: 16px;
  ${skeletonBase};
`;

const lineMd = css`
  width: 80%;
  height: 14px;
  ${skeletonBase};
`;

const lineSm = css`
  width: 65%;
  height: 12px;
  ${skeletonBase};
`;

const footerSkeleton = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const badgeSkeleton = css`
  width: 60px;
  height: 20px;
  ${skeletonBase};
`;
